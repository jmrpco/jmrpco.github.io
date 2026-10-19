"use client";

import Image, { type StaticImageData } from 'next/image';
import { ImageOff } from 'lucide-react';
import { useState } from 'react';

export default function ProjectImage({ image, title }: { image: StaticImageData | null; title: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const available = image !== null && image.src !== failedSrc;

  return (
    <figure className="project-preview">
      <figcaption className="eyebrow">Project preview</figcaption>
      <div className="project-preview-frame" data-empty={!available}>
        {available ? (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 760px) calc(100vw - 86px), (max-width: 1296px) calc(100vw - 252px), 1044px"
            className="project-screenshot"
            onError={() => setFailedSrc(image.src)}
          />
        ) : (
          <div className="project-preview-fallback">
            <ImageOff size={26} aria-hidden="true" />
            <p>Project preview unavailable</p>
            <span className="muted">Explore the project details below.</span>
          </div>
        )}
      </div>
    </figure>
  );
}
