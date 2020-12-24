const router = require("express").Router();

const walletRoute = require('./account');
const txRoute = require("./tx");
const blockRoute = require("./block");
const tokenRoute = require("./token");

// API routes
router.use("/account", walletRoute);
router.use("/tx", txRoute)
router.use("/block", blockRoute);
router.use("/token", tokenRoute);

// If no API routes are hit
router.get("*", (req, res) => {
  res.send("Welcome to bnb-node api")
});

module.exports = router;