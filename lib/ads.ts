export function trackAdsConversion() {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim();
  if (!id || !label || typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "conversion", { send_to: `${id}/${label}` });
  }
}
