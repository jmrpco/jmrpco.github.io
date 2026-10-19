export default function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="sheet-heading"><h2>{title}</h2><p className="eyebrow sheet-code">SHEET {number} / {label}</p></div>
      {description && <p className="muted section-description">{description}</p>}
    </div>
  );
}
