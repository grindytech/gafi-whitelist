
const router = require("express").Router();
const whitelist_controller = require("../controllers/whitelist_controller");

router.route("/verify").get(whitelist_controller.verify);
router.route("/get").get(whitelist_controller.get);
router.route("/add").post(whitelist_controller.add);
router.route("/create").post(whitelist_controller.create);

module.exports = router;