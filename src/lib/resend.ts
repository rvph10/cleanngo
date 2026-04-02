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
// Contact email
// =========================================================

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const resend = getResendClient();

  const contactEmail = import.meta.env.CONTACT_EMAIL;
  if (!contactEmail) {
    throw new Error("CONTACT_EMAIL environment variable is not set.");
  }

  const budgetLabels: Record<NonNullable<ContactFormData["budget"]>, string> = {
    small: "Less than €5k",
    medium: "€5k – €20k",
    large: "€20k – €50k",
    enterprise: "€50k+",
  };

  const budgetText = data.budget ? budgetLabels[data.budget] : "Not specified";

  const { error } = await resend.emails.send({
    from: "Contact Form <noreply@example.com>",
    to: [contactEmail],
    replyTo: data.email,
    subject: `New contact from ${data.name}${data.company ? ` (${data.company})` : ""}`,
    html: `
      <h2>New contact form submission</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        <tr><th align="left">Name</th><td>${escapeHtml(data.name)}</td></tr>
        <tr><th align="left">Email</th><td>${escapeHtml(data.email)}</td></tr>
        ${data.company ? `<tr><th align="left">Company</th><td>${escapeHtml(data.company)}</td></tr>` : ""}
        <tr><th align="left">Budget</th><td>${budgetText}</td></tr>
        <tr><th align="left" style="vertical-align:top">Message</th><td><pre style="white-space:pre-wrap">${escapeHtml(data.message)}</pre></td></tr>
      </table>
    `,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      `Budget: ${budgetText}`,
      `\nMessage:\n${data.message}`,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
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
