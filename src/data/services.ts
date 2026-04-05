export interface Service {
  name: string;
  description: string;
  href: string;
  image: string;
  featured?: boolean;
  quote?: string;
  features?: string[];
}

export const services: Service[] = [
  {
    name: "Nettoyage résidentiel",
    description:
      "Profitez d'un intérieur sain et impeccable grâce à notre service de nettoyage résidentiel professionnel. Que ce soit pour un entretien régulier hebdomadaire ou une intervention ponctuelle, notre équipe prend en charge maisons, appartements et studios. Sols, sanitaires, cuisine et pièces à vivre : chaque surface est traitée avec soin et des produits adaptés.",
    href: "/services/nettoyage-residentiel",
    image: "/images/house_cleaning.jpg",
    quote:
      "Un chez-soi propre, c'est un espace où l'on se ressource vraiment. Moins de poussière, plus d'air — et une sérénité que vous méritez.",
    features: [
      "Sols aspirés et lavés",
      "Sanitaires désinfectés de fond en comble",
      "Cuisine et surfaces de travail",
      "Dépoussiérage du mobilier et des luminaires",
      "Miroirs, interrupteurs et poignées",
      "Vides-poches et recoins oubliés",
    ],
  },
  {
    name: "Grand nettoyage",
    description:
      "Le grand nettoyage va bien au-delà du ménage ordinaire : décapage des sols, désinfection des sanitaires, nettoyage en profondeur des hottes et cuisinières, dépoussiérage complet du mobilier et des recoins inaccessibles. Idéal en début ou fin de saison, avant une mise en location ou après une longue absence. Retrouvez un logement véritablement remis à neuf, de fond en comble.",
    href: "/services/grand-nettoyage",
    image: "/images/major_cleaning.jpg",
    quote:
      "Le grand nettoyage, c'est repartir de zéro. Chaque recoin, chaque surface, traités en profondeur — comme si c'était la première fois.",
    features: [
      "Décapage et traitement des sols",
      "Désinfection complète des sanitaires",
      "Nettoyage en profondeur de la cuisine",
      "Hottes, fours et électroménager encastré",
      "Dépoussiérage des recoins inaccessibles",
      "Nettoyage des fenêtres et rebords",
    ],
  },
  {
    name: "Nettoyage post-travaux",
    description:
      "Après un chantier de rénovation ou de construction, les poussières fines et résidus s'accumulent partout. Notre service de nettoyage post-travaux élimine plâtre, silicone, colle, peinture et débris sur chaque surface : sols, fenêtres, interrupteurs, plinthes et faux-plafonds. Vous récupérez un espace prêt à habiter ou à livrer, sans traces ni résidus.",
    href: "/services/nettoyage-post-travaux",
    image: "/images/post_work.jpg",
    quote:
      "Après les travaux, la poussière s'installe partout — même là où vous ne regardez jamais. On s'en charge, vous récupérez un espace prêt à vivre.",
    features: [
      "Élimination des poussières fines de chantier",
      "Nettoyage des vitres et huisseries",
      "Débarras des résidus (plâtre, silicone, peinture)",
      "Sols, plinthes et faux-plafonds",
      "Interrupteurs, prises et boiseries",
      "Livraison d'un espace prêt à habiter",
    ],
  },
  {
    name: "Emménagement & Déménagement",
    description:
      "Un emménagement réussi commence par un logement propre, et un déménagement serein exige une restitution irréprochable. Notre service couvre la remise en état complète d'un bien pour un état des lieux de sortie comme la préparation d'un nouveau domicile avant votre installation. Placards, salle de bain, cuisine, sols et vitres : tout est traité pour que vous n'ayez qu'à poser vos affaires.",
    href: "/services/emmenagement-demenagement",
    image: "/images/moving_in.jpg",
    quote:
      "Partir ou arriver dans un logement impeccable, ça change tout. On s'assure que votre état des lieux se passe sans accroc.",
    features: [
      "Nettoyage complet avant emménagement",
      "Remise en état pour état des lieux de sortie",
      "Placards, tiroirs et rangements",
      "Salle de bain et cuisine",
      "Sols et fenêtres",
      "Certification de propreté disponible",
    ],
  },
  {
    name: "Bureaux & Commerces",
    description:
      "Un espace de travail propre et sain améliore la productivité, l'image de votre entreprise et le bien-être de vos collaborateurs. Nous intervenons dans vos bureaux, open spaces, salles de réunion, sanitaires et espaces communs selon un planning adapté à votre activité — tôt le matin, en soirée ou le week-end. Contrats d'entretien régulier ou interventions ponctuelles disponibles.",
    href: "/services/bureaux-commerces",
    image: "/images/office_cleaning.webp",
    quote:
      "Un espace de travail propre, c'est plus qu'une question d'image. C'est une condition pour que vos équipes performent et que vos clients reviennent.",
    features: [
      "Postes de travail et surfaces de bureau",
      "Salles de réunion et espaces communs",
      "Sanitaires et vestiaires",
      "Poignées, interrupteurs et zones de contact",
      "Sols (aspiration, lavage, entretien)",
      "Intervention selon votre planning (matin, soir, week-end)",
    ],
  },
  {
    name: "Nettoyage de vitres & châssis",
    description:
      "Des vitres impeccables transforment l'ambiance de votre intérieur et valorisent l'image de votre commerce ou entreprise. Nous utilisons des techniques professionnelles à la raclette et à la perche télescopique pour éliminer calcaire, traces de doigts et dépôts sans laisser de marques. Fenêtres, baies vitrées, vitrines, velux et châssis sont traités intérieur comme extérieur.",
    href: "/services/nettoyage-vitres",
    image: "/images/glass_cleaning.jpg",
    featured: true,
    quote:
      "Une vitre propre change toute l'atmosphère d'une pièce. Plus de lumière, plus de clarté — et moins de « pourquoi c'est flou là ? »",
    features: [
      "Nettoyage intérieur des vitres",
      "Vitres extérieures accessibles",
      "Dépoussiérage et essuyage des châssis",
      "Nettoyage en profondeur des rebords et rails",
      "Élimination des traces, stries, pollens et marques",
      "Polissage final sans peluches",
    ],
  },
  {
    name: "Panneaux solaires",
    description:
      "Des panneaux solaires encrassés peuvent perdre jusqu'à 30 % de leur rendement énergétique. Notre service de nettoyage éco-responsable utilise de l'eau déminéralisée et des brosses douces adaptées pour éliminer poussières, fientes d'oiseaux, pollens et dépôts calcaires sans endommager les cellules photovoltaïques. Retrouvez une production optimale et protégez votre investissement sur le long terme.",
    href: "/services/panneaux-solaires",
    image: "/images/solar_panel.jpg",
    featured: true,
    quote:
      "Des panneaux encrassés, c'est de l'énergie perdue. Un nettoyage régulier, c'est un investissement qui se rentabilise — et qui protège vos cellules.",
    features: [
      "Nettoyage à l'eau déminéralisée",
      "Brosses douces adaptées aux cellules photovoltaïques",
      "Élimination des fientes, pollens et dépôts calcaires",
      "Vérification visuelle des fixations",
      "Rapport de nettoyage inclus",
      "Intervention sécurisée en hauteur",
    ],
  },
  {
    name: "Toitures & Démoussage",
    description:
      "La mousse et les lichens retiennent l'humidité et accélèrent la dégradation de vos tuiles, ardoises et toitures plates. Notre traitement anti-mousse combine nettoyage haute pression, application de produit biocide et traitement hydrofuge pour protéger durablement votre couverture. Nous intervenons en toute sécurité sur tous types de toitures pour prolonger leur durée de vie et prévenir les infiltrations.",
    href: "/services/nettoyage-toiture",
    image: "/images/demoussage.jpg",
    featured: true,
    quote:
      "La mousse sur votre toiture, c'est silencieux mais ravageur. On intervient avant que les dégâts ne deviennent coûteux.",
    features: [
      "Traitement anti-mousse haute pression",
      "Application de produit biocide",
      "Traitement hydrofuge de protection",
      "Nettoyage tuiles, ardoises et toitures plates",
      "Contrôle visuel des fixations",
      "Intervention sécurisée en hauteur",
    ],
  },
  {
    name: "Nettoyage de Façades",
    description:
      "Les façades exposées aux intempéries accumulent avec le temps mousses, algues, pollution et salissures qui ternissent l'esthétique de votre bâtiment. Notre équipe réalise des interventions techniques par nettoyage haute pression, traitement chimique adapté ou sablage selon la nature du support — crépi, pierre, brique ou béton. Redonnez de l'éclat à votre façade et protégez votre patrimoine immobilier.",
    href: "/services/nettoyage-facade",
    image: "/images/facade_cleaning.jpg",
    quote:
      "La façade, c'est la première impression de votre bâtiment. Une surface propre, c'est une valeur préservée et une image soignée.",
    features: [
      "Nettoyage haute pression adapté au support",
      "Traitement des mousses et algues",
      "Crépi, pierre, brique et béton",
      "Application de traitement hydrofuge",
      "Élimination des salissures et traces de pollution",
      "Bilan visuel des fissures inclus",
    ],
  },
  {
    name: "Terrasses & Allées",
    description:
      "Terrasses en bois, dalles béton, pavés, carrelages extérieurs ou allées : chaque surface mérite un entretien adapté. Grâce au nettoyage haute pression, nous éliminons mousses, taches verdâtres, huiles et incrustations pour redonner à vos espaces extérieurs un aspect propre et sécurisé. Un traitement imperméabilisant peut être appliqué en complément pour une protection longue durée.",
    href: "/services/nettoyage-terrasse",
    image: "/images/outside_cleaning.avif",
    quote:
      "Vos espaces extérieurs méritent autant d'attention que l'intérieur. Un nettoyage professionnel, et ils retrouvent leur éclat — et leur sécurité.",
    features: [
      "Nettoyage haute pression des surfaces",
      "Bois, dalles, pavés, carrelage extérieur",
      "Élimination des mousses et taches verdâtres",
      "Traitement des huiles et incrustations",
      "Option traitement imperméabilisant",
      "Allées, cours et espaces de passage",
    ],
  },
  {
    name: "Vérandas & Coupoles",
    description:
      "Les vérandas et coupoles accumulent poussières, dépôts calcaires et algues sur leurs surfaces vitrées et leur structure en aluminium ou PVC. Notre nettoyage intérieur et extérieur restaure la transparence de vos vitrages et l'éclat de votre charpente, pour profiter pleinement de la luminosité naturelle. Nous intervenons en hauteur en toute sécurité, avec des produits adaptés à chaque matériau.",
    href: "/services/nettoyage-veranda",
    image: "/images/veranda_cleaning.jpg",
    quote:
      "Une véranda, c'est fait pour laisser entrer la lumière. Quand les vitres sont propres, vous redécouvrez l'espace que vous avez.",
    features: [
      "Nettoyage intérieur et extérieur des vitrages",
      "Traitement des dépôts calcaires",
      "Nettoyage de la structure aluminium ou PVC",
      "Intervention en hauteur sécurisée",
      "Produits adaptés à chaque matériau",
      "Finition brillante sans traces",
    ],
  },
  {
    name: "Corniches & Gouttières",
    description:
      "Des gouttières obstruées par les feuilles, mousses et débris sont à l'origine de débordements, infiltrations et dégâts des eaux coûteux. Notre service de débouchage et nettoyage de gouttières et corniches garantit une évacuation optimale des eaux de pluie et prolonge la durée de vie de vos installations. Nous réalisons également un contrôle visuel des fixations et signalons toute anomalie détectée.",
    href: "/services/nettoyage-gouttieres",
    image: "/images/corniere.webp",
    quote:
      "Des gouttières bouchées, ça ne se voit pas — jusqu'au jour où l'eau s'infiltre. Mieux vaut prévenir que réparer.",
    features: [
      "Débouchage et nettoyage des gouttières",
      "Nettoyage des corniches",
      "Évacuation optimale des eaux de pluie",
      "Contrôle visuel des fixations",
      "Signalement des anomalies détectées",
      "Intervention sécurisée en hauteur",
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
