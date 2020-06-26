'use strict';

const Boom = require("@hapi/boom");

module.exports = async function(request, h){
    const { User } = this.db;
    const { id } = request.params;
    const user = await User.findOne({ where: { id } });
    if (!user) return Boom.notFound();
    return user;
};
