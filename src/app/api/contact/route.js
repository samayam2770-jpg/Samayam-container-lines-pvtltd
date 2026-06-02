import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {

  try {

    const { name, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
    
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    
      tls: {
        rejectUnauthorized: false,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
    })

  } catch (error) {

    console.log(error)

    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}