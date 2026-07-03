// const nextConfig = {
//     compiler: {
//         styledComponents: true,
//     },
//     reactStrictMode: false,
//     images: {
//         domains: ['dcfix.dcastalia.com','bestinbd.com'],
//     },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dcfix.dcastalia.com",
      },
      {
        protocol: "https",
        hostname: "bestinbd.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
