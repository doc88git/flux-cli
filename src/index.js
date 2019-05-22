const program = require("commander");
const showLogo = require("./functions/logo");
const clone = require("./functions/clone");
const finish = require("./functions/finish");
var appConfig = require("../package.json");
const chalk = require("chalk");

const createProject = name =>
  clone(name)
    .then((msg) => {
      if (msg) console.log(chalk.white(msg));

      return Promise.all([
        finish.removeDotGit(name),
        finish.runGitInit(name),
        finish.installDependences(name)
      ])
    })
    .catch(e => {
      console.log(chalk.red(e));
    })
    .finally(() => {
      console.log(chalk.green("Done!"));
    });

const main = () => {
  showLogo()

  const NO_COMMAND_SPECIFIED = (!program.args || program.args.length === 0);

  program
    .version(appConfig.version, '-v, --version')
    .option("-c, create [name]", "Create a Widiget")
    .parse(process.argv);

  if (program.create) return createProject(program.create);
  if (NO_COMMAND_SPECIFIED) return program.outputHelp();

};

module.exports = main;
main()
