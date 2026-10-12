import type { ServiceText } from "./services";

// English (British) service content, keyed by service id (the French slug).
export const servicesEn: Record<string, ServiceText> = {
  "nettoyage-vitres": {
    name: "Window & frame cleaning",
    h1: "Window cleaning in Brussels: streak-free results",
    processTitle: "our window cleaning",
    metaTitle: "Window cleaning in Brussels | Window cleaner | CleanNgo",
    description:
      "Spotless windows change the feel of your home and lift the image of your shop or business. We use professional squeegee and telescopic pole techniques to remove limescale, fingerprints and grime without leaving marks. Windows, patio doors, shopfronts, skylights and frames are cleaned inside and out.",
    metaDescription:
      "Professional window cleaning in Brussels and the surrounding area. Windows, patio doors, shopfronts, skylights, inside and out. Streak-free results.",
    quote:
      "A clean window changes the whole feel of a room. More light, more clarity, and fewer ‘why is it blurry there?’ moments.",
    editorial: `Dirty windows aren't just a cosmetic issue: grimy glass can block up to 30% of natural light, and in Brussels houses and flats where every square metre of daylight counts, that's a real loss every day. For shops and shopfronts, dull glass sends a negative signal before a customer even walks through the door.

DIY window cleaning rarely gives a truly satisfying result. Ordinary household products leave residue that attracts dust, and without a professional squeegee and the right technique you often end up with as many streaks as before. An experienced window cleaner works with carefully dosed descaling solutions, a precision squeegee and lint-free cloths, the combination that delivers lasting, streak-free glass, including the frames and tracks that are so often overlooked.

We work across Brussels and Brabant: houses, flats, shops, shopfronts, skylights and patio doors. A complete inside and outside clean in a single visit, with particular attention to the frames and sills where limescale builds up.`,
    features: [
      "Interior window cleaning",
      "Accessible exterior windows",
      "Frames dusted and wiped",
      "Deep clean of sills and tracks",
      "Removal of marks, streaks, pollen and smudges",
      "Lint-free final polish",
    ],
    faqItems: [
      {
        question: "Do you also clean high windows?",
        answer:
          "Yes, we use professional telescopic poles to reach high windows safely, without the need for scaffolding in most cases.",
      },
      {
        question: "How often should windows be cleaned?",
        answer:
          "For a home, twice a year is usually enough. For shops and shopfronts, we recommend a monthly visit to keep a polished image. We offer tailored contracts.",
      },
      {
        question: "Does the clean include frames and tracks?",
        answer:
          "Yes, frames, sills and tracks are included. Dust and limescale build-up in the tracks is often overlooked but essential for a truly clean result.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assessing the glazing",
        description:
          "We identify the type of glazing (single, double, skylights) and the level of limescale or dirt, then set the pressure and choose the right descaling product.",
      },
      {
        step: "02",
        title: "Squeegee cleaning",
        description:
          "The cleaning solution is applied to each pane and removed with a professional squeegee. Frames and sills are cleaned at the same time with lint-free cloths.",
      },
      {
        step: "03",
        title: "High windows by pole",
        description:
          "Glass that can't be reached by hand is cleaned with a pure-water telescopic pole, with no scaffolding and no streaks.",
      },
      {
        step: "04",
        title: "Final polish and tracks",
        description:
          "Edges, seals and sliding tracks are wiped down. Every pane is inspected to remove any streak before we leave.",
      },
    ],
  },
  "panneaux-solaires": {
    name: "Solar panels",
    h1: "Solar panel and photovoltaic panel cleaning in Brussels",
    processTitle: "our solar panel cleaning",
    metaTitle: "Solar panel cleaning in Brussels | CleanNgo",
    description:
      "Dirty solar panels can lose up to 30% of their energy output. Our eco-friendly cleaning service uses demineralised water and soft brushes to remove dust, bird droppings, pollen and limescale without damaging the photovoltaic cells. Get back to optimal production and protect your investment for the long term.",
    metaDescription:
      "Solar panel cleaning in Brussels and the surrounding area. Demineralised water, no damage to the cells. Recover up to 30% of lost output.",
    quote:
      "Dirty panels mean wasted energy. Regular cleaning is an investment that pays for itself, and it protects your cells.",
    editorial: `An investment in photovoltaic panels pays off over the long term, as long as the cells work at full capacity. In the city and around Brussels, dirt builds up quickly: bird droppings, spring pollen, industrial dust and limescale can cut energy output by 15 to 30% within a few months. What you can't see shows up directly on your electricity bill.

Solar panel cleaning isn't something to improvise. Tap water contains limescale which, as it dries, leaves microscopic deposits on the cells: exactly what you want to avoid. The professional method relies on demineralised water, which evaporates without residue, combined with soft brushes designed specifically for photovoltaic surfaces. No aggressive pressure, no chemicals that could damage the seals.

We work safely on pitched roofs across Brussels and Brabant, with all the necessary protective equipment. After every visit, you receive a report with before and after photos so you can see the recovered output for yourself.`,
    features: [
      "Cleaning with demineralised water",
      "Soft brushes suited to photovoltaic cells",
      "Removal of droppings, pollen and limescale",
      "Visual check of the fixings",
      "Cleaning report included",
      "Safe work at height",
    ],
    faqItems: [
      {
        question: "How often should solar panels be cleaned?",
        answer:
          "We recommend cleaning once or twice a year, ideally in spring after the pollen season and in autumn after the leaves fall. In urban or farming areas, more frequent cleaning may be worthwhile.",
      },
      {
        question: "Can demineralised water damage the photovoltaic cells?",
        answer:
          "No, it's actually the safest method. Demineralised water leaves no limescale and is used with soft brushes designed for solar panels, with no risk to the cells.",
      },
      {
        question: "Do you work safely on pitched roofs?",
        answer:
          "Yes, our teams are trained and equipped for work at height on pitched roofs, with the required personal protective equipment. Safety is our priority.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Visual check on the roof",
        description:
          "We inspect the condition of the panels, fixings and cables before starting. We assess how dirty they are (droppings, pollen, limescale).",
      },
      {
        step: "02",
        title: "Demineralised pre-rinse",
        description:
          "A rinse to soften dried-on deposits, especially hardened droppings, without any risk of scratching the photovoltaic cells.",
      },
      {
        step: "03",
        title: "Gentle brushing of the cells",
        description:
          "Soft solar panel brushes are worked over the whole surface. Pressure is kept low to protect the cells and the seals.",
      },
      {
        step: "04",
        title: "Final rinse and report",
        description:
          "A final rinse with demineralised water that evaporates without leaving limescale. You receive a report with before and after photos.",
      },
    ],
  },
  "nettoyage-veranda": {
    name: "Conservatories & skylights",
    processTitle: "our conservatory cleaning",
    metaTitle: "Conservatory and skylight cleaning in Brussels | CleanNgo",
    description:
      "Conservatories and skylights collect dust, limescale and algae on their glazing and on their aluminium or uPVC frame. Our inside and outside clean restores the clarity of your glass and the shine of the frame, so you can make the most of the natural light. We work safely at height, with products suited to each material.",
    metaDescription:
      "Conservatory and skylight cleaning in Brussels and the surrounding area. Glazing inside and out, limescale, aluminium or uPVC frames. Free quote.",
    quote:
      "A conservatory is there to let the light in. When the glass is clean, you rediscover the space you have.",
    editorial: `A conservatory is the part of the house most exposed to the elements, and the hardest to keep properly clean. Glass that faces the sky builds up successive layers of limescale, algae and pollen that gradually cloud it over. The aluminium or uPVC frame, exposed to UV and weather, turns dull and holds marks that a simple wipe won't shift.

Cleaning a conservatory comes with its own challenges: both sides of sloping glass have to be cleaned together, the frame has to be treated without damaging the seals, and often long-standing limescale has to be removed without scratching. Shop-bought products usually aren't made for this level of dirt: experienced window cleaners use glass-specific descalers applied with a controlled contact time.

We take care of conservatories and skylights from top to bottom (glazing inside and out, aluminium or uPVC frame, sliding tracks and seals) across Brussels and Brabant. The result: clear glass again, maximum light, with no streaks or limescale.`,
    features: [
      "Glazing cleaned inside and out",
      "Limescale treatment",
      "Aluminium or uPVC frame cleaning",
      "Safe work at height",
      "Products suited to each material",
      "Streak-free, gleaming finish",
    ],
    faqItems: [
      {
        question: "Do you clean the conservatory inside and out in a single visit?",
        answer:
          "Yes, our visit always covers both sides of the glazing as well as the frame. Doing everything in one visit is more efficient and saves you extra appointments.",
      },
      {
        question: "Can limescale be removed completely?",
        answer:
          "In the vast majority of cases, yes. We use descalers made specifically for glass. On very old, thick limescale the result is much better, but a slight mark may remain.",
      },
      {
        question: "Are your products suitable for aluminium and uPVC frames?",
        answer:
          "Yes, we choose our products according to the material. Our aluminium and uPVC cleaners are non-abrasive and won't damage the seals, profiles or finish of your conservatory.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Limescale and algae check",
        description:
          "We assess how thick the limescale is on the glazing and whether there is algae on the aluminium or uPVC frame before starting.",
      },
      {
        step: "02",
        title: "Applying the descaler",
        description:
          "A glass-specific descaler is sprayed on the inside and outside. The contact time depends on how old the deposits are.",
      },
      {
        step: "03",
        title: "Cleaning the frame",
        description:
          "The aluminium or uPVC profiles, seals and sliding tracks are brushed and wiped with non-abrasive products that respect the surface finish.",
      },
      {
        step: "04",
        title: "Rinse and gleaming finish",
        description:
          "The glazing is fully rinsed with pure water and dried with a squeegee for a streak-free result. Each pane is checked in natural light.",
      },
    ],
  },
  "nettoyage-parties-communes": {
    name: "Communal area cleaning",
    h1: "Communal area cleaning in Brussels: entrance halls, stairwells & apartment buildings",
    processTitle: "our communal area cleaning",
    metaTitle: "Communal area cleaning in Brussels: building managers & co-owners | CleanNgo",
    description:
      "The entrance hall and stairwell are the first impression a building gives, to residents and visitors alike. We provide regular cleaning of communal areas for building managers (syndics) and owners' associations: entrance halls, stairs, landings, lifts, glass doors and utility rooms. A visit on a fixed day, following a cleaning specification we agree on together.",
    metaDescription:
      "Communal area cleaning in Brussels and the surrounding area: entrance halls, stairs, landings, lifts. Regular contracts for building managers and co-owners. Free quote.",
    quote:
      "The entrance hall is the building's calling card. When it is clean every week, residents notice, and the building manager gets fewer complaints.",
    editorial: `In a jointly owned building, the communal areas are used by everyone and looked after by no one in particular. Entrance halls, stairs and landings take all the building's foot traffic: footprints on rainy days, dust in the corners of the steps, fingerprints on the glass doors, the handrails and the letterboxes. Without regular cleaning, a building goes downhill fast and the subject ends up as a bone of contention at the general meeting.

Effective communal area cleaning relies on a fixed schedule and a clear specification. Some tasks come back at every visit: sweeping and mopping the stairs and the entrance hall, wiping the contact points (handrails, door handles, lift buttons), cleaning the glass front door. Others are scheduled at regular intervals: stairwell windows, skirting boards, cobwebs, the bin store, cellars and the bike store. Each floor surface (Belgian bluestone, marble, terrazzo, tiles, lino) is cleaned with a product that suits it.

We work with professional building managers, volunteer syndics and co-owners in Brussels and the surrounding area, from small buildings to residences with several stairwells. Weekly, fortnightly or monthly visits depending on the size and use of the building, and one-off cleans after a move, after works or before a general meeting.`,
    features: [
      "Entrance halls and lobbies",
      "Stairwells, steps and handrails",
      "Landings and corridors",
      "Lifts: car, mirrors and doors",
      "Glass doors, letterboxes and handles",
      "Bin stores, cellars and bike stores",
    ],
    faqItems: [
      {
        question: "Do you work with building managers and owners' associations?",
        answer:
          "Yes, that is what this service is built around. We work with professional building managers (syndics), volunteer syndics and co-owners. After visiting the building, we draw up a quote and a specification setting out the tasks and how often we come.",
      },
      {
        question: "How often should communal areas be cleaned?",
        answer:
          "For most buildings, one visit a week is enough. Busy buildings may need two visits a week, while small co-ownerships can manage with a visit every fortnight. Deeper tasks (windows, skirting boards, cellars) are scheduled on top, for example monthly or quarterly.",
      },
      {
        question: "Does someone need to be there during the visits?",
        answer:
          "No. The building manager gives us a key, fob or access code and we agree on a fixed day. Our teams are insured and work discreetly. If we notice a problem in the building (a blown bulb, damage, dumped bulky waste), we report it to the building manager.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site visit and specification",
        description:
          "A walk round the building with the building manager or a co-owner: surfaces, floor coverings, number of floors and problem spots. Together we decide the tasks for each visit and the periodic tasks.",
      },
      {
        step: "02",
        title: "Contact points and dusting",
        description:
          "Handrails, door handles, switches, lift buttons and letterboxes wiped and disinfected. Window sills, radiators and door frames dusted.",
      },
      {
        step: "03",
        title: "Stairs and landings",
        description:
          "Sweeping or vacuuming from top to bottom, then mopping the steps and landings with a product suited to the floor: Belgian bluestone, marble, terrazzo, tiles or lino.",
      },
      {
        step: "04",
        title: "Entrance hall and final check",
        description:
          "Mopping the entrance hall and cleaning the doormats, the glass front door and the lift car. A final check round the building before we lock up.",
      },
    ],
  },
  "nettoyage-post-travaux": {
    name: "After-builders cleaning",
    processTitle: "our after-builders cleaning",
    metaTitle: "After-builders cleaning in Brussels: building & renovation | CleanNgo",
    description:
      "After renovation or building work, fine dust and residue get everywhere. Our after-builders cleaning service removes plaster, silicone, glue, paint and debris from every surface: floors, windows, switches, skirting boards and suspended ceilings. You get back a space that is ready to live in or hand over, with no marks or residue.",
    metaDescription:
      "After-builders cleaning in Brussels and the surrounding area. Plaster, silicone and paint removed from every surface. Space ready to live in. Free quote.",
    quote:
      "After building work, dust settles everywhere, even where you never look. We take care of it, and you get back a space that's ready to live in.",
    editorial: `After renovation or building work, construction dust finds its way into unlikely places: behind sockets, in ventilation ducts, on top of doors, in window tracks. What you can see is only part of the problem: fine particles of plaster and sanding dust settle everywhere and keep getting stirred back into the air for days if they aren't vacuumed up properly.

After-builders cleaning calls for equipment you won't find in an ordinary household: industrial vacuums with HEPA filters to capture plaster residue and fine dust, specialist scrapers to remove silicone and paint splashes from glass and tiles, and products suited to new finishes. Using a standard household vacuum on construction dust often just spreads the particles around the room instead of removing them.

We step in at the end of the job across Brussels and the surrounding area (house, flat and commercial renovations) and hand you back a clean space with no residue, ready to move into or to hand over to the end client.`,
    features: [
      "Removal of fine construction dust",
      "Windows and frames cleaned",
      "Residue removed (plaster, silicone, paint)",
      "Floors, skirting boards and suspended ceilings",
      "Switches, sockets and woodwork",
      "Space handed over ready to live in",
    ],
    faqItems: [
      {
        question: "What kind of building residue do you remove?",
        answer:
          "We remove all the usual building residue: plaster dust, silicone splashes, glue residue, paint spatters, cement deposits and general debris on every surface.",
      },
      {
        question: "Do you come at the end of the job or during the works too?",
        answer:
          "We mainly work at the end of the job, once the works are finished. For large projects in several phases, we can arrange interim cleans on request.",
      },
      {
        question: "Can I combine an after-builders clean with a deep clean?",
        answer:
          "Yes, and it's often recommended. Once the building residue is gone, an additional deep clean gives your space a complete refresh. Contact us for a combined quote.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Removing fine debris",
        description:
          "Industrial vacuuming of plaster, concrete and sanding dust from every surface, including suspended ceilings and ventilation ducts.",
      },
      {
        step: "02",
        title: "Removing stuck-on residue",
        description:
          "Scraping off silicone, glue, paint and cement from glazing, tiles and woodwork, using the right tool for each surface.",
      },
      {
        step: "03",
        title: "Frames and joinery",
        description:
          "Dusting and wiping door and window frames, sockets and switches, which are often forgotten but especially dusty after building work.",
      },
      {
        step: "04",
        title: "Floors and handover",
        description:
          "Vacuuming then mopping the floors (tiles, new parquet, polished concrete) with a suitable product. A final check of every room before the keys are handed over.",
      },
    ],
  },
  "nettoyage-etat-des-lieux": {
    name: "End-of-tenancy cleaning",
    processTitle: "our end-of-tenancy cleaning",
    metaTitle: "End-of-tenancy and move-in cleaning in Brussels | CleanNgo",
    description:
      "A smooth inventory check depends on a spotless handover or a flawless preparation. Our service covers a complete clean of the property at the end of the lease for a hassle-free check-out, or a full refresh of a home before you move in. Cupboards, bathroom, kitchen, floors and windows: every surface is cleaned so the result is beyond dispute.",
    metaDescription:
      "End-of-tenancy cleaning in Brussels and the surrounding area. Full clean for moving out of or into a rental. Cleaning certificate available.",
    quote:
      "An inventory check is unforgiving. We make sure every surface is flawless, so you get your deposit back without any argument.",
    editorial: `Handing back a rental is a stressful moment: a failed check-out inspection can lead to deductions from your deposit for cleanliness issues that could have been avoided. Landlords and estate agents in Brussels and Brabant are often stricter than people expect (oven, extractor hood, bathroom grout, inside cupboards, skirting boards): every surface is checked methodically.

Preparing a property for an inventory check goes well beyond a standard deep clean. It means meeting a precise checklist: full descaling of taps and bathroom fittings, degreasing the oven and extractor hood right down to the filters, the inside of cupboards and drawers, streak-free windows, residue-free floors. A professional end-of-tenancy clean follows exactly that logic, room by room, without missing anything.

On request, we provide a cleaning certificate confirming our visit, a useful document to back up your position when handing back the keys. Whether you're moving out of a rental or getting ready to move into a new home, the service is adapted to your situation.`,
    features: [
      "Full clean before the move-in inspection",
      "Deep clean for the check-out inspection",
      "Cupboards, drawers and storage",
      "Bathroom and kitchen deep cleaned",
      "Floors, skirting boards and windows",
      "Cleaning certificate available",
    ],
    faqItems: [
      {
        question: "Can you provide a cleaning certificate for the inventory check?",
        answer:
          "Yes, on request we provide a document confirming our visit, useful at the check-out inspection to show the property was handed back in spotless condition.",
      },
      {
        question: "How far ahead of the inventory check should I book?",
        answer:
          "We recommend booking at least 48 to 72 hours in advance. At the end of the month, when demand is high, book a week ahead to be sure of a slot.",
      },
      {
        question: "Do you also clean cupboards, drawers and built-in storage?",
        answer:
          "Yes, cupboards, drawers, shelves and built-in storage are always emptied and cleaned. It's a point often checked during inspections and we give it particular attention.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Surface inventory",
        description:
          "A room-by-room list of the usual inspection checkpoints: bathroom grout, inside the oven, extractor hood filters, marks on the walls.",
      },
      {
        step: "02",
        title: "Kitchen deep clean",
        description:
          "Full degreasing of the extractor hood, oven and hob. Inside and outside of cupboards, worktop joints and tiles included.",
      },
      {
        step: "03",
        title: "Bathroom and toilets",
        description:
          "Descaling of taps, grout and shower trays. Toilet disinfected, mirrors cleaned and every corner of the bath or shower done.",
      },
      {
        step: "04",
        title: "Floors, windows and finishing",
        description:
          "All floors mopped, interior windows, sills and skirting boards cleaned. A point-by-point check with you before your inventory inspection.",
      },
    ],
  },
  "bureaux-commerces": {
    name: "Offices & shops",
    processTitle: "our office and shop cleaning",
    metaTitle: "Office and shop cleaning in Brussels | CleanNgo",
    description:
      "A clean, healthy workplace boosts productivity, your company's image and your staff's wellbeing. We clean your offices, open-plan spaces, meeting rooms, toilets and shared areas on a schedule that suits your business: early morning, evening or at the weekend. Regular maintenance contracts or one-off visits available.",
    metaDescription:
      "Office and shop cleaning in Brussels. Workstations, toilets, shared areas. Regular or one-off contracts. Free quote.",
    quote:
      "A clean workplace is about more than image. It's what lets your teams perform and keeps your clients coming back.",
    editorial: `A poorly kept workplace leaves a lasting impression, and rarely a good one. For clients and partners visiting your premises, the state of an office or shop directly reflects the care you put into your business. For your staff, working in a clean environment has a measurable impact on focus, comfort and absenteeism. It's not a luxury: it's a working condition.

Calling in a professional cleaning company fundamentally changes the standard of the result. A trained technician knows how to treat different floor coverings properly, disinfect high-touch areas (handles, switches, keyboards) and work through every space in a logical, documented order: open-plan area, toilets, staff kitchen, meeting room.

As a cleaning company in Brussels, we offer tailored maintenance contracts built around your business and your hours. Our teams work early in the morning, in the evening or at the weekend so they never disrupt your operations. Weekly, fortnightly or monthly: the frequency and scope are agreed with you, not imposed.`,
    features: [
      "Workstations and desks",
      "Meeting rooms and shared areas",
      "Toilets and changing rooms",
      "Handles, switches and touch points",
      "Floors (vacuuming, mopping, maintenance)",
      "Visits on your schedule (morning, evening, weekend)",
    ],
    faqItems: [
      {
        question: "Do you work outside office hours?",
        answer:
          "Yes, we adapt our hours to your business. We work early in the morning before opening, in the evening after closing or at the weekend so we don't disrupt your work.",
      },
      {
        question: "Do you offer maintenance contracts for businesses?",
        answer:
          "Yes, we offer tailored maintenance contracts: weekly, fortnightly or monthly. Regular contracts benefit from a preferential rate and a dedicated team.",
      },
      {
        question: "Which areas of the office do you cover?",
        answer:
          "We cover every area: private offices, open-plan spaces, meeting rooms, corridors, staff kitchens, toilets, changing rooms and reception areas.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site audit and schedule",
        description:
          "Mapping out the areas (open-plan, meeting rooms, toilets, reception) and setting a schedule around your hours for zero disruption.",
      },
      {
        step: "02",
        title: "Workstations and screens",
        description:
          "Dusting of screens, keyboards, phones and lights. Desks are wiped with anti-static microfibre cloths to stop dust settling again.",
      },
      {
        step: "03",
        title: "Toilets and staff kitchen",
        description:
          "Full disinfection of touch points (handles, switches, taps). Consumables (soap, hand towels) restocked from the supplies you provide.",
      },
      {
        step: "04",
        title: "Floors and shared areas",
        description:
          "Vacuuming and mopping according to the floor covering. Corridors, reception and walkways are done last for a result that lasts until opening.",
      },
    ],
  },
  "nettoyage-terrasse": {
    name: "Patios & driveways",
    h1: "Patio and driveway cleaning in Brussels: pressure washing",
    processTitle: "our patio cleaning",
    metaTitle: "Patio and driveway cleaning in Brussels | CleanNgo",
    description:
      "Timber decking, concrete slabs, block paving, outdoor tiles or driveways: every surface deserves the right care. With pressure washing, we remove moss, green stains, oil and ingrained dirt to give your outdoor spaces a clean, safe look again. A water-repellent treatment can be applied afterwards for long-lasting protection.",
    metaDescription:
      "Patio and driveway cleaning in Brussels. Pressure washing on timber, slabs, paving and tiles. Optional water-repellent treatment. Free quote.",
    quote:
      "Your outdoor spaces deserve as much attention as your interior. After a professional clean, they get their shine and safety back.",
    editorial: `Patios and driveways collect everything the inside of a house never sees: damp moss between the joints, barbecue stains, green deposits on paving, limescale bloom on natural stone. What looked smart when it was laid becomes dull and slippery within a few seasons, and dangerous after rain because of the algae.

Cleaning timber decking is a different job from treating concrete slabs or block paving. Tropical or treated timber can't take just any pressure without splintering or fading; the wrong jet can open up the fibres and weaken the surface. The professional technique is to set the pressure precisely for each surface, use a specialist degreaser on ingrained stains and work in the right direction so the joints aren't forced.

We clean every kind of outdoor surface (timber decking, concrete slabs, block paving, outdoor tiles, driveways and courtyards) in Brussels and the surrounding area. A water-repellent treatment can be added on limestone or timber surfaces for lasting protection against moss coming back.`,
    features: [
      "Pressure washing of surfaces",
      "Timber, slabs, paving, outdoor tiles",
      "Removal of moss and green stains",
      "Treatment of oil and ingrained dirt",
      "Optional water-repellent treatment",
      "Driveways, courtyards and walkways",
    ],
    faqItems: [
      {
        question: "Is the water-repellent treatment included?",
        answer:
          "The water-repellent treatment is an optional extra on top of the basic clean. It's recommended for timber decking and limestone slabs to protect the surface for longer and make future upkeep easier.",
      },
      {
        question: "Do you work in all weather?",
        answer:
          "We work in dry weather. Pressure washing needs a dry surface for the best result. For the water-repellent treatment, the surface must be completely dry after cleaning.",
      },
      {
        question: "Do you also clean garden furniture and barbecues?",
        answer:
          "Yes, on request we can include garden furniture, barbecues and outdoor accessories in our service. Just mention it when you ask for a quote.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Identifying the surface",
        description:
          "Recognising the material (timber, concrete slab, paving, outdoor tile) to set the pressure and pick the right cleaner, especially on tropical timber or limestone.",
      },
      {
        step: "02",
        title: "Moss and weed removal",
        description:
          "An algaecide is applied to the joints and green areas. Moss and plants between the paving are brushed out mechanically before rinsing.",
      },
      {
        step: "03",
        title: "Pressure washing",
        description:
          "The pressure washer goes over the whole surface at a pressure suited to the material. Oil stains, barbecue residue and ingrained dirt are treated with a specialist degreaser.",
      },
      {
        step: "04",
        title: "Water-repellent option",
        description:
          "On timber or limestone, the water-repellent treatment is applied to the dry surface for lasting protection and easier upkeep.",
      },
    ],
  },
  "nettoyage-gouttieres": {
    name: "Gutters & cornices",
    processTitle: "our gutter cleaning",
    metaTitle: "Gutter unblocking and cleaning in Brussels | CleanNgo",
    description:
      "Gutters blocked with leaves, moss and debris cause overflows, leaks and costly water damage. Our gutter and cornice unblocking and cleaning service keeps rainwater draining properly and extends the life of your installation. We also carry out a visual check of the fixings and report any problem we find.",
    metaDescription:
      "Gutter unblocking and cleaning in Brussels. Proper drainage, check of the fixings. Safe work at height. Free quote.",
    quote:
      "You can't see blocked gutters, until the day water starts coming in. Prevention is better than repair.",
    editorial: `Gutters are one of those things nobody ever checks, until they overflow or a damp patch appears on a wall. Yet gutters clogged with leaves, moss or debris build up water pressure which, over repeated freeze-thaw cycles, can warp the profiles, loosen the fixings and lead to leaks into walls or roof structures.

Gutter cleaning isn't a trivial job when it means working at height on a ladder. For houses with upper floors or roofs that are hard to reach, a professional is not only safer but also more thorough. Unblocking gutters isn't just about removing the visible leaves: the downpipes have to be flushed to make sure they aren't blocked further down, and the condition of the fixings, joints and seams has to be checked.

On every job in Brussels and Brabant we carry out a full visual check as standard: any sign of a problem (loose fixing, crack, failing joint) is reported with a photo. A yearly clean in autumn is enough in most cases to prevent leaks before winter.`,
    features: [
      "Gutter unblocking and cleaning",
      "Cornice cleaning",
      "Proper rainwater drainage",
      "Visual check of the fixings",
      "Any problems reported",
      "Safe work at height",
    ],
    faqItems: [
      {
        question: "How do I know if my gutters need cleaning?",
        answer:
          "The most common signs: visible overflow during heavy rain, moss or plants growing in the gutter, damp patches on the wall below it, or simply if they haven't been cleaned for more than a year.",
      },
      {
        question: "How much does gutter cleaning cost in Brussels?",
        answer:
          "The price mainly depends on the length of the gutters, the working height, access, how blocked they are (leaves, moss, debris) and the number of downpipes to check. If repairs are needed, they are quoted separately. We offer a free, transparent, no-obligation quote.",
      },
      {
        question: "How often do you recommend cleaning gutters?",
        answer:
          "Once a year is enough in most cases, ideally in autumn after the leaves have fallen. Houses surrounded by trees may need two cleans a year (spring and autumn).",
      },
      {
        question: "Do you report any damage or problems found during the visit?",
        answer:
          "Yes, always. We carry out a full visual check of the fixings, joints and downpipes. If we find a problem (loose fixing, crack, failing joint), we let you know with a photo.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Inspection from the ground",
        description:
          "Spotting visible blockages (overflowing, plants, sagging) and assessing the length and working height before going up.",
      },
      {
        step: "02",
        title: "Clearing by hand",
        description:
          "Leaves, moss and packed debris are removed from the gutters by hand. Everything is taken away cleanly without dropping it down the front of the house.",
      },
      {
        step: "03",
        title: "Flushing the downpipes",
        description:
          "Flow is tested by flushing with water to check the downpipes are clear all the way down. Unblocked with a flexible rod if needed.",
      },
      {
        step: "04",
        title: "Checking the fixings",
        description:
          "Inspection of brackets, joints and seams. Any problem (loose fixing, crack, failing joint) is photographed and included in the job report.",
      },
    ],
  },
};
