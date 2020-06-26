'use strict';

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const config = require('config');
const Package = require(__dirname + '/../package.json');

module.exports = {
    server: {
        app: {
            slogan: Package.description
        },
        debug: {
            request: ['error']
        },
        port  : 80,
        routes: {
            cors: true
        }
    },
    register: {
        plugins: [
            Inert,
            Vision,
            {
                plugin : HapiSwagger,
                options: {
                    info: {
                        title  : Package.name,
                        version: Package.version
                    },
                    documentationPath: '/specs'
                }
            },
            {
                plugin : './theknot/plugin.js',
                options: config.get('theknot')
            }
        ]
    }
};
