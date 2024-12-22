/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [process.env.WORDPRESS_HOST_NAME],
    },
};

export default nextConfig;
