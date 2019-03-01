/**
 * Help output for "wg init help"
 */
module.exports = () => {
  console.log(`
Usage: wg init [packname]
About: Starts a new Widgrid Config Project (.wgconfig).

Params:

help         Shows this help message
packs        Shows all the available starter packs
packname     Must be a pack name to be loaded on the project

Warning:

When you start a project with a pack name, a set of pre-defined 
dependencies will be loaded into the new project. 

If you dont pass a [pack name], the project will start with 
a dependencie free (empty dependencie key) at wgconfig file.

If you dont have a project folder, first clone one from git or
type "wg create" to start the complete process of a new Wg Core.
  `);
}