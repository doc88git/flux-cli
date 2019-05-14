const chalk = require("chalk");
// const clear = require("clear");
const figlet = require("figlet");

module.exports = function() {
  const name = figlet.textSync("Flux-CLI", { horizontalLayout: "full" });
  const cliLogo = chalk.keyword("orange")(name);

  process.stdout.write(`\r${cliLogo}\r\n`);
};
