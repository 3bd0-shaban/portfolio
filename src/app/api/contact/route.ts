import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Define validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  to: z.string().email("Invalid recipient email"),
});

export async function POST(request: Request) {
  try {
    // Add timeout for the entire request
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Request timeout")), 9000); // 9 seconds timeout
    });

    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const { name, email, message, to } = validatedData;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
      tls: {
        rejectUnauthorized: true,
      },
      // Add connection timeout
      connectionTimeout: 5000, // 5 seconds
      socketTimeout: 5000, // 5 seconds
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: to,
      subject: `✨ New Portfolio Contact: ${name}`,
      text: message,
      // Simplified HTML template to reduce processing time
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">New Portfolio Message</h1>
            <p style="color: rgba(255,255,255,0.9); margin-top: 8px;">Received on ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Sender Information</h2>
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px;">
              <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message Content</h2>
              <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0; text-align: center;">
                This is an automated message from your portfolio contact form.
                Please respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Race between email sending and timeout
    await Promise.race([
      (async () => {
        let retries = 2;
        while (retries >= 0) {
          try {
            await transporter.sendMail(mailOptions);
            return;
          } catch (error) {
            if (retries === 0) throw error;
            retries--;
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }
        }
      })(),
      timeoutPromise,
    ]);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Email error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed" },
        { status: 400 }
      );
    }

    if (error.message === "Request timeout") {
      return NextResponse.json(
        { success: false, message: "Request timed out. Please try again." },
        { status: 408 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
