const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    always_true: async function (req, res) {
        res.status(200);
        res.json(true);
    },

    always_false: async function (req, res) {
        res.status(400);
        res.json(false);
    },

}
