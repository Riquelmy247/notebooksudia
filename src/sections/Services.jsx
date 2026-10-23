import { Lightbulb, MessageSquare, Search, Wrench } from "lucide-react";
import { siteData } from "../data/data";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

const icons = {
  diagnostic: Search,
  repair: Wrench,
  tips: Lightbulb,
  quote: MessageSquare,
};

export default function Services() {
  const { services } = siteData;

  return (
    <section className="section services" id={services.id} aria-labelledby="servicos-titulo">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow={services.eyebrow}
            title={services.title}
            titleId="servicos-titulo"
            text={services.text}
          />
        </Reveal>

        <div className="service-grid">
          {services.items.map((item, index) => {
            const Icon = icons[item.icon] || Wrench;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={item.id} delay={index * 70} as="article" className="service-card">
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <span className="service-index" aria-hidden="true">
                    {number}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
