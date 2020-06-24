'use strict';

module.exports = {
    'theknot': {
        postgres: {
            username: 'postgres',
            password: 'postgres',
            database: 'theknot',
            host    : 'postgres',
            dialect : 'postgres',
            pool    : {
                max : 5,
                min : 0,
                idle: 10000
            }
        },
        redis: {
            host: 'redis',
            port: 6379
        },
    }
};
