/**
 * Help output for "wg h"
 *
 * @example
 * $ wg help
 */
module.exports = () => {
  console.log(`
wg <command> [args] {options}

help            Shows this help message

new             Create a new plugin, module, widget, etc
about           Shows information about this Enviroment.
build           Build a Project based on webpack.config.js
deploy          Deploy the current project
updatedev       Update this Development Enviroment
  `);
}
