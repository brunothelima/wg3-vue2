/**
 * Help output for "wg create help"
 */
module.exports = () => {
  console.log(`
Usage: wg create {projectName} {-pack StarterPack} {--options}
About: Clone a new Widgrid Core and initiates it!

Params:

help          Shows this help message
packs         Shows all the available starter packs
packname      Must be a pack name to be loaded on the project

projectName   Is optional. Use to set the new project folder name
-pack         Is optional. Use to set the new project starter pack

--no-cli-up   Perform no update on the current wg-cli
--no-clone    Perform no clone on the current project
--no-init     Perform no init on the current project
--no-install  Perform no init on the current project

Warning:

If you pass no project name, the name of the repository will be
used as well. The project name must be a non existent folder name.

When you start a project with a pack name, a set of pre-defined
dependencies will be loaded into the new project.

If you dont pass a [pack name], the project will start with
a dependencie free (empty dependencie key) at wgconfig file.
  `);
}
