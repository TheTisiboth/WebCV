import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Cloudinary Configuration
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

if (!CLOUDINARY_NAME) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not defined in the environment variables.')
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Outputs a Single-Page Application (SPA).
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
        })
        return config
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: `/${CLOUDINARY_NAME}/image/upload/**`,
            }
        ],
        // loader: 'default', // Ensures Next.js does not interfere with Cloudinary URLs
    },
}

export default withNextIntl(nextConfig)
