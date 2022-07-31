const express = require('express');
const router = express.Router();

const {
    getBooks,
    patchBook
} = require('../controllers/books.controller');

router.get('/books', getBooks);
router.patch('/books/:id', patchBook);


module.exports = router;