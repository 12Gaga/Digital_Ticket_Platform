'use strict';

/**
 * ticket-booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticket-booking.ticket-booking');
