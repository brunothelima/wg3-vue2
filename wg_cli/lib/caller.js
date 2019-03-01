const color = require('chalk');
const paths = require('./../config/paths')
/**
 * Calls a command from paths.CMD {./cmd}
 *
 * With no params, the function will read the command passed on
 * the cli and separate it in context.cmd (the command after "wg"
 * call) and context.args (the arguments after the passed command).
 * Then, the function will look at the paths.CMD (./cmd) directory
 * to a folder with same name as the command, if found, the index.js
 * will be called, if not, an 'not found' error will be raised.
 * If you need a different context (cmd, args) use must pass your
 * context as the 3nd arg on call() in the same pattern as the default.
 *
 * Example of calling a command passing a custom context:
 * call('clone', '', {cmd: ['clone'], args: ['test']});
 *
 * If you need to call an expecific command, just pass it as the
 * first parameter. This call() will check for your command inside
 * the paths.CMD (./cmd) folder.
 *
 * If you need to call a different file inside the command folder,
 * i mean, a file different than 'index.js', just pass the name as
 * the second parameter
 *
 * @param {String} command : optional  - A command name to run
 * @param {String} run     : optional  - File name to run
 * @use   {helper} paths   : helper from ./../config/paths
 *
 * @example
 *
 * // check for a command on cli, and try to run it
 * call()
 * // run help/index.js from paths.CMD
 * call('help')
 * // run the foo.js from ./cmd/custom/
 * call('custom', 'foo.js')
 */
module.exports = {
  call (command, run, context) {

    if(!context) {
      context = {
        cmd : process.argv.slice(2)[0],
        args: process.argv.slice(3)
      }
    }

    if(command) context.cmd = command;
    run ? index = run : index = 'index.js'

    if(!context.cmd) {
      require(`${paths.CMD}/help/index.js`)(context)
      return
    }

    try {
      require(`${paths.CMD}/${context.cmd}/${index}`)(context)
    } catch(e) {
      console.log(color.red(`\nError: Failed to run: "${paths.CMD}/${context.cmd}/${index}"\n`))
      console.error(e)
      return
    }
  }
}
