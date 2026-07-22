import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, website } = req.body || {};

  // Honeypot: bots fill every field. Pretend success so we don't tip them off.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // Server-side validation (never trust the browser)
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message is too long.' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // swap for your verified domain later
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
