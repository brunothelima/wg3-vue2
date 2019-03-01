const paths = require('./../config/paths')
/**
 * Executes a command from paths.CMD (./cmd)
 *
 * -- When called with no args:
 *
 * By default, This function will look your ./cmd folder
 * to a command passed via cli. The command is the
 * first argument after the cli calling, in "app hello"
 * the command will be "hello". The function will try
 * to find the folder hello inside ./cmd, then will
 * execute the index.js module by default. If the user
 * typed help as a parameter, will look at the same
 * folder but for a help.js module. Both command and
 * the index.js can be overrided.
 *
 * When the function finds a index.js to execute, it
 * will create the "context" before. The context is a
 * separation of the command typed on the cli. In case
 * of "app hello help" command, the context will be
 * "{cmd: [hello], args: [help]}". You can use context
 * inside your module. See the examples in
 * ./cmd/custom/index.js.
 *
 * -- When used with params
 *
 * You can call a command programmaticaly. The 1st
 * argument will be the command name (a folder inside)
 * ./cmd. The 2nd must be a file to run (index.js) if
 * empty, and the 3nd must be a context (cli typed command
 * by default).
 *
 * @examples
 *
 * Call the command typed on cli parsing its args
 * call()
 *
 * Call the help command
 * call('help')
 *
 * Call a custom command overriding index.js to custom.js
 * This will try to execute ./cmd/custom/custom.js
 * call('custom', 'custom.js')
 *
 * Call hello command overriding its context
 * call('hello', '', {cmd: ['hello'], args: ['--extend']})
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

    if(!context.cmd || context.cmd == 'help') {
      require(`${paths.CMD}/help/index.js`)(context)
      return
    }

    try {
      require(`${paths.CMD}/${context.cmd}/${index}`)(context)
    } catch(e) {
      console.log(`\nError: Failed to run: "${paths.CMD}/${context.cmd}/${index}"\n`)
      console.error(e)
      return
    }
  }
}