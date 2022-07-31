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
} = require('../../../constants/db-constants')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([{
      [id]: 1,
      [firstName]: 'Abass',
      [lastName]: 'Ali'
    },
    {
      [id]: 2,
      [firstName]: 'Hussain',
      [lastName]: 'Ali'
    },

  ]);
};