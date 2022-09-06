const fs = require('fs');
const dotenv = require("dotenv");
const { hex_to_ss58 } = require('../utils/key-util');
dotenv.config();


module.exports = {
  verify: async function (req, res) {
    let pool_id = req.query.pool_id;
    let address = hex_to_ss58("0x" + req.query.address, 42);

    if (pool_id === undefined || pool_id === null || pool_id.length != 64) {
      res.status(400)
      res.send({ "err": `pool_id not correct ${pool_id}` });
      return;
    }

    if (address === undefined || address === null || address.length != 48) {
      res.status(400)
      res.send({ "err": "address not correct" });
      return;
    }

    let path = `whitelist/${pool_id}.json`;

    let list;
    try {
      list = JSON.parse(fs.readFileSync(path, 'utf8'));

      if (list.pool_id !== pool_id) {
        res.status(400)
        res.send({ "err": "pool_id not found" });
        return;
      }
    } catch (err) {
      res.status(400)
      res.send({ "err": err.message });
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
