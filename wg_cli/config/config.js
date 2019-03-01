/**
 * Configuration file for the wg-cli
 *
 * @key WG_RELEASE_REPOSITORY {Sring}  - The Widgrid Release Repository
 * @key WG_MODULES_TARGET {String}     - Default target dir to install modules (relative to widgrid root)
 */
module.exports = {
  // metas
  WG_CLI_VERSION:            "Beta",
  WG_DOCUMENTATION_LINK:     "http://docs.widgrid.com/",
  // widgrid
  WG_DEVELOPMENT_REPOSITORY: "https://github.com/brunothelima/widgrid.git",
  WG_RELEASE_REPOSITORY:     "https://github.com/brunothelima/widgrid.git",
  MODULES_DEFAULT_DIR:       "wg_modules"
}
