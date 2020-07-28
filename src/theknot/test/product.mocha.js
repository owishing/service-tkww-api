'use strict';

require('chai').should();

const message = 'expect message';

describe('Product testing', function() {
    before(async function() {
        console.log('Start testing');
    });

    after(async function() {
        console.log('After testing');
    });

    describe('GET Products', function() {
        it('should equal with expect message', function() {
            return Promise.resolve().then(() => {
                message.should.equal('expect message');
            });
        });
    });
});
