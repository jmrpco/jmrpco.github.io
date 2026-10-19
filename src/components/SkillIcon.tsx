"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.replace(/[^a-z0-9]/gi, '').slice(0, 2).toUpperCase();

  return (
    <span className="skill-icon-tile" aria-hidden="true">
      {icon && !failed ? (
        <Image
          src={icon}
          alt=""
          width={48}
          height={48}
          className="skill-logo"
          onError={() => setFailed(true)}
          unoptimized
        />
      ) : (
        <span className="skill-icon-fallback">{initials || '?'}</span>
      )}
    </span>
  );
}
