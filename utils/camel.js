const jsonfile = require('jsonfile');
const _ = require('lodash');


  function camelJson(file, data) {
    const cameledData = Object.keys(data).reduce((acc, curr) => {
        const key = _.camelCase(curr);
        return {
            ...acc,
            [key]: data[curr]
        };
    }, {});
    jsonfile.writeFile(file, cameledData, {spaces: 2}, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log('json cameled!');
        }
      });
  }


  function updateCamelJson(file, newFile) {

    jsonfile.readFile(file, function (err, obj) {

        const cameledData = Object.keys(obj).reduce((acc, curr) => {
            const key = _.camelCase(curr);
            return {
                ...acc,
                [key]: obj[curr]
            };
        }, {});
        const newFileWrite = newFile || file;
        jsonfile.writeFile(newFileWrite, cameledData, {spaces: 2}, function (err) {
            if (err) {
                console.error(err)
            } else {
                console.log('json cameled!');
            }
          });
        if (err) console.error(err)
      });
  }

  module.exports = {
    camelJson,
    updateCamelJson
  };


