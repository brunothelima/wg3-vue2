/*
 * Paths configuration for wg-cli enviroment.
 * Paths must be Abs or relative to the root.
 * DO NOT include the trailing slashes ("/")
 *
 * @type Json  
 */
const path     = require('path')
const CLI_ROOT = path.dirname(require.main.filename)

module.exports = {
  CLI_ROOT: CLI_ROOT,
  CMD:      `${CLI_ROOT}/cmd`,
  CONFIG:   `${CLI_ROOT}/config`,
  LIB:      `${CLI_ROOT}/lib`,
  WGROOT:   `${CLI_ROOT}/..`,
  MODULES:  `${CLI_ROOT}/../wg_modules`
}