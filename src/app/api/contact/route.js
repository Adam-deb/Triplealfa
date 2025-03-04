import { sendEmail } from "@/utils/email.js";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill in all fields" }), {
        status: 400,
      });
    }

    await sendEmail(
      "adam@triplealfa.com",
      "New Contact Form Submission",
      `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
      `
    );

    console.log("TENANT_ID:", process.env.TENANT_ID);
    console.log("CLIENT_ID:", process.env.CLIENT_ID);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Server Error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}