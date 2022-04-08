/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/blog/devblog',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
