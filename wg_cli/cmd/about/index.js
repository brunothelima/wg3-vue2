const color  = require('chalk');
const paths  = require('./../../config/paths')
const wglogo = require(`${paths.LIB}/candies`).wglogo;
const config = require(`${paths.CONFIG}/config`);

module.exports = (context) => {

  wglogo();

  console.log(`
WIDGRID DEVELOPMENT ENVIROMENT

This is the Widgrid Development Enviroment.
It wraps a complete dev env and a wg-cli app.
For More information, please read: ${config.WG_DOCUMENTATION_LINK}

For help in how to use cli, please type $ wg help.
Or you can take a look on the readme file on wg_cli folder.

Version     ${config.WG_CLI_VERSION}
Authors     Widgrid Core Team
Copyright   Resultage (c) All Rights Reserved

Type "$ wg about config" To see all the configuration.
  `)

  // SHOWS THE CONFIGURATION ON 'config' PARAM 
  
  if(context.args.includes('config') > 0) {
    console.log(color.green('ENVIROMENT CONFIGURATION\n'));
    Object.keys(config).map((key, value) => {
      console.log(`${key}\n${config[key]}\n`)
    });
    console.log(color.green('ENVIROMENT PATHS\n'));
    Object.keys(paths).map((key, value) => {
      console.log(`${key}\n${paths[key]}\n`)
    })  
  }
}