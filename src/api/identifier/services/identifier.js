'use strict';

/**
 * identifier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::identifier.identifier');
