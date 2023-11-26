'use strict';

/**
 * impress service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::impress.impress');
