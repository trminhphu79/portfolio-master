/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|css|js)', // Target specific file types
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable', // Cache for 1 year
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
