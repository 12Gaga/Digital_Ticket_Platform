'use strict';

/**
 * user-auth router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-auth.user-auth');
