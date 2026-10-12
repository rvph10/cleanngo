import type { CommuneServiceContent } from "./communes";

// English commune names: the French names, as most English speakers use them.
export const communeNamesEn: Record<string, string> = {
  ixelles: "Ixelles",
  uccle: "Uccle",
  waterloo: "Waterloo",
  "woluwe-saint-lambert": "Woluwe-Saint-Lambert",
  etterbeek: "Etterbeek",
  "watermael-boitsfort": "Watermael-Boitsfort",
};

export const communeServiceContentEn: Record<
  string,
  Partial<Record<string, CommuneServiceContent>>
> = {
  ixelles: {
    "nettoyage-vitres": {
      h1: "Window cleaning in Ixelles: streak-free shopfronts and façades",
      metaTitle: "Window cleaning in Ixelles (1050) | CleanNgo",
      metaDescription:
        "Professional window cleaner in Ixelles: Châtelain and Flagey shopfronts, Art Nouveau flats, buildings along the Chaussée. Streak-free results, free quote.",
      intro: [
        `In Ixelles, between the shopfronts of Châtelain and Flagey and the tall windows of the Art Nouveau buildings lining the Chaussée d'Ixelles, dirty glass is noticed straight away, just as much from the street as from inside.`,
        `For businesses around the Ixelles Ponds or in Matonge, a dull shopfront sends a negative message before a customer even comes in. For homes, often flats with the tall windows typical of the area's Art Nouveau and Art Deco buildings, squeegee and telescopic pole cleaning is essential for a streak-free result, including on the frames and sills of older buildings.`,
        `We work throughout Ixelles (Châtelain, Flagey, Matonge, Ixelles Ponds) for households and businesses alike, with a single visit for inside and out.`,
      ],
      faqs: [
        {
          question: "Do you clean the shopfronts in Châtelain and Flagey?",
          answer:
            "Yes, we regularly clean shopfronts in these neighbourhoods. For shops, we recommend a monthly visit to keep a polished image at all times; maintenance contracts tailored to your business are available.",
        },
        {
          question: "Can you clean the windows of an upper-floor flat in an Art Nouveau building?",
          answer:
            "Yes. We clean the inside from the flat and the outside faces that can be reached from inside or from a balcony. For glass out of reach, the telescopic pole often lets us work from the street; send us a photo of the façade and we'll suggest the right solution in our quote.",
        },
        {
          question: "Do you take care with the old timber frames in Ixelles buildings?",
          answer:
            "Yes. On original frames, common in the Art Nouveau and Art Deco buildings of Ixelles, we avoid harsh products and work carefully around putty and tired paintwork. If a frame looks damaged, we'll let you know.",
        },
      ],
    },
  },
  uccle: {
    "nettoyage-vitres": {
      h1: "Windows and picture windows in Uccle: streak-free cleaning",
      metaTitle: "Window cleaning in Uccle (1180) | CleanNgo",
      metaDescription:
        "Window cleaning for villas and houses in Uccle: large picture windows, conservatories, frames. Careful work in Fort-Jaco, Saint-Job, Observatoire. Free quote.",
      intro: [
        `In Uccle, the greenest commune in the Brussels region, the villas and detached houses of Fort-Jaco, Saint-Job and the Observatoire often feature large picture windows to make the most of the garden views, which makes pollen and sap marks especially visible as soon as the weather turns fine.`,
        `Being close to the Sonian Forest brings as many constraints as it does greenery: pollen in spring, sap residue and small leaves build up on the glass and on the timber or aluminium frames of detached houses. A squeegee clean, combined with a degreaser suited to organic residue, prevents sticky deposits that leave glass permanently dull.`,
        `We work throughout Uccle, from Calevoet to the area around the Observatoire, cleaning inside and out in a single visit, including conservatories and large garden-facing windows.`,
      ],
      faqs: [
        {
          question:
            "Do garden-facing windows, which catch a lot of pollen in Uccle, need more frequent cleaning?",
          answer:
            "Yes. In leafy neighbourhoods like Fort-Jaco or around the Observatoire, pollen and sap build up faster on large garden-facing windows. We recommend an extra visit in spring for these particularly exposed façades.",
        },
        {
          question: "Do you also clean the conservatories of villas in Uccle?",
          answer:
            "Yes. Both the upright glazing and the conservatory roof, where it can be reached, can be cleaned in the same visit. Under Uccle's large trees, a glass roof collects leaves and sap: regular cleaning keeps it clear.",
        },
        {
          question: "When in the year should I plan window cleaning in Uccle?",
          answer:
            "Two visits cover the critical periods: one in late spring, after the pollen season, and one in autumn, after the leaves have fallen. That's the rhythm we recommend for houses with gardens.",
        },
      ],
    },
  },
  waterloo: {
    "nettoyage-vitres": {
      h1: "Window cleaning in Waterloo: streak-free picture windows and conservatories",
      metaTitle: "Window cleaning in Waterloo (1410) | CleanNgo",
      metaDescription:
        "Window and conservatory cleaning for villas in Waterloo. Large garden-facing windows, frames, high glazing. Careful work, free quote.",
      intro: [
        `In Waterloo, homes in the old town, Chenois and Bourgeois stand out for their large villas with gardens, often with conservatories and generous picture windows facing outwards, far more than in the dense centre of Brussels.`,
        `These glass surfaces, larger than average, call for the right equipment: a telescopic pole for the high glazing of conservatories and a precision squeegee for large windows without leaving a blurry patch in the middle. The nearby Sonian Forest also adds its share of pollen and plant residue on exterior frames.`,
        `We work across the whole commune, from the old town to Bourgeois, for streak-free picture windows and conservatories, inside and out in a single visit.`,
      ],
      faqs: [
        {
          question:
            "Do you clean the large picture windows and conservatories typical of Waterloo villas?",
          answer:
            "Yes, it's a common set-up in Waterloo. We use a telescopic pole for the upper parts of conservatories and a wide squeegee for large windows, so there's no blurry patch left in the middle of the glass, which often happens with unsuitable equipment.",
        },
        {
          question: "Do you come to Waterloo even though you're based in Brussels?",
          answer:
            "Yes, Waterloo is part of our usual service area in Walloon Brabant, just like the Brussels communes. Requesting a quote works the same way, free and with no obligation.",
        },
        {
          question: "Do you offer regular window maintenance for villas in Waterloo?",
          answer:
            "Yes. For large glass surfaces, scheduled maintenance, for example in spring and autumn, stops limescale and plant residue from becoming ingrained. We can agree a maintenance contract tailored to your home.",
        },
      ],
    },
  },
  "woluwe-saint-lambert": {
    "nettoyage-vitres": {
      h1: "Window cleaning in Woluwe-Saint-Lambert: from Kapelleveld to Woluwe Park",
      metaTitle: "Window cleaning in Woluwe-Saint-Lambert (1200) | CleanNgo",
      metaDescription:
        "Window cleaning for garden-city houses and apartment buildings in Woluwe-Saint-Lambert. Kapelleveld, Georges Henri, Boulevard de la Woluwe. Free quote.",
      intro: [
        `Woluwe-Saint-Lambert combines two very different kinds of housing: the inter-war garden-city houses of Kapelleveld, with small-paned windows, and the more recent apartment buildings along the Boulevard de la Woluwe, with wide picture windows.`,
        `In the Georges Henri area and around Woluwe Park, abundant greenery leaves pollen and dust on the glass all year round. On the garden-city houses, windows divided by glazing bars mean many more sills and joints that have to be cleaned one by one for a truly streak-free result.`,
        `We work throughout the commune, from Kapelleveld to Val des Seigneurs, with an inside and outside clean suited to every type of frame, old or new.`,
      ],
      faqs: [
        {
          question: "Do the small-paned windows of Kapelleveld houses take longer to clean?",
          answer:
            "Yes, the small-paned windows typical of Kapelleveld's garden-city houses have more joints and sills to clean individually. We allow for this in our schedule to guarantee a streak-free result on every pane.",
        },
        {
          question: "Do you also work in the apartment buildings on the Boulevard de la Woluwe?",
          answer:
            "Yes. For flats, we clean the wide windows from inside and from the balconies. For glazing in shared areas (entrance halls, stairwells), we can prepare a quote for the building manager.",
        },
        {
          question: "Is the old glass in garden-city houses more fragile?",
          answer:
            "It does need a lighter touch: the original glass is sometimes thinner and the putty older. We work by hand, with a washer and squeegee, without pressing on the panes or the glazing bars.",
        },
      ],
    },
  },
  etterbeek: {
    "nettoyage-vitres": {
      h1: "Window cleaning in Etterbeek: the narrow façades of the Jourdan area",
      metaTitle: "Window cleaning in Etterbeek (1040) | CleanNgo",
      metaDescription:
        "Window cleaning for townhouses and apartment buildings in Etterbeek. Jourdan area, Cinquantenaire, tall windows with no streaks. Free quote.",
      intro: [
        `In Etterbeek, the terraced townhouses of the Jourdan area and the apartment buildings near the Cinquantenaire and the European institutions have narrow façades with tall windows, a style that leaves little room to clean properly without professional equipment.`,
        `On a busy street like those around Jourdan or La Chasse, reaching the top of a raised ground-floor window from the pavement without a ladder or pole is often impossible to do safely. A pure-water telescopic pole lets us reach this high glazing without scaffolding, even on a narrow street.`,
        `We work throughout Etterbeek, from the Jourdan area to La Chasse, for streak-free results on tall windows and on shopfronts near the European institutions.`,
      ],
      faqs: [
        {
          question: "How do you clean the tall windows of Jourdan townhouses without scaffolding?",
          answer:
            "We use a pure-water telescopic pole, which reaches the high windows typical of Etterbeek's townhouses safely, with no scaffolding and without blocking what is often a narrow street.",
        },
        {
          question: "Do you clean the windows of a flat at the end of a lease in Etterbeek?",
          answer:
            "Yes. Near the European institutions, rentals change hands often: windows can be cleaned on their own or as part of a full end-of-tenancy clean, so you hand the property back in perfect condition.",
        },
        {
          question: "Do you offer contracts for shopfronts and offices around Place Jourdan?",
          answer:
            "Yes. For shops and offices in the Jourdan or Cinquantenaire areas, we recommend a monthly visit and offer maintenance contracts tailored to your business.",
        },
      ],
    },
  },
  "watermael-boitsfort": {
    "nettoyage-vitres": {
      h1: "Window cleaning in Watermael-Boitsfort: from Le Logis-Floréal to the Sonian Forest",
      metaTitle: "Window cleaning in Watermael-Boitsfort (1170) | CleanNgo",
      metaDescription:
        "Window cleaning for garden-city houses and villas in Watermael-Boitsfort. Le Logis-Floréal, La Vénerie, on the edge of the forest. Free quote.",
      intro: [
        `Watermael-Boitsfort is, with Uccle, one of the greenest communes in Brussels, right up against the Sonian Forest. The houses of the Le Logis-Floréal garden city and the villas of La Vénerie benefit from that closeness, but their windows also bear the consequences: pollen, sap and organic deposits build up faster than in the city.`,
        `On windows facing the tree canopy, this sticky residue needs a suitable degreaser on top of the usual squeegee clean, otherwise a dull film remains even after cleaning. Homes near the Boitsfort Ponds see similar exposure, with damp air that also encourages limescale marks.`,
        `We work throughout the commune, from Le Logis-Floréal to the Boitsfort Ponds, cleaning inside and out in a single visit, adapted to glass exposed to the surrounding greenery.`,
      ],
      faqs: [
        {
          question: "Does pollen from the Sonian Forest mark windows more in Watermael-Boitsfort?",
          answer:
            "Yes, being right next to the Sonian Forest means pollen and plant residue build up faster on the glass, especially in spring. We use a degreaser suited to this organic residue to avoid the dull film it leaves after an ordinary clean.",
        },
        {
          question: "Do the houses of Le Logis-Floréal need special care?",
          answer:
            "Yes. The Le Logis and Floréal garden cities are protected heritage, with many original frames. We use gentle products and work by hand to preserve the old joinery and glass.",
        },
        {
          question: "How do you remove limescale marks on windows near the Boitsfort Ponds?",
          answer:
            "The damp air near the ponds encourages limescale. We use carefully dosed descaling solutions, followed by a squeegee clean, to remove these marks without scratching the glass.",
        },
      ],
    },
  },
};
