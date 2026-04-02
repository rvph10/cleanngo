import type { APIRoute } from "astro";
import { sendContactEmail } from "@lib/resend";
import type { ContactFormData, ContactFormResponse } from "@/types/index";

export const prerender = false;

// =========================================================
// Validation
// =========================================================

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateBody(
  data: unknown
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (typeof data !== "object" || data === null) {
    return { valid: false, error: "Invalid request body." };
  }

  const d = data as Record<string, unknown>;

  if (!d.name || typeof d.name !== "string" || d.name.trim().length < 2) {
    return { valid: false, error: "Name must be at least 2 characters." };
  }

  if (!d.email || typeof d.email !== "string" || !isValidEmail(d.email)) {
    return { valid: false, error: "A valid email address is required." };
  }

  if (!d.message || typeof d.message !== "string" || d.message.trim().length < 10) {
    return { valid: false, error: "Message must be at least 10 characters." };
  }

  const validBudgets = ["small", "medium", "large", "enterprise"] as const;
  const budget = d.budget as ContactFormData["budget"] | undefined;

  if (budget !== undefined && !validBudgets.includes(budget as never)) {
    return { valid: false, error: "Invalid budget selection." };
  }

  return {
    valid: true,
    data: {
      name: d.name.trim(),
      email: d.email.trim().toLowerCase(),
      company: typeof d.company === "string" && d.company.trim() ? d.company.trim() : undefined,
      message: d.message.trim(),
      budget,
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
      { success: false, message: "Invalid JSON body." } satisfies ContactFormResponse,
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

  try {
    await sendContactEmail(validation.data);

    return Response.json(
      {
        success: true,
        message: "Thank you! We will be in touch shortly.",
      } satisfies ContactFormResponse,
      { status: 200 }
    );
  } catch (err) {
    console.error("[api/contact] Failed to send email:", err);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again or contact us directly.",
      } satisfies ContactFormResponse,
      { status: 500 }
    );
  }
};

export const GET: APIRoute = () => new Response(null, { status: 405, headers: { Allow: "POST" } });
