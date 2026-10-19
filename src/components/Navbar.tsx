"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CvLink from './CvLink';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    mobileRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1181px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav aria-label="Main navigation" className="container-custom nav-inner">
        <a href="#home" className="brand" aria-label="James Pediongco home" onClick={() => setOpen(false)}>
          <span className="brand-monogram" aria-hidden="true">JP<span>_</span></span>
          <span className="brand-name">JAMES PEDIONGCO<span>SENIOR SOFTWARE DEVELOPER</span></span>
        </a>
        <div className="desktop-links">
          {links.map(link => (
            <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <CvLink className="nav-cv" />
          <a className="nav-contact" href="#contact" aria-label="Contact James">
            <span>Contact</span><ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button ref={menuRef} type="button" className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-links container-custom" ref={mobileRef} hidden={!open}>
        {links.map((link, index) => (
          <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setOpen(false)}>
            <span className="eyebrow">0{index + 1}</span>{link.label}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
        <div className="mobile-controls"><ThemeToggle /><CvLink className="button secondary" /></div>
      </div>
    </header>
  );
}
