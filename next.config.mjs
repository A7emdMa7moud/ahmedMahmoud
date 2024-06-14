/** @type {import('next').NextConfig} */
import linPwa from "next-pwa";
const nextConfig = {};

const withPWA = linPwa({
  dest: "public",
});

export default withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    scope: "/app",
    sw: "service-worker.js",
  },
});
