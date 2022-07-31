exports.TABLES = {
    students: {
        table: 'students',
        columns: {
            id: 'id',
            firstName: 'firstName',
            lastName: 'lastName'
        }
    },
    books: {
        table: 'books',
        columns: {
            id: 'id',
            bookName: 'bookName',
            authorName: 'authorName'
        }
    },
    student_book: {
        table: 'student_book',
        columns: {
            id: 'id',
            student_id: 'student_id',
            book_id: 'book_id',
            dateOfBorrow: 'dateOfBorrow',
            expectedDateOfReturn: 'expectedDateOfReturn',
            dateOfReturn: 'dateOfReturn'
        }
    }
}