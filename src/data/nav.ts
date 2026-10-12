export type { Service } from "./services";
export { services, featuredServices } from "./services";
import { getServices, type LocalizedService } from "./services";
import type { Locale } from "@/i18n/config";
import { homeAnchor, pagePath } from "@/i18n/routes";
import { useTranslations } from "@/i18n/ui";

// FeaturedService is an alias kept for backward compatibility with nav components
export type { Service as FeaturedService } from "./services";

export interface NavLink {
  name: string;
  href: string;
}

export function getNavServices(locale: Locale): LocalizedService[] {
  return getServices(locale).filter((s) => !s.featured);
}

export function getFeaturedServices(locale: Locale): LocalizedService[] {
  return getServices(locale).filter((s) => s.featured);
}

export function getNavLinks(locale: Locale): NavLink[] {
  const t = useTranslations(locale).nav;
  return [
    { name: t.about, href: homeAnchor("equipe", locale) },
    { name: t.faq, href: homeAnchor("faq", locale) },
    { name: t.contact, href: pagePath("contact", locale) },
  ];
}
