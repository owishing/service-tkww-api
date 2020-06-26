'use strict';

module.exports = {
    db: {
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
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
    theknot: {
        
    }
};
