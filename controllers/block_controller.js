const dotenv = require("dotenv");
dotenv.config();

module.exports = {

  getBlockHeight: async function (req, res) {
    const height = 0;
    // Get chain height;
    res.status(200);
    res.send(height);
  },

  getSyncing: async function (req, res) {
    const syncStatus = "";

    res.status(200);
    res.send(syncStatus);
  },

  getGas: async function (req, res) {
    const gasLimit;
    const gasPrice;

    res.json({
      "GasLimit": gasLimit,
      "GasPrice": gasPrice
    })
  }
}
