const router = require("express").Router();

const whitelist = require('./whitelist');
const test = require('./test');

// API routes
router.use("/whitelist", whitelist);
router.use("/test", test);

// If no API routes are hit
router.get("*", (req, res) => {
  res.send("Welcome to gafi-whitelist")
});

module.exports = router;