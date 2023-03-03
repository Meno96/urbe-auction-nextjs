/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        loader: "akamai",
        path: "",
    },
    distDir: "out",
}

module.exports = nextConfig
