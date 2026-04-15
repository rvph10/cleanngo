import type { ImageMetadata } from "astro";

// String-based assets used outside Astro's <Image> pipeline
// (video poster/src, SVGs, OG image, favicon)
export const imageAssets = {
  brandLogo: "/images/logo.svg",
  googleLogo: "/images/google-logo.svg",
  heroPoster: "/images/glass_cleaning.avif",
  heroVideoWebm: "/images/hero_video.webm",
  heroVideoMp4: "/images/hero_video_opt.mp4",
  ogImage: "/og-image.png",
  favicon: "/favicon.svg",
} as const;

import _teamPhoto from "@/assets/images/team_photo.webp";
import _featuresPhoto from "@/assets/images/window_cleaning_back_view.jpg";

export const staticImageAssets: Record<string, ImageMetadata> = {
  teamPhoto: _teamPhoto,
  featuresPhoto: _featuresPhoto,
};

// Service images imported as assets so Astro generates responsive srcset at build time.
// Adding a new service image: copy the file to src/assets/images/, import it here,
// and add an entry to serviceImageAssets.
import _glassCleaning from "@/assets/images/glass_cleaning.jpg";
import _solarPanel from "@/assets/images/solar_panel.jpg";
import _mossRoof from "@/assets/images/moss_removal_roof.jpg";
import _houseCleaning from "@/assets/images/house_cleaning.jpg";
import _postWork from "@/assets/images/post_work.jpg";
import _movingIn from "@/assets/images/move_in_cleaning_service.jpg";
import _officeCleaning from "@/assets/images/office_cleaning.webp";
import _facadeCleaning from "@/assets/images/facade_cleaning.jpg";
import _outsideCleaning from "@/assets/images/outside_cleaning.avif";
import _verandaCleaning from "@/assets/images/veranda_cleaning.jpg";
import _corniere from "@/assets/images/corniere_cleaning.avif";

export const serviceImageAssets: Record<string, ImageMetadata> = {
  glassCleaning: _glassCleaning,
  solarPanel: _solarPanel,
  demoussage: _mossRoof,
  houseCleaning: _houseCleaning,
  postWork: _postWork,
  movingIn: _movingIn,
  officeCleaning: _officeCleaning,
  facadeCleaning: _facadeCleaning,
  outsideCleaning: _outsideCleaning,
  verandaCleaning: _verandaCleaning,
  corniere: _corniere,
};
