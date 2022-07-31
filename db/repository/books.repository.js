var knex = require('../knex');
const {
    TABLES: {
        books: {
            table: book,
            columns: {
                id,
                bookName,
                authorName
            }
        },
        student_book: {
            table: sbTable,
            columns: {
                book_id,
                dateOfBorrow,
                expectedDateOfReturn,
                dateOfReturn,
                student_id
            }
        },
        students: {
            table: sTable,
            columns: {
                firstName,
                lastName
            }
        }
    }
} = require('../../constants/db-constants')


// *** queries *** //

async function getAll() {
    const data = await knex.select([
            `${sbTable}.${book_id}`,
            `${sbTable}.${id}`,
            `${sbTable}.${dateOfBorrow}`,
            `${sbTable}.${expectedDateOfReturn}`,
            `${sbTable}.${dateOfReturn}`,
            `${sTable}.${lastName}`,
            `${sTable}.${firstName}`,
            `${book}.${bookName}`,
            `${book}.${authorName}`,


        ]).from(book).innerJoin(sbTable, `${book}.${id}`, "=", `${sbTable}.${book_id}`)
        .innerJoin(sTable, `${sTable}.${id}`, "=", `${sbTable}.${student_id}`);
    return data.map(({
        firstName,
        lastName,
        ...rest
    }) => ({
        ...rest,
        borrowedBy: `${firstName || ''} ${lastName || ''}`
    }));
}


async function updateBook(data) {

    const trx = await knex.transaction();

    try {
        await knex(book).update({
            bookName: data.bookName,
            authorName: data.authorName

        }).transacting(trx).where('id', '=', data.book_id);

        await knex(sbTable).update({
            dateOfReturn: data.dateOfReturn ? new Date(data.dateOfReturn) : null,
            expectedDateOfReturn: data.expectedDateOfReturn ? new Date(data.expectedDateOfReturn) : null,
            dateOfBorrow: data.dateOfBorrow ? new Date(data.dateOfBorrow) : null,

        }).transacting(trx).where('id', '=', data.id);

        await trx.commit();
    } catch (error) {
        await trx.rollback(error);
        throw error
    }

}

module.exports = {
    getAll,
    updateBook
};