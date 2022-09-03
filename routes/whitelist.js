
const router = require("express").Router();
const whitelist_controller = require("../controllers/whitelist_controller");

router.route("/verify").get(whitelist_controller.verify);

module.exports = router;