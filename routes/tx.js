const router = require("express").Router();
const txController = require("../controllers/tx_controller");

router.route("/").post(txController.transfer);

router.route("/txhash/:txhash").get(txController.getTxById);
router.route("/address/:address").get(txController.getTxByAddress);
router.route("/block/:block").get(txController.getTxByBlock);
router.route("/range").get(txController.getTxRange);
router.route("/pending").get(txController.getTxPending);

module.exports = router;