import { Resend } from "resend";
import type { ContactFormData } from "@/types/index";
import type { Locale } from "@/i18n/config";
import { getServices } from "@/data/services";

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

  const serviceList = serviceNames(data.services, "fr")
    .map((s) => `<li>${escapeHtml(s)}</li>`)
    .join("");
  const language = bookingLanguageLabels[data.locale];

  const replyTo = data.email ?? undefined;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    ...(replyTo ? { replyTo } : {}),
    subject: `Nouvelle demande de réservation : ${escapeHtml(data.name)} (${escapeHtml(data.city)})`,
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
          <tr>
            <th align="left">Langue</th>
            <td>${language}</td>
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
      "Nouvelle demande de réservation sur cleanngo.be",
      "",
      `Nom      : ${data.name}`,
      `Téléphone: ${data.phone ?? "Non renseigné"}`,
      `E-mail   : ${data.email ?? "Non renseigné"}`,
      `Ville    : ${data.city}`,
      `Langue   : ${language}`,
      `Services : ${serviceNames(data.services, "fr").join(", ")}`,
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
  const t = confirmationStrings[data.locale];
  const services = serviceNames(data.services, data.locale);

  const serviceList = services.map((s) => `<li>${escapeHtml(s)}</li>`).join("");

  const { error } = await resend.emails.send({
    from: "CleanNgo <noreply@cleanngo.be>",
    to: [data.email],
    replyTo: "contact@cleanngo.be",
    subject: t.subject,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <h2 style="margin-bottom:4px">${t.thanks(escapeHtml(data.name))}</h2>
        <p style="color:#666;margin-top:0">
          ${t.received}
        </p>

        <h3 style="margin-bottom:8px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#666">
          ${t.summary}
        </h3>
        <table cellpadding="10" style="border-collapse:collapse;width:100%">
          <tr style="background:#f5f5f5">
            <th align="left" style="width:140px;white-space:nowrap;font-size:14px">${t.city}</th>
            <td style="font-size:14px">${escapeHtml(data.city)}</td>
          </tr>
          <tr>
            <th align="left" style="vertical-align:top;font-size:14px">${t.services}</th>
            <td style="font-size:14px"><ul style="margin:0;padding-left:18px">${serviceList}</ul></td>
          </tr>
          ${
            data.notes
              ? `<tr style="background:#f5f5f5">
            <th align="left" style="vertical-align:top;font-size:14px">${t.notes}</th>
            <td style="font-size:14px"><pre style="white-space:pre-wrap;margin:0;font-family:inherit">${escapeHtml(data.notes)}</pre></td>
          </tr>`
              : ""
          }
        </table>

        <p style="margin-top:24px;font-size:14px;color:#666">
          ${t.question}
          <a href="tel:+32486518181" style="color:#1a1a1a;font-weight:600">+32 486 51 81 81</a>.
        </p>

        <p style="margin-top:32px;font-size:13px;color:#999">
          ${t.signature}
        </p>
      </div>
    `,
    text: [
      t.thanks(data.name),
      "",
      t.received,
      "",
      `${t.summary} :`,
      `  ${t.city} : ${data.city}`,
      `  ${t.services} : ${services.join(", ")}`,
      data.notes ? `  ${t.notes} : ${data.notes}` : null,
      "",
      `${t.question} +32 486 51 81 81.`,
      "",
      t.signature,
    ]
      .filter((l) => l !== null)
      .join("\n"),
  });

  if (error) {
    throw new Error(`Resend confirmation error: ${error.message}`);
  }
}

// =========================================================
// Translations
// =========================================================

const bookingLanguageLabels: Record<Locale, string> = {
  fr: "Français",
  nl: "Néerlandais",
  en: "Anglais",
};

const confirmationStrings: Record<
  Locale,
  {
    subject: string;
    thanks: (name: string) => string;
    received: string;
    summary: string;
    city: string;
    services: string;
    notes: string;
    question: string;
    signature: string;
  }
> = {
  fr: {
    subject: "CleanNgo : nous avons bien reçu votre demande",
    thanks: (name) => `Merci, ${name} !`,
    received:
      "Votre demande a bien été reçue. Notre équipe vous recontactera très prochainement pour confirmer les détails de votre réservation.",
    summary: "Récapitulatif de votre demande",
    city: "Ville",
    services: "Service(s)",
    notes: "Notes",
    question: "Une question ? Répondez simplement à cet e-mail ou appelez-nous au",
    signature: "L'équipe CleanNgo",
  },
  nl: {
    subject: "CleanNgo: we hebben uw aanvraag goed ontvangen",
    thanks: (name) => `Bedankt, ${name}!`,
    received:
      "Uw aanvraag is goed ontvangen. Ons team neemt binnenkort contact met u op om de details van uw boeking te bevestigen.",
    summary: "Overzicht van uw aanvraag",
    city: "Gemeente",
    services: "Dienst(en)",
    notes: "Opmerkingen",
    question: "Een vraag? Antwoord gewoon op deze e-mail of bel ons op",
    signature: "Het CleanNgo-team",
  },
  en: {
    subject: "CleanNgo: we've received your request",
    thanks: (name) => `Thank you, ${name}!`,
    received:
      "We've received your request. Our team will be in touch very soon to confirm the details of your booking.",
    summary: "Summary of your request",
    city: "Town",
    services: "Service(s)",
    notes: "Notes",
    question: "Any questions? Just reply to this email or call us on",
    signature: "The CleanNgo team",
  },
};

/** Turns the comma-separated service ids sent by the form into display names. */
function serviceNames(ids: string, locale: Locale): string[] {
  const services = getServices(locale);
  return ids
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean)
    .map((id) => services.find((s) => s.id === id)?.name ?? id);
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
