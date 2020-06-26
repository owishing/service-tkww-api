'use strict';

const implementation = require('./implementation');
const entryPoints    = require('./entrypoints');

const register = async function(server, options) {
    const instance = new implementation();

    instance.config(options);

    return entryPoints(server, instance);
};

module.exports = {
    name: 'theknot',
    register
};
