/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/5osmwku1bn9f/**",
      },
    ],
  },
};

module.exports = nextConfig;
