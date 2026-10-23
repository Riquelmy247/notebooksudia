import {
  buildWhatsAppLink,
  formatAddress,
  siteData,
} from "../data/data";
import { FacebookIcon, InstagramIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  const { company, contact, footer, nav, social } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo decorative />
          <p className="footer-name">{company.name}</p>
          <p>{company.summary}</p>
        </div>

        <nav aria-label="Rodapé">
          <p className="footer-label">{footer.navTitle}</p>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="footer-label">{footer.socialTitle}</p>
          <ul className="footer-links">
            <li>
              <a href={social.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={16} /> {social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={social.facebook.url} target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={16} /> {social.facebook.name}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-label">{footer.contactTitle}</p>
          <ul className="footer-links">
            <li>{formatAddress()}</li>
            <li>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-copy">
        <p>
          © {year} {company.name}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
