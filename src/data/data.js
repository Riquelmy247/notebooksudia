/**
 * Notebooks Uberlândia — fonte única de conteúdo do site.
 *
 * Altere telefone, endereço, textos, serviços, logo e redes sociais aqui.
 * Os componentes apenas leem este arquivo.
 *
 * LOGO
 * ----
 * A logo oficial fica em public/logo.png.
 * O caminho está em images.logo.
 *
 * INSTAGRAM
 * ---------
 * O feed usa o embed público do perfil, o mesmo recurso dos outros sites.
 * Altere o endereço em social.instagram.url e instagram.embedUrl.
 */

export const siteData = {
  company: {
    name: "Notebooks Uberlândia",
    description:
      "Manutenção e reparo de notebooks em Uberlândia, com atendimento próximo e foco em soluções para você.",
    summary: "Desde 2015 reparando notebooks em Uberlândia - MG.",
    founded: 2015,
    cityLabel: "Uberlândia - MG",
  },

  contact: {
    phone: "(34) 9964-3952",
    phoneHref: "tel:+553499643952",
    whatsappNumber: "553499643952",
    whatsappMessage:
      "Olá! Vim pelo site da Notebooks Uberlândia e gostaria de solicitar um orçamento para meu notebook.",
    address: {
      street: "Rua Carlos Marquez",
      number: "244",
      city: "Uberlândia",
      state: "MG",
      zipCode: "38400-682",
      country: "Brasil",
    },
    mapsQuery: "Rua Carlos Marquez, 244, Uberlândia - MG, 38400-682",
  },

  social: {
    instagram: {
      name: "Instagram",
      handle: "@notebooksuberlandia",
      url: "https://www.instagram.com/notebooksuberlandia/",
    },
    facebook: {
      name: "Facebook",
      label: "Perfil no Facebook",
      url: "https://www.facebook.com/guilherme.algar.7?_rdr",
    },
  },

  images: {
    logo: "/logo.png",
    logoAlt: "Notebooks Uberlândia",
    favicon: "/logo.png",
  },

  seo: {
    title: "Notebooks Uberlândia | Manutenção e Reparo de Notebooks",
    description:
      "Notebooks Uberlândia faz manutenção e reparo de notebooks em Uberlândia - MG desde 2015. Solicite o seu orçamento.",
    keywords: [
      "Notebooks Uberlândia",
      "manutenção de notebooks",
      "reparo de notebooks",
      "Uberlândia",
      "orçamento de notebook",
    ],
    url: "https://riquelmy247.github.io/notebooksudia/",
    locale: "pt_BR",
    image: "/logo.png",
  },

  nav: [
    { id: "inicio", label: "Início", href: "#inicio" },
    { id: "servicos", label: "Serviços", href: "#servicos" },
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "instagram", label: "Instagram", href: "#instagram" },
    { id: "contato", label: "Contato", href: "#contato" },
  ],

  mobileNav: [
    { label: "Início", shortLabel: "Início", href: "#inicio", icon: "home" },
    { label: "Serviços", shortLabel: "Serviços", href: "#servicos", icon: "services" },
    { label: "Sobre", shortLabel: "Sobre", href: "#sobre", icon: "about" },
    { label: "Instagram", shortLabel: "Insta", href: "#instagram", icon: "instagram" },
    { label: "Contato", shortLabel: "Contato", href: "#contato", icon: "contact" },
  ],

  header: {
    cta: "Solicitar orçamento",
    ctaShort: "Orçamento",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },

  hero: {
    id: "inicio",
    eyebrow: "Uberlândia · desde 2015",
    titleLead: "Seu notebook",
    titleEmphasis: "em boas mãos!",
    subtitle:
      "Há mais de uma década oferecendo serviços de manutenção e reparo de notebooks em Uberlândia, com atendimento próximo e foco em soluções para você.",
    primaryButton: "Solicitar orçamento",
    secondaryButton: "Conhecer nossos serviços",
    secondaryHref: "#servicos",
    panelKicker: "Manutenção de notebooks",
    panelNote: "Dicas e reparos em notebooks",
  },

  services: {
    id: "servicos",
    eyebrow: "Serviços",
    title: "Cuidado direto com o seu notebook",
    text: "Categorias de atendimento da Notebooks Uberlândia. O detalhe de cada caso é combinado no orçamento.",
    items: [
      {
        id: "diagnostico",
        icon: "diagnostic",
        title: "Diagnóstico e manutenção",
        description:
          "Avaliação do notebook para entender o que precisa de cuidado e orientar a manutenção.",
      },
      {
        id: "reparo",
        icon: "repair",
        title: "Reparo de notebooks",
        description:
          "Reparo de notebooks com foco em recolocar o equipamento em condições de uso.",
      },
      {
        id: "orientacoes",
        icon: "tips",
        title: "Orientações e dicas de conservação",
        description:
          "Dicas para conservar o notebook e reduzir problemas no uso do dia a dia.",
      },
      {
        id: "orcamento",
        icon: "quote",
        title: "Atendimento para orçamento",
        description:
          "Um atendimento direto para você contar o que aconteceu e solicitar o orçamento.",
      },
    ],
  },

  about: {
    id: "sobre",
    eyebrow: "Sobre a empresa",
    title: "Reparando notebooks em Uberlândia desde 2015",
    paragraphs: [
      "A Notebooks Uberlândia trabalha com reparo de notebooks desde 2015. O atendimento é em Uberlândia - MG, com um contato próximo e objetivo.",
      "Dicas e reparos em notebooks fazem parte do dia a dia da empresa. Para começar, conte o que o seu equipamento precisa e peça o orçamento.",
    ],
    points: [
      "Desde 2015 reparando notebooks.",
      "Dicas e reparos em notebooks.",
      "Uberlândia - MG.",
      "Faça já o seu orçamento!",
    ],
    cta: "Solicitar orçamento",
  },

  instagram: {
    id: "instagram",
    eyebrow: "Instagram",
    title: "Acompanhe a Notebooks Uberlândia",
    text: "Dicas e reparos em notebooks, direto do perfil da empresa.",
    profileTitle: "@notebooksuberlandia",
    profileSubtitle: "Notebooks Uberlândia",
    url: "https://www.instagram.com/notebooksuberlandia/",
    embedUrl: "https://www.instagram.com/notebooksuberlandia/embed",
    button: "Seguir no Instagram",
  },

  contactSection: {
    id: "contato",
    eyebrow: "Contato",
    title: "Faça já o seu orçamento",
    text: "Fale com a Notebooks Uberlândia pelo telefone, pelo WhatsApp ou pelas redes sociais.",
    whatsappButton: "Chamar no WhatsApp",
    mapsButton: "Abrir no Google Maps",
    phoneLabel: "Telefone",
    whatsappLabel: "WhatsApp",
    addressLabel: "Endereço",
    zipLabel: "CEP",
    cityLabel: "Cidade",
  },

  footer: {
    rights: "Todos os direitos reservados.",
    navTitle: "Navegação",
    contactTitle: "Contato",
    socialTitle: "Redes sociais",
  },

  whatsapp: {
    floatLabel: "Solicitar orçamento no WhatsApp",
  },
};

export function asset(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\.\//, "").replace(/^\//, "");
  return `${base}${clean}`;
}

export function absoluteUrl(path = "") {
  const site = String(siteData.seo.url || "").replace(/\/$/, "");
  if (!path) return site;
  if (/^https?:\/\//.test(path)) return path;

  const relative = asset(path);
  try {
    const origin = new URL(siteData.seo.url).origin;
    return `${origin}${relative.startsWith("/") ? relative : `/${relative}`}`;
  } catch {
    return relative;
  }
}

export function formatAddress(address = siteData.contact.address) {
  const street = [address.street, address.number].filter(Boolean).join(", ");
  const city = [address.city, address.state].filter(Boolean).join(" - ");
  return [street, city, address.zipCode ? `CEP ${address.zipCode}` : ""]
    .filter(Boolean)
    .join(", ");
}

export function mapsSearchUrl() {
  const query = siteData.contact.mapsQuery || formatAddress();
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function buildWhatsAppLink(
  message = siteData.contact.whatsappMessage,
  number = siteData.contact.whatsappNumber,
) {
  const digits = String(number || "").replace(/\D/g, "");
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}
