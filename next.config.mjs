/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "minio.rikztech.my.id",
            },
        ],
    },
};

export default nextConfig;
