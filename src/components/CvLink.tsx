import { Download } from 'lucide-react';
import profile from '@/data/profile.json';

export default function CvLink({ className = 'button secondary' }: { className?: string }) {
  const url = String(profile.cvUrl || '');
  return (
    <a className={className} href={url || `mailto:${profile.email}?subject=CV%20request`} download={url?.startsWith('/') ? true : undefined}>
      <span>{url ? 'Download CV' : 'Request CV'}</span><Download size={15} aria-hidden="true" />
    </a>
  );
}
