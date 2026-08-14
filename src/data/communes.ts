/**
 * Commune × service landing page data.
 *
 * `communes` holds facts about each commune that are reused across every
 * service page for that commune (neighborhoods, housing stock, internal
 * linking graph). `communeServiceContent` holds the page-level content that
 * must be unique per commune+service combination: intro copy, meta tags,
 * H1 and a commune-specific FAQ entry. It is intentionally hand-written
 * (not templated from a single string) so each page reads as distinct,
 * locally-relevant content rather than a mail-merge.
 *
 * Priority services are the two keyed by `services[].href` slug:
 *   - "nettoyage-vitres"  (nettoyage de vitres)
 *   - "nettoyage-toiture" (démoussage toiture)
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Commune {
  name: string;
  slug: string;
  postalCode: string;
  distanceFromBase: string;
  neighborhoods: string[];
  housingType: string;
  localNote: string;
  /** Slugs of other communes in this dataset to cross-link, 2-3 entries. */
  neighbors: string[];
}

export const communes: Commune[] = [
  {
    name: "Ixelles",
    slug: "ixelles",
    postalCode: "1050",
    distanceFromBase: "6 km",
    neighborhoods: ["Châtelain", "Flagey", "Étangs d'Ixelles", "Matonge"],
    housingType:
      "immeubles Art Nouveau et Art Déco à appartements, maisons de maître mitoyennes à hautes fenêtres",
    localNote:
      "commune dense où les façades commerçantes de la chaussée d'Ixelles et du Châtelain vivent de leur vitrine, si bien que la propreté des vitrages y a un impact commercial direct",
    neighbors: ["etterbeek", "uccle", "watermael-boitsfort"],
  },
  {
    name: "Uccle",
    slug: "uccle",
    postalCode: "1180",
    distanceFromBase: "10 km",
    neighborhoods: ["Fort-Jaco", "Saint-Job", "Observatoire", "Calevoet"],
    housingType: "villas et maisons quatre façades avec jardin, toitures en tuiles ou ardoises en pente",
    localNote:
      "commune la plus boisée de la région bruxelloise, en lisière de la forêt de Soignes, où l'ombre et l'humidité permanentes des frondaisons favorisent nettement le développement de la mousse sur les toitures",
    neighbors: ["ixelles", "watermael-boitsfort", "waterloo"],
  },
  {
    name: "Waterloo",
    slug: "waterloo",
    postalCode: "1410",
    distanceFromBase: "18 km",
    neighborhoods: ["Vieux Waterloo", "Chenois", "Bourgeois"],
    housingType: "villas résidentielles avec grand jardin, vérandas et baies vitrées généreuses",
    localNote:
      "commune du Brabant wallon en lisière de la forêt de Soignes, au bâti résidentiel plus récent et plus aéré qu'en zone urbaine bruxelloise, avec de grandes surfaces vitrées orientées jardin",
    neighbors: ["uccle", "woluwe-saint-lambert", "etterbeek"],
  },
  {
    name: "Woluwe-Saint-Lambert",
    slug: "woluwe-saint-lambert",
    postalCode: "1200",
    distanceFromBase: "9 km",
    neighborhoods: ["Georges Henri", "Saint-Michel", "Kapelleveld", "Val des Seigneurs"],
    housingType:
      "maisons de cité-jardin de l'entre-deux-guerres à toiture en pente et immeubles à appartements le long du boulevard de la Woluwe",
    localNote:
      "commune verte structurée autour du parc de Woluwe et du quartier-jardin de Kapelleveld, où les toitures en tuiles des maisons d'entre-deux-guerres sont particulièrement exposées à l'humidité des grands arbres environnants",
    neighbors: ["etterbeek", "watermael-boitsfort", "waterloo"],
  },
  {
    name: "Etterbeek",
    slug: "etterbeek",
    postalCode: "1040",
    distanceFromBase: "5 km",
    neighborhoods: ["Jourdan", "Cinquantenaire", "Chasse"],
    housingType:
      "maisons de maître mitoyennes à bel-étage et immeubles à appartements proches des institutions européennes et de l'ULB/VUB",
    localNote:
      "commune très densément bâtie autour du quartier Jourdan et du Cinquantenaire, où les façades étroites à hautes fenêtres laissent peu de recul pour un nettoyage sans matériel professionnel",
    neighbors: ["ixelles", "woluwe-saint-lambert", "uccle"],
  },
  {
    name: "Watermael-Boitsfort",
    slug: "watermael-boitsfort",
    postalCode: "1170",
    distanceFromBase: "11 km",
    neighborhoods: ["Le Logis-Floréal", "La Vénerie", "Étangs de Boitsfort"],
    housingType: "maisons de cité-jardin (Le Logis-Floréal) et villas en lisière de forêt",
    localNote:
      "commune directement adossée à la forêt de Soignes, l'une des plus arborées de Bruxelles avec Uccle, où les toitures restent humides et ombragées une grande partie de l'année, un terrain idéal pour la mousse et les lichens",
    neighbors: ["ixelles", "uccle", "woluwe-saint-lambert"],
  },
];

