/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "d1dsr05o5i286u.cloudfront.net",
      "d1tftw9jjs9bx5.cloudfront.net",
      "d2lfdrnysfmya6.cloudfront.net",
      "d2na9jaypdrp94.cloudfront.net",
    ],
    minimumCacheTTL: 2678400,
    formats: ["image/avif", "image/webp"],
  },
});

// Injected content via Sentry wizard below
