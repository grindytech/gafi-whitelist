const router = require("express").Router();
const blockController = require("../controllers/block_controller");

router.route("/height").get(blockController.getBlockHeight);
router.route("/syncing").get(blockController.getSyncing);
router.route("/gas").get(blockController.getGas);

module.exports = router;