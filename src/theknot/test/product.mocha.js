'use strict';

const Server = require('./server');

describe('Product testing', function() {
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

    describe('GET products', function() {
        it('should response correct product info.', function() {
            return server.inject({
                method: 'GET',
                url   : '/product/1'
            }).then(function(response) {
                const result = response.result.dataValues;
                response.statusCode.should.equal(200);
                result.name.should.equal('Milk');
                result.sku.should.equal('SKU-000000');
                result.category.should.equal('Food');
                result.price.should.equal(6.60);
            });
        });
    });
});
