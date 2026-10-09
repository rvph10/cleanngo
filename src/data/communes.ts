/**
 * Commune × service landing page data.
 *
 * `communes` holds facts about each commune that are reused across every
 * service page for that commune (neighborhoods, housing stock, internal
 * linking graph). `communeServiceContent` holds the page-level content that
 * must be unique per commune+service combination: intro copy, meta tags,
 * H1 and commune-specific FAQ entries. It is intentionally hand-written
 * (not templated from a single string) so each page reads as distinct,
 * locally-relevant content rather than a mail-merge.
 *
 * Priority services, keyed by `services[].href` slug:
 *   - "nettoyage-vitres" (nettoyage de vitres)
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
    housingType:
      "villas et maisons quatre façades avec jardin, toitures en tuiles ou ardoises en pente",
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

export const priorityServiceSlugs = ["nettoyage-vitres"] as const;

export interface CommuneServiceContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Three questions specific to this commune and service. */
  faqs: FaqItem[];
}

/**
 * Keyed by commune slug, then service slug. Only combinations present here
 * get a generated page (see getStaticPaths in [commune]/[service].astro).
 * This lets the page count grow deliberately, one reviewed batch at a time,
 * instead of silently generating thin pages for every possible combination.
 */
export const communeServiceContent: Record<
  string,
  Partial<Record<string, CommuneServiceContent>>
