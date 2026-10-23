import { MapPin, Phone } from "lucide-react";
import { buildWhatsAppLink, mapsSearchUrl, siteData } from "../data/data";
import Button from "../components/Button";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../components/Icons";
import Reveal from "../components/Reveal";

export default function Contact() {
  const { contact, contactSection, social } = siteData;
  const { address } = contact;

  return (
    <section className="section contact" id={contactSection.id} aria-labelledby="contato-titulo">
      <div className="container contact-layout">
        <Reveal>
          <p className="eyebrow">{contactSection.eyebrow}</p>
          <h2 id="contato-titulo">{contactSection.title}</h2>
          <p className="section-lead">{contactSection.text}</p>
          <div className="contact-actions">
            <Button href={buildWhatsAppLink()} target="_blank">
              <WhatsAppIcon size={18} />
              {contactSection.whatsappButton}
            </Button>
            <Button href={mapsSearchUrl()} target="_blank" variant="outline">
              <MapPin size={18} aria-hidden="true" />
              {contactSection.mapsButton}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="contact-cards">
            <li>
              <a href={contact.phoneHref}>
                <Phone size={20} aria-hidden="true" />
                <span>
                  <small>{contactSection.phoneLabel}</small>
                  <strong>{contact.phone}</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} />
                <span>
                  <small>{contactSection.whatsappLabel}</small>
                  <strong>{contact.phone}</strong>
                </span>
              </a>
            </li>
            <li>
              <div className="contact-static">
                <MapPin size={20} aria-hidden="true" />
                <span>
                  <small>{contactSection.addressLabel}</small>
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                  <em>
                    {contactSection.cityLabel}: {address.city} - {address.state}
                  </em>
                  <em>
                    {contactSection.zipLabel} {address.zipCode}
                  </em>
                </span>
              </div>
            </li>
            <li>
              <a href={social.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={20} />
                <span>
                  <small>{social.instagram.name}</small>
                  <strong>{social.instagram.handle}</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={social.facebook.url} target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={20} />
                <span>
                  <small>{social.facebook.name}</small>
                  <strong>{social.facebook.label}</strong>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
