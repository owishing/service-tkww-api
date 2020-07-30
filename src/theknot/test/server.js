'use strict';

require('chai').should();
const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const config = require('config');
const plugin = require('../plugin');

const defaultOptions = {
    port: 5000
};

module.exports = class Server {
    constructor(options) {

        this.options = Hoek.merge(defaultOptions, options || {});

        this.hapi = new Hapi.Server({
            port: this.options.port
        });

        this.register = [{ plugin, options: config.get(plugin.name) || {} }];
    }

    async start() {
        await this.hapi.register(this.register);
        await this.hapi.start();
    }

    async stop() {
        await this.hapi.stop();
    }

    async inject(options) {
        return await this.hapi.inject(options);
    }
}
