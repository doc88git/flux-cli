const program = require('commander');
const showLogo = require('./functions/logo');
const clone = require('./functions/clone');
var appConfig = require('../package.json');
// const path = require('path');

const createProject = (name) => clone(name)
  .then(() => {
    setTimeout(() => {
      process.stdout.write(`\r\n\r\nDone!`);
    }, 1000)
  }).catch(e => {
    console.log({ e })
  }).finally(() => {
    // console.log({ path: path.dirname(__dirname) })
  })

const main = () => {
  // showLogo()

  program
    .version(appConfig.version)
    .option('-p, create [name]', 'Create a Widiget')
    .parse(process.argv);

  if (program.create) return createProject(program.create)
}

module.exports = main
main()