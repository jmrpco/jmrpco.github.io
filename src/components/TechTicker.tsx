"use client";

import { Pause, Play } from 'lucide-react';
import { useState } from 'react';

export default function TechTicker({ technologies }: { technologies: string[] }) {
  const [paused, setPaused] = useState(false);
  if (technologies.length === 0) return null;
  return (
    <div className="technology-ticker" aria-label="Technology stack">
      <div className="ticker-track" style={{ animationPlayState: paused ? 'paused' : undefined }}>
        {[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{technologies.map(name => <span key={name}><span aria-hidden="true">+</span>{name}</span>)}</div>)}
      </div>
      <button type="button" className="ticker-control" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume technology ticker' : 'Pause technology ticker'} aria-pressed={paused}>{paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}</button>
    </div>
  );
}
