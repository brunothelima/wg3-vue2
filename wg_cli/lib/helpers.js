// node requirements
const fs     = require('fs');
const color  = require('chalk');
const ask    = require('readline-sync');
const clear  = require('clear');
const config = require('./../config/config')
const paths  = require('./../config/paths')
const _this  = this;

module.exports = {
  /**
   * Create a new wgconfig object
   *
   * @return {Object}   - a fresh wgconfig json
   */
  getNewWgConfig() {
    const wgconfig = require(`${paths.CONFIG}/wgconfig`);
    return wgconfig;
  },
  /**
   * Get a git repository name from its url.
   * If no param, return the WG_RELEASE_REPOSITORY name
   *
   * @param {String}  - git repository url
   */
  getRepositoryName (tmp = config.WG_RELEASE_REPOSITORY) {
    tmp = tmp.split('/');
    tmp     = tmp[tmp.length - 1];
    tmp     = tmp.split('.');
    tmp[tmp.length - 1] = '';
    return tmp.join('');
  },
  /**
   * Return a flat object will a modules/dependencies list
   *
   * This function reads a .wgconfig file and returns all the modules
   * included there as a single and flatted json object. This function
   * will read the "modules" key inside the .wgconfig file, and recurse
   * thought all its dependencies till return a unidimensional obj with
   * all the modules that the current project requires. This list includes
   * the first-level modules (inside the wgconfig) as its dependencies.
   * The result must be a flat json object with non-duplicated keys with
   * all modules config keys needed to construct the project. If used with
   * no args, will search for a .wgconfig in the current process.cwd() dir
   *
   * @param {String} wgConfigPath   - path to a .wgconfig file
   */
  getCompleteModulesList(wgConfigPath = process.cwd()) {
    // check if there is a wgconfig
    let target = `${wgConfigPath}/.wgconfig`;
    if(!fs.existsSync(target)) {
      console.error(color.red(`\nERROR: Could not find a .wgconfig file at:\n"${target}"`));
      return;
    }
    // get the wgconfig content, and the initial modules on .wgconfig
    let wgconfig = module.exports.readJsonFile(`${target}`);
    let modules  = {};
    // get the primary modules list
    wgconfig.modules.forEach((m) => {
      modules[m] = module.exports.readJsonFile(`${paths.MODULES}/${m}/config.json`);
    });
    // get all the dependencies recursivelly
    let finish = false;
    while(!finish) {
      finish = true;
      Object.keys(modules).map((key, index) => {
        if(modules[key].dependencies) {
          modules[key].dependencies.forEach((m) => {
            if(!modules[m]) {
              modules[m] = module.exports.readJsonFile(`${paths.MODULES}/${m}/config.json`);
            }
          });
          finish = false;
          delete modules[key].dependencies;
        }
      })
    };
    return modules;
  },
  /**
   * Asks something for the user and return its answer
   * Pass {br} true to insert a \n at the end of question
   *
   * @param {String} question    - Question to be asked
   * @param {Boolean} br         - If should break a line on the end
   *
   * @return String
   */
  readInputSync (question, br = false) {
    let answear = ask.question(`${question}${br?'\b':''} `);
    return answear;
  },
  /**
   * Check if a file exists
   *
   * @param {String} path  - Path/File to be verified
   * @return Boolean
   */
  fileExists (path) {
    if (fs.existsSync(path))
      return true;
    else
      return false;
  },
  /**
   * Reads a json file and returns it like a var
   *
   * @param {String} path   - the json file path
   */
  readJsonFile (path) {
    let json;
    try {
      json = fs.readFileSync(path, 'utf8');
    } catch(e) {
      console.log(color.red(`ERROR: Json File Not Found "${path}"`))
      console.error(e);
      return false;
    }
    return JSON.parse(json);
  },
  /**
   * Saves a json object as a file. If the file cant be
   * created, an error will be raised.
   *
   * @param {Object} json        - json object to be saved
   * @param {String} filename    - the name of the newfile
   * @param {String} path        - path for the new file (current by default)
   * @param {function} callback  - callback executed after file successfuly saved
   */
  createJsonFile (json, filename, path, callback) {
    fs.writeFileSync(`${path+filename}`, JSON.stringify(json, null, 2), (error) => {
      if(error){
        console.log(color.red(error));
        return false;
      } else{
        if(callback) callback();
      }
    })
  },
  /**
   * Verifies if the wgconfig file exists
   * You can pass a path to verify, or use
   * with no param which will check on the
   * current dir
   *
   * @return Boolean
   */
  hasWgConfig (path = './') {
    if(module.exports.fileExists(`${path}/.wgconfig`))
      return true;
    else
      return false;
  },
  /**
   * Check if pack exist on ./config/packs.js
   *
   * @return Boolean
   */
  hasPack (pack) {
    if(!module.exports.getPack(pack))
      return false;
    else
      return true;
  },
  /**
   * Get a pack from ./config/packs. If the pack isnt exist
   * Return undefined. If pass no [pack] param, return all packs
   *
   * @param {String} - a pack name
   * @return Array   - pack modules list || undefined
   */
  getPack (pack) {
    const  packs = require(`${paths.CONFIG}/packs`);
    return pack ? packs[pack] : packs;
  },
  /**
   * Print a list of packs available in ./config/packs as String
   *
   * @return {Console Log}
   */
  listPacks() {
    let packlist = '';
    let packs = require(`${paths.CONFIG}/packs`);
    Object.keys(packs).map(function(objectKey, index) {
      packlist += `${objectKey}\n`;
    })
    console.log('\nCurrent available starter packs:\n');
    console.log(color.green(packlist));
  },
  /**
   * Prints a cool ascii Nyan cat
   *
   * @return void
   */
  nyan() {
    console.log(`
-_-_-_-_-_-_,--------,
_-_-_-_-_-_-|     /\\_/\\
-_-_-_-_-_-~|____( ^‿‿^)
            "" "" "" ""`)
  },
  /**
   * Prints a cool ascii cat
   *
   * @return void
   */
  kitty() {
    console.log(`
\\    /\\
 )   ( ')
(   /  )
 \\(__)|
    `)
  },
  wglogo(logoColor) {
    console.log(color.green(`
 __      __  ________ 
/  \\    /  \\/  _____/ 
\\   \\/\\/   /   \\  ___ 
 \\        /\     \\_\\  \\
  \\__/\\  / \\______   /
       \\/          \\/
    `))
  }
}
