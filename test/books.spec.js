process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
const {
    TABLES: {
        books: {
            table,
            columns: {
                id,
                bookName,
                authorName
            }
        },
        student_book: {
            columns: {
                student_id,
                book_id,
                dateOfBorrow,
                expectedDateOfReturn,
                dateOfReturn
            }
        }
    }
} = require('../constants/db-constants')



chai.use(chaiHttp);

describe('GET /api/v1/books', function () {
    it('should return all books', function (done) {
        chai.request(server)
            .get('/api/v1/books')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('array');
                res.body.length.should.equal(4);
                res.body[0].should.have.property(dateOfBorrow);
                res.body[0].should.have.property(bookName);
                res.body[0].should.have.property(expectedDateOfReturn);
                res.body[0].should.have.property(authorName);
                res.body[0].should.have.property(book_id);
                res.body[0].should.have.property(id);
                res.body[0].should.have.property(dateOfReturn);
                res.body[0].should.have.property('borrowedBy');

                done();
            });
    });
});