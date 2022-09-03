const fs = require('fs');
const dotenv = require("dotenv");
dotenv.config();


module.exports = {
  verify: async function (req, res) {
    let pool_id = req.query.pool_id;
    let address = req.query.address;

    if (pool_id === undefined || pool_id === null || pool_id.length != 32) {
      res.status(400)
      res.send({ "err": "pool_id not correct" });
      return;
    }

    if (address === undefined || address === null || address.length != 48) {
      res.status(400)
      res.send({ "err": "address not correct" });
      return;
    }

    let list = JSON.parse(fs.readFileSync('whitelist.json', 'utf8'));

    if (list.pool_id !== pool_id) {
      res.status(400)
      res.send({ "err": "pool_id not found" });
      return;
    }

    let whitelist = list.whitelist;

    let whitelist_address = whitelist.find(e => e == address);

    try {
      if (whitelist_address !== undefined && address === whitelist_address) {
        res.json(true);
      } else {
        res.json(false);
      }
    } catch (err) {
      res.status(500)
      res.send({ "err": err.message });
      return;
    }
  },
}
