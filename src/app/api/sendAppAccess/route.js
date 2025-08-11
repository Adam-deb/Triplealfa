import { sendEmail } from "@/utils/email.js";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    // Only notify the company — no email to the user
    await sendEmail(
      ["adam@triplealfa.com", "info@triplealfa.com"],
      "New App Download Request",
      `A user clicked the download link and entered their email:\n\n${email}`
    );

    return new Response(JSON.stringify({ message: "Company notified" }), { status: 200 });
  } catch (err) {
    console.error("SendAppAccess API Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}