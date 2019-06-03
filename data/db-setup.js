const knex = require('knex');

const config = require('../knexfile.js');

modulex.exports = knex(config.development);