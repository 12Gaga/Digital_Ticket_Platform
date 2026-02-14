'use strict';

/**
 * user-auth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-auth.user-auth');
