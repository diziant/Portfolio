/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  trailingSlash: true,
  basePath: '/Portfolio',
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'development' && true
  }
};
