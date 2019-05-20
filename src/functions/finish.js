const files = require("./files");
const shell = require("shelljs");

const main = {
  removeDotGit: name =>
    new Promise((resolve, reject) => {
      files.removeDocGit(name, e => {
        if (!e) return resolve();
        return reject(e);
      });
    }),

  runGitInit: name =>
    new Promise((resolve, reject) => {
      if (!shell.which("git")) {
        reject("Sorry, this script requires git");
        shell.exit(1);
      }

      shell.cd(`./${name}`);

      if (shell.exec("git init").code !== 0) {
        reject("Git init failed");
        shell.exit(1);
      }
    })
};

module.exports = main;
