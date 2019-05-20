const gitClone = require("git-clone");
const fs = require("fs");
const chalk = require("chalk");
const files = require("./files");

const repo = "git@gitlab-cloud.doc88.com.br:flux/widgets/widget-core.git";

module.exports = function(name) {
  return new Promise(function(resolve, reject) {
    if (typeof name !== "string" || name === "")
      return reject("Give me a name!");

    const widgetDirectory = `./${name}`;

    if (name && !files.directoryExists(name)) {
      if (!files.createDirectpry) {
        return reject("Can not create directory");
      }

      console.log(chalk.blue(`Directory created: ${widgetDirectory}`));

      gitClone(repo, widgetDirectory, { shallow: true }, e => {
        if (!e) return resolve("Clone done!");
        reject(e);
      });
    } else {
      reject(`Directory existis: ${widgetDirectory}`);
    }
  });
};
