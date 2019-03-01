/**
 * Wg Init Command
 *
 * This module will handle the necessary logic to
 * create a new .wgconfig file based on a passed
 * params. At end, will call the "install" module
 * over the new brand .wgconfig.
 *
 * @selectedPack {Object} String  - pack passed to the command
 */
 
const color          = require('chalk');
const paths          = require('./../../config/paths')

/* helpers */
const warns             = require(`${paths.LIB}/warns`);
const call              = require(`${paths.LIB}/caller`).call;
const readInputSync     = require(`${paths.LIB}/helpers`).readInputSync;
const createJsonFile    = require(`${paths.LIB}/helpers`).createJsonFile;
const hasWgConfig       = require(`${paths.LIB}/helpers`).hasWgConfig;
const hasPack           = require(`${paths.LIB}/helpers`).hasPack;
const getPack           = require(`${paths.LIB}/helpers`).getPack;
const listPacks         = require(`${paths.LIB}/helpers`).listPacks;
const getNewWgConfig = require(`${paths.LIB}/helpers`).getNewWgConfig;
/**/

const config         = require(`${paths.CONFIG}/config`);
const packs          = require(`${paths.CONFIG}/packs`);

const criticalWarn = () => {
  warns.already_has_wg_config()
  return false;
}

module.exports = (context) => {

  if(hasWgConfig()){
    criticalWarn();
    return;
  }

  if(context.args[0] == 'help'){
    require('./help')();
    return;
  }

  if(context.args[0] == 'packs'){
    listPacks();
    return;
  }

  /**
   * if the first Arg was not a param (help or packs), its a
   * starter pack. If there is no first Param, then must be
   * an empty Array (to match context.args) pattern.
   * If there is a selectedPack and its not 'help' or 'packs'
   * then is always a starter pack request
   */
  let   pack;
  const selectedPack = context.args[0] ? context.args[0] : [];

  if(selectedPack.length && !hasPack(selectedPack)){
    console.log(color.red(`\nError: There is no pack named ${selectedPack}`))
    console.log('Type "wg init packs" to see the available start packs\n')
    return;
  } else {
    if(selectedPack) 
      pack = getPack(selectedPack);
    else
      pack = [];  
  }
 
  /*
   * Create an empty project and its pack
   * If had no pack, will use an empty array
   * If HAD a pack, will inject on new wgconfig
   */
  let project = getNewWgConfig();
  if(pack) project.modules = pack;
  project.created = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  console.log('\n');
  if(selectedPack.length) 
    console.log(color.green(`Starter Pack selected: ${selectedPack}`)); 
  else 
    console.log(color.yellow('No Stater Pack selected'));

  console.log('\n');

  /*
   * Fill some .wgconfig fields base on user choice.
   * This will define part of project characteristics
   */  
  project.title           = readInputSync(`Title (Untitled):`)   || 'Untitled';
  project.version         = readInputSync(`Version (1.0.0):`)    || '1.0.0';
  project.description     = readInputSync("Description (null):") || null;

  let choice = false;
  console.log(color.bold('\nPlease check the configuration below.\nIs everything right, do you want to proceed?\n'));
  while(!choice) choice = readInputSync("(y/n): ");
  if(!choice || choice.toUpperCase() != "Y") return;

  //
  
  createJsonFile(project, '.wgconfig', './', () => {
    console.log(color.green(`\n* Created .wgconfig file\n`));
  });
}
