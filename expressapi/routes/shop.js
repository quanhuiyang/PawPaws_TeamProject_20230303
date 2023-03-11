const express = require('express')
const router = express.Router()
const db = require('../models/myconnection')

router.get('/', async (req, res) => {
  // console.log(process.env.DB_Password);
  // res.send('shop page');
  const sql = "SELECT * FROM `shop`"
  const [rows, fields] = await db.query(sql)
  res.json(rows)
})

router.post('/checkout', async (req, res) => {
  console.log('req', req.body.email)
  console.log('req', req.body.password)
  //有req要有res
  res.json(req.body)
  //資料console.log成功後加入以下程式
  // const { email, password, name } = req.body
  // const sql = `INSERT INTO members ( email, password, name ) VALUES (?,?,?)`
  // const create = await db.query(sql, [email, password, name])
  //如果create為True則回傳成功資訊
  // if (create) {
  //   res.json({
  //     state: true,
  //     message: `註冊成功！`,
  //   })
  // } else {
  //   res.json({
  //     state: false,
  //     message: `註冊失敗！`,
  //   })
  // }
})

module.exports = router
