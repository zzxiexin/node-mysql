var express = require('express');
var router = express.Router();
var connectDB = require('../server/index')
router.get('/get/:id', async function (req, res, next) {
    const sql = "SELECT * from account where qq = '" + req.params.id + "';"
    const data = await connectDB(sql)
    return res.json({
        msg: 'success',
        data,
        code: 200
    })
});

router.post('/add_qq', async function (req, res, next) {
    const { qq, mima } = req.body
    const sql = "INSERT INTO account (qq, mima) VALUES ('" + qq + "', '" + mima + "');"
    console.log(sql)
    const data = await connectDB(sql)
    res.json({
        msg: 'success',
        code: 200
    })
});

router.post('/del_qq', async function (req, res, next) {
    const { qq } = req.body
    console.log(req.body.data)
    const sql = "DELETE FROM account WHERE qq = '" + req.params.id + "';"
    const data = await connectDB(sql)
    res.json({
        msg: 'success',
        code: 200
    })
});

router.put('/update_qq', async function (req, res, next) {
    const { qq, mima } = req.body
    const sql = "UPDATE account set qq= '" + qq + "', mima= '" + mima + "' where qq = '" + qq + "';"
    console.log(sql)
    const data = await connectDB(sql)
    res.json({
        msg: 'success',
        code: 200
    })
});

module.exports = router;
