import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

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
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: `${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/**`,
                search: '',
            },
        ],
    },
}

export default withNextIntl(nextConfig)
