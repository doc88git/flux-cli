const fs = require("fs-extra");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  createDirectpry: path => {
    try {
      return fs.mkdirSync(path);
    } catch (err) {
      return false;
    }
  },

  removeDocGit: (path, cb) => {
    try {
      return fs.remove(`./${path}/.git`, cb);
    } catch (err) {
      return false;
    }
  }
};
