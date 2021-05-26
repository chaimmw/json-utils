const alph = require('./alpha-order');
const camel = require('./camel');
const add = require('./add-json');


const utils = {
    camelJson: camel.camelJson,
    updateCamelJson: camel.updateCamelJson,
    alphaJson: alph.alphaJson,
    updateAlphaJson: alph.updateAlphaJson,
    addJson: add.addAlphaJson
};

module.exports = {
    utils
};