/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/api",
                    destination: `${process.env.API_URL}`,
                },
            ],
        };
    },
};

export default nextConfig;
