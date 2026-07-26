// Small inline line-icon set (stroke-based, Lucide-style) used in cards.
type IconName =
  | "home" | "briefcase" | "graduation" | "wallet" | "heart" | "users"
  | "book" | "sparkles" | "shield" | "globe" | "star" | "userPlus"
  | "car" | "lightbulb" | "mapPin" | "phone" | "mail" | "handHeart";

const paths: Record<IconName, React.ReactNode> = {
  home: <><path d="M3 10.8 12 4l9 6.8" /><path d="M5.5 9.5V20h13V9.5" /><path d="M10 20v-5h4v5" /></>,
  briefcase: <><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></>,
  graduation: <><path d="M2 9.2 12 4.5l10 4.7-10 4.7L2 9.2Z" /><path d="M6 11.3V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.7" /></>,
  wallet: <><rect x="3" y="6" width="18" height="13" rx="2.5" /><path d="M3 10h18" /><circle cx="16.5" cy="14.5" r="1" /></>,
  heart: <path d="M12 20C10 18.7 4 14.5 4 9.6 4 7 6 5 8.5 5c1.6 0 2.8.9 3.5 2 .7-1.1 1.9-2 3.5-2C18 5 20 7 20 9.6c0 4.9-6 9.1-8 10.4Z" />,
  users: <><circle cx="9" cy="8" r="3.3" /><path d="M3.5 19.5c0-3.2 2.5-5.3 5.5-5.3s5.5 2.1 5.5 5.3" /><path d="M16 5.2a3.3 3.3 0 0 1 0 6.4" /><path d="M17.5 14.4c1.8.6 3 2.2 3 4.1" /></>,
  book: <><path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v14H6.5A1.5 1.5 0 0 0 5 18.5V4.5Z" /><path d="M5 18.5A1.5 1.5 0 0 1 6.5 17H19v4H6.5A1.5 1.5 0 0 1 5 19.5Z" /></>,
  sparkles: <><path d="M12 3.5 13.7 9 19 10.7 13.7 12.4 12 18l-1.7-5.6L5 10.7 10.3 9 12 3.5Z" /><path d="M18.5 4v3M20 5.5h-3" /></>,
  shield: <><path d="M12 3.2 19 6v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6l7-2.8Z" /><path d="m9 11.8 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18" /></>,
  star: <path d="m12 3.5 2.6 5.6 6.1.6-4.6 4.1 1.3 6L12 16.9 6.6 19.8l1.3-6-4.6-4.1 6.1-.6L12 3.5Z" />,
  userPlus: <><circle cx="9" cy="8" r="3.3" /><path d="M3.5 19.5c0-3.2 2.5-5.3 5.5-5.3 1.1 0 2.1.3 3 .8" /><path d="M17.5 14v6M14.5 17h6" /></>,
  car: <><path d="M5 13.5 6.6 9a2 2 0 0 1 1.9-1.3h7a2 2 0 0 1 1.9 1.3L19 13.5" /><rect x="3" y="13.5" width="18" height="5" rx="1.5" /><circle cx="7.5" cy="18.5" r="1.4" /><circle cx="16.5" cy="18.5" r="1.4" /></>,
  lightbulb: <><path d="M9.5 18h5" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3.8 10.7c.7.6 1.1 1.3 1.2 2.3h5.2c.1-1 .5-1.7 1.2-2.3A6 6 0 0 0 12 3Z" /></>,
  mapPin: <><path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 1 1 13 0C18.5 15.6 12 21 12 21Z" /><circle cx="12" cy="10.5" r="2.5" /></>,
  phone: <path d="M6.5 3H9l1.8 4.5-2.2 1.4a11.5 11.5 0 0 0 5 5l1.4-2.2L19.5 15v2.5A2.5 2.5 0 0 1 17 20 15.5 15.5 0 0 1 4 7 2.5 2.5 0 0 1 6.5 4.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7.5 8.5 6 8.5-6" /></>,
  handHeart: <><path d="M11 20H5l-1.5-5.5a1.5 1.5 0 0 1 2.7-1.2L8 15" /><path d="M8 15V9.5a1.5 1.5 0 0 1 3 0V13h5.5a2 2 0 0 1 0 4H13" /><path d="M15 8.5c-1-2 .5-4 2.3-3.3 1.7-1.6 4 0 3.2 2.1C20 9 16.8 10.5 16.8 10.5S15.7 9.8 15 8.5Z" /></>,
};

export default function Icon({
  name,
  size = 26,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
