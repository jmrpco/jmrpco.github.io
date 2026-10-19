import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '@/lib/projects';
import type { PortfolioProject } from '@/lib/projects';
import ProjectImage from './ProjectImage';

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <article className={`case-study${project.featured ? ' case-featured' : ''}`} data-reveal>
      <div className="case-number"><span>{String(index + 1).padStart(2, '0')}</span><span className="eyebrow">W-{String(index + 1).padStart(3, '0')}</span></div>
      <div className="case-body">
        <div className="case-meta"><p className="eyebrow">{project.category}</p>{project.featured && <span className="featured-badge"><span className="status-dot" /> Featured</span>}</div>
        <h3>{project.title}</h3><p className="muted case-description">{project.description}</p>
        <ProjectImage image={project.resolvedImage} title={project.title} />
        <dl className="case-details">
          {project.problem && <div><dt>Problem</dt><dd>{project.problem}</dd></div>}
          {project.approach && <div><dt>Approach</dt><dd>{project.approach}</dd></div>}
          {project.impact && <div><dt>Result</dt><dd>{project.impact}</dd></div>}
        </dl>
        <div className="case-footer">{project.technologies.length > 0 && <div className="tags">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div>}<div className="project-links">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} code on GitHub`}><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live demo`}>Live <ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div></div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-padding section-tinted grid-field">
      <span id="projects" className="anchor-alias" />
      <div className="container-custom">
        <SectionHeading number="W-300" label="SELECTED PROJECTS" title="Featured Work" description="The problem, the approach, and the resulting work. A closer look at selected development projects." />
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <a className="text-link" href="https://github.com/jmrpco" target="_blank" rel="noreferrer">More work on GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
