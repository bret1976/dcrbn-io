export const SITE = {
  name: "DCRBN",
  legalName: "DCRBN LLC",
  domain: "www.dcrbn.io",
  url: "https://www.dcrbn.io",
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
    legal: "legal@dcrbn.io",
    apply: "apply@dcrbn.io",
  },
  positioning:
    "DCRBN is a Las Vegas venture studio providing Speed to Scale for infrastructure companies in AI, blockchain, and quantum.",
  brandLine:
    "DCRBN works on solutions that inspire us — and with founders who have the conviction to build them.",
  missionLine:
    "DCRBN exists to be a force multiplier for solutions that can help shape a future of abundance.",
} as const;

export const CTA = {
  primary: { label: "Apply for Speed to Scale", href: "/apply" },
  secondary: { label: "See How It Works", href: "/growth-cycle" },
  partner: { label: "Explore Strategic Alignment", href: "/strategic-alignment" },
  partnerForm: { label: "Start the Conversation", href: "/contact" },
  submit: { label: "Submit Application", href: "/apply" },
} as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "Speed to Scale", href: "/speed-to-scale" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Ventures", href: "/venture-studio" },
  { label: "Contact", href: "/contact" },
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
    { label: "Contact", href: "/contact" },
    { label: "Our Network", href: "/network" },
    { label: "Focus Areas", href: "/focus-areas" },
    { label: "Strategic Alignment", href: "/strategic-alignment" },
  ],
  start: [
    { label: "Apply for Speed to Scale", href: "/apply" },
    { label: "Contact DCRBN", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatAddress() {
  const { street, city, region, postal } = SITE.address;
  return `${street}, ${city}, ${region} ${postal}`;
}
