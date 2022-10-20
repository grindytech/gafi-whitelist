
const router = require("express").Router();
const test_controller = require("../controllers/test_controller");

router.route("/always_true").get(test_controller.always_true);
router.route("/always_false").get(test_controller.always_false);

module.exports = router;