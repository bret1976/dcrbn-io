import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Do not send X-Robots-Tag: noindex. Public pages must remain crawlable.
};

export default nextConfig;
