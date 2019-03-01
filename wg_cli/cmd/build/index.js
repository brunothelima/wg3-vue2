const paths   = require('./../../config/paths')
const helpers = require(`${paths.LIB}/helpers`);

module.exports = (context) => {
  console.log(helpers.getWgConfig());
}