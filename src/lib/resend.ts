import { Resend } from "resend";
import type { ContactFormData } from "@/types/index";

// Lazily instantiated so importing this module during a static build
// does not crash when RESEND_API_KEY is absent.
let _resend: Resend | null = null;

function getResendClient(): Resend {
  if (!_resend) {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set.");
    }
    _resend = new Resend(apiKey);
  }
  return _resend;
}

// =========================================================
// Booking email
// =========================================================

export async function sendBookingEmail(data: ContactFormData): Promise<void> {
  const resend = getResendClient();

  const toEmail = import.meta.env.CONTACT_EMAIL;
  if (!toEmail) {
    throw new Error("CONTACT_EMAIL environment variable is not set.");
  }

  const fromEmail = "CleanNgo <noreply@cleanngo.be>";

  const serviceList = data.services
    .split(",")
    .map((s) => `<li>${escapeHtml(s.trim())}</li>`)
    .join("");

  const replyTo = data.email ?? undefined;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    ...(replyTo ? { replyTo } : {}),
    subject: `Nouvelle demande de réservation — ${escapeHtml(data.name)} (${escapeHtml(data.city)})`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="margin-bottom:4px">Nouvelle demande de réservation</h2>
        <p style="color:#666;margin-top:0">Reçue via cleanngo.be</p>

        <table cellpadding="10" style="border-collapse:collapse;width:100%;margin-top:16px">
          <tr style="background:#f5f5f5">
            <th align="left" style="width:140px;white-space:nowrap">Nom</th>
            <td>${escapeHtml(data.name)}</td>
          </tr>
          <tr>
            <th align="left">Téléphone</th>
            <td>${data.phone ? escapeHtml(data.phone) : "<em style='color:#999'>Non renseigné</em>"}</td>
          </tr>
          <tr style="background:#f5f5f5">
            <th align="left">E-mail</th>
            <td>${data.email ? escapeHtml(data.email) : "<em style='color:#999'>Non renseigné</em>"}</td>
          </tr>
          <tr>
            <th align="left">Ville</th>
            <td>${escapeHtml(data.city)}</td>
          </tr>
          <tr style="background:#f5f5f5">
            <th align="left" style="vertical-align:top">Service(s)</th>
            <td><ul style="margin:0;padding-left:18px">${serviceList}</ul></td>
          </tr>
          ${
            data.notes
              ? `<tr>
            <th align="left" style="vertical-align:top">Notes</th>
            <td><pre style="white-space:pre-wrap;margin:0;font-family:inherit">${escapeHtml(data.notes)}</pre></td>
          </tr>`
              : ""
          }
        </table>

        ${
          data.phone
            ? `<p style="margin-top:24px">
            <a href="tel:${escapeHtml(data.phone)}" style="background:#1a1a1a;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600">
              Appeler ${escapeHtml(data.name)}
            </a>
          </p>`
            : ""
        }
      </div>
    `,
    text: [
      "Nouvelle demande de réservation — cleanngo.be",
      "",
      `Nom      : ${data.name}`,
      `Téléphone: ${data.phone ?? "Non renseigné"}`,
      `E-mail   : ${data.email ?? "Non renseigné"}`,
      `Ville    : ${data.city}`,
      `Services : ${data.services}`,
      data.notes ? `\nNotes :\n${data.notes}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

// =========================================================
// Confirmation email (sent to the client)
// =========================================================

export async function sendConfirmationEmail(data: ContactFormData): Promise<void> {
  if (!data.email) return;

  const resend = getResendClient();

  const serviceList = data.services
    .split(",")
    .map((s) => `<li>${escapeHtml(s.trim())}</li>`)
    .join("");

  const { error } = await resend.emails.send({
    from: "CleanNgo <noreply@cleanngo.be>",
    to: [data.email],
    replyTo: "clean-ngo@outlook.com",
    subject: "Nous avons bien reçu votre demande — CleanNgo",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="margin-bottom:4px">Merci, ${escapeHtml(data.name)} !</h2>
        <p style="color:#666;margin-top:0">
          Votre demande a bien été reçue. Notre équipe vous recontactera très prochainement
          pour confirmer les détails de votre réservation.
        </p>

        <h3 style="margin-bottom:8px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#666">
          Récapitulatif de votre demande
        </h3>
        <table cellpadding="10" style="border-collapse:collapse;width:100%">
          <tr style="background:#f5f5f5">
            <th align="left" style="width:140px;white-space:nowrap;font-size:14px">Ville</th>
            <td style="font-size:14px">${escapeHtml(data.city)}</td>
          </tr>
          <tr>
            <th align="left" style="vertical-align:top;font-size:14px">Service(s)</th>
            <td style="font-size:14px"><ul style="margin:0;padding-left:18px">${serviceList}</ul></td>
          </tr>
          ${
            data.notes
              ? `<tr style="background:#f5f5f5">
            <th align="left" style="vertical-align:top;font-size:14px">Notes</th>
            <td style="font-size:14px"><pre style="white-space:pre-wrap;margin:0;font-family:inherit">${escapeHtml(data.notes)}</pre></td>
          </tr>`
              : ""
          }
        </table>

        <p style="margin-top:24px;font-size:14px;color:#666">
          Une question ? Répondez simplement à cet e-mail ou appelez-nous au
          <a href="tel:+32486518181" style="color:#1a1a1a;font-weight:600">+32 486 51 81 81</a>.
        </p>

        <p style="margin-top:32px;font-size:13px;color:#999">
          — L'équipe CleanNgo
        </p>
      </div>
    `,
    text: [
      `Merci, ${data.name} !`,
      "",
      "Votre demande a bien été reçue. Notre équipe vous recontactera très prochainement.",
      "",
      "Récapitulatif :",
      `  Ville    : ${data.city}`,
      `  Services : ${data.services}`,
      data.notes ? `  Notes    : ${data.notes}` : null,
      "",
      "Une question ? Répondez à cet e-mail ou appelez-nous au +32 486 51 81 81.",
      "",
      "— L'équipe CleanNgo",
    ]
      .filter((l) => l !== null)
      .join("\n"),
  });

  if (error) {
    throw new Error(`Resend confirmation error: ${error.message}`);
  }
}

// =========================================================
// Utilities
// =========================================================

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
