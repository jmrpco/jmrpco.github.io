import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import profile from '@/data/profile.json';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding container-custom">
      <SectionHeading number="G-001" label="PROFILE" title="About" />
      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p className="large-copy">A developer by craft.<br /><span>A team lead in practice.</span></p>
          <p className="muted">I’m a software developer with 8+ years of experience, currently leading a team developing CRM solutions for loan systems at RVN Technology Solutions, Inc. My background spans full-stack development, user interfaces, enterprise integrations, and guiding developers.</p>
          <p className="muted">At RVN, I led a web ordering platform across mobile and web, integrated PayPal, PayMongo, and GCash, and worked on CRM, SMS messaging, and RFID systems. At TalentView, I built JavaScript interfaces and customized WordPress applications alongside product managers and UX designers.</p>
          <p className="muted">My experience also includes Salesforce administration and development training at Accenture, Apex, and Lightning Web Components. I bring a detail-oriented approach to software design, testing, debugging, and continuous learning.</p>
          <a className="text-link" href="#contact">Let’s build something together <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <aside className="profile-sheet" data-reveal data-reveal-delay="1">
          <div className="profile-sheet-header"><div><p className="eyebrow">PERSONNEL RECORD</p><h3>Profile data</h3></div><Image src="/formal.png" alt="James Pediongco" width={64} height={64} className="profile-photo" /></div>
          <dl className="detail-rows">
            <div><dt>Name</dt><dd>{profile.fullName}</dd></div>
            <div><dt>Current role</dt><dd>{profile.role}</dd></div>
            <div><dt>Company</dt><dd>{profile.currentCompany}</dd></div>
            <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            <div><dt>Experience</dt><dd>{profile.experienceYears} years</dd></div>
            <div><dt>Focus</dt><dd>{profile.focus}</dd></div>
            <div><dt>Leadership</dt><dd>{profile.leadership}</dd></div>
          </dl>
          <p className="sheet-footnote eyebrow">G-001 / ALWAYS LEARNING. ALWAYS BUILDING.</p>
        </aside>
      </div>
      <div className="credentials-grid">
        <article className="credential-sheet" data-reveal>
          <p className="eyebrow">G-002 / EDUCATION</p><h3>Academic background</h3>
          {profile.education.map(education => <div className="credential-entry" key={education.degree}><span className="eyebrow">{education.dateRange}</span><h4>{education.degree}</h4><p>{education.institution}</p><p>{education.location}</p></div>)}
        </article>
        <article className="credential-sheet" data-reveal data-reveal-delay="1">
          <p className="eyebrow">G-003 / CERTIFICATIONS</p><h3>Accreditations & learning</h3>
          {profile.certifications.map(certification => <div className="credential-entry" key={certification.title}><span className="eyebrow">{certification.date}</span><h4>{certification.title}</h4><p>{certification.issuer}</p>{'credentialId' in certification && <p className="credential-id">ID: {certification.credentialId}</p>}</div>)}
        </article>
      </div>
    </section>
  );
}
