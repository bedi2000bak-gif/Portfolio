import { useState } from 'react';
import '../css/ContactForm.css';

const initial = { name: '', email: '', message: '', website: '' };

function ContactForm() {
  const [form, setForm] = useState(initial);
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form-done" role="status">
        <p>Thanks — your message is on its way. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots that fill every field */}
      <input
        className="honeypot"
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={handleChange}
      />

      <button type="submit" className="contact-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="contact-form-error" role="alert">
          Something went wrong. Please try again or reach me on LinkedIn.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
