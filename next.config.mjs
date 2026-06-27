/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: false,
    images: {
        domains: ['dcfix.dcastalia.com','bestinbd.com'],
    },
};

export default nextConfig;
