/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, './src/components');
    config.resolve.alias['@interfaces'] = path.join(__dirname, './src/types/interfaces');
    return config;
  },
};
