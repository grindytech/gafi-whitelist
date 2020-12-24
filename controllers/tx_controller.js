const dotenv = require("dotenv");
const utils = require("../utils/utils");

dotenv.config();

module.exports = {
    transfer: async function (req, res) {
        privateKey = req.body.PrivateKey;
        toAddress = req.body.ToAddress;
        amount = req.body.Amount;
        
    },

    getTxById: async function (req, res) {
        const txhash = req.params.txhash;
        utils.GetTxById(txhash).then(value => {
            res.send(value);
        }).catch(err => {
            res.status(500)
            res.send(err);
            return;
        })
    },

    getTxByAddress: async function (req, res, next) {
        const address = req.params.address;
    },

    getTxByBlock: async function (req, res) {
        const block = req.params.block;
    },

    getTxRange: async function (req, res) {
        start = req.query.start;
        end = req.query.end;
    },

    getTxPending: async function (req, res) {
    },
};