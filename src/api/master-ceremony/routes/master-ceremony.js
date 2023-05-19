'use strict';

/**
 * master-ceremony router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::master-ceremony.master-ceremony');
