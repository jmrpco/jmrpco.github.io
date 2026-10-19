"use client";

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { SkillGroup } from '@/lib/skill-schema';
import SkillIcon from './SkillIcon';

export default function ExpertiseGrid({ groups }: { groups: SkillGroup[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const filtered = useMemo(() => groups
    .filter(group => !category || group.category === category)
    .map(group => ({ ...group, skills: group.skills.filter(skill => `${skill.name} ${skill.category}`.toLowerCase().includes(query.trim().toLowerCase())) }))
    .filter(group => group.skills.length), [groups, query, category]);
  const count = filtered.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <>
      <div className="expertise-toolbar">
        <label className="technology-search"><Search size={16} aria-hidden="true" /><span className="sr-only">Search technologies</span><input type="search" placeholder="Search technologies…" value={query} onChange={event => setQuery(event.target.value)} /><span className="eyebrow" aria-hidden="true">FIND</span></label>
        <p className="eyebrow match-count" role="status">{count} {count === 1 ? 'TECHNOLOGY' : 'TECHNOLOGIES'}</p>
      </div>
      <div className="category-filters" role="group" aria-label="Filter technologies by category">
        <button type="button" aria-pressed={!category} onClick={() => setCategory('')}>All</button>
        {groups.map(group => <button key={group.category} type="button" aria-pressed={category === group.category} onClick={() => setCategory(group.category)}>{group.category}</button>)}
      </div>
      <div className="skills-grid">
        {filtered.map(group => {
          const sheet = groups.findIndex(original => original.category === group.category) + 1;
          return (
            <article className="skill-category" key={group.category} data-reveal data-reveal-delay={sheet % 3}>
              <div className="skill-sheet-meta"><span className="eyebrow">T-{String(sheet).padStart(3, '0')}</span><span className="eyebrow">{group.skills.length} ITEMS</span></div>
              <h3>{group.category}</h3>
              <ul className="skill-list" aria-label={`${group.category} technologies`}>
                {group.skills.map(skill => <li className="skill-card" key={skill.id}><SkillIcon key={skill.icon} icon={skill.icon} name={skill.name} /><span className="skill-name">{skill.name}</span></li>)}
              </ul>
              <div className="skill-sheet-footer eyebrow"><span>DISCIPLINE {String(sheet).padStart(2, '0')}</span><span aria-hidden="true">+</span></div>
            </article>
          );
        })}
      </div>
      {filtered.length === 0 && <p className="empty-state muted">No technologies match your search. Try another term or category.</p>}
    </>
  );
}
