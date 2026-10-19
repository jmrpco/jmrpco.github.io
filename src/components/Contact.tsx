"use client";

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import profile from '@/data/profile.json';

const socials = [
  { name: 'GitHub', url: 'https://github.com/jmrpco' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/james-pediongco-81281a150/' },
  { name: 'X', url: 'https://x.com/acejames123' },
  { name: 'Instagram', url: 'https://www.instagram.com/jamespediongco/' },
];

export default function Contact() {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `From: ${data.get('name')} <${data.get('email')}>\n\n${data.get('message')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app will open with your message. Send it there to complete your enquiry.');
  }

  return (
    <section id="contact" className="section-padding contact-section grid-field">
      <div className="container-custom">
        <SectionHeading number="C-500" label="CONTACT" title="Let’s Work Together" />
        <div className="contact-grid">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow contact-eyebrow">GOOD WORK STARTS WITH A CONVERSATION.</p>
            <p className="large-copy">Your next idea.<br />Let’s build it well.</p>
            <p className="muted contact-intro">Have a project, an idea, or a technical challenge? I’d love to hear about it. Let’s create an elegant solution together.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={21} aria-hidden="true" /></a>
            <div className="contact-details">
              <a href={`mailto:${profile.alternateEmail}`}><Mail size={17} aria-hidden="true" /><span><small>ALTERNATE EMAIL</small>{profile.alternateEmail}</span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="tel:09617971345"><Phone size={17} aria-hidden="true" /><span><small>PHONE</small>09617971345</span><ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://maps.app.goo.gl/YrkUobUdvJ6PXu1o7" target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /><span><small>BASED IN</small>Bacolod City, Philippines</span><ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <div className="social-links">{socials.map(social => <a href={social.url} key={social.name} target="_blank" rel="noreferrer">{social.name} <ArrowUpRight size={13} aria-hidden="true" /></a>)}</div>
          </div>
          <form className="contact-form" onSubmit={submit} data-reveal data-reveal-delay="1">
            <div className="form-heading"><div><p className="eyebrow">FROM IDEA TO INTRODUCTION</p><h3>Send me a message</h3></div><Mail size={21} aria-hidden="true" /></div>
            <div className="form-row">
              <label htmlFor="name">Your name<input id="name" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={120} /></label>
              <label htmlFor="email">Email address<input id="email" type="email" name="email" autoComplete="email" placeholder="jane@example.com" required maxLength={200} /></label>
            </div>
            <label htmlFor="subject">Subject<input id="subject" name="subject" placeholder="A project, an idea, a hello…" required maxLength={200} /></label>
            <label htmlFor="message">Your message<textarea id="message" name="message" placeholder="Tell me a little about what you have in mind." rows={4} required maxLength={5000} /></label>
            <button className="button primary" type="submit">Compose email <ArrowUpRight size={18} aria-hidden="true" /></button>
            <p className="form-note">Opens your email app with your message ready to send.</p>
            <p role="status" className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
