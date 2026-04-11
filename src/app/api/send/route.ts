import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Fyutchalabs Lead <onboarding@resend.dev>', // Update this once you verify your domain
      to: 'kalwenzistephen2003@gmail.com', // Where you want to receive leads
      subject: `New Technical Inquiry: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #18181b;">
          <h2 style="text-transform: uppercase; letter-spacing: 1px;">New Solution Request</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 10px;">
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #a1a1aa; margin-top: 20px;">
            Sent from Fyutchalabs Contact System
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}