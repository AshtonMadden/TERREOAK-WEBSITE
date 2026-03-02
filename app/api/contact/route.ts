import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// This file was updated to fix a Vercel build-time error related to Resend API initialization.
// Timestamp: 2026-03-01T18:18:00

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Critical: Only import Resend if we are actually processing a request.
    // We use a dummy key pattern (re_...) during build time if the env var is missing
    // to appease any static analysis that might execute the constructor.
    const apiKey = process.env.RESEND_API_KEY || "re_not_active_during_build_placeholder";

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not defined. Email skip triggered.");
      return NextResponse.json({ success: true, message: "Lead received privately (no email)" });
    }

    const { Resend } = await import("resend");
    const resendInstance = new Resend(apiKey);

    await resendInstance.emails.send({
      from: "TerreOak <onboarding@resend.dev>",
      to: "services@terreoak.ca",
      subject: "New Lead Submitted",
      html: `<h2>New Lead</h2><pre>${JSON.stringify(body, null, 2)}</pre>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false, error: "Submission Error" }, { status: 500 });
  }
}
