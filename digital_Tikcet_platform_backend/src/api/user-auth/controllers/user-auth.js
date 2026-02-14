'use strict';

/**
 * user-auth controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-auth.user-auth');
