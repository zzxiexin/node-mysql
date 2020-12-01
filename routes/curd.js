var express = require('express');
var router = express.Router();
var connectDB = require('../server/index')
/* GET home page. */
router.get('/', async function (req, res, next) {
    const data = await connectDB('SELECT * from accout')
    return res.json(data)
});

module.exports = router;
