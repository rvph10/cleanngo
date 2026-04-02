export interface Service {
  name: string;
  description: string;
  href: string;
}

export interface FeaturedService {
  name: string;
  href: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export const services: Service[] = [
  {
    name: "Lavage de vitres",
    description: "Nettoyage professionnel sans traces pour fenêtres, baies et vitrines.",
    href: "/services/lavage-de-vitres",
  },
  {
    name: "Entretien panneaux solaires",
    description: "Nettoyage doux et éco-responsable pour optimiser votre rendement.",
    href: "/services/entretien-panneaux-solaires",
  },
  {
    name: "Bureaux & Immobilier",
    description: "Maintenance sur mesure pour espaces professionnels et résidentiels.",
    href: "/services/bureaux-et-immobilier",
  },
  {
    name: "Maison & Appartement",
    description: "Standards de qualité premium pour un intérieur impeccable.",
    href: "/services/maison-et-appartement",
  },
  {
    name: "Nettoyage après travaux",
    description: "Spécialisé pour l'élimination de poussières et débris post-rénovation.",
    href: "/services/nettoyage-apres-travaux",
  },
  {
    name: "Façades & Extérieurs",
    description: "Interventions techniques pour toitures, terrasses et façades.",
    href: "/services/facades-et-exterieurs",
  },
];

export const featuredServices: FeaturedService[] = [
  {
    name: "Lavage de vitres",
    href: "/services/lavage-de-vitres",
    image: "/images/glass_cleaning.jpg",
  },
  {
    name: "Entretien panneaux solaires",
    href: "/services/entretien-panneaux-solaires",
    image: "/images/solar_panel.jpg",
  },
  {
    name: "Façades & Extérieurs",
    href: "/services/facades-et-exterieurs",
    image: "/images/outside_cleaning.avif",
  },
];

export const navLinks: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];
