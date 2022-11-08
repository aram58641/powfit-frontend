/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  i18n: {
    locales: ['default', 'en-us'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mov|eot|ttf|woff|woff2|mp4|pdf|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
