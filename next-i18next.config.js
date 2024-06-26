/* eslint-disable no-undef */
// used for SSR (getServerSideProps)
// const path = require('path');
// const localePath = path.resolve('./public/locales');

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru']
  },
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === 'development'
  // serializeConfig: false,
};
