import { skillGroups } from '@/lib/skills';
import SectionHeading from './SectionHeading';
import ExpertiseGrid from './ExpertiseGrid';

export default function Skills() {
  return (
    <section id="expertise" className="section-padding container-custom">
      <span id="skills" className="anchor-alias" />
      <SectionHeading number="T-200" label="TECHNICAL DRAWINGS" title="Technical Expertise" description="A practical stack, organized by discipline. Search the tools behind the work." />
      <ExpertiseGrid groups={skillGroups} />
    </section>
  );
}
