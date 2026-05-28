import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// ── Rate limiting ─────────────────────────────────────────────────────────────
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  rateLimitMap.set(ip, { ...entry, count: entry.count + 1 });
  return false;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    // ── Rate limiting ─────────────────────────────────────────────────────────
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Trop de tentatives. Réessayez dans quelques minutes.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, firstName, email, phone, message } = body;

    // ── Validation ────────────────────────────────────────────────────────────
    if (!name || !firstName || !email || !phone || !message) {
      return NextResponse.json({ message: 'Champs obligatoires manquants.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Email invalide.' }, { status: 400 });
    }

    if (message.length > 2000 || name.length > 100 || email.length > 200) {
      return NextResponse.json({ message: 'Données trop longues.' }, { status: 400 });
    }

    const safe = {
      name:      escapeHtml(name),
      firstName: escapeHtml(firstName),
      email:     escapeHtml(email),
      phone:     escapeHtml(phone),
      message:   escapeHtml(message),
    };

    const mailOptions = {
      from:    process.env.GMAIL_USER,
      to:      'tim.bernasconi1@gmail.com',
      replyTo: safe.email,
      subject: `Nouveau message`,
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #dddddd; padding: 20px;">
          <h2 style="color: #902326;">Nouveau contact site AVM</h2>
          <hr style="border: none; border-top: 1px solid #eeeeee;" />
          <p><strong>Contact :</strong> ${safe.firstName} ${safe.name}</p>
          <p><strong>Email :</strong> ${safe.email}</p>
          <p><strong>Téléphone :</strong> ${safe.phone}</p>
          <br />
          <p><strong>Message :</strong></p>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${safe.message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email envoyé !' }, { status: 200 });

  } catch (error) {
    console.error('Erreur Nodemailer:', error);
    return NextResponse.json({ message: "Erreur lors de l'envoi" }, { status: 500 });
  }
}