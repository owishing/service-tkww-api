'use strict';

const Redis = require('ioredis');
const config = require('config').get('redis');
const db = require('../../../models');

const initRedis = ({host, port}) => {
    const redis = new Redis({ port, host });
    redis
        .on('connect', () => console.log(`Redis connected to: ${host}!`))
        .on('error', (error) => {
            redis.disconnect();
            console.log(`caught an error on redis: ${error}`);
        });

    return redis;
};

module.exports = function(options) {
    this.options = Object.assign(this.options, options);
    this.redis = initRedis(config);
    this.db = db;
};