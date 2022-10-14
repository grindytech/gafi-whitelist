
const router = require("express").Router();
const whitelist_controller = require("../controllers/whitelist_controller");

router.route("/verify").get(whitelist_controller.verify);
router.route("/add").get(whitelist_controller.add);

module.exports = router;