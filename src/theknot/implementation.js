'use strict';

const defaultOptions = {};

const Plugin = function Plugin() {
    this.options = defaultOptions;
};

Plugin.prototype = Object.assign(Plugin.prototype, {
    config: require('./methods/config'),
    healthCheck: require('./methods/health-check')
});

module.exports = Plugin;
