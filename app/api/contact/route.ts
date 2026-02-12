import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Nedostaju obavezna polja." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailText = `
Novi upit sa web stranice Autoflow

Ime i prezime: ${name}
E-mail: ${email}
Telefon: ${phone || "-"}
Usluga: ${service || "-"}

Poruka:
${message}
`;

    await transporter.sendMail({
      from: `"Autoflow web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "info@autoflow.hr",
      subject: `Novi upit sa web stranice - ${service || "Kontakt"}`,
      text: mailText,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { ok: false, error: "Došlo je do greške pri slanju. Pokušajte ponovno." },
      { status: 500 }
    );
  }
}


