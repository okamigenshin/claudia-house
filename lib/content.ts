// Central content for the Claudia House site (sourced from the existing site).

export const site = {
  name: "Claudia House",
  tagline: "Where youth dream big",
  address: "7310 SE Lambert St, Portland, OR 97206",
  phone: "503-379-0116",
  phoneHref: "tel:5033790116",
  email: "info@claudiahouse.com",
  careersEmail: "staff@claudiahouse.com",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  { title: "Safe Housing", body: "Short- and long-term Residential ILP placements in a warm, supportive home." },
  { title: "Employment", body: "Job readiness, career exploration, and placement support." },
  { title: "Education", body: "Personalized learning, tutoring, and trade & college pathways." },
  { title: "Financial Literacy", body: "Budgeting, banking, and money management for lasting independence." },
];

export const commitments = [
  { title: "Safe & Supportive Housing", body: "Short- and long-term Residential ILP placements." },
  { title: "Employment", body: "Job readiness, career exploration, and placement support." },
  { title: "Education & Career Growth", body: "Personalized learning and skill-building." },
  { title: "Budgeting & Financial Literacy", body: "Money management and financial independence training." },
  { title: "Therapeutic & Structured Care", body: "Trauma-informed, culturally responsive environments." },
  { title: "Holistic Development", body: "Mind-body-spirit strategies that build confidence and resilience." },
  { title: "Mentorship & Connections", body: "Long-term mentors and support networks." },
  { title: "Community Engagement", body: "Volunteer opportunities and civic responsibility." },
  { title: "Diverse & Inclusive", body: "Justice-involved youth of every background, welcomed." },
];

export const focusAreas = [
  { title: "Money Management & Financial Literacy", body: "Budgeting, smart spending, banking basics, credit confidence." },
  { title: "Housing & Daily Living", body: "Routines, hygiene, meal prep, laundry, apartment readiness & maintenance." },
  { title: "Health & Wellness", body: "Nutrition, exercise, sleep, mental-health check-ins, stress management." },
  { title: "Social-Emotional & Communication", body: "Assertive communication, conflict resolution, online safety, healthy habits." },
  { title: "Employment & Education Skills", body: "Resume writing, interview prep, workplace etiquette, time management, goal planning." },
];

export const staff = [
  {
    img: "/images/staff/01-lambert-adjibogoun-executive-director.jpg",
    name: "Lambert Adjibogoun",
    role: "Executive Director",
    bio: "Years in Oregon Child Welfare and social services; founder of a “second-chance” housing company and reviver of Metro’s Home Share program. Holds an Executive MPA (PSU Hatfield), a Master’s in Social Sciences, and bachelor’s degrees in Philosophy, Communication & HR. Multilingual (Spanish, French).",
  },
  {
    img: "/images/staff/02-kim-hartnagel-program-coordinator.jpg",
    name: "Kim Hartnagel",
    role: "Program Coordinator",
    bio: "A career in social services with a B.S.W. from Wichita State University, and experience across the Family Support Center, Wichita Children’s Home, and Child Protective Services in Kansas, Oregon, and Washington — centered on youth empowerment through supportive relationships.",
  },
];

export const board = [
  { img: "/images/board/01-trevor-emmett.jpg", name: "Trevor Emmett", role: "Director", bio: "Real-estate agent, entrepreneur, and Eagle Scout giving back to the community that gave his family so much." },
  { img: "/images/board/02-wanda-brown.jpg", name: "Wanda Brown", role: "Director", bio: "Retired from Kansas DHS (Child Support, Foster Care, Adoptions); a life of church and community service." },
  { img: "/images/board/03-jessica-witte.jpg", name: "Jessica Witte", role: "Director", bio: "Manager at The Home Depot; a resource and listening ear for youth navigating difficult times." },
  { img: "/images/board/04-pamela-williams.jpg", name: "Pamela Williams", role: "Director", bio: "25-year social-work career, Air Force veteran and Gold Star Mother, with degrees in Human Development and Peacebuilding." },
];

export const jobs = [
  { title: "Case Manager", meta: "Full-time · from $25/hr", body: "Client-centered, trauma-informed case management for justice-involved young adults (18–25). Wed–Sun, 8am–5pm, on-site." },
  { title: "Direct Care Staff", meta: "Part-time · $20/hr", body: "Daily supervision supporting independent-living skill development in a trauma-informed residential setting. Fri–Sun." },
];

export const supporters = [
  "Oregon Youth Authority", "Meyer Memorial Trust", "The Collins Foundation", "The Home Depot",
  "Walmart", "Dutch Bros", "Mod Pizza", "Costco", "NW Collision Services", "Ashley Furniture",
];

export type GalleryCategory = "Exterior" | "Living Spaces" | "Bedrooms" | "Outdoors & Garden";

export const gallery: { src: string; alt: string; cat: GalleryCategory }[] = [
  { src: "/images/gallery/gallery-01-front-porch-entrance.jpg", alt: "Covered front porch entrance in the evening", cat: "Exterior" },
  { src: "/images/gallery/gallery-02-front-door-autumn.jpg", alt: "Front door with an autumn wreath and welcome mat", cat: "Exterior" },
  { src: "/images/gallery/gallery-16-back-entrance-ramp.jpeg", alt: "Back entrance with an accessibility ramp", cat: "Exterior" },
  { src: "/images/gallery/gallery-05-living-room-fireplace.jpg", alt: "Living room with brick fireplace and blue recliner", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-06-living-room-lamp.jpg", alt: "Living room with ceiling fan and gold lamp", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-07-inspirational-posters-wall.jpg", alt: "Wall of inspirational posters", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-08-inspirational-posters-cabinet.jpg", alt: "Inspirational posters above a cabinet", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-09-home-office-desk.jpg", alt: "Home office nook with computer and chair", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-10-staircase-books.jpg", alt: "Staircase with bookshelf and abstract painting", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-11-sitting-area-french-doors.jpg", alt: "Sitting area with a chaise lounge by French doors", cat: "Living Spaces" },
  { src: "/images/gallery/gallery-12-bedroom-portland-blue.jpg", alt: "Bedroom with navy bedding and Portland artwork", cat: "Bedrooms" },
  { src: "/images/gallery/gallery-13-bedroom-blue.jpg", alt: "Bedroom with blue bedding and navy dresser", cat: "Bedrooms" },
  { src: "/images/gallery/gallery-14-bedroom-green-be-brave.jpg", alt: "Bedroom with green bedding and a “Be Brave” sign", cat: "Bedrooms" },
  { src: "/images/gallery/gallery-03-porch-seating-area.jpg", alt: "Front porch seating with cushioned chairs", cat: "Outdoors & Garden" },
  { src: "/images/gallery/gallery-04-porch-table-plants.jpg", alt: "Porch table with potted plants and an autumn sign", cat: "Outdoors & Garden" },
  { src: "/images/gallery/gallery-15-back-patio.jpeg", alt: "Back patio with wrought-iron seating", cat: "Outdoors & Garden" },
  { src: "/images/gallery/gallery-17-garden-raised-bed.jpeg", alt: "Raised garden bed with seedlings", cat: "Outdoors & Garden" },
];
