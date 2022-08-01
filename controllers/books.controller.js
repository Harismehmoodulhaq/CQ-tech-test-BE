const {
    getAll: getAllBooks,
    updateBook
} = require('./../db/repository/books.repository')

async function getBooks(req, res, next) {
    try {
        const books = await getAllBooks()

        return res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}


async function patchBook(req, res, next) {
    try {
        const data = await updateBook(req.body)
        return res.status(200).json({
            id: req.body.book_id
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getBooks,
    patchBook,
}