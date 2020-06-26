'use strict';

const entryPoints = function(server, plugin) {
    server.bind(plugin);

    server.route({
        method : 'GET',
        path   : '/health',
        handler: plugin.healthCheck,
        options: {
            auth       : false,
            description: 'Health check endpoint',
            notes      : 'Returns a successful message when the service is running.',
            tags       : ['api']
        }
    });

    server.route({
        method : 'GET',
        path   : '/user/{id}',
        handler: plugin.getUser,
        options: {
            auth       : false,
            description: 'Get user by id endpoint',
            notes      : 'Returns a user.',
            tags       : ['api']
        }
    });

    server.route({
        method : 'GET',
        path   : '/product/{id}',
        handler: plugin.getProduct,
        options: {
            auth       : false,
            description: 'Get product by id endpoint',
            notes      : 'Returns a product.',
            tags       : ['api']
        }
    });
};

module.exports = entryPoints;
