// Localized access to commune data. Facts that don't change per locale
// (postal code, neighbors) come from communes.ts; names and page content
// come from the per-locale files.

import type { Locale } from "@/i18n/config";
import {
  communes,
  communeServiceContent,
  type Commune,
  type CommuneServiceContent,
} from "./communes";
import { communeNamesNl, communeServiceContentNl } from "./communes.nl";
import { communeNamesEn, communeServiceContentEn } from "./communes.en";

const names: Record<Exclude<Locale, "fr">, Record<string, string>> = {
  nl: communeNamesNl,
  en: communeNamesEn,
};

const content: Record<Locale, typeof communeServiceContent> = {
  fr: communeServiceContent,
  nl: communeServiceContentNl,
  en: communeServiceContentEn,
};

export interface LocalizedCommune extends Commune {
  /** Locale-independent id: the French slug. */
  id: string;
}

export function getCommune(id: string, locale: Locale): LocalizedCommune | undefined {
  const commune = communes.find((c) => c.slug === id);
  if (!commune) return undefined;
  const name = locale === "fr" ? commune.name : names[locale][id];
  if (!name) throw new Error(`Missing ${locale} name for commune ${id}`);
  return { ...commune, id, name };
}

export function getCommuneServiceContent(
  communeId: string,
  serviceId: string,
  locale: Locale
): CommuneServiceContent {
  const entry = content[locale][communeId]?.[serviceId];
  if (!entry) throw new Error(`Missing ${locale} content for ${communeId}/${serviceId}`);
  return entry;
}
