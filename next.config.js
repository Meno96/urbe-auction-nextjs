/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        loader: "akamai",
        path: "",
    },
    distDir: "frontend/out",
}

module.exports = nextConfig
