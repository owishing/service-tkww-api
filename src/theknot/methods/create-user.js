'use strict';

const Boom = require("@hapi/boom");

module.exports = async function(request, h){
    const { User } = this.db;
    const { user } = request.payload;
    const result = await User.create(user);
    return result;
};
