/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {};

module.exports = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true
});

module.exports = nextConfig;
