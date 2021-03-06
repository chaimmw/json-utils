const jsonfile = require('jsonfile');
const _ = require('lodash');


  function alphaJson(file, data) {
    const sorted = Object.keys(data).sort((keyA, keyB) => keyA.localeCompare(keyB));
    const alphab = sorted.reduce((acc, curr) => {
        return {
            ...acc,
            [curr]: data[curr]
        };
    }, {});
    jsonfile.writeFile(file, alphab, {spaces: 2}, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log('json alphabetized!');
        }
      });
  }


  function updateAlphaJson(file, newFile) {

    jsonfile.readFile(file, function (err, data) {

        const sorted = Object.keys(data).sort((keyA, keyB) => keyA.localeCompare(keyB));
        const alphab = sorted.reduce((acc, curr) => {
            return {
                ...acc,
                [curr]: data[curr]
            };
        }, {});
        const newFileWrite = newFile || file;
        jsonfile.writeFile(newFileWrite, alphab, {spaces: 2}, function (err) {
            if (err) {
                console.error(err)
            } else {
                console.log('json alphabetized!');
            }
          });
        if (err) console.error(err)
      });
  }

  module.exports = {
    alphaJson,
    updateAlphaJson
  };