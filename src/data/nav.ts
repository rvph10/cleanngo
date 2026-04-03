export type { Service } from "./services";
export { services, featuredServices } from "./services";
import { services as allServices } from "./services";
export const navServices = allServices.filter((s) => !s.featured);

// FeaturedService is an alias kept for backward compatibility with nav components
export type { Service as FeaturedService } from "./services";

export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "À propos", href: "/#equipe" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/contact" },
];
