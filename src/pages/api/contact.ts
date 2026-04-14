import type { APIRoute } from "astro";
import { sendBookingEmail, sendConfirmationEmail } from "@lib/resend";
import type { ContactFormData, ContactFormResponse } from "@/types/index";

export const prerender = false;

// =========================================================
// Validation
// =========================================================

function isValidPhone(v: string): boolean {
  return /^\+?[\d\s\-().]{7,20}$/.test(v.trim());
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function validateBody(
  data: unknown
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (typeof data !== "object" || data === null) {
    return { valid: false, error: "Invalid request body." };
  }

  const d = data as Record<string, unknown>;

  // Honeypot – silently succeed if filled by a bot
  if (d.website) {
    return { valid: true, data: null as never };
  }

  if (!d.name || typeof d.name !== "string" || d.name.trim().length < 2) {
    return { valid: false, error: "Le nom doit contenir au moins 2 caractères." };
  }

  if (d.name.trim().length > 100) {
    return { valid: false, error: "Le nom est trop long." };
  }

  const phone = typeof d.phone === "string" ? d.phone.trim() : "";
  const email = typeof d.email === "string" ? d.email.trim() : "";

  const phoneOk = phone && isValidPhone(phone);
  const emailOk = email && isValidEmail(email);

  if (!phoneOk && !emailOk) {
    return {
      valid: false,
      error: "Un numéro de téléphone ou une adresse e-mail valide est requis.",
    };
  }

  if (!d.city || typeof d.city !== "string" || d.city.trim().length < 2) {
    return { valid: false, error: "La ville est requise." };
  }

  if (!d.services || typeof d.services !== "string" || d.services.trim().length === 0) {
    return { valid: false, error: "Veuillez sélectionner au moins un service." };
  }

  const notes = typeof d.notes === "string" ? d.notes.trim() : undefined;
  if (notes && notes.length > 1000) {
    return { valid: false, error: "Les informations complémentaires sont trop longues." };
  }

  return {
    valid: true,
    data: {
      name: d.name.trim(),
      phone: phoneOk ? phone : undefined,
      email: emailOk ? email.toLowerCase() : undefined,
      city: (d.city as string).trim(),
      services: d.services.trim(),
      notes: notes || undefined,
    },
  };
}

// =========================================================
// Handlers
// =========================================================

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Corps de requête invalide." } satisfies ContactFormResponse,
      { status: 400 }
    );
  }

  const validation = validateBody(body);

  if (!validation.valid) {
    return Response.json(
      { success: false, message: validation.error } satisfies ContactFormResponse,
      { status: 422 }
    );
  }

  // Honeypot triggered — respond as if success but don't send email
  if (!validation.data) {
    return Response.json(
      { success: true, message: "Demande envoyée." } satisfies ContactFormResponse,
      { status: 200 }
    );
  }

  try {
    await Promise.all([
      sendBookingEmail(validation.data),
      sendConfirmationEmail(validation.data),
    ]);

    return Response.json(
      { success: true, message: "Demande envoyée." } satisfies ContactFormResponse,
      { status: 200 }
    );
  } catch (err) {
    console.error("[api/contact] Failed to send email:", err);

    return Response.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.",
      } satisfies ContactFormResponse,
      { status: 500 }
    );
  }
};

export const GET: APIRoute = () => new Response(null, { status: 405, headers: { Allow: "POST" } });
