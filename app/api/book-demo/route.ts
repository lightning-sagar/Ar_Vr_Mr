import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { fullName, email, companyName, propertyType, additionalNotes } = await request.json();

    if (!fullName || !email || !propertyType) {
      return NextResponse.json({ error: 'Full Name, Email, and Property Type are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "upadhyayu498@gmail.com", // Replace with your email address
      subject: `New Demo Request from ${fullName}`,
      text: `
        A new demo request has been submitted.

        Full Name: ${fullName}
        Email: ${email}
        Company Name: ${companyName || 'N/A'}
        Property Type: ${propertyType}
        Additional Notes: ${additionalNotes || 'N/A'}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error('Error handling demo request:', error);
    return NextResponse.json({ error: 'Failed to process demo request' }, { status: 500 });
  }
}
