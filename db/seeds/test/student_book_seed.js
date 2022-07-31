const {
  TABLES: {
    student_book: {
      table,
      columns: {
        id,
        book_id,
        dateOfBorrow,
        expectedDateOfReturn,
        student_id,
        dateOfReturn
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
      [student_id]: '2',
      [book_id]: '1',
      [dateOfBorrow]: new Date('2022-01-01'),
      [expectedDateOfReturn]: new Date('2022-01-05'),
      [dateOfReturn]: new Date('2022-01-06')
    },
    {
      [id]: 2,
      [student_id]: '1',
      [book_id]: '2',
      [dateOfBorrow]: new Date('2022-01-25'),
      [expectedDateOfReturn]: new Date('2022-02-25'),
      [dateOfReturn]: new Date('2022-01-30')
    },
    {
      [id]: 3,
      [book_id]: '1',
      [student_id]: '1',
      [dateOfBorrow]: new Date('2022-01-07'),
      [expectedDateOfReturn]: new Date('2022-03-01'),
      [dateOfReturn]: new Date('2022-02-30')
    },
    {
      [id]: 4,
      [book_id]: '2',
      [student_id]: '2',
      [dateOfBorrow]: new Date('2022-04-01'),
      [expectedDateOfReturn]: new Date('2022-05-01'),
      [dateOfReturn]: new Date('2022-04-25')
    },
  ]);
};

//NODE_ENV='test' knex seed:run --specific=books_seed.js --env test