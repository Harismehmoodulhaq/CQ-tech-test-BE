var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
console.log(process.env.NODE_ENV)
module.exports = require('knex')(config);