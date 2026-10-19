import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="document-footer">
      <div className="container-custom footer">
        <div className="footer-document"><span className="eyebrow">SHEET 01 OF 01</span><span className="eyebrow">SCALE: NTS</span><span className="eyebrow">REV. {year}</span></div>
        <p>© {year} James Pediongco.<span>Bacolod City, Philippines · All rights reserved.</span></p>
        <a href="#home" className="back-top" aria-label="Back to top"><ArrowUp size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
