// Typed adapter over the editable JSON in /content (managed by Pages CMS).
// Pages import from here; the actual copy lives in content/*.json.
import settings from "@/content/settings.json";
import homeJson from "@/content/home.json";
import aboutJson from "@/content/about.json";
import programsJson from "@/content/programs.json";
import teamJson from "@/content/team.json";
import galleryJson from "@/content/gallery.json";
import getInvolvedJson from "@/content/get-involved.json";
import contactJson from "@/content/contact.json";

// Site-wide settings + supporters
export const site = settings;
export const supporters = settings.supporters;

// Navigation is structural, not CMS-edited.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

// Whole-page content objects
export const home = homeJson;
export const about = aboutJson;
export const programs = programsJson;
export const team = teamJson;
export const galleryPage = galleryJson;
export const getInvolved = getInvolvedJson;
export const contact = contactJson;

// Convenience list re-exports
export const pillars = homeJson.pillars;
export const commitments = aboutJson.commitments;
export const focusAreas = programsJson.focusAreas;
export const staff = teamJson.staff;
export const board = teamJson.board;
export const jobs = getInvolvedJson.jobs;

export type GalleryCategory = "Exterior" | "Living Spaces" | "Bedrooms" | "Outdoors & Garden";
export const gallery = galleryJson.images as { src: string; alt: string; cat: GalleryCategory }[];