export const priorityServiceSlugs = ["nettoyage-vitres", "nettoyage-toiture"] as const;

export interface CommuneServiceContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  uniqueFaq: FaqItem;
}

/**
 * Keyed by commune slug, then service slug. Only combinations present here
 * get a generated page (see getStaticPaths in [commune]/[service].astro).
 * This lets the page count grow deliberately, one reviewed batch at a time,
 * instead of silently generating thin pages for every possible combination.
 */
export const communeServiceContent: Record<string, Partial<Record<string, CommuneServiceContent>>> = {
  ixelles: {
    "nettoyage-vitres": {
      h1: "Nettoyage de vitres à Ixelles : vitrines et façades sans traces",
      metaTitle: "Nettoyage de vitres à Ixelles (1050) | CleanNgo",
      metaDescription:
        "Laveur de vitres professionnel à Ixelles : vitrines du Châtelain et de Flagey, appartements Art Nouveau, immeubles de la chaussée. Intervention sans traces, devis gratuit.",
      intro: [
        `À Ixelles, entre les vitrines commerçantes du Châtelain et de Flagey et les grandes fenêtres des immeubles Art Nouveau qui bordent la chaussée d'Ixelles, une vitre encrassée se voit immédiatement, et se remarque tout autant depuis la rue que depuis l'intérieur.`,
        `Pour les commerces installés autour des Étangs d'Ixelles ou à Matonge, une vitrine terne renvoie une image négative avant même l'entrée du client. Pour les habitations, souvent des appartements aux hautes fenêtres caractéristiques du bâti Art Nouveau et Art Déco local, un nettoyage à la raclette et à la perche télescopique reste indispensable pour un résultat sans stries, y compris sur les châssis et rebords des immeubles anciens.`,
        `Nous intervenons dans tout Ixelles (Châtelain, Flagey, Matonge, Étangs d'Ixelles) pour les particuliers comme pour les commerces, avec une seule visite pour l'intérieur et l'extérieur.`,
      ],
      uniqueFaq: {
        question: "Intervenez-vous sur les vitrines commerçantes du Châtelain et de Flagey ?",
        answer:
          "Oui, nous intervenons régulièrement sur les vitrines commerçantes de ces quartiers. Pour les commerces, nous recommandons une fréquence mensuelle afin de garder une image soignée en permanence ; des contrats d'entretien adaptés à votre activité sont disponibles.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Ixelles : traitement anti-mousse et hydrofuge",
      metaTitle: "Démoussage toiture à Ixelles (1050) | CleanNgo",
      metaDescription:
        "Démoussage et nettoyage de toiture à Ixelles : immeubles à appartements, toits plats et maisons de maître. Traitement biocide et hydrofuge, devis gratuit.",
      intro: [
        `À Ixelles, le bâti est dominé par des immeubles à appartements et des maisons de maître mitoyennes, souvent avec des toitures plates ou à faible pente, une configuration où la mousse s'installe moins vite qu'en zone très arborée, mais où les points bas et les évacuations restent des zones sensibles à surveiller.`,
        `Autour des Étangs d'Ixelles et du bas de la commune, la proximité de grands arbres favorise localement l'accumulation de mousse et de feuilles sur certaines toitures et corniches. Un démoussage professionnel, avec pression calibrée selon le type de couverture et traitement hydrofuge en finition, évite que l'humidité ne s'installe durablement sur ces toits densément voisins les uns des autres.`,
        `Nous intervenons sur les toitures plates et en pente d'Ixelles, avec un contrôle visuel des fixations à chaque passage.`,
      ],
      uniqueFaq: {
        question: "Les toits plats d'Ixelles nécessitent-ils un entretien différent des toitures en pente ?",
        answer:
          "Oui. Sur les toitures plates, fréquentes dans le bâti ixellois, nous portons une attention particulière aux évacuations d'eau et aux points bas où les feuilles et débris s'accumulent, en plus du traitement anti-mousse classique appliqué sur les toitures en pente.",
      },
    },
  },
  uccle: {
    "nettoyage-vitres": {
      h1: "Vitres et baies vitrées à Uccle : lavage sans traces",
      metaTitle: "Nettoyage de vitres à Uccle (1180) | CleanNgo",
      metaDescription:
        "Lavage de vitres pour villas et maisons à Uccle : grandes baies, vérandas, châssis. Intervention soignée à Fort-Jaco, Saint-Job, Observatoire. Devis gratuit.",
      intro: [
        `À Uccle, commune la plus boisée de la région bruxelloise, les villas et maisons quatre façades du Fort-Jaco, de Saint-Job ou de l'Observatoire misent souvent sur de grandes baies vitrées pour profiter de la vue sur les jardins environnants, ce qui rend les traces de pollen et de sève particulièrement visibles dès les beaux jours.`,
        `La proximité de la forêt de Soignes apporte autant de verdure que de contraintes : pollens au printemps, résidus de sève et petites feuilles s'accumulent sur les vitrages et les châssis en bois ou en aluminium des maisons quatre façades. Un nettoyage à la raclette, complété par un dégraissant adapté aux résidus organiques, permet d'éviter les dépôts collants qui ternissent durablement le verre.`,
        `Nous intervenons dans tout Uccle, du quartier Calevoet aux abords de l'Observatoire, avec un passage intérieur et extérieur en une seule visite, y compris sur les vérandas et grandes baies orientées jardin.`,
      ],
      uniqueFaq: {
        question:
          "Les vitres orientées jardin, très exposées au pollen à Uccle, nécessitent-elles un entretien plus fréquent ?",
        answer:
          "Oui. Dans les quartiers arborés comme Fort-Jaco ou l'Observatoire, le pollen et la sève s'accumulent plus vite sur les grandes baies exposées au jardin. Nous recommandons un passage supplémentaire au printemps pour ces façades particulièrement exposées.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Uccle : la commune la plus exposée à la mousse",
      metaTitle: "Démoussage toiture à Uccle (1180) | CleanNgo",
      metaDescription:
        "Traitement anti-mousse pour toitures en tuiles et ardoises à Uccle, commune la plus boisée de Bruxelles. Biocide et hydrofuge. Devis gratuit.",
      intro: [
        `Uccle est la commune la plus boisée de la région bruxelloise, en lisière directe de la forêt de Soignes. Cette proximité avec les grands arbres, un atout pour le cadre de vie, se traduit aussi par une ombre et une humidité quasi permanentes sur les toitures en tuiles et ardoises des villas du Fort-Jaco, de Saint-Job ou de l'Observatoire.`,
        `Sur ce type de toiture en pente, la mousse et les lichens progressent plus vite qu'ailleurs à Bruxelles, en particulier sur les versants orientés nord, à l'abri du soleil. Un démoussage haute pression calibré selon le matériau, suivi d'un traitement biocide et hydrofuge, retarde nettement le retour de la végétation malgré l'humidité constante du voisinage boisé.`,
        `Nous intervenons sur les toitures d'Uccle, du Fort-Jaco à Calevoet, avec un contrôle visuel des fixations à chaque passage.`,
      ],
      uniqueFaq: {
        question: "Pourquoi la mousse revient-elle plus vite sur les toitures uccloises qu'ailleurs à Bruxelles ?",
        answer:
          "L'ombre et l'humidité apportées par la proximité de la forêt de Soignes créent des conditions particulièrement favorables à la mousse, surtout sur les versants de toiture orientés nord. C'est pourquoi nous recommandons un traitement hydrofuge systématique en finition pour les toitures uccloises, afin de prolonger l'effet du démoussage.",
      },
    },
  },
  waterloo: {
    "nettoyage-vitres": {
      h1: "Nettoyage de vitres à Waterloo : baies vitrées et vérandas sans traces",
      metaTitle: "Nettoyage de vitres à Waterloo (1410) | CleanNgo",
      metaDescription:
        "Lavage de vitres et vérandas pour villas à Waterloo. Grandes baies orientées jardin, châssis, vitrages en hauteur. Intervention soignée, devis gratuit.",
      intro: [
        `À Waterloo, le bâti résidentiel du Vieux Waterloo, du Chenois ou du Bourgeois se distingue par de grandes villas avec jardin, souvent équipées de vérandas et de baies vitrées généreuses orientées vers l'extérieur, bien plus qu'en zone urbaine bruxelloise dense.`,
        `Ces surfaces vitrées, plus vastes que la moyenne, exigent un matériel adapté : perche télescopique pour les vitrages en hauteur des vérandas, raclette de précision pour les grandes baies sans laisser de zone floue au centre. La proximité de la forêt de Soignes ajoute aussi son lot de pollen et de résidus végétaux sur les châssis extérieurs.`,
        `Nous intervenons dans toute la commune, du Vieux Waterloo au Bourgeois, pour un résultat sans traces sur les baies vitrées comme sur les vérandas, intérieur et extérieur en une seule visite.`,
      ],
      uniqueFaq: {
        question:
          "Intervenez-vous sur les grandes baies vitrées et vérandas typiques des villas de Waterloo ?",
        answer:
          "Oui, c'est une configuration fréquente à Waterloo. Nous utilisons la perche télescopique pour les parties hautes des vérandas et une raclette large pour les grandes baies, afin d'éviter tout effet de zone floue au centre du vitrage, fréquent avec un matériel non adapté.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Waterloo : protection anti-mousse et hydrofuge",
      metaTitle: "Démoussage toiture à Waterloo (1410) | CleanNgo",
      metaDescription:
        "Traitement anti-mousse pour toitures de villas à Waterloo, en lisière de la forêt de Soignes. Biocide, hydrofuge, devis gratuit.",
      intro: [
        `Waterloo, commune résidentielle du Brabant wallon en lisière de la forêt de Soignes, compte de nombreuses villas avec jardin dont les toitures en pente subissent la même exposition à l'humidité que les communes boisées de la périphérie sud de Bruxelles.`,
        `Le bâti plus récent et plus aéré qu'en zone urbaine dense n'empêche pas la mousse de s'installer sur les tuiles, en particulier sur les toitures ombragées par les grands arbres de jardin ou par la forêt toute proche. Un traitement anti-mousse haute pression, suivi d'une application biocide et d'un hydrofuge de finition, protège durablement ces toitures exposées.`,
        `Nous intervenons dans tout Waterloo, du Vieux Waterloo au Chenois, avec un contrôle visuel des fixations à chaque intervention.`,
      ],
      uniqueFaq: {
        question: "Les grands jardins arborés de Waterloo favorisent-ils la mousse sur les toitures ?",
        answer:
          "Oui. Les villas avec jardin, très présentes à Waterloo, sont souvent ombragées par des arbres matures qui retiennent l'humidité sur la toiture. Nous recommandons un traitement hydrofuge en finition pour limiter le retour de la mousse malgré cette ombre persistante.",
      },
    },
  },
  "woluwe-saint-lambert": {
    "nettoyage-vitres": {
      h1: "Nettoyage de vitres à Woluwe-Saint-Lambert : du Kapelleveld au parc de Woluwe",
      metaTitle: "Nettoyage de vitres à Woluwe-Saint-Lambert (1200) | CleanNgo",
      metaDescription:
        "Lavage de vitres pour maisons de cité-jardin et immeubles à Woluwe-Saint-Lambert. Kapelleveld, Georges Henri, boulevard de la Woluwe. Devis gratuit.",
      intro: [
        `Woluwe-Saint-Lambert associe deux types de bâti bien distincts : les maisons de cité-jardin de l'entre-deux-guerres du quartier Kapelleveld, aux fenêtres à petits carreaux, et les immeubles à appartements plus récents qui bordent le boulevard de la Woluwe, avec de larges baies vitrées.`,
        `Dans le quartier Georges Henri comme autour du parc de Woluwe, la végétation abondante dépose pollen et poussière sur les vitrages toute l'année. Sur les maisons de cité-jardin, les fenêtres à petits bois multiplient les rebords et jonctions à traiter un par un pour un résultat vraiment sans traces.`,
        `Nous intervenons dans toute la commune, de Kapelleveld au Val des Seigneurs, avec un nettoyage intérieur et extérieur adapté à chaque type de châssis, ancien ou récent.`,
      ],
      uniqueFaq: {
        question:
          "Les fenêtres à petits bois des maisons de Kapelleveld demandent-elles plus de temps à nettoyer ?",
        answer:
          "Oui, les fenêtres à petits carreaux typiques des maisons de cité-jardin de Kapelleveld comptent davantage de jonctions et de rebords à traiter individuellement. Nous en tenons compte dans notre planning pour garantir un résultat sans traces sur chaque carreau.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Woluwe-Saint-Lambert : maisons de cité-jardin protégées",
      metaTitle: "Démoussage toiture à Woluwe-Saint-Lambert (1200) | CleanNgo",
      metaDescription:
        "Traitement anti-mousse pour toitures en tuiles à Woluwe-Saint-Lambert, quartier Kapelleveld et parc de Woluwe. Biocide, hydrofuge, devis gratuit.",
      intro: [
        `Woluwe-Saint-Lambert est structurée autour du parc de Woluwe et du quartier-jardin de Kapelleveld, où les maisons de l'entre-deux-guerres affichent des toitures en tuiles typiques, entourées de grands arbres plantés à la même époque que les habitations.`,
        `Ces arbres matures, aujourd'hui pleinement développés, projettent une ombre importante sur les toitures et retiennent l'humidité bien après la pluie, des conditions qui favorisent nettement le développement de la mousse sur les tuiles anciennes du quartier Kapelleveld comme sur celles du Val des Seigneurs.`,
        `Nous intervenons dans toute la commune avec un traitement anti-mousse haute pression, une application biocide et un hydrofuge de finition adaptés aux toitures anciennes en tuiles.`,
      ],
      uniqueFaq: {
        question:
          "Les toitures anciennes des maisons de cité-jardin de Kapelleveld nécessitent-elles des précautions particulières ?",
        answer:
          "Oui. Les tuiles anciennes de ce quartier de l'entre-deux-guerres sont parfois plus fragiles, nous adaptons donc la pression de nettoyage au type et à l'état des tuiles avant toute intervention, pour un résultat efficace sans risque d'endommagement.",
      },
    },
  },
  etterbeek: {
    "nettoyage-vitres": {
      h1: "Nettoyage de vitres à Etterbeek : façades étroites du quartier Jourdan",
      metaTitle: "Nettoyage de vitres à Etterbeek (1040) | CleanNgo",
      metaDescription:
        "Lavage de vitres pour maisons de maître et immeubles à Etterbeek. Quartier Jourdan, Cinquantenaire, hautes fenêtres sans traces. Devis gratuit.",
      intro: [
        `À Etterbeek, les maisons de maître mitoyennes du quartier Jourdan et les immeubles à appartements proches du Cinquantenaire et des institutions européennes se caractérisent par des façades étroites percées de hautes fenêtres, un style qui laisse peu de recul pour un nettoyage sans matériel professionnel.`,
        `Dans une rue dense comme celles du quartier Jourdan ou de la Chasse, atteindre le haut d'une fenêtre à bel-étage depuis le trottoir sans échelle ni perche est souvent impossible en toute sécurité. La perche télescopique à eau pure permet d'atteindre ces vitrages en hauteur sans échafaudage, même dans une rue étroite.`,
        `Nous intervenons dans tout Etterbeek, du quartier Jourdan à la Chasse, avec un résultat sans traces sur les hautes fenêtres comme sur les vitrines proches des institutions européennes.`,
      ],
      uniqueFaq: {
        question:
          "Comment nettoyez-vous les hautes fenêtres des maisons de maître du quartier Jourdan sans échafaudage ?",
        answer:
          "Nous utilisons une perche télescopique à flux d'eau pure, qui permet d'atteindre les fenêtres en hauteur typiques des maisons de maître d'Etterbeek en toute sécurité, sans échafaudage et sans encombrer une rue souvent étroite.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Etterbeek : toitures plates et mitoyennes",
      metaTitle: "Démoussage toiture à Etterbeek (1040) | CleanNgo",
      metaDescription:
        "Nettoyage anti-mousse pour toitures d'Etterbeek, quartier Jourdan et Cinquantenaire. Toits plats et pentus, biocide, hydrofuge. Devis gratuit.",
      intro: [
        `Etterbeek est une commune très densément bâtie, où les maisons de maître mitoyennes et les immeubles à appartements du quartier Jourdan ou du Cinquantenaire se succèdent avec peu d'espace entre les toitures, souvent plates ou à faible pente sur les extensions arrière.`,
        `Cette densité limite la formation de mousse par manque d'ombrage direct des arbres, contrairement aux communes plus vertes de la périphérie, mais les toitures plates et les corniches mitoyennes accumulent feuilles et débris dans les points bas, créant des zones d'humidité stagnante propices à la mousse localisée.`,
        `Nous intervenons dans tout Etterbeek, du quartier Jourdan à la Chasse, avec une attention particulière aux évacuations et points bas des toitures plates, en complément du traitement anti-mousse classique sur les toitures en pente.`,
      ],
      uniqueFaq: {
        question: "Les toitures plates fréquentes à Etterbeek nécessitent-elles un traitement différent ?",
        answer:
          "Oui. Sur les toitures plates, très présentes sur les extensions arrière des maisons mitoyennes d'Etterbeek, nous vérifions systématiquement les évacuations d'eau et les points bas où s'accumulent feuilles et débris, en plus du traitement anti-mousse habituel.",
      },
    },
  },
  "watermael-boitsfort": {
    "nettoyage-vitres": {
      h1: "Nettoyage de vitres à Watermael-Boitsfort : du Logis-Floréal à la forêt de Soignes",
      metaTitle: "Nettoyage de vitres à Watermael-Boitsfort (1170) | CleanNgo",
      metaDescription:
        "Lavage de vitres pour maisons de cité-jardin et villas à Watermael-Boitsfort. Logis-Floréal, Vénerie, en lisière de forêt. Devis gratuit.",
      intro: [
        `Watermael-Boitsfort est, avec Uccle, l'une des communes les plus arborées de Bruxelles, directement adossée à la forêt de Soignes. Les maisons de la cité-jardin du Logis-Floréal et les villas de la Vénerie profitent de cette proximité, mais leurs vitrages en subissent aussi les conséquences : pollen, sève et dépôts organiques s'accumulent plus vite qu'en zone urbaine.`,
        `Sur les fenêtres orientées vers les frondaisons, ces résidus collants demandent un dégraissant adapté en plus du passage classique à la raclette, sous peine de laisser un voile terne même après nettoyage. Les habitations proches des Étangs de Boitsfort connaissent une exposition similaire, avec une humidité ambiante qui favorise aussi les traces de calcaire.`,
        `Nous intervenons dans toute la commune, du Logis-Floréal aux Étangs de Boitsfort, avec un nettoyage intérieur et extérieur en une seule visite, adapté aux vitrages exposés à la végétation environnante.`,
      ],
      uniqueFaq: {
        question: "Le pollen de la forêt de Soignes tache-t-il davantage les vitres à Watermael-Boitsfort ?",
        answer:
          "Oui, la proximité directe avec la forêt de Soignes entraîne une accumulation plus rapide de pollen et de résidus végétaux sur les vitrages, en particulier au printemps. Nous utilisons un dégraissant adapté à ces résidus organiques pour éviter le voile terne qu'ils laissent après un nettoyage classique.",
      },
    },
    "nettoyage-toiture": {
      h1: "Démoussage de toiture à Watermael-Boitsfort : la lisière de la forêt de Soignes",
      metaTitle: "Démoussage toiture à Watermael-Boitsfort (1170) | CleanNgo",
      metaDescription:
        "Traitement anti-mousse pour toitures à Watermael-Boitsfort, en lisière de la forêt de Soignes. Logis-Floréal, biocide, hydrofuge. Devis gratuit.",
      intro: [
        `Watermael-Boitsfort est directement adossée à la forêt de Soignes, ce qui en fait, avec Uccle, l'une des communes les plus arborées de la région bruxelloise. Les toitures des maisons de la cité-jardin du Logis-Floréal et des villas proches de la Vénerie restent humides et ombragées une grande partie de l'année.`,
        `Ce terrain est particulièrement favorable au développement de la mousse et des lichens, surtout sur les toitures en tuiles orientées vers la forêt, à l'abri du soleil quasi toute la journée. Un démoussage haute pression, suivi d'un traitement biocide en profondeur et d'un hydrofuge de finition, est nécessaire plus fréquemment ici que dans les communes moins boisées.`,
        `Nous intervenons dans toute la commune, du Logis-Floréal aux Étangs de Boitsfort, avec un contrôle visuel des fixations à chaque intervention.`,
      ],
      uniqueFaq: {
        question:
          "Faut-il démousser sa toiture plus souvent à Watermael-Boitsfort que dans une commune moins boisée ?",
        answer:
          "C'est effectivement recommandé. L'ombre quasi permanente de la forêt de Soignes maintient l'humidité sur les toitures plus longtemps qu'ailleurs à Bruxelles. Pour les toitures très exposées du Logis-Floréal ou de la Vénerie, un contrôle annuel plutôt que biennal permet d'éviter une réinstallation importante de la mousse.",
      },
    },
  },
};
