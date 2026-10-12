// Locale configuration. French is the default locale and lives at the site
// root (no /fr prefix) so every existing URL keeps its ranking. Dutch and
// English live under /nl and /en.
//
// This module has no asset imports so astro.config.ts can import it too.

export const locales = ["fr", "nl", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeMeta: Record<
  Locale,
  { htmlLang: string; hreflang: string; ogLocale: string; label: string; short: string }
> = {
  fr: { htmlLang: "fr-BE", hreflang: "fr-BE", ogLocale: "fr_BE", label: "Français", short: "FR" },
  nl: { htmlLang: "nl-BE", hreflang: "nl-BE", ogLocale: "nl_BE", label: "Nederlands", short: "NL" },
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_GB", label: "English", short: "EN" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** "/nl/diensten" → "nl", "/services" → "fr". */
export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isLocale(first) && first !== defaultLocale ? first : defaultLocale;
}

export function getLocaleFromUrl(url: URL): Locale {
  return getLocaleFromPath(url.pathname);
}
