'use strict';

/**
 * master-ceremony service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-ceremony.master-ceremony');
