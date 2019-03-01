const paths  = require('./../../config/paths');
const config = require(`${paths.CONFIG}/config`);
const color  = require('chalk');
const shell  = require('shelljs');

module.exports = (context) => {

  if(context.args[0] == 'help'){
    require('./help')();
    return;
  }

  // git update using shell
  if (!shell.which('git')) {
    console.log(color.red('Git not available on your project. Cannot pull.'))
    return;
  } else {
    console.log(color.green('Updating your Widgrid Develoment Enviroment, this may take a while ...'))
    shell.exec(`cd ${config.WG_DEVELOPMENT_REPOSITORY} && git pull --progress 2>&1`);
  }
}
