const dotenv = require("dotenv");
dotenv.config();


module.exports = {
  verify: async function (req, res) {
    let pool_id = req.query.pool_id;
    let address = req.query.address;

    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('whitelist.json', 'utf8'));

    console.log("obj", obj);

    try {

      res.json({
      })
    } catch (err) {
      res.status(500)
      res.send({ "err": err.message });
      return;
    }
  },
}
