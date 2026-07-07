'use strict';

/**
 * special-seva service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-seva.special-seva');
