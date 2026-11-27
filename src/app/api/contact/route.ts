import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Please enter a valid business email address").max(160),
  companyName: z.string().trim().min(1, "Company name is required").max(120),
  jobTitle: z.string().trim().max(120).optional().default(""),
  phoneNumber: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(5, "Please include a brief message").max(2000),
});

const rateWindow = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    const record = rateWindow.get(ip);
    if (record && record.resetAt > now) {
      if (record.count >= 10) {
        return NextResponse.json(
          { error: "Too many requests. Please wait a moment before submitting again." },
          { status: 429 }
        );
      }
      record.count += 1;
    } else {
      rateWindow.set(ip, { count: 1, resetAt: now + 60_000 });
    }

    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || "Invalid submission fields.";
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "docketo-contact",
          submittedAt: new Date().toISOString(),
          payload: parsed.data,
        }),
      });
      return NextResponse.json({
        ok: true,
        mode: "webhook",
        message: "Thank you. Your inquiry has been forwarded to our team.",
      });
    }

    return NextResponse.json({
      ok: true,
      mode: "demo",
      message:
        "Thank you. Your demonstration request has been validated locally (no external email was dispatched in demo mode).",
    });
  } catch {
    return NextResponse.json({ error: "Unable to process your request." }, { status: 400 });
  }
}
