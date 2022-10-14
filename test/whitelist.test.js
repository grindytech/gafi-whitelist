let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
const { mnemonicGenerate } = require('@polkadot/util-crypto');
const { Keyring } = require('@polkadot/keyring');
const { u8aToHex } = require('@polkadot/util');

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
        // it('it should get verify value', (done) => {
        //     chai.request(server)
        //         .get('/whitelist/verify?pool_id=3a77d059474c1143d0d9cfc55f1d8601099a37c30c943f2807d6a7aa9eddd386&address=d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d')
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             expect(res.body).to.equal(true);
        //             done();
        //         });
        // });


        it('it should add address', (done) => {

            let seed = mnemonicGenerate();
            const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
            const pair = keyring.addFromUri(seed, { name: 'key pair' }, 'sr25519');
            const addr_hex = u8aToHex(pair.publicKey, undefined, false);

            chai.request(server)
                .get(`/whitelist/add?pool_id=3a77d059474c1143d0d9cfc55f1d8601099a37c30c943f2807d6a7aa9eddd386&address=0x${addr_hex}`)
                .end((err, res) => {
                    expect(res.status).to.equal(200, JSON.stringify(res.body));
                    expect(res.body).to.equal(true, JSON.stringify(res.body));
                });

            chai.request(server)
                .get(`/whitelist/verify?pool_id=3a77d059474c1143d0d9cfc55f1d8601099a37c30c943f2807d6a7aa9eddd386&address=0x${addr_hex}`)
                .end((err, res) => {
                    expect(res.status).to.equal(200, JSON.stringify(res.body));
                    expect(res.body).to.equal(true, JSON.stringify(res.body));
                    done();
                });
        });
    });
});


