import type { ImageMetadata } from "astro";
import { serviceImageAssets } from "./images";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  name: string;
  h1?: string;
  processTitle: string;
  metaTitle?: string;
  description: string;
  metaDescription: string;
  href: string;
  image: ImageMetadata;
  featured?: boolean;
  quote?: string;
  editorial?: string;
  features?: string[];
  faqItems: FaqItem[];
  process: ProcessStep[];
  relatedServices?: string[];
}
export const services: Service[] = [
  {
    name: "Nettoyage de vitres & châssis",
    h1: "Lavage et nettoyage de vitres à Bruxelles — Sans traces",
    processTitle: "notre nettoyage de vitres",
    metaTitle: "Nettoyage & lavage de vitres à Bruxelles | CleanNgo",
    description:
      "Des vitres impeccables transforment l'ambiance de votre intérieur et valorisent l'image de votre commerce ou entreprise. Nous utilisons des techniques professionnelles à la raclette et à la perche télescopique pour éliminer calcaire, traces de doigts et dépôts sans laisser de marques. Fenêtres, baies vitrées, vitrines, velux et châssis sont traités intérieur comme extérieur.",
    metaDescription:
      "Nettoyage de vitres professionnel à Bruxelles et périphérie. Fenêtres, baies vitrées, vitrines, velux — intérieur et extérieur. Résultat sans traces.",
    href: "/services/nettoyage-vitres",
    image: serviceImageAssets.glassCleaning,
    featured: true,
    relatedServices: ["nettoyage-veranda", "bureaux-commerces", "nettoyage-etat-des-lieux"],
    quote:
      "Une vitre propre change toute l'atmosphère d'une pièce. Plus de lumière, plus de clarté — et moins de « pourquoi c'est flou là ? »",
    editorial: `Les vitres sales ne sont pas seulement une question d'esthétique : une vitre encrassée filtre jusqu'à 30 % de la lumière naturelle, et dans les maisons et appartements bruxellois où chaque mètre carré de luminosité compte, c'est une perte tangible au quotidien. Pour les commerces et vitrines, une vitrine terne envoie un signal négatif avant même que le client franchisse la porte.

Le lavage de vitres en DIY produit rarement un résultat vraiment satisfaisant. Les produits ménagers classiques laissent des résidus qui attirent la poussière, et sans raclette professionnelle ni technique adaptée, on se retrouve souvent avec autant de stries qu'avant. Un laveur de vitres expérimenté travaille avec des solutions détartrantes calibrées, une raclette de précision et des chiffons non pelucheux — la combinaison qui garantit un nettoyage de vitres sans traces durable, y compris sur les châssis et rails souvent négligés.

Nous intervenons dans tout Bruxelles et le Brabant — maisons, appartements, commerces, vitrines, velux et baies vitrées. Une prestation complète intérieur/extérieur, réalisée en une seule visite, avec une attention particulière portée aux châssis et aux rebords où le calcaire s'accumule.`,
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
    process: [
      {
        step: "01",
        title: "Évaluation des vitrages",
        description:
          "Repérage des types de vitrage (simples, doubles, velux) et niveau de calcaire ou de pollution. Réglage de la pression et choix du produit détartrant adapté.",
      },
      {
        step: "02",
        title: "Nettoyage à la raclette",
        description:
          "Application de la solution lavante sur chaque vitre à la raclette professionnelle. Les châssis et rebords sont nettoyés simultanément avec des chiffons non pelucheux.",
      },
      {
        step: "03",
        title: "Vitres en hauteur à la perche",
        description:
          "Les vitrages inaccessibles à la main sont traités avec la perche télescopique à flux d'eau pure, sans échafaudage ni risque de traces.",
      },
      {
        step: "04",
        title: "Polissage final et rails",
        description:
          "Essuyage des bords, joints et rails de glissement. Inspection vitre par vitre pour éliminer toute strie avant de partir.",
      },
    ],
  },
  {
    name: "Panneaux solaires",
    h1: "Nettoyage de panneaux solaires et photovoltaïques à Bruxelles",
    processTitle: "notre nettoyage de panneaux solaires",
    metaTitle: "Nettoyage de panneaux solaires à Bruxelles | CleanNgo",
    description:
      "Des panneaux solaires encrassés peuvent perdre jusqu'à 30 % de leur rendement énergétique. Notre service de nettoyage éco-responsable utilise de l'eau déminéralisée et des brosses douces adaptées pour éliminer poussières, fientes d'oiseaux, pollens et dépôts calcaires sans endommager les cellules photovoltaïques. Retrouvez une production optimale et protégez votre investissement sur le long terme.",
    metaDescription:
      "Nettoyage de panneaux solaires à Bruxelles et périphérie. Eau déminéralisée, sans endommager les cellules. Récupérez jusqu'à 30% de rendement perdu.",
    href: "/services/panneaux-solaires",
    image: serviceImageAssets.solarPanel,
    featured: true,
    relatedServices: ["nettoyage-toiture", "nettoyage-facade", "nettoyage-gouttieres"],
    quote:
      "Des panneaux encrassés, c'est de l'énergie perdue. Un nettoyage régulier, c'est un investissement qui se rentabilise — et qui protège vos cellules.",
    editorial: `Un investissement dans des panneaux photovoltaïques se rembourse sur le long terme — à condition que les cellules fonctionnent à leur plein potentiel. Or, en milieu urbain comme dans la périphérie bruxelloise, les salissures s'accumulent rapidement : fientes d'oiseaux, pollens de printemps, poussières industrielles et dépôts calcaires peuvent réduire le rendement énergétique de 15 à 30 % en quelques mois. Ce que l'œil ne voit pas se traduit directement sur la facture d'électricité.

Le nettoyage panneau solaire ne s'improvise pas. L'eau du robinet contient du calcaire qui, en séchant, laisse des dépôts microscopiques sur les cellules — c'est précisément ce que l'on cherche à éviter. La méthode professionnelle repose sur l'eau déminéralisée, qui s'évapore sans résidu, associée à des brosses souples spécifiquement conçues pour les surfaces photovoltaïques. Aucune pression agressive, aucun produit chimique susceptible d'endommager les joints d'étanchéité.

Nous intervenons en sécurité sur les toitures inclinées de Bruxelles et du Brabant, avec les équipements de protection nécessaires. Après chaque intervention, un rapport avec photos avant/après vous est transmis pour que vous puissiez constater la récupération de rendement.`,
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
    process: [
      {
        step: "01",
        title: "Contrôle visuel en toiture",
        description:
          "Examen de l'état des panneaux, des fixations et des câbles avant toute intervention. Évaluation du niveau d'encrassement (fientes, pollen, calcaire).",
      },
      {
        step: "02",
        title: "Pré-rinçage déminéralisé",
        description:
          "Rinçage pour ramollir les dépôts secs, en particulier les fientes solidifiées, sans risquer de rayer les cellules photovoltaïques.",
      },
      {
        step: "03",
        title: "Brossage doux des cellules",
        description:
          "Passage des brosses souples spécifiques aux panneaux solaires sur toute la surface. La pression est maintenue basse pour préserver les cellules et les joints d'étanchéité.",
      },
      {
        step: "04",
        title: "Rinçage final et rapport",
        description:
          "Rinçage à l'eau déminéralisée qui s'évapore sans laisser de dépôts calcaires. Un rapport d'intervention avec photos avant/après vous est transmis.",
      },
    ],
  },
  {
    name: "Toitures & Démoussage",
    h1: "Démoussage et nettoyage de toiture à Bruxelles",
    processTitle: "notre démoussage de toiture",
    metaTitle: "Démoussage toiture Bruxelles — anti-mousse | CleanNgo",
    description:
      "La mousse et les lichens retiennent l'humidité et accélèrent la dégradation de vos tuiles, ardoises et toitures plates. Notre traitement anti-mousse combine nettoyage haute pression, application de produit biocide et traitement hydrofuge pour protéger durablement votre couverture. Nous intervenons en toute sécurité sur tous types de toitures pour prolonger leur durée de vie et prévenir les infiltrations.",
    metaDescription:
      "Démoussage de toiture à Bruxelles et Brabant. Traitement anti-mousse, biocide et hydrofuge sur tuiles, ardoises et toits plats. Devis gratuit.",
    href: "/services/nettoyage-toiture",
    image: serviceImageAssets.demoussage,
    featured: true,
    relatedServices: ["panneaux-solaires", "nettoyage-facade", "nettoyage-gouttieres"],
    quote:
      "La mousse sur votre toiture, c'est silencieux mais ravageur. On intervient avant que les dégâts ne deviennent coûteux.",
    editorial: `La mousse et les lichens s'installent discrètement, mais leurs effets sur une couverture sont loin d'être anodins. En retenant l'humidité en permanence contre les tuiles ou les ardoises, ils accélèrent la dégradation des matériaux, soulèvent progressivement les éléments de couverture et créent les conditions idéales pour des infiltrations. À Bruxelles et dans le Brabant, où les hivers sont humides et les toitures exposées au nord peu séchées par le soleil, ce phénomène s'amplifie rapidement.

Le nettoyage toiture en autonomie est non seulement risqué — monter sur un toit sans équipement professionnel représente un danger réel — mais souvent contre-productif. Un jet d'eau à pression inadaptée peut déplacer des tuiles, créer des infiltrations ou endommager des ardoises fragiles. Le démoussage toiture professionnel repose sur une pression calibrée selon le type de matériau, orientée dans le bon sens pour ne pas forcer sous les éléments de couverture, suivie d'un traitement biocide qui continue d'agir plusieurs semaines après l'intervention.

Le nettoyage du toit que nous réalisons intègre également un traitement hydrofuge final : une protection qui repousse l'humidité et ralentit significativement le retour de la végétation, pour une durée d'effet généralement comprise entre trois et cinq ans.`,
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
        question: "Quel est le prix d'un nettoyage de toiture à Bruxelles ?",
        answer:
          "Le prix dépend surtout de la surface à traiter, du type de toit (tuiles, ardoises, toit plat), du niveau d'encrassement, de l'accessibilité et des options choisies (traitement anti-mousse, biocide, hydrofuge). Nous privilégions toujours un devis clair et transparent après évaluation, avec un devis gratuit et sans engagement.",
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
    process: [
      {
        step: "01",
        title: "Diagnostic de couverture",
        description:
          "Inspection du type de toiture (tuiles, ardoises, toit plat) et cartographie des zones envahies par la mousse et les lichens. Contrôle visuel des fixations.",
      },
      {
        step: "02",
        title: "Traitement haute pression",
        description:
          "Projection d'eau sous pression calibrée selon le matériau pour décoller et évacuer la mousse. La pression est orientée dans le sens des tuiles pour éviter toute infiltration.",
      },
      {
        step: "03",
        title: "Application du biocide",
        description:
          "Pulvérisation du produit biocide sur l'ensemble de la surface traitée. Le produit agit en profondeur pendant plusieurs semaines pour éliminer spores et lichens résiduels.",
      },
      {
        step: "04",
        title: "Traitement hydrofuge",
        description:
          "Application d'un hydrofuge de protection pour imperméabiliser la couverture et ralentir le retour de la mousse. Durée de protection effective de 3 à 5 ans.",
      },
    ],
  },
  {
    name: "Nettoyage résidentiel",
    processTitle: "notre nettoyage résidentiel",
    metaTitle: "Nettoyage résidentiel à Bruxelles — Maisons & appartements | CleanNgo",
    description:
      "Profitez d'un intérieur sain et impeccable grâce à notre service de nettoyage résidentiel professionnel. Que ce soit pour un entretien régulier hebdomadaire ou une intervention ponctuelle, notre équipe prend en charge maisons, appartements et studios. Sols, sanitaires, cuisine et pièces à vivre : chaque surface est traitée avec soin et des produits adaptés.",
    metaDescription:
      "Nettoyage résidentiel professionnel à Bruxelles et périphérie. Maisons, appartements, studios — sols, sanitaires, cuisine. Devis gratuit en ligne.",
    href: "/services/nettoyage-residentiel",
    image: serviceImageAssets.houseCleaning,
    relatedServices: ["nettoyage-etat-des-lieux", "nettoyage-post-travaux", "nettoyage-vitres"],
    quote:
      "Un chez-soi propre, c'est un espace où l'on se ressource vraiment. Moins de poussière, plus d'air — et une sérénité que vous méritez.",
    editorial: `Dans le rythme d'une semaine chargée, le nettoyage résidentiel est souvent la première chose qui passe à la trappe — et la poussière, le calcaire et les graisses de cuisine ne font pas de compromis. Ce n'est pas une question de volonté : entretenir correctement une maison ou un appartement demande du temps, des produits adaptés à chaque surface et une méthode rigoureuse qui va au-delà du coup de serpillière rapide.

La différence entre un ménage professionnel et un entretien quotidien tient à la méthode autant qu'aux produits. Un technicien de nettoyage travaille de haut en bas — plafonds, luminaires, étagères avant les sols — pour ne jamais recontaminer une surface déjà traitée. Il dégraisse la cuisine avec des produits calibrés pour chaque support, détartre les sanitaires en profondeur et atteint les recoins que l'habitude fait oublier : rails de fenêtres, plinthes, espaces derrière les meubles.

Nous intervenons dans les maisons et appartements de Bruxelles et de la périphérie, avec des produits éco-responsables certifiés, sans danger pour les enfants et les animaux. Intervention hebdomadaire, bimensuelle ou ponctuelle — le planning s'adapte à votre mode de vie, pas l'inverse.`,
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
    process: [
      {
        step: "01",
        title: "Tour du logement",
        description:
          "Parcours rapide avec le client ou selon la fiche d'instructions pour identifier les priorités, les matériaux sensibles et les zones à traiter en profondeur.",
      },
      {
        step: "02",
        title: "Dépoussiérage de haut en bas",
        description:
          "Plafonds, luminaires, étagères et mobilier traités avant les sols pour éviter de les recontaminer. Micro-fibres humides sur toutes les surfaces.",
      },
      {
        step: "03",
        title: "Sanitaires et cuisine",
        description:
          "Désinfection des surfaces de contact (robinets, poignées, commandes), détartrage des sanitaires, dégraissage de la cuisine et des plans de travail.",
      },
      {
        step: "04",
        title: "Sols aspirés et lavés",
        description:
          "Aspiration fine puis lavage adapté selon le revêtement (parquet, carrelage, vinyle). Recoins, plinthes et rails de portes traités en dernier.",
      },
    ],
  },
  {
    name: "Nettoyage post-travaux",
    processTitle: "notre nettoyage post-travaux",
    metaTitle: "Nettoyage après travaux à Bruxelles — Chantier & rénovation | CleanNgo",
    description:
      "Après un chantier de rénovation ou de construction, les poussières fines et résidus s'accumulent partout. Notre service de nettoyage post-travaux élimine plâtre, silicone, colle, peinture et débris sur chaque surface : sols, fenêtres, interrupteurs, plinthes et faux-plafonds. Vous récupérez un espace prêt à habiter ou à livrer, sans traces ni résidus.",
    metaDescription:
      "Nettoyage après travaux à Bruxelles et périphérie. Élimination plâtre, silicone, peinture sur toutes surfaces. Espace livré prêt à habiter. Devis gratuit.",
    href: "/services/nettoyage-post-travaux",
    image: serviceImageAssets.postWork,
    relatedServices: ["nettoyage-residentiel", "nettoyage-etat-des-lieux", "nettoyage-vitres"],
    quote:
      "Après les travaux, la poussière s'installe partout — même là où vous ne regardez jamais. On s'en charge, vous récupérez un espace prêt à vivre.",
    editorial: `Après un chantier de rénovation ou de construction, la poussière de chantier s'infiltre dans des endroits improbables : derrière les prises, dans les gaines de ventilation, sur les dessus de portes, dans les rails de fenêtres. Ce que vous voyez à l'œil nu n'est qu'une partie du problème — les particules fines de plâtre ou de ponçage se déposent partout et se redistribuent dans l'air pendant plusieurs jours si elles ne sont pas aspirées correctement.

Le nettoyage après travaux exige un outillage que l'on ne trouve pas dans un ménage ordinaire : aspirateurs industriels avec filtre HEPA pour capturer les résidus de plâtre et les poussières fines, grattoirs spécifiques pour éliminer les projections de silicone et de peinture sur les vitrages ou les carrelages, produits adaptés aux finitions neuves. Utiliser un aspirateur domestique standard sur une poussière de chantier finit souvent par redistribuer les particules dans la pièce plutôt que de les éliminer.

Nous intervenons en fin de chantier à Bruxelles et dans toute la périphérie — rénovations de maisons, appartements, locaux commerciaux — et vous restituons un espace propre, sans trace de résidus, prêt à être habité ou livré au client final.`,
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
    process: [
      {
        step: "01",
        title: "Évacuation des gravats fins",
        description:
          "Aspiration industrielle des poussières de plâtre, béton et ponçage déposées sur toutes les surfaces, y compris faux-plafonds et gaines de ventilation.",
      },
      {
        step: "02",
        title: "Débarras des résidus adhérents",
        description:
          "Grattage et élimination des projections de silicone, colle, peinture et ciment sur les vitrages, carrelages et boiseries avec les outils adaptés à chaque support.",
      },
      {
        step: "03",
        title: "Huisseries et menuiseries",
        description:
          "Dépoussiérage et essuyage des cadres de portes, fenêtres, prises et interrupteurs souvent oubliés mais particulièrement poussiéreux après un chantier.",
      },
      {
        step: "04",
        title: "Lavage des sols et livraison",
        description:
          "Aspiration puis lavage des sols (carrelage, parquet neuf, béton ciré) avec produit adapté. Vérification finale de chaque pièce avant remise des clés.",
      },
    ],
  },
  {
    name: "Nettoyage État des Lieux",
    processTitle: "notre nettoyage état des lieux",
    metaTitle: "Nettoyage état des lieux à Bruxelles — Entrée & sortie | CleanNgo",
    description:
      "Un état des lieux réussi repose sur une restitution impeccable ou une préparation irréprochable. Notre service couvre le nettoyage complet d'un bien en fin de bail pour un état des lieux de sortie sans accroc, ou la remise en état d'un logement avant votre entrée. Placards, salle de bain, cuisine, sols et vitres : chaque surface est traitée pour que le résultat soit incontestable.",
    metaDescription:
      "Nettoyage état des lieux à Bruxelles et périphérie. Remise en état complète pour sortie ou entrée de location. Certification de propreté disponible.",
    href: "/services/nettoyage-etat-des-lieux",
    image: serviceImageAssets.movingIn,
    relatedServices: ["nettoyage-residentiel", "nettoyage-post-travaux", "nettoyage-vitres"],
    quote:
      "Un état des lieux, ça ne pardonne pas. On s'assure que chaque surface est irréprochable — pour que vous récupériez votre caution sans discussion.",
    editorial: `La restitution d'un logement est un moment de tension : un état des lieux de sortie raté peut aboutir à des retenues sur caution pour des motifs de propreté qui auraient pu être évités. Les propriétaires et agences immobilières à Bruxelles et en Brabant sont souvent plus exigeants qu'on ne l'anticipe — four, hotte, joints de salle de bain, intérieur des placards, plinthes — chaque surface est vérifiée méthodiquement.

La remise en état d'un logement avant un état des lieux va bien au-delà d'un grand ménage classique. Il s'agit de répondre à une grille de contrôle précise : détartrage complet de la robinetterie et des sanitaires, dégraissage du four et de la hotte jusqu'aux filtres, nettoyage intérieur des placards et tiroirs, vitres sans traces, sols sans résidu. Un nettoyage état des lieux professionnel suit exactement cette logique, pièce par pièce, sans rien oublier.

Sur demande, nous délivrons un certificat de propreté attestant de notre intervention, un document utile pour appuyer votre position lors de la remise des clés. Que ce soit pour une sortie de location ou pour préparer votre entrée dans un nouveau logement, la prestation est adaptée à votre situation.`,
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
    process: [
      {
        step: "01",
        title: "Inventaire des surfaces",
        description:
          "Relevé pièce par pièce des points de contrôle habituels d'un état des lieux : joints de salle de bain, intérieur four, filtres hotte, traces sur murs.",
      },
      {
        step: "02",
        title: "Cuisine en profondeur",
        description:
          "Dégraissage complet de la hotte, du four et des plaques. Intérieur et extérieur des placards, joints de plan de travail et carrelage inclus.",
      },
      {
        step: "03",
        title: "Sanitaires et salle de bain",
        description:
          "Détartrage des robinetteries, joints et receveurs. Désinfection de la cuvette, nettoiement des miroirs et nettoyage des recoins de baignoire ou douche.",
      },
      {
        step: "04",
        title: "Sols, vitres et finitions",
        description:
          "Lavage de l'ensemble des sols, vitres intérieures, rebords et plinthes. Vérification contradictoire point par point avant votre état des lieux.",
      },
    ],
  },
  {
    name: "Bureaux & Commerces",
    processTitle: "notre nettoyage de bureaux et commerces",
    metaTitle: "Nettoyage de bureaux et commerces à Bruxelles | CleanNgo",
    description:
      "Un espace de travail propre et sain améliore la productivité, l'image de votre entreprise et le bien-être de vos collaborateurs. Nous intervenons dans vos bureaux, open spaces, salles de réunion, sanitaires et espaces communs selon un planning adapté à votre activité — tôt le matin, en soirée ou le week-end. Contrats d'entretien régulier ou interventions ponctuelles disponibles.",
    metaDescription:
      "Nettoyage de bureaux et commerces à Bruxelles. Postes de travail, sanitaires, espaces communs. Contrats réguliers ou ponctuels. Devis gratuit.",
    href: "/services/bureaux-commerces",
    image: serviceImageAssets.officeCleaning,
    relatedServices: ["nettoyage-vitres", "nettoyage-facade", "nettoyage-post-travaux"],
    quote:
      "Un espace de travail propre, c'est plus qu'une question d'image. C'est une condition pour que vos équipes performent et que vos clients reviennent.",
    editorial: `Un espace professionnel mal entretenu crée une impression durable — et rarement la bonne. Pour les clients et partenaires qui visitent vos locaux, l'état d'un bureau ou d'un commerce reflète directement le soin apporté à votre activité. Pour vos collaborateurs, travailler dans un environnement propre a un impact mesurable sur la concentration, le confort et l'absentéisme. Ce n'est pas un luxe : c'est une condition de travail.

Faire appel à une entreprise de nettoyage professionnelle change fondamentalement le niveau de résultat. Un technicien formé sait traiter correctement les différents revêtements de sols, désinfecter les zones de contact à haute fréquence — poignées, interrupteurs, claviers — et gérer l'ensemble des espaces dans un ordre logique et documenté : open space, sanitaires, cuisine d'entreprise, salle de réunion.

En tant que société de nettoyage à Bruxelles, nous proposons des contrats d'entretien sur mesure, adaptés à votre activité et à vos horaires. Nos équipes interviennent tôt le matin, en soirée ou le week-end pour ne jamais perturber votre fonctionnement. Hebdomadaire, bimensuel ou mensuel — la fréquence et le périmètre sont définis avec vous, pas imposés.`,
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
    process: [
      {
        step: "01",
        title: "Audit des espaces et planning",
        description:
          "Cartographie des zones (open space, salles de réunion, sanitaires, accueil) et définition du planning adapté à vos horaires pour zéro perturbation.",
      },
      {
        step: "02",
        title: "Postes de travail et écrans",
        description:
          "Dépoussiérage des écrans, claviers, téléphones et luminaires. Essuyage des surfaces de bureau avec microfibres antistatiques pour éviter la réaccumulation.",
      },
      {
        step: "03",
        title: "Sanitaires et cuisine d'entreprise",
        description:
          "Désinfection complète des points de contact (poignées, interrupteurs, robinets). Réassort des consommables (savon, essuie-mains) selon stock fourni.",
      },
      {
        step: "04",
        title: "Sols et espaces communs",
        description:
          "Aspiration et lavage des sols selon le revêtement. Couloirs, hall d'accueil et zones de passage traités en dernier pour un résultat durable jusqu'à l'ouverture.",
      },
    ],
  },
  {
    name: "Nettoyage de Façades",
    processTitle: "notre nettoyage de façades",
    metaTitle: "Nettoyage de façades à Bruxelles — Prix & devis | CleanNgo",
    description:
      "Les façades exposées aux intempéries accumulent avec le temps mousses, algues, pollution et salissures qui ternissent l'esthétique de votre bâtiment. Notre équipe réalise des interventions techniques par nettoyage haute pression, traitement chimique adapté ou sablage selon la nature du support — crépi, pierre, brique ou béton. Redonnez de l'éclat à votre façade et protégez votre patrimoine immobilier.",
    metaDescription:
      "Nettoyage de façades à Bruxelles et périphérie. Haute pression, traitement algues et mousses sur crépi, pierre, brique et béton. Devis gratuit.",
    href: "/services/nettoyage-facade",
    image: serviceImageAssets.facadeCleaning,
    relatedServices: ["nettoyage-toiture", "nettoyage-terrasse", "nettoyage-gouttieres"],
    quote:
      "La façade, c'est la première impression de votre bâtiment. Une surface propre, c'est une valeur préservée et une image soignée.",
    editorial: `La façade d'un bâtiment absorbe tout : pluie acide, pollution urbaine, algues, mousses et lichens. À Bruxelles, où le parc immobilier est majoritairement ancien et les façades souvent en brique ou en crépi, ces dépôts s'accumulent rapidement et finissent par ternir l'aspect d'un bien — et parfois par favoriser les infiltrations lorsqu'ils retiennent l'humidité contre des matériaux poreux.

Le nettoyage des façades n'est pas une opération standard. Nettoyer une façade crépi avec la même pression qu'une façade en béton peut la détériorer irrémédiablement. Pour les briques, un traitement algicide est souvent nécessaire en complément du nettoyage facade brique à haute pression, pour éliminer les mousses en profondeur et pas seulement en surface. Nettoyer une facade crepi demande une pression plus douce et un produit détartrant adapté à la porosité du support — chaque matériau a ses contraintes.

Nous réalisons un diagnostic préalable avant chaque intervention pour adapter la méthode — haute pression calibrée, pré-traitement chimique ou combinaison des deux. Un traitement hydrofuge peut être appliqué en finition pour imperméabiliser la façade et prolonger durablement l'effet du nettoyage. Nous intervenons sur les bâtiments résidentiels et commerciaux de Bruxelles et du Brabant wallon.`,
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
        question: "Quel est le prix d'un nettoyage de façade à Bruxelles ?",
        answer:
          "Le tarif varie selon la surface de façade, le type de support (crépi, brique, pierre, béton), la hauteur du bâtiment, l'accessibilité et le niveau de salissures (pollution, mousses, algues). Des traitements complémentaires peuvent aussi influencer le prix. Nous vous remettons un devis gratuit, détaillé et sans engagement.",
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
    process: [
      {
        step: "01",
        title: "Diagnostic du support",
        description:
          "Identification du matériau (crépi, brique, pierre, béton) et évaluation du type de salissures (algues, pollution, graffiti). Réglage de la pression en conséquence.",
      },
      {
        step: "02",
        title: "Pré-traitement chimique",
        description:
          "Application d'un produit algicide ou détartrant selon le diagnostic pour ramollir les dépôts avant la projection haute pression. Temps de pose respecté.",
      },
      {
        step: "03",
        title: "Nettoyage haute pression",
        description:
          "Projection d'eau calibrée de haut en bas pour décoller les salissures sans endommager les joints ni créer d'infiltration. Zones délicates traitées à la brosse.",
      },
      {
        step: "04",
        title: "Hydrofuge de protection",
        description:
          "Application d'un traitement hydrofuge sur le support propre et sec pour imperméabiliser la façade et prolonger l'effet du nettoyage. Bilan des fissures communiqué.",
      },
    ],
  },
  {
    name: "Terrasses & Allées",
    h1: "Nettoyage de terrasse et allées à Bruxelles — Haute pression",
    processTitle: "notre nettoyage de terrasses",
    metaTitle: "Nettoyage terrasses et allées à Bruxelles | CleanNgo",
    description:
      "Terrasses en bois, dalles béton, pavés, carrelages extérieurs ou allées : chaque surface mérite un entretien adapté. Grâce au nettoyage haute pression, nous éliminons mousses, taches verdâtres, huiles et incrustations pour redonner à vos espaces extérieurs un aspect propre et sécurisé. Un traitement imperméabilisant peut être appliqué en complément pour une protection longue durée.",
    metaDescription:
      "Nettoyage de terrasses et allées à Bruxelles. Haute pression sur bois, dalles, pavés et carrelage. Option imperméabilisant. Devis gratuit.",
    href: "/services/nettoyage-terrasse",
    image: serviceImageAssets.outsideCleaning,
    relatedServices: ["nettoyage-facade", "nettoyage-veranda", "nettoyage-gouttieres"],
    quote:
      "Vos espaces extérieurs méritent autant d'attention que l'intérieur. Un nettoyage professionnel, et ils retrouvent leur éclat — et leur sécurité.",
    editorial: `Les terrasses et allées accumulent tout ce que les intérieurs ne voient jamais : mousses humides entre les joints, taches de barbecue, dépôts verts sur le dallage, laitances calcaires sur les dalles en pierre. Ce qui ressemblait à une surface présentable à l'installation devient en quelques saisons un revêtement terne et glissant, rendu dangereux par les algues après les pluies.

Nettoyer une terrasse en bois n'est pas la même opération que traiter un dallage en béton ou des pavés. Le bois exotique ou traité ne tolère pas n'importe quelle pression sans risquer de s'effriter ou de se décolorer ; un jet inadapté peut ouvrir les fibres et fragiliser le revêtement. La technique professionnelle consiste à calibrer précisément la haute pression selon le support, à utiliser un dégraissant spécifique pour les taches incrustées et à appliquer le nettoyage terrasse dans le bon sens pour ne pas forcer les joints.

Nous intervenons sur tous les types de surfaces extérieures — terrasses bois, dallage béton, pavés, carrelage extérieur, allées et cours — à Bruxelles et dans sa périphérie. Un traitement imperméabilisant peut être appliqué en complément sur les surfaces calcaires ou en bois pour une protection durable contre le retour des mousses.`,
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
    process: [
      {
        step: "01",
        title: "Identification du revêtement",
        description:
          "Reconnaissance du matériau (bois, dalle béton, pavé, carrelage extérieur) pour ajuster la pression et choisir le détergent adapté — notamment sur bois exotique ou pierre calcaire.",
      },
      {
        step: "02",
        title: "Démoussage et désherbage",
        description:
          "Application d'un produit algicide dans les joints et sur les zones vertes. Brossage mécanique des mousses et végétation entre les pavés avant le rinçage.",
      },
      {
        step: "03",
        title: "Nettoyage haute pression",
        description:
          "Passage du lance-jet sur toute la surface avec pression adaptée au revêtement. Taches d'huile, résidus de barbecue et incrustations traités avec produit dégraissant spécifique.",
      },
      {
        step: "04",
        title: "Option imperméabilisant",
        description:
          "Sur bois ou dalle calcaire, application du traitement imperméabilisant sur surface sèche pour protéger durablement et faciliter l'entretien futur.",
      },
    ],
  },
  {
    name: "Vérandas & Coupoles",
    processTitle: "notre nettoyage de vérandas",
    metaTitle: "Nettoyage vérandas et coupoles à Bruxelles | CleanNgo",
    description:
      "Les vérandas et coupoles accumulent poussières, dépôts calcaires et algues sur leurs surfaces vitrées et leur structure en aluminium ou PVC. Notre nettoyage intérieur et extérieur restaure la transparence de vos vitrages et l'éclat de votre charpente, pour profiter pleinement de la luminosité naturelle. Nous intervenons en hauteur en toute sécurité, avec des produits adaptés à chaque matériau.",
    metaDescription:
      "Nettoyage de vérandas et coupoles à Bruxelles et périphérie. Vitrages intérieur/extérieur, dépôts calcaires, structure aluminium ou PVC. Devis gratuit.",
    href: "/services/nettoyage-veranda",
    image: serviceImageAssets.verandaCleaning,
    relatedServices: ["nettoyage-vitres", "nettoyage-terrasse", "nettoyage-facade"],
    quote:
      "Une véranda, c'est fait pour laisser entrer la lumière. Quand les vitres sont propres, vous redécouvrez l'espace que vous avez.",
    editorial: `Une véranda est l'espace de la maison le plus exposé aux éléments — et le plus difficile à entretenir correctement. Les vitrages orientés vers le ciel accumulent les dépôts calcaires, les algues et les résidus de pollen en couches successives qui opacifient progressivement le verre. La structure aluminium ou PVC, exposée aux UV et aux intempéries, se ternit et accumule des traces qui résistent à un simple essuyage.

Le nettoyage de vitres chez particulier sur une véranda pose des contraintes spécifiques : il faut intervenir simultanément sur les deux faces des vitrages inclinés, traiter la structure sans abîmer les joints d'étanchéité, et éliminer des dépôts calcaires souvent anciens sans rayer les surfaces. Les produits du commerce ne sont généralement pas conçus pour ce niveau d'encrassement — les laveurs de vitres pour particuliers expérimentés utilisent des détartrants spécifiques au verre, appliqués avec un temps de contact contrôlé.

Nous traitons les vérandas et coupoles de A à Z — vitrages intérieur et extérieur, structure aluminium ou PVC, rails de coulissement et joints — dans tout Bruxelles et le Brabant. Résultat : transparence retrouvée, luminosité maximale, sans traces ni résidus calcaires.`,
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
    process: [
      {
        step: "01",
        title: "Bilan calcaire et algues",
        description:
          "Évaluation de l'épaisseur des dépôts calcaires sur les vitrages et de la présence d'algues sur la structure aluminium ou PVC avant toute intervention.",
      },
      {
        step: "02",
        title: "Application du détartrant",
        description:
          "Pulvérisation d'un produit détartrant spécifique verre sur les faces intérieures et extérieures. Temps de contact ajusté selon l'ancienneté des dépôts.",
      },
      {
        step: "03",
        title: "Nettoyage de la structure",
        description:
          "Brossage et essuyage des profilés aluminium ou PVC, joints d'étanchéité et rails de coulissement avec des produits non abrasifs respectant les traitements de surface.",
      },
      {
        step: "04",
        title: "Rinçage et finition brillante",
        description:
          "Rinçage complet des vitrages à l'eau pure et séchage à la raclette pour un résultat sans traces. Vérification de chaque panneau vitré en lumière naturelle.",
      },
    ],
  },
  {
    name: "Corniches & Gouttières",
    processTitle: "notre nettoyage de gouttières",
    metaTitle: "Débouchage et nettoyage gouttières à Bruxelles | CleanNgo",
    description:
      "Des gouttières obstruées par les feuilles, mousses et débris sont à l'origine de débordements, infiltrations et dégâts des eaux coûteux. Notre service de débouchage et nettoyage de gouttières et corniches garantit une évacuation optimale des eaux de pluie et prolonge la durée de vie de vos installations. Nous réalisons également un contrôle visuel des fixations et signalons toute anomalie détectée.",
    metaDescription:
      "Débouchage et nettoyage de gouttières à Bruxelles. Évacuation optimale, contrôle des fixations. Intervention sécurisée en hauteur. Devis gratuit.",
    href: "/services/nettoyage-gouttieres",
    image: serviceImageAssets.corniere,
    relatedServices: ["nettoyage-toiture", "nettoyage-facade", "panneaux-solaires"],
    quote:
      "Des gouttières bouchées, ça ne se voit pas — jusqu'au jour où l'eau s'infiltre. Mieux vaut prévenir que réparer.",
    editorial: `Les gouttières font partie de ces éléments qu'on n'inspecte jamais — jusqu'au moment où elles débordent ou où une tache d'humidité apparaît sur un mur. Pourtant, des gouttières obstruées par des feuilles, de la mousse ou des débris créent une pression d'eau qui, à force de cycles gel-dégel, peut déformer les profils, desceller les fixations et favoriser les infiltrations dans les murs ou les planchers de toiture.

Le nettoyage gouttières n'est pas une tâche anodine lorsqu'il s'agit de travailler en hauteur avec une échelle. Pour les maisons à étage ou les toitures dont l'accès est complexe, l'intervention d'un professionnel est non seulement plus sûre, mais aussi plus complète. Le débouchage gouttières ne se limite pas à retirer les feuilles visibles : il faut tester les descentes pluviales par rinçage pour s'assurer qu'elles ne sont pas bouchées plus bas, et contrôler l'état des fixations, joints et soudures.

Nous réalisons systématiquement un contrôle visuel complet lors de chaque intervention à Bruxelles et en Brabant : tout signe d'anomalie — fixation desserrée, fissure, joint défaillant — est signalé avec photo. Un entretien annuel en automne suffit dans la plupart des cas pour prévenir les infiltrations avant l'hiver.`,
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
        question: "Quel est le prix d'un nettoyage de gouttières à Bruxelles ?",
        answer:
          "Le prix dépend principalement de la longueur des gouttières, de la hauteur d'intervention, de l'accessibilité, du niveau d'obstruction (feuilles, mousses, débris) et du nombre de descentes à contrôler. Si des réparations sont nécessaires, elles sont chiffrées séparément. Nous proposons un devis gratuit, transparent et sans engagement.",
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
    process: [
      {
        step: "01",
        title: "Inspection depuis le sol",
        description:
          "Repérage des zones d'obstruction visible (débordements, végétation, affaissement) et évaluation de la longueur et hauteur d'intervention avant montée.",
      },
      {
        step: "02",
        title: "Vidage et extraction manuelle",
        description:
          "Extraction à la main des feuilles, mousses et débris tassés dans les gouttières. Les matières extraites sont évacuées proprement sans les laisser tomber sur la façade.",
      },
      {
        step: "03",
        title: "Rinçage des descentes",
        description:
          "Test de l'écoulement par rinçage à l'eau pour vérifier que les descentes pluviales sont bien dégagées jusqu'en bas. Débouchage si nécessaire avec tige flexible.",
      },
      {
        step: "04",
        title: "Contrôle des fixations",
        description:
          "Inspection des crochets, joints et soudures. Toute anomalie (fixation desserrée, fissure, joint défaillant) est photographiée et communiquée avec le rapport d'intervention.",
      },
    ],
  },
];

export const featuredServices = services.filter((s) => s.featured);
