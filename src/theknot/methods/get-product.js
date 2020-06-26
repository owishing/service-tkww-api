'use strict';

const Boom = require("@hapi/boom");

module.exports = async function(request, h){
    const { Product } = this.db;
    const { id } = request.params;
    const product = await Product.findOne({ where: { id } });
    if (!product) return Boom.notFound();
    return product;
};
