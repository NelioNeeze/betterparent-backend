'use strict';

/**
 * data-protection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-protection.data-protection');
