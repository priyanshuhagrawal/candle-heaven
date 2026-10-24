export default function SectionTitle({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
      <span className="heading-flourish" aria-hidden="true">✧ ─── ✧</span>
    </div>
  );
}
