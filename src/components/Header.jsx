import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { buildWhatsAppLink, siteData } from "../data/data";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const { nav, header, company } = siteData;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const whatsapp = buildWhatsAppLink();

  const menu = (
    <div id="menu-mobile" className="nav-mobile" hidden={!open}>
      <nav aria-label="Menu mobile">
        {nav.map((item) => (
          <a key={item.id} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <Button href={whatsapp} target="_blank" onClick={close}>
          {header.cta}
        </Button>
      </nav>
    </div>
  );

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <a className="logo-link" href="#inicio" onClick={close}>
          <Logo decorative />
          <span className="sr-only">{company.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.id} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Button className="header-cta" href={whatsapp} target="_blank">
            <span className="cta-short">{header.ctaShort}</span>
            <span className="cta-full">{header.cta}</span>
          </Button>
          <button
            type="button"
            className={`menu-toggle${open ? " is-open" : ""}`}
            aria-label={open ? header.menuClose : header.menuOpen}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {createPortal(menu, document.body)}
    </header>
  );
}
