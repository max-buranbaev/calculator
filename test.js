const app = require('./index');
const should = require('should');
const supertest = require('supertest');

describe('TESTING CALCULATOR API', () => {

    it('[POST] Calculating method', (done) => {

        const data = {
            calculation: "20+7*12-56/23",
            date: Date.now()
        };

        supertest(app)
            .post('/calculations')
            .send(data)
            .expect(200)
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.result.should.equal(101.56521739130434);
                done();
            });

    });

    it('[GET] Get all calculations method', (done) => {

        supertest(app)
            .get('/calculations')
            .expect(200)
            .end((err, res) => {
                res.body[res.body.length-1]['calculation'].should.equal("20+7*12-56/23");
                res.body[res.body.length-1]['result'].should.equal(101.56521739130434);
                res.status.should.equal(200);
                done();
            });

    });

});