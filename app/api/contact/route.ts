import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "TerreOak <onboarding@resend.dev>",
      to: "services@terreoak.ca",
      subject: "New Lead Submitted",
      html: `<h2>New Lead</h2><pre>${JSON.stringify(body, null, 2)}</pre>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}
