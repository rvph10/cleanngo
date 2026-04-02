// =========================================================
// Contact form
// =========================================================

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  budget?: "small" | "medium" | "large" | "enterprise";
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// =========================================================
// Content collection frontmatter (mirrored from content/config.ts)
// =========================================================

export interface ServiceFrontmatter {
  title: string;
  description: string;
  icon: string;
  order: number;
  featured: boolean;
  tags: string[];
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  client: string;
  year: number;
  tags: string[];
  coverImage: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
}

// =========================================================
// Navigation
// =========================================================

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// =========================================================
// SEO / meta
// =========================================================

export interface SEOMeta {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}
