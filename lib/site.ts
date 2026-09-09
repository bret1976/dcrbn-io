export const SITE = {
  name: "DCRBN",
  legalName: "DCRBN LLC",
  domain: "www.dcrbn.io",
  url: "https://www.dcrbn.io",
  sourceDomain: "iangroup.ai",
  phone: "+1 725-425-4923",
  phoneHref: "tel:+17254254923",
  address: {
    street: "11250 Hidden Peak Ave",
    city: "Las Vegas",
    region: "NV",
    postal: "89135",
    country: "United States",
  },
  emails: {
    privacy: "privacy@dcrbn.io",
    privacyLive: "privacy@iangroup.ai",
    legal: "legal@dcrbn.io",
    legalLive: "legal@iangroup.ai",
    apply: "apply@dcrbn.io",
    applyLive: "privacy@iangroup.ai",
  },
  positioning:
    "DCRBN is a Speed to Scale platform for founders building infrastructure in AI, blockchain, and quantum.",
  brandLine:
    "DCRBN works on solutions that inspire us — and with founders who have the conviction to build them.",
  missionLine:
    "DCRBN exists to be a force multiplier for solutions that can help shape a future of abundance.",
} as const;

export const CTA = {
  primary: { label: "Apply for Speed to Scale", href: "/apply" },
  secondary: { label: "See How It Works", href: "/growth-cycle" },
  partner: { label: "Explore Strategic Alignment", href: "/strategic-alignment" },
  partnerForm: { label: "Start the Conversation", href: "/strategic-alignment#align-form" },
  submit: { label: "Submit Application", href: "/apply" },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Speed to Scale", href: "/speed-to-scale" },
  { label: "Growth Cycle", href: "/growth-cycle" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Proof", href: "/proof" },
  { label: "Our Network", href: "/network" },
] as const;

export const FOOTER = {
  platform: [
    { label: "Advisory & Consulting", href: "/advisory" },
    { label: "Venture Studio", href: "/venture-studio" },
    { label: "Sixframe", href: "/sixframe" },
    { label: "Proof", href: "/proof" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Our Network", href: "/network" },
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "Strategic Alignment", href: "/strategic-alignment" },
  ],
  start: [
    { label: "Apply for Speed to Scale", href: "/apply" },
    { label: "Explore Strategic Alignment", href: "/strategic-alignment" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
