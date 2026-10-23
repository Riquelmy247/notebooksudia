export default function SectionTitle({ eyebrow, title, titleId, text }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </header>
  );
}
