export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
  description: string;
  metaDescription: string;
  href: string;
  image: string;
  featured?: boolean;
  quote?: string;
  features?: string[];
  faqItems: FaqItem[];
}
export const services: Service[] = [
  {
    name: "Nettoyage de vitres & châssis",
    description:
      "Des vitres impeccables transforment l'ambiance de votre intérieur et valorisent l'image de votre commerce ou entreprise. Nous utilisons des techniques professionnelles à la raclette et à la perche télescopique pour éliminer calcaire, traces de doigts et dépôts sans laisser de marques. Fenêtres, baies vitrées, vitrines, velux et châssis sont traités intérieur comme extérieur.",
    metaDescription:
      "Nettoyage de vitres professionnel à Bruxelles et périphérie. Fenêtres, baies vitrées, vitrines, velux — intérieur et extérieur. Résultat sans traces.",
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
    faqItems: [
      {
        question: "Nettoyez-vous aussi les vitres en hauteur ?",
        answer:
          "Oui, nous utilisons des perches télescopiques professionnelles pour atteindre les vitres en hauteur en toute sécurité, sans avoir besoin d'échafaudage pour la majorité des configurations.",
      },
      {
        question: "À quelle fréquence faut-il faire nettoyer ses vitres ?",
        answer:
          "Pour un domicile, deux fois par an suffit généralement. Pour les commerces et vitrines, nous recommandons une intervention mensuelle pour maintenir une image soignée. Nous proposons des contrats adaptés.",
      },
      {
        question: "Le nettoyage inclut-il les châssis et les rails ?",
        answer:
          "Oui, les châssis, rebords et rails sont inclus dans notre prestation. L'accumulation de poussière et de calcaire dans les rails est souvent négligée mais essentielle pour un résultat vraiment net.",
      },
    ],
  },
  {
    name: "Panneaux solaires",
    description:
      "Des panneaux solaires encrassés peuvent perdre jusqu'à 30 % de leur rendement énergétique. Notre service de nettoyage éco-responsable utilise de l'eau déminéralisée et des brosses douces adaptées pour éliminer poussières, fientes d'oiseaux, pollens et dépôts calcaires sans endommager les cellules photovoltaïques. Retrouvez une production optimale et protégez votre investissement sur le long terme.",
    metaDescription:
      "Nettoyage de panneaux solaires à Bruxelles et périphérie. Eau déminéralisée, sans endommager les cellules. Récupérez jusqu'à 30% de rendement perdu.",
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
    faqItems: [
      {
        question: "À quelle fréquence faut-il nettoyer ses panneaux solaires ?",
        answer:
          "Nous recommandons un nettoyage une à deux fois par an, idéalement au printemps après la saison des pollens et à l'automne après les feuilles. En zone urbaine ou agricole, une fréquence plus élevée peut être justifiée.",
      },
      {
        question: "L'eau déminéralisée peut-elle abîmer les cellules photovoltaïques ?",
        answer:
          "Non, c'est au contraire la méthode la plus sûre. L'eau déminéralisée ne laisse pas de dépôts calcaires et est utilisée avec des brosses douces spécifiques aux panneaux solaires, sans risque pour les cellules.",
      },
      {
        question: "Intervenez-vous en sécurité sur les toitures inclinées ?",
        answer:
          "Oui, nos équipes sont formées et équipées pour les interventions en hauteur sur toitures inclinées, avec les équipements de protection individuelle requis. La sécurité est notre priorité.",
      },
    ],
  },
  {
    name: "Toitures & Démoussage",
    description:
      "La mousse et les lichens retiennent l'humidité et accélèrent la dégradation de vos tuiles, ardoises et toitures plates. Notre traitement anti-mousse combine nettoyage haute pression, application de produit biocide et traitement hydrofuge pour protéger durablement votre couverture. Nous intervenons en toute sécurité sur tous types de toitures pour prolonger leur durée de vie et prévenir les infiltrations.",
    metaDescription:
      "Démoussage de toiture à Bruxelles et Brabant. Traitement anti-mousse, biocide et hydrofuge sur tuiles, ardoises et toits plats. Devis gratuit.",
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
    faqItems: [
      {
        question: "Quelle est la durée de protection après un traitement anti-mousse ?",
        answer:
          "Avec le traitement biocide et hydrofuge que nous appliquons, la protection est généralement efficace entre 3 et 5 ans selon l'exposition de la toiture et les conditions climatiques locales.",
      },
      {
        question: "Intervenez-vous sur tous types de toitures ?",
        answer:
          "Oui, nous traitons les toitures en tuiles, ardoises, béton et toitures plates. Nous adaptons la pression et les produits utilisés à chaque type de matériau pour éviter tout endommagement.",
      },
      {
        question: "Y a-t-il un risque d'infiltration lors du nettoyage haute pression ?",
        answer:
          "Non, à condition de régler correctement la pression et de travailler dans le bon sens. Nos techniciens sont formés à ces techniques spécifiques. Nous réalisons également un contrôle visuel des fixations avant intervention.",
      },
    ],
  },
  {
    name: "Nettoyage résidentiel",
    description:
      "Profitez d'un intérieur sain et impeccable grâce à notre service de nettoyage résidentiel professionnel. Que ce soit pour un entretien régulier hebdomadaire ou une intervention ponctuelle, notre équipe prend en charge maisons, appartements et studios. Sols, sanitaires, cuisine et pièces à vivre : chaque surface est traitée avec soin et des produits adaptés.",
    metaDescription:
      "Nettoyage résidentiel professionnel à Bruxelles et périphérie. Maisons, appartements, studios — sols, sanitaires, cuisine. Devis gratuit en ligne.",
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
    faqItems: [
      {
        question: "À quelle fréquence recommandez-vous un nettoyage résidentiel ?",
        answer:
          "Pour un entretien courant, nous recommandons une intervention hebdomadaire ou bimensuelle. Pour les ménages chargés ou les familles avec enfants, une fois par semaine garantit un intérieur toujours sain. Nous adaptons la fréquence à votre mode de vie.",
      },
      {
        question: "Faut-il être présent lors de l'intervention ?",
        answer:
          "Non, votre présence n'est pas obligatoire. Beaucoup de nos clients nous confient une clé ou un code d'accès. Nos équipes sont assurées et formées pour intervenir en toute discrétion et sécurité.",
      },
      {
        question: "Utilisez-vous des produits éco-responsables ?",
        answer:
          "Oui, nous privilégions des produits certifiés éco-responsables, efficaces et sans danger pour vos enfants et animaux de compagnie. Sur demande, nous pouvons adapter les produits utilisés selon vos préférences ou allergies.",
      },
    ],
  },
  {
    name: "Nettoyage post-travaux",
    description:
      "Après un chantier de rénovation ou de construction, les poussières fines et résidus s'accumulent partout. Notre service de nettoyage post-travaux élimine plâtre, silicone, colle, peinture et débris sur chaque surface : sols, fenêtres, interrupteurs, plinthes et faux-plafonds. Vous récupérez un espace prêt à habiter ou à livrer, sans traces ni résidus.",
    metaDescription:
      "Nettoyage après travaux à Bruxelles et périphérie. Élimination plâtre, silicone, peinture sur toutes surfaces. Espace livré prêt à habiter. Devis gratuit.",
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
    faqItems: [
      {
        question: "Quels types de résidus de chantier éliminez-vous ?",
        answer:
          "Nous éliminons l'ensemble des résidus courants de chantier : poussières de plâtre, projections de silicone, résidus de colle, éclaboussures de peinture, dépôts de ciment et débris divers sur toutes les surfaces.",
      },
      {
        question: "Intervenez-vous en fin de chantier ou aussi en cours de travaux ?",
        answer:
          "Nous intervenons principalement en fin de chantier, une fois les travaux terminés. Pour les grands projets en plusieurs phases, nous pouvons organiser des interventions intermédiaires sur demande.",
      },
      {
        question: "Puis-je combiner un nettoyage post-travaux et un grand nettoyage ?",
        answer:
          "Oui, et c'est souvent recommandé. Après l'élimination des résidus de chantier, un grand nettoyage complémentaire assure une remise à neuf totale de votre espace. Contactez-nous pour un devis combiné.",
      },
    ],
  },
  {
    name: "Nettoyage État des Lieux",
    description:
      "Un état des lieux réussi repose sur une restitution impeccable ou une préparation irréprochable. Notre service couvre le nettoyage complet d'un bien en fin de bail pour un état des lieux de sortie sans accroc, ou la remise en état d'un logement avant votre entrée. Placards, salle de bain, cuisine, sols et vitres : chaque surface est traitée pour que le résultat soit incontestable.",
    metaDescription:
      "Nettoyage état des lieux à Bruxelles et périphérie. Remise en état complète pour sortie ou entrée de location. Certification de propreté disponible.",
    href: "/services/nettoyage-etat-des-lieux",
    image: "/images/moving_in.jpg",
    quote:
      "Un état des lieux, ça ne pardonne pas. On s'assure que chaque surface est irréprochable — pour que vous récupériez votre caution sans discussion.",
    features: [
      "Nettoyage complet avant état des lieux d'entrée",
      "Remise en état pour état des lieux de sortie",
      "Placards, tiroirs et rangements",
      "Salle de bain et cuisine en profondeur",
      "Sols, plinthes et fenêtres",
      "Certification de propreté disponible",
    ],
    faqItems: [
      {
        question: "Pouvez-vous fournir un certificat de propreté pour l'état des lieux ?",
        answer:
          "Oui, sur demande nous délivrons un document attestant de notre intervention, utile lors de l'état des lieux de sortie pour justifier la restitution du logement dans un état impeccable.",
      },
      {
        question: "Combien de temps avant l'état des lieux dois-je réserver ?",
        answer:
          "Nous recommandons de réserver au moins 48 à 72 heures à l'avance. Pour les fins de mois — période de forte demande — anticipez une semaine à l'avance pour être sûr d'avoir un créneau.",
      },
      {
        question: "Nettoyez-vous aussi les placards, tiroirs et rangements intégrés ?",
        answer:
          "Oui, placards, tiroirs, étagères et rangements intégrés sont systématiquement vidés et nettoyés. C'est un point souvent vérifié lors des états des lieux et nous y accordons une attention particulière.",
      },
    ],
  },
  {
    name: "Bureaux & Commerces",
    description:
      "Un espace de travail propre et sain améliore la productivité, l'image de votre entreprise et le bien-être de vos collaborateurs. Nous intervenons dans vos bureaux, open spaces, salles de réunion, sanitaires et espaces communs selon un planning adapté à votre activité — tôt le matin, en soirée ou le week-end. Contrats d'entretien régulier ou interventions ponctuelles disponibles.",
    metaDescription:
      "Nettoyage de bureaux et commerces à Bruxelles et périphérie. Postes de travail, sanitaires, espaces communs. Contrats réguliers ou ponctuels. Devis gratuit.",
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
    faqItems: [
      {
        question: "Intervenez-vous en dehors des heures de bureau ?",
        answer:
          "Oui, nous adaptons nos horaires à votre activité. Nous intervenons tôt le matin avant l'ouverture, en soirée après la fermeture ou le week-end pour ne pas perturber votre travail.",
      },
      {
        question: "Proposez-vous des contrats d'entretien pour les entreprises ?",
        answer:
          "Oui, nous proposons des contrats d'entretien sur mesure — hebdomadaires, bimensuels ou mensuels. Les contrats réguliers bénéficient d'un tarif préférentiel et d'une équipe dédiée.",
      },
      {
        question: "Quels espaces couvrez-vous dans les bureaux ?",
        answer:
          "Nous intervenons sur l'ensemble des espaces : bureaux individuels, open spaces, salles de réunion, couloirs, cuisines d'entreprise, sanitaires, vestiaires et espaces d'accueil.",
      },
    ],
  },
  {
    name: "Nettoyage de Façades",
    description:
      "Les façades exposées aux intempéries accumulent avec le temps mousses, algues, pollution et salissures qui ternissent l'esthétique de votre bâtiment. Notre équipe réalise des interventions techniques par nettoyage haute pression, traitement chimique adapté ou sablage selon la nature du support — crépi, pierre, brique ou béton. Redonnez de l'éclat à votre façade et protégez votre patrimoine immobilier.",
    metaDescription:
      "Nettoyage de façades à Bruxelles et périphérie. Haute pression, traitement algues et mousses sur crépi, pierre, brique et béton. Devis gratuit.",
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
    faqItems: [
      {
        question: "Le nettoyage haute pression peut-il abîmer ma façade ?",
        answer:
          "Pas si la pression est adaptée au matériau. Nous réglons systématiquement la pression en fonction du support — plus douce sur crépi ou pierre taillée, plus forte sur béton. Une évaluation préalable est toujours réalisée.",
      },
      {
        question: "Traitez-vous aussi les graffitis sur façades ?",
        answer:
          "Oui, nous pouvons traiter les graffitis selon la nature du support et du produit utilisé. Un traitement anti-graffiti peut également être appliqué en prévention pour faciliter les nettoyages futurs.",
      },
      {
        question: "Combien de temps faut-il attendre avant de voir le résultat final ?",
        answer:
          "Après le nettoyage, le résultat est immédiatement visible. Si un traitement biocide est appliqué, l'élimination complète des algues et mousses peut prendre 2 à 4 semaines supplémentaires sous l'effet du produit.",
      },
    ],
  },
  {
    name: "Terrasses & Allées",
    description:
      "Terrasses en bois, dalles béton, pavés, carrelages extérieurs ou allées : chaque surface mérite un entretien adapté. Grâce au nettoyage haute pression, nous éliminons mousses, taches verdâtres, huiles et incrustations pour redonner à vos espaces extérieurs un aspect propre et sécurisé. Un traitement imperméabilisant peut être appliqué en complément pour une protection longue durée.",
    metaDescription:
      "Nettoyage de terrasses et allées à Bruxelles et périphérie. Haute pression sur bois, dalles, pavés et carrelage extérieur. Option imperméabilisant. Devis gratuit.",
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
    faqItems: [
      {
        question: "Le traitement imperméabilisant est-il inclus dans la prestation ?",
        answer:
          "Le traitement imperméabilisant est une option complémentaire au nettoyage de base. Il est recommandé sur les terrasses en bois et dalles calcaires pour protéger durablement la surface et faciliter l'entretien futur.",
      },
      {
        question: "Intervenez-vous par toutes les conditions météo ?",
        answer:
          "Nous intervenons par temps sec. Le nettoyage haute pression nécessite une surface sèche pour un résultat optimal. Pour l'application du traitement imperméabilisant, la surface doit être parfaitement sèche après le nettoyage.",
      },
      {
        question: "Nettoyez-vous aussi les meubles de jardin et barbecues ?",
        answer:
          "Oui, sur demande, nous pouvons inclure le nettoyage des meubles de jardin, barbecues et accessoires extérieurs dans notre prestation. Mentionnez-le lors de votre demande de devis.",
      },
    ],
  },
  {
    name: "Vérandas & Coupoles",
    description:
      "Les vérandas et coupoles accumulent poussières, dépôts calcaires et algues sur leurs surfaces vitrées et leur structure en aluminium ou PVC. Notre nettoyage intérieur et extérieur restaure la transparence de vos vitrages et l'éclat de votre charpente, pour profiter pleinement de la luminosité naturelle. Nous intervenons en hauteur en toute sécurité, avec des produits adaptés à chaque matériau.",
    metaDescription:
      "Nettoyage de vérandas et coupoles à Bruxelles et périphérie. Vitrages intérieur/extérieur, dépôts calcaires, structure aluminium ou PVC. Devis gratuit.",
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
    faqItems: [
      {
        question: "Nettoyez-vous la véranda intérieur et extérieur en une seule intervention ?",
        answer:
          "Oui, notre intervention couvre systématiquement les deux faces des vitrages ainsi que la structure. Tout faire en une seule visite est plus efficace et vous évite de multiplier les rendez-vous.",
      },
      {
        question: "Les dépôts calcaires peuvent-ils être totalement éliminés ?",
        answer:
          "Dans la grande majorité des cas, oui. Nous utilisons des produits détartrants spécifiques adaptés au verre. Sur les calcaires très anciens et épais, le résultat est nettement amélioré mais une trace résiduelle légère peut subsister.",
      },
      {
        question: "Les produits utilisés conviennent-ils aux structures en aluminium et PVC ?",
        answer:
          "Oui, nous sélectionnons nos produits en fonction du matériau. Les nettoyants pour aluminium et PVC sont non abrasifs et ne risquent pas d'altérer les joints, les profils ou les finitions de votre véranda.",
      },
    ],
  },
  {
    name: "Corniches & Gouttières",
    description:
      "Des gouttières obstruées par les feuilles, mousses et débris sont à l'origine de débordements, infiltrations et dégâts des eaux coûteux. Notre service de débouchage et nettoyage de gouttières et corniches garantit une évacuation optimale des eaux de pluie et prolonge la durée de vie de vos installations. Nous réalisons également un contrôle visuel des fixations et signalons toute anomalie détectée.",
    metaDescription:
      "Débouchage et nettoyage de gouttières à Bruxelles et périphérie. Évacuation optimale, contrôle des fixations. Intervention sécurisée en hauteur. Devis gratuit.",
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
    faqItems: [
      {
        question: "Comment savoir si mes gouttières ont besoin d'être nettoyées ?",
        answer:
          "Les signes les plus courants : débordement visible lors de fortes pluies, présence de mousse ou de végétation dans la gouttière, taches d'humidité sur la façade sous la gouttière, ou simplement si elles n'ont pas été nettoyées depuis plus d'un an.",
      },
      {
        question: "À quelle fréquence recommandez-vous le nettoyage des gouttières ?",
        answer:
          "Une fois par an suffit dans la plupart des cas, idéalement en automne après la chute des feuilles. Les maisons entourées d'arbres peuvent nécessiter deux interventions annuelles (printemps et automne).",
      },
      {
        question: "Signalez-vous les dégâts ou anomalies détectés lors de l'intervention ?",
        answer:
          "Oui, systématiquement. Nous réalisons un contrôle visuel complet des fixations, joints et descentes. Si une anomalie est détectée (fixation desserrée, fissure, joint défaillant), nous vous en informons avec une photo à l'appui.",
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
