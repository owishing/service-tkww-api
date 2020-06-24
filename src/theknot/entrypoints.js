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
};

module.exports = entryPoints;
