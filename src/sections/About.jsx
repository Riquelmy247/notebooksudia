import { buildWhatsAppLink, siteData } from "../data/data";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function About() {
  const { about, company } = siteData;

  return (
    <section className="section about" id={about.id} aria-labelledby="sobre-titulo">
      <div className="container about-layout">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="sobre-titulo">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p className="section-lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <Button href={buildWhatsAppLink()} target="_blank">
            {about.cta}
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <aside className="about-panel">
            <p className="about-year">{company.founded}</p>
            <p className="about-year-label">{company.cityLabel}</p>
            <ul>
              {about.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
