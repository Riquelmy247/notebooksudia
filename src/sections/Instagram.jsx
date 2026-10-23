import { siteData } from "../data/data";
import Button from "../components/Button";
import { InstagramIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Instagram() {
  const { instagram } = siteData;

  return (
    <section className="section instagram" id={instagram.id} aria-labelledby="instagram-titulo">
      <div className="container instagram-layout">
        <Reveal className="instagram-copy">
          <p className="eyebrow">{instagram.eyebrow}</p>
          <h2 id="instagram-titulo">{instagram.title}</h2>
          <p className="section-lead">{instagram.text}</p>

          <div className="instagram-profile">
            <span className="instagram-badge" aria-hidden="true">
              <InstagramIcon />
            </span>
            <div>
              <h3>{instagram.profileTitle}</h3>
              <p>{instagram.profileSubtitle}</p>
            </div>
          </div>

          <Button href={instagram.url} target="_blank">
            <InstagramIcon size={18} />
            {instagram.button}
          </Button>
        </Reveal>

        <Reveal className="instagram-visual" delay={120}>
          <span className="instagram-shape" aria-hidden="true" />
          <div className="instagram-window">
            <iframe
              src={instagram.embedUrl}
              title={`Página do Instagram ${instagram.profileTitle}`}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
