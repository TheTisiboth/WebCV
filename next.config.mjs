import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Cloudinary Configuration
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME

if (process.env.NODE_ENV === 'production' && !CLOUDINARY_NAME) {
    throw new Error('NEXT_PUBLIC_CLOUDINARY_NAME is not defined in the environment variables.')
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
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: `/${CLOUDINARY_NAME}/image/upload/**`,
            },
            {
                protocol: 'https',
                hostname: 'admin.leojan.fr',
            }
        ],
    },
}

export default withNextIntl(nextConfig)
