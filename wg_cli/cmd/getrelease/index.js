/**
 * Clone the Widgrid Core Repository (config.WG_RELEASE_REPOSITORY)
 * After clone, .git* will be removed from the cloned repo
 */

const color    = require('chalk');
const fs       = require('fs');
const shell    = require('shelljs');

const paths    = require('./../../config/paths')
const config   = require(`${paths.CONFIG}/config`)
const call     = require(`${paths.LIB}/caller`).call;

module.exports = (context) => {

  if(context.args[0] == 'help'){
    require('./help')();
    return;
  }

  /** get the project name **/

  let projectName = '';
  context.args.forEach((value) => {
    // if is not and option (-- or - prefix), is a project name
    if(value.indexOf('--') < 0 && value.indexOf('-') < 0 )
      projectName = value;
  });

  /** define some needings **/

  const currentDir   = process.cwd();
  const completePath = `${currentDir}/${projectName}`;

  if(projectName.length && fs.existsSync(completePath)) {
    console.log(color.red(`\nCannot clone as ${projectName}. The folder already exists!\n`));
    return;
  }

  /** do the job **/

  if (!shell.which('git')) {
    console.log(color.red('Git not available on your project. Cannot clone.'))
    return;
  } else {
    console.log(color.green('Downloading your data, this may take a while...'))
    shell.exec(`git clone --progress ${config.WG_RELEASE_REPOSITORY} ${projectName} 2>&1`);
    // remove git from the repo
    if(context.args.includes('--ungit')) {
      let target = projectName ? projectName : getRepositoryName();
      shell.exec(`rm -rf ${target}/.git*`);
    }
  }
}
