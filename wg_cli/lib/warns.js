const color = require('chalk');

/**
 * Store faltal error messages raised by "wg init"
 * Simply to not polute the code with giant strings
 */
module.exports = {
//
already_has_wg_config () {
console.log(color.red('\nCAUTION : Cannot initialize this wg project!\nThe .wgconfig file already exists on the root dir'));
console.log(`
If you want to construct this project from .wgconfig file, please
use "wg install" without any parameters. If its not the case, see:

This error means that there is an already initialized wg project.
Dont restart the wg project, and dont erase the .wgconfig file,
check if this is not a missunderstood first. Take care, and
remember, with great powers comes great responsabilities.
`);
}
//
}
