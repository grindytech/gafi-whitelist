const dotenv = require("dotenv");
dotenv.config();


const GetConfirmations = async (txhash) => {
    const confirmations = 0;
    return confirmations;
}

const GetTxById = async (txhash) => {
    const confirmations = await GetConfirmations(txhash);
    return new Promise((resolve, reject) => {
        const tx;
        resolve(tx);
    })
}

const GetTxhashByBlock = async (block) => {
    return new Promise((resolve, reject) => {
        const txs = [];
        resolve(txs);
    })
}


module.exports = { GetTxById, GetTxhashByBlock }
