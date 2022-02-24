/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['localhost'],
  },

  // webpackDevMiddleware: config => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   },
  
  //   return config;
  // },
};

