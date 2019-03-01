/**
 * Reads the .wgconfig file in the current directory,
 * gets a plain modules list (modules + dependencies),
 * then install all of them. if found any module on
 * modules list, the module will be installed on the
 * proper path. if there is no "target" key on the
 * module configuration, it will be puted in the path
 * "config.MODULES_DEFAULT_DIR" dir, if a module have a
 * "target" key, it will be puted in that target (path).
 * All the modules installation logics must be here, as
 * check for databases updates, external apis, assets, etc...
 *
 * Wg install with no param installs all modules in .wgconfig,
 * but you can specify a single module like $ wg install module_name.
 * When you specify a single module, it will be added in the project
 * and the .wgconfig will be updated with the new information.
 */
const fs          = require('fs');
const color       = require('chalk');
const cpx         = require("cpx");

const paths       = require('./../../config/paths');
const config      = require(`${paths.CONFIG}/config`);
const call        = require(`${paths.LIB}/caller`).call;
const nyan        = require(`${paths.LIB}/helpers`).nyan;
const hasWgConfig = require(`${paths.LIB}/helpers`).hasWgConfig;
const readJson    = require(`${paths.LIB}/helpers`).readJsonFile;
const createJsonFile = require(`${paths.LIB}/helpers`).createJsonFile;
const getCompleteModulesList = require(`${paths.LIB}/helpers`).getCompleteModulesList;

module.exports = (context) => {

  if(context.args[0] == 'help'){
    require('./help')();
    return;
  }

  if(!context.args.length){
    require('./install-all')(context);
  } else {
    console.log(context);
  }
}
