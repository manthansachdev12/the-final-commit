import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // 🚨 IMPORTANT

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.email) {
      throw new Error("Empty request body");
    }

    console.log("📨 BODY RECEIVED:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"The Final Commit" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: body.email,
      subject: "🚀 New Connect Request",
      html: `
        <h3>New Submission</h3>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>GitHub:</b> ${body.github}</p>
        <p><b>Experience:</b> ${body.experience}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    console.log("✅ MAIL SENT:", info.messageId);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ API ERROR:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
