'use strict';

/**
 * master-ceremony controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::master-ceremony.master-ceremony');