> = {
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
      faqs: [
        {
          question: "Intervenez-vous sur les vitrines commerçantes du Châtelain et de Flagey ?",
          answer:
            "Oui, nous intervenons régulièrement sur les vitrines commerçantes de ces quartiers. Pour les commerces, nous recommandons une fréquence mensuelle afin de garder une image soignée en permanence ; des contrats d'entretien adaptés à votre activité sont disponibles.",
        },
        {
          question:
            "Pouvez-vous nettoyer les fenêtres d'un appartement en étage dans un immeuble Art Nouveau ?",
          answer:
            "Oui. Nous traitons l'intérieur depuis l'appartement et les faces extérieures accessibles depuis l'intérieur ou un balcon. Pour les vitrages hors d'atteinte, la perche télescopique permet souvent de travailler depuis la rue ; envoyez-nous une photo de la façade et nous vous indiquons la solution adaptée lors du devis.",
        },
        {
          question:
            "Les châssis anciens en bois des immeubles ixellois sont-ils traités avec précaution ?",
          answer:
            "Oui. Sur les châssis d'origine, fréquents dans le bâti Art Nouveau et Art Déco d'Ixelles, nous évitons les produits agressifs et travaillons avec soin autour des mastics et des peintures fatiguées. Si un châssis nous paraît abîmé, nous vous le signalons.",
        },
      ],
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
      faqs: [
        {
          question:
            "Les vitres orientées jardin, très exposées au pollen à Uccle, nécessitent-elles un entretien plus fréquent ?",
          answer:
            "Oui. Dans les quartiers arborés comme Fort-Jaco ou l'Observatoire, le pollen et la sève s'accumulent plus vite sur les grandes baies exposées au jardin. Nous recommandons un passage supplémentaire au printemps pour ces façades particulièrement exposées.",
        },
        {
          question: "Nettoyez-vous aussi les vérandas des villas uccloises ?",
          answer:
            "Oui. Les vitrages verticaux comme la toiture de la véranda, quand elle est accessible, peuvent être traités lors du même passage. Sous les grands arbres d'Uccle, la toiture vitrée accumule feuilles et sève : un nettoyage régulier lui rend sa transparence.",
        },
        {
          question: "À quel moment de l'année planifier le nettoyage de vitres à Uccle ?",
          answer:
            "Deux passages couvrent les périodes critiques : un en fin de printemps, après la saison des pollens, et un à l'automne, après la chute des feuilles. C'est le rythme que nous recommandons pour les maisons entourées de jardin.",
        },
      ],
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
      faqs: [
        {
          question:
            "Intervenez-vous sur les grandes baies vitrées et vérandas typiques des villas de Waterloo ?",
          answer:
            "Oui, c'est une configuration fréquente à Waterloo. Nous utilisons la perche télescopique pour les parties hautes des vérandas et une raclette large pour les grandes baies, afin d'éviter tout effet de zone floue au centre du vitrage, fréquent avec un matériel non adapté.",
        },
        {
          question: "Intervenez-vous à Waterloo alors que vous êtes basés à Bruxelles ?",
          answer:
            "Oui, Waterloo fait partie de notre zone d'intervention habituelle dans le Brabant wallon, au même titre que les communes bruxelloises. La demande de devis se fait de la même façon, gratuitement et sans engagement.",
        },
        {
          question: "Proposez-vous un entretien régulier des vitres pour les villas de Waterloo ?",
          answer:
            "Oui. Pour les grandes surfaces vitrées, un entretien planifié, par exemple au printemps et à l'automne, évite que le calcaire et les résidus végétaux ne s'incrustent. Nous pouvons convenir d'un contrat d'entretien adapté à votre maison.",
        },
      ],
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
      faqs: [
        {
          question:
            "Les fenêtres à petits bois des maisons de Kapelleveld demandent-elles plus de temps à nettoyer ?",
          answer:
            "Oui, les fenêtres à petits carreaux typiques des maisons de cité-jardin de Kapelleveld comptent davantage de jonctions et de rebords à traiter individuellement. Nous en tenons compte dans notre planning pour garantir un résultat sans traces sur chaque carreau.",
        },
        {
          question:
            "Intervenez-vous aussi dans les immeubles à appartements du boulevard de la Woluwe ?",
          answer:
            "Oui. Pour les appartements, nous traitons les larges baies depuis l'intérieur et les balcons. Pour les parties communes vitrées (halls, cages d'escalier), nous pouvons établir un devis à l'attention du syndic.",
        },
        {
          question: "Les anciens vitrages des maisons de cité-jardin sont-ils plus fragiles ?",
          answer:
            "Ils demandent en effet plus de délicatesse : le verre d'origine est parfois plus fin et les mastics plus anciens. Nous travaillons à la main, au mouilleur et à la raclette, sans appuyer sur les carreaux ni sur les petits bois.",
        },
      ],
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
      faqs: [
        {
          question:
            "Comment nettoyez-vous les hautes fenêtres des maisons de maître du quartier Jourdan sans échafaudage ?",
          answer:
            "Nous utilisons une perche télescopique à flux d'eau pure, qui permet d'atteindre les fenêtres en hauteur typiques des maisons de maître d'Etterbeek en toute sécurité, sans échafaudage et sans encombrer une rue souvent étroite.",
        },
        {
          question: "Nettoyez-vous les vitres d'un appartement en fin de bail à Etterbeek ?",
          answer:
            "Oui. Près des institutions européennes, les locations changent souvent de mains : les vitres peuvent être nettoyées seules ou dans le cadre d'un nettoyage complet d'état des lieux, pour rendre le logement dans un état impeccable.",
        },
        {
          question:
            "Proposez-vous des contrats pour les vitrines et bureaux autour de la place Jourdan ?",
          answer:
            "Oui. Pour les commerces et bureaux du quartier Jourdan ou du Cinquantenaire, nous recommandons un passage mensuel et proposons des contrats d'entretien adaptés à votre activité.",
        },
      ],
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
      faqs: [
        {
          question:
            "Le pollen de la forêt de Soignes tache-t-il davantage les vitres à Watermael-Boitsfort ?",
          answer:
            "Oui, la proximité directe avec la forêt de Soignes entraîne une accumulation plus rapide de pollen et de résidus végétaux sur les vitrages, en particulier au printemps. Nous utilisons un dégraissant adapté à ces résidus organiques pour éviter le voile terne qu'ils laissent après un nettoyage classique.",
        },
        {
          question: "Les maisons du Logis-Floréal demandent-elles des précautions particulières ?",
          answer:
            "Oui. Les cités-jardins du Logis et de Floréal sont un patrimoine protégé, avec de nombreux châssis d'origine. Nous utilisons des produits doux et travaillons à la main pour préserver les menuiseries et les vitrages anciens.",
        },
        {
          question:
            "Comment éliminer les traces de calcaire sur les vitres près des Étangs de Boitsfort ?",
          answer:
            "L'humidité ambiante près des étangs favorise les dépôts calcaires. Nous utilisons des solutions détartrantes calibrées, suivies d'un passage à la raclette, pour retirer ces traces sans rayer le verre.",
        },
      ],
    },
  },
};
