const alph = require('./alpha-order');
const camel = require('./camel');


const utils = {
    camelJson: camel.camelJson,
    updateCamelJson: camel.updateCamelJson,
    alphaJson: alph.alphaJson,
    updateAlphaJson: alph.updateAlphaJson,
};

module.exports = {
    utils
};