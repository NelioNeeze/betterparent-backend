'use strict';

/**
 * data-protection router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::data-protection.data-protection');
