/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
