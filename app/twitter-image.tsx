import { socialCard } from "@/lib/og";

export const alt = "DCRBN — Speed to Scale for AI, blockchain, and quantum founders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return socialCard(size);
}
