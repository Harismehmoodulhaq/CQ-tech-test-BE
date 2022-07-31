const {
    TABLES: {
        books: {
            table: bkTable,
            columns: bkColumns
        },
        students: {
            table: stTable,
            columns: stColumns
        },
    }
} = require('../../constants/db-constants')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    console.log(stColumns)
    return knex.schema.createTable('student_book', function (table) {
        table.increments().primary();
        table.integer('student_id').references(stColumns.id).inTable(stTable).notNullable();
        table.integer('book_id').references(bkColumns.id).inTable(bkTable).notNullable();
        table.dateTime('dateOfBorrow').notNullable();
        table.dateTime('expectedDateOfReturn').notNullable();
        table.dateTime('dateOfReturn').nullable();
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('student_book')
};