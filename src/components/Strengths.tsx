import { Braces, Database, GitBranch, Layers, Link, Search, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const strengths = [
  { name: 'Full-Stack Development', Icon: Braces, description: 'Laravel applications, JavaScript interfaces, WordPress customization, and web ordering platforms spanning mobile and web.' },
  { name: 'System Architecture', Icon: Layers, description: 'Designing and integrating enterprise databases, programs, and processes, with experience modernizing legacy systems.' },
  { name: 'API Integration', Icon: Link, description: 'PayPal, PayMongo, GCash, Google Maps, and APIs for Facebook, Messenger, WhatsApp, Viber, and Twitter.' },
  { name: 'Technical Leadership', Icon: Users, description: 'Leading CRM and RFID development teams, training new developers, and guiding adherence to design and review standards.' },
  { name: 'DevOps', Icon: GitBranch, description: 'Linux operating-system knowledge, version control, and practical development workflows with Git and NPM.' },
  { name: 'Troubleshooting', Icon: Search, description: 'Diagnosing logic and coding errors, maintaining application operation, and applying testing and debugging practices.' },
  { name: 'Database Optimization', Icon: Database, description: 'Developing and integrating databases and enterprise processes, supported by SQL platform experience and legacy modernization.' },
];

export default function Strengths() {
  return (
    <section id="strengths" className="section-padding container-custom">
      <SectionHeading number="N-400" label="WORKING PRINCIPLES" title="Professional Strengths" />
      <div className="strengths-grid">{strengths.map(({ name, Icon, description }, index) => <article key={name} className="strength-card" data-reveal data-reveal-delay={index % 3}><div className="strength-meta"><Icon size={20} aria-hidden="true" /><span className="eyebrow">N-{String(index + 1).padStart(2, '0')}</span></div><h3>{name}</h3><p className="muted">{description}</p></article>)}</div>
    </section>
  );
}
