'use strict';

module.exports = {
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || 'theknot',
        host    : process.env.DB_HOSTNAME,
        dialect : 'postgres',
        pool    : {
            max : 5,
            min : 0,
            idle: 10000
        }
    },
    redis: {
        host: process.env.REDIS_URL,
        port: process.env.REDIS_PORT
    },
    theknot: {
        
    }
};
