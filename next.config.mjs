import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: "asset/resource",
        });
        return config;
    }
}

export default withNextIntl(nextConfig);
