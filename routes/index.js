const router = require("express").Router();

const whitelist = require('./whitelist');


// API routes
router.use("/whitelist", whitelist);

// If no API routes are hit
router.get("*", (req, res) => {
  res.send("Welcome to gafi-whitelist")
});

module.exports = router;