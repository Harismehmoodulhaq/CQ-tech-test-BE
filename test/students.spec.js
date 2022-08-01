process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../app');
const {
    TABLES: {
        students: {
            table,
            columns: {
                id,
                firstName,
                lastName
            }
        },
    }
} = require('../constants/db-constants');



chai.use(chaiHttp);

describe('GET /api/v1/students', function () {
    it('should return all students', function (done) {
        chai.request(server)
            .get('/api/v1/students')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json; // jshint ignore:line
                res.body.should.be.a('array');
                res.body.length.should.equal(2);
                res.body[0].should.have.property(firstName);
                res.body[0].firstName.should.equal('Abass');
                res.body[0].should.have.property(lastName);
                res.body[0].lastName.should.equal('Ali');
                done();
            });
    });
});