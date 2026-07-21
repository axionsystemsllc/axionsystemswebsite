const contactEmail = "chancen@axionsystems.us";

type ContactPayload = {
  company?: string;
  email?: string;
  message?: string;
  name?: string;
  projectType?: string;
  website?: string;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeFromEmail(value: string | undefined) {
  const cleaned = value
    ?.trim()
    .replace(/^RESEND_FROM_EMAIL=/, "")
    .replace(/^["']|["']$/g, "")
    .trim();

  if (!cleaned) {
    return contactEmail;
  }

  const displayNameMatch = cleaned.match(/^.+<([^<>]+)>$/);
  const address = displayNameMatch?.[1]?.trim() ?? cleaned;

  if (!isValidEmail(address)) {
    return contactEmail;
  }

  return cleaned;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = normalizeFromEmail(process.env.RESEND_FROM_EMAIL);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? contactEmail;

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 150);
  const company = clean(payload.company, 120);
  const projectType = clean(payload.projectType, 120);
  const message = clean(payload.message, 4000);
  const website = clean(payload.website, 200);

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message || !isValidEmail(email)) {
    return Response.json(
      { error: "Please include your name, email, and message." },
      { status: 400 },
    );
  }

  if (!apiKey) {
    return Response.json(
      {
        error:
          "Contact email is not configured yet. Please email chancen@axionsystems.us directly.",
      },
      { status: 503 },
    );
  }

  const subject = `New Axion Systems inquiry: ${projectType || "General project"}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    projectType ? `Project type: ${projectType}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h1 style="font-size:20px;margin:0 0 16px">New Axion Systems inquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      ${
        projectType
          ? `<p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>`
          : ""
      }
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from: fromEmail,
      html,
      reply_to: email,
      subject,
      text,
      to: [toEmail],
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const resendError = await response.text();

    console.error("Resend contact email failed", {
      body: resendError,
      status: response.status,
    });

    return Response.json(
      {
        details: resendError,
        error:
          "The message could not be sent. Please email chancen@axionsystems.us directly.",
        status: response.status,
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

export async function GET() {
  return Response.json({
    contactToEmailConfigured: Boolean(process.env.CONTACT_TO_EMAIL),
    environment: process.env.VERCEL_ENV ?? "local",
    resendApiKeyConfigured: Boolean(process.env.RESEND_API_KEY),
    resendFromEmailConfigured: Boolean(process.env.RESEND_FROM_EMAIL),
  });
}
