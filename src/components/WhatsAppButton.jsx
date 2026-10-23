import { buildWhatsAppLink, siteData } from "../data/data";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteData.whatsapp.floatLabel}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
