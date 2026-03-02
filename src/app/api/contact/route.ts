import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/components/sections/contact/contactSchema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
    }

    const { name, email, phone } = parsed.data;
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } =
      process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Configuração de e-mail ausente." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const from = SMTP_FROM?.trim() || SMTP_USER;
    const to = SMTP_TO?.trim();

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "Novo contato - FIndex",
      text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail de contato.", error);
    return NextResponse.json(
      { error: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}
