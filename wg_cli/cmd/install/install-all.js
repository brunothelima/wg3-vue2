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
const hasWgConfig = require(`${paths.LIB}/helpers`).hasWgConfig;
const readJson    = require(`${paths.LIB}/helpers`).readJsonFile;
const createJsonFile = require(`${paths.LIB}/helpers`).createJsonFile;
const getCompleteModulesList = require(`${paths.LIB}/helpers`).getCompleteModulesList;

module.exports = (context) => {

  const projectDir = process.cwd();
  const modulesDir = `${projectDir}/${config.MODULES_DEFAULT_DIR}`;

  if(!hasWgConfig()) {
    console.log(color.red('\nERROR: No .wgconfig file found. Process aborted'));
    console.log('Remember: This is a command destinated to install Wg Projects\n');
    return;
  }

  let wgconfig = readJson('./.wgconfig');

  /**
   * Get the complete modules list from .wgconfig 
   */

  let modules   = getCompleteModulesList();

  if(!modules) {
    console.log('\nThere is no modules to install.\n')
    return;
  }

  /**
   * Installing the Modules in their proper folder
   */

  if(!fs.existsSync(modulesDir)) {
    console.log(color.yellow('\nWARNING: Modules default dest path not found (path created):'));
    console.log(`${modulesDir}\n`);
  }

  console.log('\n');

  Object.keys(modules).map((m, index) => {
    let wgmodule = modules[m];
    let source   = `${paths.MODULES}/${m}`;
    let dest     = wgmodule.target ? `${projectDir}/${wgmodule.target}` : `${modulesDir}`;
    // copy the module from source to the dest folder
    cpx.copy(source, dest, {dereference: true, includeEmptyDirs: true}, (err) => {
      if(err) {
        console.error(color.red(err));
        return;
      }
    })
    console.log(color.bold(`Installed: ${m}`));
    console.log(dest);
  });

  /**
   * Updates the wgconfig with the new installed[] key
   */

  createJsonFile(wgconfig, '.wgconfig', './');
}
