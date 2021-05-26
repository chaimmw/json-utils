const jsonfile = require('jsonfile');
const _ = require('lodash');



  function addAlphaJson(file, newData, newFile = undefined) {

    jsonfile.readFile(file, function (err, data) {

        const mergedData = {
            ...data,
            ...newData
        };

        const sorted = Object.keys(mergedData).sort((keyA, keyB) => keyA.localeCompare(keyB));
        const alphab = sorted.reduce((acc, curr) => {
            return {
                ...acc,
                [curr]: data[curr]
            };
        }, {});
        const newFileWrite = newFile || file;
        jsonfile.writeFile(file, alphab, {spaces: 2}, function (err) {
            if (err) {
                console.error(err)
            } else {
                console.log('json add and alphabetized!');
            }
          });
        if (err) console.error(err)
      });
  }

  module.exports = {
    addAlphaJson
  };