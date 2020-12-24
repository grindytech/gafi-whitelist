
const router = require("express").Router();
const token_controller = require("../controllers/token_controller");

router.route("/").post(token_controller.createToken);
router.route("/tx").post(token_controller.transfer);

module.exports = router;