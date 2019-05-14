const gitClone = require("git-clone");
const fs = require("fs");
const repo = "git@gitlab-cloud.doc88.com.br:flux/widgets/widget-core.git";

module.exports = function(name) {
  return new Promise(function(resolve, reject) {
    if (typeof name !== "string" && name === "")
      return reject("Give me a name!");

    const widgetDirectory = `${__dirname}/../../../${name}`;

    // process.stdout.write(`\rWill create directory: ${repo}\r`);
    // process.stdout.write(`\rWill create directory: ${widgetDirectory}\r`);
    console.log(`\rWill create directory: ${widgetDirectory}\r`);

    if (widgetDirectory && !fs.existsSync(widgetDirectory)) {
      fs.mkdirSync(widgetDirectory);

      // process.stdout.write(`\rDirectory created: ${widgetDirectory}\r`);
      console.log(`\rDirectory created: ${widgetDirectory}\r`);

      gitClone(repo, widgetDirectory, { shallow: true }, e => {
        if (!e) return resolve(name);
        console.log({ Error: e });
      });
    } else {
      // process.stdout.write(`\rDirectory existis: ${widgetDirectory}\r`);
      console.log(`\rDirectory existis: ${widgetDirectory}\r`);
      resolve(name);
    }
  });
};
