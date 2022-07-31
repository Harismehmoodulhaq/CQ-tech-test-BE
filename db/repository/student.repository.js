var knex = require('../knex');
const {
  TABLES: {
    students: {
      table,
      columns: {
        id,
        firstName,
        lastName
      }
    }
  }
} = require('../../constants/db-constants')

function Students() {
  return knex(table);
}

// *** queries *** //

async function getAll() {
  return Students().select('*');
}

async function updateStudent(data) {

  await knex(table).update({
    firstName: data.firstName,
    lastName: data.lastName

  }).where('id', '=', data.id);

}

module.exports = {
  getAll,
  updateStudent
};