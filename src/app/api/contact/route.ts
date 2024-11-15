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

// Validate environment variables
const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "NEXT_PUBLIC_EMAIL_TO",
];
// requiredEnv.forEach((env) => {
//   if (!process.env[env]) {
//     throw new Error(`Environment variable ${env} is required but missing.`);
//   }
// });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);
    const { name, email, message, to } = validatedData;

    // Create transporter using custom SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email template
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Use SMTP_USER as sender
      replyTo: email, // Allow recipient to reply directly to the sender
      to: to,
      subject: `✨ New Portfolio Contact: ${name} | ${new Date().toLocaleDateString()}`,
      text: message,
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

    // Retry logic with exponential backoff
    let retries = 3;
    while (retries > 0) {
      try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
          {
            success: true,
            message: "Message sent successfully",
            metadata: {
              timestamp: new Date().toISOString(),
              recipient: to,
              sender: email,
            },
          },
          { status: 200 }
        );
      } catch (error) {
        retries--;
        if (retries === 0) throw error; // Throw if all retries fail
        await new Promise(
          (resolve) => setTimeout(resolve, 1000 * Math.pow(2, 3 - retries)) // Exponential backoff
        );
      }
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message",
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
