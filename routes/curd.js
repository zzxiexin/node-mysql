var express = require('express');
var router = express.Router();
var connectDB = require('../server/index')
let id = 2;
router.get('/get/:id', async function (req, res, next) {
    const sql = `SELECT * from account where qq = ${req.params.id}`
    const data = await connectDB(sql)
    return res.json(data)
});

router.post('/add_qq', async function (req, res, next) {
    const { qq, mima } = req.body
    const sql = `INSERT INTO account (id, qq, mima) VALUES (${id++}, ${qq}, ${mima});`
    const data = await connectDB(sql)
    console.log(data)
});

router.delete('/del_qq', async function (req, res, next) {
    const { qq } = req.body
    const sql = `DELETE FROM account WHERE qq = ${qq};`
    const data = await connectDB(sql)
    console.log(data)
});

router.put('/update_qq', async function (req, res, next) {
    const { qq, mima } = req.body
    const sql = `UPDATE account set qq=${qq}, mima=${mima} where qq = ${qq};`
    const sql1 = "UPDATE account set qq= '" + qq + "', mima= '" + mima + "' where qq = '" + qq + "';"
    console.log(sql1)
    const data = await connectDB(sql1)
    console.log(data)
});

module.exports = router;
