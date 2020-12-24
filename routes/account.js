const router = require("express").Router();
const accountController = require("../controllers/account_controller");

router.route("/address/:address").get(accountController.getBalance);
router.route("/token").get(accountController.getTokenBalance);
router.route("/").post(accountController.createNewAccount);
router.route("/nonce/:address").get(accountController.getNonce);

module.exports = router;