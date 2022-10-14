let chai = require('chai');
const expect = chai.expect;
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
const { mnemonicGenerate } = require('@polkadot/util-crypto');
const { Keyring } = require('@polkadot/keyring');
const { u8aToHex } = require('@polkadot/util');

chai.use(chaiHttp);
var POOL_ID;
let MAX_ADDR = 2;

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

        it('it should create whitelist', (done) => {
            const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

            let pool_id = genRanHex(64);
            POOL_ID = pool_id;

            let address = [];
            for (let i = 0; i < MAX_ADDR; i++) {
                let seed = mnemonicGenerate();
                const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
                const pair = keyring.addFromUri(seed, { name: 'key pair' }, 'sr25519');
                const addr_hex = "0x" + u8aToHex(pair.publicKey, undefined, false);
                address.push(addr_hex);
            }

            chai.request(server)
                .post(`/whitelist/create`)
                .send({
                    pool_id: pool_id,
                    address: address
                })
                .end((err, res) => {
                    expect(res.status).to.equal(200, JSON.stringify(res.body));
                });


            chai.request(server)
                .post(`/whitelist/create`)
                .send({
                    pool_id: pool_id,
                    address: address
                })
                .end((err, res) => {
                    expect(res.status).to.equal(400, JSON.stringify(res.body));
                });

            done();
        })


        it('it should add address', (done) => {
            let address = [];
            for (let i = 0; i < MAX_ADDR; i++) {
                let seed = mnemonicGenerate();
                const keyring = new Keyring({ type: 'sr25519', ss58Format: 42 });
                const pair = keyring.addFromUri(seed, { name: 'key pair' }, 'sr25519');
                const addr_hex = "0x" + u8aToHex(pair.publicKey, undefined, false);
                address.push(addr_hex);
            }

            chai.request(server)
                .post(`/whitelist/add`)
                .send({
                    pool_id: POOL_ID,
                    address: address
                })
                .end((err, res) => {
                    expect(res.status).to.equal(200, JSON.stringify(res.body));
                    expect(res.body).to.equal(true, JSON.stringify(res.body));
                });

            for (let i = 0; i < MAX_ADDR; i++) {
                chai.request(server)
                    .get(`/whitelist/verify?pool_id=${POOL_ID}&address=${address[i]}`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200, JSON.stringify(res.body));
                        expect(res.body).to.equal(true, JSON.stringify(res.body));
                    });
            }

            done();
        });


        it('it should get address', (done) => {
            chai.request(server)
                .get(`/whitelist/get?pool_id=${POOL_ID}`)
                .end((err, res) => {
                    expect(res.status).to.equal(200, JSON.stringify(res.body));
                    expect(res.body.length).to.equal(MAX_ADDR * 2, JSON.stringify(res.body));
                });
            done();
        });
    });
});


