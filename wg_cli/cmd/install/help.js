/**
 * Help which appears whe you type
 * wg install h [help]
 */
module.exports = () => {
  console.log(`
Usage: wg install {module-a, module-b, ...}

About: Install all the project modules on your .wgconfig.modues.
You can pass a single or a list of wg modules as param to make 
single instalations. The new added modules will be automatically 
installed and merged into the current project .wgconfig file.

Params:

help     Shows this help message
  `);
}