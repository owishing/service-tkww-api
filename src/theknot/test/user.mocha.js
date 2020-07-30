'use strict';

const Server = require('./server');

describe('User testing', function() {
    let server;
    before(async function() {
        console.log('Start testing');
        server = new Server();
        await server.start();
    });

    after(async function() {
        console.log('After testing');
        await server.stop();
    });

    describe('GET Users', function() {
        it('should response correct user info.', function() {
            return server.inject({
                method: 'GET',
                url   : '/user/1'
            }).then(function(response) {
                const result = response.result.dataValues;
                response.statusCode.should.equal(200);
                result.firstName.should.equal('John');
                result.lastName.should.equal('Doe');
                result.email.should.equal('owishing@xogrp.com');
                result.telephone.should.equal('18627096258');
            });
        });
    });
});
