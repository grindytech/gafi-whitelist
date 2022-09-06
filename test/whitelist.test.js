let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Whitelist', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET verify', () => {
        it('it should get verify value', (done) => {
            chai.request(server)
                .get('/whitelist/verify?pool_id=3a77d059474c1143d0d9cfc55f1d8601099a37c30c943f2807d6a7aa9eddd386&address=d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d')
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.equal(true);
                    done();
                });
        });
    });
});


