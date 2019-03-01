/**
 * Help output for "wg clone help"
 */
module.exports = () => {
  console.log(`
Usage: wg getrelease {name} {--flags}
About: Clone a new Widgrid Release Repository

Params:

help         Shows this help message
--ungit      Remove .git* from the cloned repo (remove repo)

{name} Simply set the cloned folder to {name}.
If you omit {name}, the repository name will be used.
  `);
}
