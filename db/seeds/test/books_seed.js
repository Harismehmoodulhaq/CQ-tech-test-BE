const {
  TABLES: {
    books: {
      table,
      columns: {
        authorName,
        bookName,
        id
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
      [bookName]: 'Cheque book',
      [authorName]: 'Vasdev Mohi'
    },
    {
      [id]: 2,
      [bookName]: 'The Overstory',
      [authorName]: 'Richard Powers'
    }
  ]);
};
//NODE_ENV='test' knex seed:run --specific=books_seed.js --env test