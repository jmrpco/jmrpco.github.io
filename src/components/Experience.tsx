import SectionHeading from './SectionHeading';
import { experiences } from '@/lib/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-tinted grid-field">
      <div className="container-custom">
        <SectionHeading number="T-100" label="CAREER TIMELINE" title="Experience" description="From software development and UI/UX to CRM team leadership. Experience across RVN Technology Solutions, TalentView, and Accenture." />
        <nav className="career-navigation" aria-label="Career timeline">
          {experiences.map(entry => (
            <a key={entry.id} href={`#role-${entry.id}`} data-current={entry.current}>
              <span className="eyebrow">{entry.year}{entry.current && <span className="current-label"> / CURRENT</span>}</span>
              <span>{entry.title}</span>
            </a>
          ))}
        </nav>
        <div className="experience-list">
          {experiences.map(entry => (
            <article key={entry.id} id={`role-${entry.id}`} className="experience-entry" data-current={entry.current} data-reveal>
              <div className="experience-meta">
                <span className="eyebrow">{entry.dateRange}</span>
                {entry.duration && <strong>{entry.duration}</strong>}
                {entry.current && <span className="current-badge"><span className="status-dot" /> Current role</span>}
              </div>
              <div className="experience-body">
                <h3>{entry.title}</h3>
                <p className="experience-company">{entry.company}{entry.location && <span> · {entry.location}</span>}</p>
                {entry.summary && <p className="muted">{entry.summary}</p>}
                <ul>{entry.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul>
                <div className="tags">{entry.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
