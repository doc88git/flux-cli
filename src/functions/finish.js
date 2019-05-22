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
  
        shell.exec("pwd");
  
        if (shell.exec("git init").code !== 0) {
          reject("Git init failed");
          shell.exit(1);
        }

        resolve(true)
      }),

    installDependences: (name) =>
      new Promise((resolve, reject) => {
        let packageManagerInstall = "yarn"

        if (!shell.which(packageManagerInstall)) {
          packageManagerInstall = "npm"
        }

        if (!shell.which(packageManagerInstall)) {
          reject("Sorry, this script requires Yarn or NPM");
          shell.exit(1);
          throw new Error("Sorry, this script requires Yarn or NPM");
        }
        
        shell.cd(`./${name}`);
  
        if (shell.exec(`${packageManagerInstall} install`).code !== 0) {
          reject("Install dependences failed");
          shell.exit(1);
          throw new Error("Install dependences failed");
        }

        resolve(true)
      })
};

module.exports = main;
