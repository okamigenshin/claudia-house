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
  {
    img: "",
    name: "Case Manager",
    role: "Staff",
    bio: "Bio coming soon.",
  },
  {
    img: "",
    name: "Direct Care Staff",
    role: "Six positions",
    bio: "Bios coming soon.",
  },
];

export const board = [
  { img: "/images/board/01-trevor-emmett.jpg", name: "Trevor Emmett", role: "Director", bio: "Real-estate agent, entrepreneur, and Eagle Scout giving back to the community that gave his family so much." },
  { img: "/images/board/02-wanda-brown.jpg", name: "Wanda Brown", role: "Director", bio: "Retired from Kansas DHS (Child Support, Foster Care, Adoptions); a life of church and community service." },
  { img: "/images/board/03-jessica-witte.jpg", name: "Jessica Witte", role: "Director", bio: "Manager at The Home Depot; a resource and listening ear for youth navigating difficult times." },
  { img: "/images/board/04-pamela-williams.jpg", name: "Pamela Williams", role: "Director", bio: "25-year social-work career, Air Force veteran and Gold Star Mother, with degrees in Human Development and Peacebuilding." },
];

export const jobs = [
  { title: "Case Manager", meta: "Full-time", body: "Client-centered, trauma-informed case management for justice-involved young adults (18–25). Wed–Sun, 8am–5pm, on-site." },
  { title: "Direct Care Staff", meta: "Part-time", body: "Daily supervision supporting independent-living skill development in a trauma-informed residential setting. Fri–Sun." },
];

export const majorSupporters = [
  "The Collins Foundation",
  "Meyer Memorial Trust",
  "Oregon Community Foundation",
];

export const communitySupporters = [
  "Oregon Youth Authority", "The Home Depot", "Walmart", "Dutch Bros", "Mod Pizza",
  "Costco", "NW Collision Services", "Ashley Furniture",
];

// Combined list (used by the homepage "In Partnership With" row).
export const supporters = [...majorSupporters, ...communitySupporters];

// About page narrative ("Born from Experience. Built for Possibility.")
export const aboutStory = {
  eyebrow: "Our Story",
  title: "Born from Experience. Built for Possibility.",
  intro:
    "Claudia House was born from decades of experience in child welfare. Through their work, the founders came to understand three important things about the children and young people they served.",
  sections: [
    {
      heading: "1. Young People Are More Than Their Past",
      paras: [
        "The founders witnessed young people experience trauma, neglect, abuse, exploitation, and instability—and often become defined by what happened to them, the circumstances that brought them into care or custody, or the harm they may have caused others.",
        "Yet when asked questions like, “Who do you want to be?” or “What do you want to do with your life?” they often saw something different: smiles, excitement, and hope.",
        "Young people wanted the opportunity to imagine who they could become—not simply to revisit where they had been.",
      ],
    },
    {
      heading: "2. Young People Want to Be Treated With Dignity and Belonging",
      paras: [
        "The founders also saw that, despite their experiences and circumstances, young people wanted what everyone wants: to be treated with respect, care, attention, and dignity.",
        "They valued the simple but meaningful experiences that communicate, “You matter.” A warm meal. A shared dinner. A holiday gift. A clean and welcoming space. Someone taking the time to listen. The feeling of being included, remembered, and cared for.",
        "These experiences showed the founders that young people did not want to be treated as their case file, their history, or their mistakes. They wanted to be treated as people—as equals who deserved respect, kindness, and the opportunity to belong.",
      ],
    },
    {
      heading: "3. Young People Deserve More Than the Minimum",
      paras: [
        "The founders also observed that young people were sometimes removed from homes where their basic needs were not being met, only to enter environments that focused primarily on meeting minimum standards of safety and care.",
        "They believed young people deserved more.",
        "They envisioned a true home: exceptionally clean, thoughtfully furnished, welcoming, comfortable, and designed to exceed expectations. A home with quality food and full groceries, personal hygiene products, meaningful amenities, beautiful surroundings, and space for young people to feel valued and cared for.",
        "The goal was not luxury for its own sake. It was dignity, care, and possibility.",
      ],
    },
  ],
  closing: [
    "From these three experiences, Claudia House was created: a home, not an institution; a place where young people are treated as equals, encouraged to look toward the future, and given the space to dream, hope, and thrive.",
    "Because a young person should not be defined solely by what happened to them—or by the worst things they may have done.",
  ],
  pullquote: "Safety is the minimum. Possibility is the goal.",
};

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
