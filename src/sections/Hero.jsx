import { Laptop } from "lucide-react";
import { buildWhatsAppLink, siteData } from "../data/data";
import Button from "../components/Button";

export default function Hero() {
  const { hero, services, company } = siteData;
  const preview = services.items.slice(0, 3);

  return (
    <section className="hero" id={hero.id} aria-labelledby="hero-titulo">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
          <h1 id="hero-titulo">
            {hero.titleLead} <span>{hero.titleEmphasis}</span>
          </h1>
          <p className="hero-lead">{hero.subtitle}</p>
          <div className="hero-actions">
            <Button href={buildWhatsAppLink()} target="_blank">
              {hero.primaryButton}
            </Button>
            <Button href={hero.secondaryHref} variant="ghost">
              {hero.secondaryButton}
            </Button>
          </div>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <div className="device">
            <div className="device-screen">
              <div className="device-dots">
                <span />
                <span />
                <span />
              </div>
              <p>{hero.panelKicker}</p>
              <ul>
                {preview.map((item) => (
                  <li key={item.id}>
                    <i />
                    {item.title}
                  </li>
                ))}
              </ul>
              <small>{hero.panelNote}</small>
            </div>
            <div className="device-base" />
          </div>
          <div className="hero-chip">
            <Laptop size={18} />
            <span>
              {company.cityLabel}
              <strong>Desde {company.founded}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
