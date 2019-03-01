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

about           Shows information about this Enviroment.
create          Create a new Project | download -> init -> install
deploy          Deploy the current project
getrelease      Clone or Download the current Widgrid Release
init            Starts a new wgconfig on the current folder
install         Installs one (or all) wg modules based on .wgconfig
new             Create a new plugin, module, widget, etc
updatedev       Update this Development Enviroment
  `);
}
