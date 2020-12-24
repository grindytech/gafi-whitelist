const dotenv = require("dotenv");
dotenv.config();


module.exports = {
  getBalance: async function (req, res) {
    const address = req.params.address;

    // Get balance here

    const balance;
    res.send({
      balance
    })
  },

  getTokenBalance: async function (req, res) {
    address = req.query.Address;
    tokenAddress = req.query.TokenAddress;
    try {
      const value;

      // Get token balance
      res.json({
        value
      })
    } catch (err) {
      res.status(500)
      res.send({ "err": err.message });
      return;
    }
  },

  createNewAccount: async function (req, res) {
    const account;

    // create new account

    res.send({
      "Address": account.address,
      "PrivateKey": account.privateKey
    })
  },

  getNonce: async function (req, res) {
    // not necessary
  }
}
