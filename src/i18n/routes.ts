// Localized URL map. Every page is identified by a locale-independent id
// (the French slug, which is also the historical URL) and this module turns
// it into the URL for each locale. Used for links, hreflang alternates, the
// language switcher and the sitemap.
//
// No asset imports here: astro.config.ts imports this module.

import { locales, type Locale } from "./config";
import { communeServiceContent } from "../data/communes";

export type Alternates = Record<Locale, string>;

const prefix = (locale: Locale) => (locale === "fr" ? "" : `/${locale}`);

// ── Static pages ────────────────────────────────────────
export type PageId = "home" | "services" | "contact" | "legal" | "privacy";

const pageSlugs: Record<PageId, Alternates> = {
  home: { fr: "/", nl: "/nl", en: "/en" },
  services: { fr: "/services", nl: "/nl/diensten", en: "/en/services" },
  contact: { fr: "/contact", nl: "/nl/contact", en: "/en/contact" },
  legal: { fr: "/mentions-legales", nl: "/nl/juridische-informatie", en: "/en/legal-notice" },
  privacy: {
    fr: "/politique-de-confidentialite",
    nl: "/nl/privacybeleid",
    en: "/en/privacy-policy",
  },
};

export function pagePath(id: PageId, locale: Locale): string {
  return pageSlugs[id][locale];
}

export function pageAlternates(id: PageId): Alternates {
  return pageSlugs[id];
}

/** Home path with an in-page anchor: "/#faq", "/nl#faq". */
export function homeAnchor(anchor: string, locale: Locale): string {
  return `${locale === "fr" ? "/" : pageSlugs.home[locale]}#${anchor}`;
}

// ── Services ────────────────────────────────────────────
// Keyed by service id (the French slug).
export const serviceSlugs: Record<string, Alternates> = {
  "nettoyage-vitres": { fr: "nettoyage-vitres", nl: "ramen-wassen", en: "window-cleaning" },
  "panneaux-solaires": {
    fr: "panneaux-solaires",
    nl: "zonnepanelen-reinigen",
    en: "solar-panel-cleaning",
  },
  "nettoyage-veranda": {
    fr: "nettoyage-veranda",
    nl: "veranda-reinigen",
    en: "conservatory-cleaning",
  },
  "nettoyage-parties-communes": {
    fr: "nettoyage-parties-communes",
    nl: "schoonmaak-gemene-delen",
    en: "communal-area-cleaning",
  },
  "nettoyage-post-travaux": {
    fr: "nettoyage-post-travaux",
    nl: "bouwschoonmaak",
    en: "after-builders-cleaning",
  },
  "nettoyage-etat-des-lieux": {
    fr: "nettoyage-etat-des-lieux",
    nl: "eindschoonmaak",
    en: "end-of-tenancy-cleaning",
  },
  "bureaux-commerces": {
    fr: "bureaux-commerces",
    nl: "kantoorschoonmaak",
    en: "office-cleaning",
  },
  "nettoyage-terrasse": { fr: "nettoyage-terrasse", nl: "terras-reinigen", en: "patio-cleaning" },
  "nettoyage-gouttieres": {
    fr: "nettoyage-gouttieres",
    nl: "dakgoten-reinigen",
    en: "gutter-cleaning",
  },
};

export function serviceSlug(serviceId: string, locale: Locale): string {
  const slugs = serviceSlugs[serviceId];
  if (!slugs) throw new Error(`Unknown service id: ${serviceId}`);
  return slugs[locale];
}

export function servicePath(serviceId: string, locale: Locale): string {
  return `${pageSlugs.services[locale]}/${serviceSlug(serviceId, locale)}`;
}

export function serviceAlternates(serviceId: string): Alternates {
  return mapLocales((l) => servicePath(serviceId, l));
}

// ── Communes ────────────────────────────────────────────
// Keyed by commune id (the French slug). Brussels communes have an official
// Dutch name; English uses the French name, as most English speakers do.
export const communeSlugs: Record<string, Alternates> = {
  ixelles: { fr: "ixelles", nl: "elsene", en: "ixelles" },
  uccle: { fr: "uccle", nl: "ukkel", en: "uccle" },
  waterloo: { fr: "waterloo", nl: "waterloo", en: "waterloo" },
  "woluwe-saint-lambert": {
    fr: "woluwe-saint-lambert",
    nl: "sint-lambrechts-woluwe",
    en: "woluwe-saint-lambert",
  },
  etterbeek: { fr: "etterbeek", nl: "etterbeek", en: "etterbeek" },
  "watermael-boitsfort": {
    fr: "watermael-boitsfort",
    nl: "watermaal-bosvoorde",
    en: "watermael-boitsfort",
  },
};

export function communeServicePath(communeId: string, serviceId: string, locale: Locale): string {
  const commune = communeSlugs[communeId];
  if (!commune) throw new Error(`Unknown commune id: ${communeId}`);
  return `${prefix(locale)}/${commune[locale]}/${serviceSlug(serviceId, locale)}`;
}

export function communeServiceAlternates(communeId: string, serviceId: string): Alternates {
  return mapLocales((l) => communeServicePath(communeId, serviceId, l));
}

/** Commune × service pairs that get a page (same set in every locale). */
export function communeServicePairs(): { communeId: string; serviceId: string }[] {
  return Object.entries(communeServiceContent).flatMap(([communeId, entries]) =>
    Object.keys(entries ?? {}).map((serviceId) => ({ communeId, serviceId }))
  );
}

// ── Helpers ─────────────────────────────────────────────
function mapLocales(fn: (locale: Locale) => string): Alternates {
  return Object.fromEntries(locales.map((l) => [l, fn(l)])) as Alternates;
}

/** Every translated page, as its set of alternates. Feeds the sitemap. */
export function allAlternates(): Alternates[] {
  return [
    ...(Object.keys(pageSlugs) as PageId[]).map(pageAlternates),
    ...Object.keys(serviceSlugs).map(serviceAlternates),
    ...communeServicePairs().map(({ communeId, serviceId }) =>
      communeServiceAlternates(communeId, serviceId)
    ),
  ];
}
