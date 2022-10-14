const fs = require('fs');
const dotenv = require("dotenv");
const { hex_to_ss58 } = require('../utils/key-util');
const { validateAddress } = require('@polkadot/util-crypto');
dotenv.config();
const PATH = process.env.WHITELIST_PATH || "whitelist";


module.exports = {
  verify: async function (req, res) {
    let pool_id = req.query.pool_id;
    let address = req.query.address;

    // validate pool_id
    if (pool_id === undefined || pool_id === null || pool_id.length != 64) {
      res.status(400)
      res.send({ "err": `pool_id not correct ${pool_id}` });
      return;
    }

    // validate address
    try {
      if (validateAddress(address) == false) {
        res.status(400)
        res.send({ "err": `invalid address` });
        return;
      }
    } catch (err) {
      res.status(400)
      res.send({ "err": `invalid address: ${err.message()}` });
      return;
    }

    let path = `${PATH}/${pool_id}.json`;

    let list;
    try {

      let content = fs.readFileSync(path, 'utf8');

      list = JSON.parse(content);

      if (list.pool_id !== pool_id) {
        res.status(400)
        res.send({ err: "pool_id not found" });
        return;
      }
    } catch (err) {
      res.status(400)
      res.send({ err: `fail parse whitelist file ${err}` });
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
      res.send({ err: "fail to verify whitelist" });
      return;
    }
  },

  add: async function (req, res) {
    let pool_id = req.body.pool_id;
    let address = req.body.address;

    // validate pool_id
    if (pool_id === undefined || pool_id === null || pool_id.length != 64) {
      res.status(400)
      res.send({ "err": `pool_id not correct ${pool_id}` });
      return;
    }

    // validate address
    try {
      for (const addr of address) {
        if (validateAddress(addr) == false) {
          res.status(400)
          res.send({ "err": `invalid address` });
          return;
        }
      }
    } catch (err) {
      res.status(400)
      res.send({ "err": `invalid address: ${err.message}` });
      return;
    }

    let path = `${PATH}/${pool_id}.json`;

    let list;
    try {
      list = JSON.parse(fs.readFileSync(path, 'utf8'));

      if (list.pool_id !== pool_id) {
        res.status(400)
        res.send({ "err": "pool_id not found" });
        return;
      }

      list.whitelist.push(...address);

      var json = JSON.stringify(list);
      fs.writeFileSync(path, json);
    } catch (err) {
      res.status(400)
      res.send({ "can not add new address": err.message });
      return;
    }
    res.status(200);
    res.json(true);
  },

  create: async function (req, res) {
    let pool_id = req.body.pool_id;
    let address = req.body.address;

    // validate pool_id
    if (pool_id === undefined || pool_id === null || pool_id.length != 64) {
      res.status(400)
      res.send({ "err": `pool_id not correct ${pool_id}` });
      return;
    }

    // validate address
    try {
      for (const addr of address) {
        if (validateAddress(addr) == false) {
          res.status(400)
          res.send({ "err": `invalid address` });
          return;
        }
      }
    } catch (err) {
      res.status(400)
      res.send({ "err": `invalid address: ${err.message}` });
      return;
    }

    let path = `${PATH}/${pool_id}.json`;
    let data = {
      "pool_id": pool_id,
      "whitelist": address,
    };

    fs.writeFile(path, JSON.stringify(data), { flag: 'wx' }, function (err) {

      if (err) {
        res.status(400)
        res.send({ "err": `${err}` });
        return;
      } else {
        res.status(200);
        res.json("create file success");
      }
    });
  }
}
