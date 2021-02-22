const jsonfile = require('jsonfile');
const _ = require('lodash');


  export function alphaJson(file, data) {
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


  export function updateAlphaJson(file, newFile) {

    jsonfile.readFile(file, function (err, obj) {

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
        if (err) console.error(err)
      });
  }