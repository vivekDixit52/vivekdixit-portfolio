import React, { useState } from 'react';
import styles from './Contact.module.css';

const contacts = [
  { icon: '✉️', label: 'Email', value: 'dixitvivek857@gmail.com', href: 'mailto:dixitvivek857@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91-7500509965', href: 'tel:+917500509965' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/Vivek-Dixit', href: 'https://github.com/vivekDixit52' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/vivekDixit52', href: 'https://www.linkedin.com/in/vivek-dixit-88a652237/' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent('sending');

    const res = await fetch('https://formspree.io/f/xgopzrkd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent('done');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } else {
      setSent('error');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header + ' reveal'}>
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">Let's build something<br/><span>together</span>.</h2>
        <p className="section-sub">Open to freelance, internships, and full-time opportunities. Don't hesitate to reach out!</p>
      </div>

      <div className={styles.wrap + ' reveal'}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Ready to collaborate?</h3>
          <p className={styles.infoText}>Whether you have a project, an opportunity, or just want to connect — my inbox is always open.</p>

          <div className={styles.contactLinks}>
            {contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={styles.contactLink}>
                <div className={styles.cIcon}>{c.icon}</div>
                <div>
                  <div className={styles.cLabel}>{c.label}</div>
                  <div className={styles.cValue}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Your Name</label>
              <input
                type="text" placeholder="Jane Smith" required
                value={form.name} onChange={e => setForm({...form, name: e.target.value})}
              />
            </div>
            <div className={styles.field}>
              <label>Email Address</label>
              <input
                type="email" placeholder="jane@company.com" required
                value={form.email} onChange={e => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label>Message</label>
            <textarea
              placeholder="Hi Vivek, I'd love to discuss..." rows={5} required
              value={form.message} onChange={e => setForm({...form, message: e.target.value})}
            />
          </div>
          <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
            {sent === 'sending' ? '⏳ Sending...'
             : sent === 'done' ? '✅ Message Sent!'
             : sent === 'error' ? '❌ Try Again'
             : 'Send Message ✦'}
          </button>
        </form>
      </div>
    </section>
  );
}
