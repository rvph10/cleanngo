import type { CommuneServiceContent } from "./communes";

// Dutch commune names (official Dutch names for the Brussels communes).
export const communeNamesNl: Record<string, string> = {
  ixelles: "Elsene",
  uccle: "Ukkel",
  waterloo: "Waterloo",
  "woluwe-saint-lambert": "Sint-Lambrechts-Woluwe",
  etterbeek: "Etterbeek",
  "watermael-boitsfort": "Watermaal-Bosvoorde",
};

export const communeServiceContentNl: Record<
  string,
  Partial<Record<string, CommuneServiceContent>>
> = {
  ixelles: {
    "nettoyage-vitres": {
      h1: "Ramen wassen in Elsene: etalages en gevels zonder strepen",
      metaTitle: "Ramen wassen in Elsene (1050) | CleanNgo",
      metaDescription:
        "Professionele glazenwasser in Elsene: etalages aan het Kasteleinsplein en Flagey, art-nouveau-appartementen, gebouwen aan de steenweg. Zonder strepen, gratis offerte.",
      intro: [
        `In Elsene, tussen de winkeletalages aan het Kasteleinsplein en Flagey en de grote ramen van de art-nouveaugebouwen langs de Elsensesteenweg, valt een vuile ruit meteen op, zowel vanaf de straat als van binnenuit.`,
        `Voor de handelszaken rond de Elsense vijvers of in Matonge geeft een doffe etalage een negatief beeld nog voor de klant binnenkomt. Voor woningen, vaak appartementen met de hoge ramen die typisch zijn voor de lokale art-nouveau- en art-decobouw, blijft een reiniging met de trekker en de telescopische steel onmisbaar voor een resultaat zonder strepen, ook op de raamkaders en vensterbanken van oude gebouwen.`,
        `We werken in heel Elsene (Kastelein, Flagey, Matonge, Elsense vijvers) voor particulieren en handelszaken, met één bezoek voor binnen en buiten.`,
      ],
      faqs: [
        {
          question: "Reinigen jullie de winkeletalages aan het Kasteleinsplein en Flagey?",
          answer:
            "Ja, we werken regelmatig aan de winkeletalages in die wijken. Voor handelszaken raden we een maandelijkse beurt aan zodat uw zaak er altijd verzorgd uitziet; onderhoudscontracten op maat van uw activiteit zijn mogelijk.",
        },
        {
          question:
            "Kunnen jullie de ramen van een appartement op een verdieping in een art-nouveaugebouw reinigen?",
          answer:
            "Ja. We reinigen de binnenkant vanuit het appartement en de buitenkant die bereikbaar is van binnenuit of vanaf een balkon. Voor ruiten buiten bereik kunnen we vaak met de telescopische steel vanaf de straat werken; stuur ons een foto van de gevel en we stellen bij de offerte de juiste oplossing voor.",
        },
        {
          question: "Gaan jullie voorzichtig om met de oude houten raamkaders in Elsense gebouwen?",
          answer:
            "Ja. Bij de originele raamkaders, die veel voorkomen in de art-nouveau- en art-decobouw van Elsene, vermijden we agressieve producten en werken we zorgvuldig rond stopverf en vermoeid schilderwerk. Als een raamkader beschadigd lijkt, laten we het u weten.",
        },
      ],
    },
  },
  uccle: {
    "nettoyage-vitres": {
      h1: "Ramen en grote ruiten in Ukkel: wassen zonder strepen",
      metaTitle: "Ramen wassen in Ukkel (1180) | CleanNgo",
      metaDescription:
        "Ramen wassen voor villa's en huizen in Ukkel: grote ruiten, veranda's, raamkaders. Zorgvuldig werk in Fort-Jaco, Sint-Job, Sterrenwacht. Gratis offerte.",
      intro: [
        `In Ukkel, de groenste gemeente van het Brussels Gewest, zetten de villa's en open bebouwing van Fort-Jaco, Sint-Job of de Sterrenwacht vaak in op grote ramen om van het uitzicht op de tuinen te genieten, waardoor sporen van pollen en sap vanaf de eerste mooie dagen extra opvallen.`,
        `De nabijheid van het Zoniënwoud brengt evenveel groen als beperkingen mee: pollen in de lente, sapresten en kleine bladeren hopen zich op op de ruiten en op de houten of aluminium raamkaders van de vrijstaande huizen. Een reiniging met de trekker, aangevuld met een ontvetter voor organische resten, voorkomt kleverige aanslag die het glas blijvend dof maakt.`,
        `We werken in heel Ukkel, van Kalevoet tot rond de Sterrenwacht, met een beurt binnen en buiten in één bezoek, ook op veranda's en grote ramen aan de tuinkant.`,
      ],
      faqs: [
        {
          question:
            "Hebben ramen aan de tuinkant, die in Ukkel veel pollen krijgen, vaker onderhoud nodig?",
          answer:
            "Ja. In groene wijken zoals Fort-Jaco of rond de Sterrenwacht hopen pollen en sap zich sneller op op de grote ramen aan de tuinkant. Voor die extra blootgestelde gevels raden we een bijkomende beurt in de lente aan.",
        },
        {
          question: "Reinigen jullie ook de veranda's van villa's in Ukkel?",
          answer:
            "Ja. De verticale ramen en, als het bereikbaar is, het dak van de veranda kunnen in dezelfde beurt behandeld worden. Onder de grote bomen van Ukkel verzamelt een glazen dak bladeren en sap: regelmatig reinigen maakt het weer helder.",
        },
        {
          question: "Wanneer plant u het best het ramen wassen in Ukkel?",
          answer:
            "Twee beurten dekken de kritieke periodes: één op het einde van de lente, na het pollenseizoen, en één in de herfst, na de bladval. Dat ritme raden we aan voor huizen met een tuin.",
        },
      ],
    },
  },
  waterloo: {
    "nettoyage-vitres": {
      h1: "Ramen wassen in Waterloo: grote ruiten en veranda's zonder strepen",
      metaTitle: "Ramen wassen in Waterloo (1410) | CleanNgo",
      metaDescription:
        "Ramen en veranda's wassen voor villa's in Waterloo. Grote ramen aan de tuinkant, raamkaders, ruiten op hoogte. Zorgvuldig werk, gratis offerte.",
      intro: [
        `In Waterloo vallen de woningen in het oude centrum, in Chenois of in Bourgeois op door grote villa's met tuin, vaak met veranda's en royale ramen naar buiten gericht, veel meer dan in de dichte Brusselse stadskern.`,
        `Die glasoppervlakken, groter dan gemiddeld, vragen aangepast materiaal: een telescopische steel voor de hoge ruiten van veranda's, een precisietrekker voor grote ramen zonder een wazige zone in het midden. De nabijheid van het Zoniënwoud zorgt bovendien voor pollen en plantenresten op de raamkaders aan de buitenkant.`,
        `We werken in de hele gemeente, van het oude centrum tot Bourgeois, voor een resultaat zonder strepen op grote ramen en veranda's, binnen en buiten in één bezoek.`,
      ],
      faqs: [
        {
          question:
            "Reinigen jullie de grote ramen en veranda's die typisch zijn voor villa's in Waterloo?",
          answer:
            "Ja, dat is een veelvoorkomende situatie in Waterloo. We gebruiken de telescopische steel voor de hoge delen van veranda's en een brede trekker voor grote ramen, zodat er geen wazige zone in het midden van het glas achterblijft, wat vaak gebeurt met ongeschikt materiaal.",
        },
        {
          question: "Komen jullie naar Waterloo, terwijl jullie in Brussel gevestigd zijn?",
          answer:
            "Ja, Waterloo hoort bij ons gewone werkgebied in Waals-Brabant, net als de Brusselse gemeenten. Een offerte aanvragen gaat op dezelfde manier, gratis en vrijblijvend.",
        },
        {
          question: "Bieden jullie regelmatig onderhoud van de ramen aan voor villa's in Waterloo?",
          answer:
            "Ja. Voor grote glasoppervlakken voorkomt een gepland onderhoud, bijvoorbeeld in de lente en de herfst, dat kalk en plantenresten zich vastzetten. We kunnen een onderhoudscontract op maat van uw woning afspreken.",
        },
      ],
    },
  },
  "woluwe-saint-lambert": {
    "nettoyage-vitres": {
      h1: "Ramen wassen in Sint-Lambrechts-Woluwe: van Kapelleveld tot het Woluwepark",
      metaTitle: "Ramen wassen in Sint-Lambrechts-Woluwe (1200) | CleanNgo",
      metaDescription:
        "Ramen wassen voor tuinwijkwoningen en appartementsgebouwen in Sint-Lambrechts-Woluwe. Kapelleveld, Georges Henri, Woluwelaan. Gratis offerte.",
      intro: [
        `Sint-Lambrechts-Woluwe combineert twee heel verschillende soorten bebouwing: de tuinwijkhuizen uit het interbellum in de wijk Kapelleveld, met kleine ruitjes, en de recentere appartementsgebouwen langs de Woluwelaan, met brede ramen.`,
        `In de wijk Georges Henri en rond het Woluwepark zet het vele groen het hele jaar door pollen en stof af op de ruiten. Bij de tuinwijkhuizen zorgen de ramen met roedeverdeling voor extra randen en naden die één voor één behandeld moeten worden voor een resultaat echt zonder strepen.`,
        `We werken in de hele gemeente, van Kapelleveld tot Herendal, met een reiniging binnen en buiten die past bij elk type raamkader, oud of nieuw.`,
      ],
      faqs: [
        {
          question:
            "Vragen de ramen met roedeverdeling van de huizen in Kapelleveld meer tijd om te reinigen?",
          answer:
            "Ja, de ramen met kleine ruitjes die typisch zijn voor de tuinwijkhuizen van Kapelleveld tellen meer naden en randen die apart behandeld moeten worden. We houden daar rekening mee in onze planning om op elk ruitje een resultaat zonder strepen te garanderen.",
        },
        {
          question: "Werken jullie ook in de appartementsgebouwen aan de Woluwelaan?",
          answer:
            "Ja. Voor appartementen reinigen we de brede ramen vanuit het interieur en vanaf de balkons. Voor de beglazing in gemeenschappelijke delen (inkomhallen, trappenhuizen) kunnen we een offerte opmaken voor de syndicus.",
        },
        {
          question: "Zijn de oude ruiten van de tuinwijkhuizen kwetsbaarder?",
          answer:
            "Ze vragen inderdaad meer voorzichtigheid: het originele glas is soms dunner en de stopverf ouder. We werken met de hand, met inwasser en trekker, zonder op de ruitjes of de roeden te drukken.",
        },
      ],
    },
  },
  etterbeek: {
    "nettoyage-vitres": {
      h1: "Ramen wassen in Etterbeek: smalle gevels in de Jourdanwijk",
      metaTitle: "Ramen wassen in Etterbeek (1040) | CleanNgo",
      metaDescription:
        "Ramen wassen voor herenhuizen en appartementsgebouwen in Etterbeek. Jourdanwijk, Jubelpark, hoge ramen zonder strepen. Gratis offerte.",
      intro: [
        `In Etterbeek hebben de rijherenhuizen van de Jourdanwijk en de appartementsgebouwen bij het Jubelpark en de Europese instellingen smalle gevels met hoge ramen, een stijl die weinig ruimte laat voor een reiniging zonder professioneel materiaal.`,
        `In een drukke straat zoals in de Jourdanwijk of de Jachtwijk is het vaak onmogelijk om vanaf het voetpad veilig de bovenkant van een raam op de bel-etage te bereiken zonder ladder of steel. Met een telescopische steel met zuiver water bereiken we die hoge ruiten zonder stelling, zelfs in een smalle straat.`,
        `We werken in heel Etterbeek, van de Jourdanwijk tot de Jachtwijk, met een resultaat zonder strepen op hoge ramen en op etalages bij de Europese instellingen.`,
      ],
      faqs: [
        {
          question:
            "Hoe reinigen jullie de hoge ramen van de herenhuizen in de Jourdanwijk zonder stelling?",
          answer:
            "We gebruiken een telescopische steel met zuiver water, waarmee we de hoge ramen die typisch zijn voor de herenhuizen in Etterbeek veilig bereiken, zonder stelling en zonder een vaak smalle straat te versperren.",
        },
        {
          question:
            "Reinigen jullie de ramen van een appartement op het einde van de huur in Etterbeek?",
          answer:
            "Ja. Bij de Europese instellingen wisselen huurwoningen vaak van bewoner: de ramen kunnen apart gereinigd worden of als deel van een volledige eindschoonmaak voor de plaatsbeschrijving, zodat u de woning in perfecte staat oplevert.",
        },
        {
          question: "Bieden jullie contracten aan voor etalages en kantoren rond het Jourdanplein?",
          answer:
            "Ja. Voor handelszaken en kantoren in de Jourdanwijk of bij het Jubelpark raden we een maandelijkse beurt aan en bieden we onderhoudscontracten op maat van uw activiteit.",
        },
      ],
    },
  },
  "watermael-boitsfort": {
    "nettoyage-vitres": {
      h1: "Ramen wassen in Watermaal-Bosvoorde: van Le Logis-Floréal tot het Zoniënwoud",
      metaTitle: "Ramen wassen in Watermaal-Bosvoorde (1170) | CleanNgo",
      metaDescription:
        "Ramen wassen voor tuinwijkhuizen en villa's in Watermaal-Bosvoorde. Le Logis-Floréal, La Vénerie, aan de rand van het bos. Gratis offerte.",
      intro: [
        `Watermaal-Bosvoorde is samen met Ukkel een van de groenste gemeenten van Brussel, pal tegen het Zoniënwoud. De huizen van de tuinwijk Le Logis-Floréal en de villa's van La Vénerie profiteren van die nabijheid, maar hun ramen dragen er ook de gevolgen van: pollen, sap en organische aanslag hopen zich sneller op dan in de stad.`,
        `Op ramen die naar het bladerdak gericht zijn, vragen die kleverige resten een aangepaste ontvetter bovenop de klassieke beurt met de trekker, anders blijft er zelfs na de reiniging een doffe waas. Woningen bij de Vijvers van Bosvoorde kennen een gelijkaardige blootstelling, met een vochtige omgeving die ook kalksporen in de hand werkt.`,
        `We werken in de hele gemeente, van Le Logis-Floréal tot de Vijvers van Bosvoorde, met een reiniging binnen en buiten in één bezoek, aangepast aan ruiten die blootstaan aan het omringende groen.`,
      ],
      faqs: [
        {
          question:
            "Laat het pollen van het Zoniënwoud meer vlekken na op de ramen in Watermaal-Bosvoorde?",
          answer:
            "Ja, door de directe nabijheid van het Zoniënwoud hopen pollen en plantenresten zich sneller op op de ruiten, vooral in de lente. We gebruiken een ontvetter die geschikt is voor die organische resten, om de doffe waas te vermijden die ze na een klassieke reiniging achterlaten.",
        },
        {
          question: "Vragen de huizen van Le Logis-Floréal bijzondere voorzorgen?",
          answer:
            "Ja. De tuinwijken Le Logis en Floréal zijn beschermd erfgoed, met veel originele raamkaders. We gebruiken zachte producten en werken met de hand om het schrijnwerk en de oude ruiten te sparen.",
        },
        {
          question: "Hoe verwijdert u kalksporen op de ramen bij de Vijvers van Bosvoorde?",
          answer:
            "De vochtige omgeving bij de vijvers bevordert kalkaanslag. We gebruiken afgestemde ontkalkingsmiddelen, gevolgd door een beurt met de trekker, om die sporen te verwijderen zonder het glas te krassen.",
        },
      ],
    },
  },
};
