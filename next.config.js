/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
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
};
