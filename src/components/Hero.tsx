import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import { skillGroups } from '@/lib/skills';
import profile from '@/data/profile.json';
import CvLink from './CvLink';
import TechTicker from './TechTicker';

export default function Hero() {
  const skills = skillGroups.flatMap(group => group.skills);
  return (
    <section id="home" className="hero grid-field">
      <div className="container-custom">
        <div className="hero-topline"><p className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPMENT / FULL-STACK / DIGITAL EXPERIENCES</p><span className="eyebrow document-id">DOCUMENT JP—2026</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>James<br />Pediongco<span className="name-period">.</span></h1>
            <p className="hero-role">{profile.experienceYears} years <span>·</span> {profile.role}</p>
            <p className="hero-intro">I lead CRM development for loan systems at RVN Technology Solutions, Inc. My work spans full-stack applications, payment and social API integrations, and user-friendly interfaces—thoughtful code, built for real business needs.</p>
            <div className="hero-actions"><a href="#experience" className="button primary">View Experience <ArrowRight size={17} aria-hidden="true" /></a><CvLink /></div>
          </div>
          <aside className="hero-terminal" aria-label="Professional profile summary">
            <div className="terminal-header"><span className="browser-dots" aria-hidden="true"><i /><i /><i /></span><span>james@portfolio ~</span><span className="status-dot" /></div>
            <dl className="terminal-lines"><div><dt><span>$</span> identity</dt><dd>{profile.name}</dd></div><div><dt><span>$</span> specialization</dt><dd>{profile.role}</dd></div><div><dt><span>$</span> experience</dt><dd>{profile.experienceYears} years of development</dd></div><div><dt><span>$</span> approach</dt><dd>Clean code. Human experiences.</dd></div><div><dt><span>$</span> location</dt><dd>Bacolod City, Philippines</dd></div></dl>
            <div className="terminal-footer"><span className="eyebrow">PROFILE / SOFTWARE DEVELOPMENT</span><span aria-hidden="true">_</span></div>
          </aside>
        </div>
        <div className="hero-bottom"><span><MapPin size={13} aria-hidden="true" /> BACOLOD CITY, PH</span><a href="#about">EXPLORE THE DOCUMENT <ArrowDown size={14} aria-hidden="true" /></a><span className="document-id">EST. IN CURIOSITY / BUILT WITH INTENTION</span></div>
      </div>
      <TechTicker technologies={skills.map(skill => skill.name)} />
      <div className="container-custom hero-stats"><div><strong>8<span>+</span></strong><p>Years of development<br />experience</p></div><div><strong>10<span>+</span></strong><p>Projects built with<br />attention to detail</p></div><div><strong>{skills.length}</strong><p>Technologies across<br />the stack</p></div><div><strong>24<span>/7</span></strong><p>Support and a focus<br />on practical solutions</p></div></div>
    </section>
  );
}
