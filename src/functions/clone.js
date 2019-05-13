module.exports = function(name) {
  return new Promise(function(resolve, reject) {

    if (typeof name === 'string' && name !== '') {
      process.stdout.write(`\rWill create folder: ${name}\r`);

      return resolve(name);
    }
    
    reject("Give me a name!")
  });
}