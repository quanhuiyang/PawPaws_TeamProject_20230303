var express = require('express')
var router = express.Router()
const db = require('../models/myconnection')

//選取全班活動
router.get('/', async (req, res) => {
  const sql = 'SELECT * FROM `activity` WHERE 1'
  const [rows] = await db.query(sql)
  res.json(rows)
})
//選取某項活動
router.get('/detail/:activity_id', async (req, res) => {
  const aid = req.params.aid
  const sql = 'SELECT * FROM `activity` WHERE `activity_id`=?'
  const [rows] = await db.query(sql, [aid])
  res.json(rows)
})

router.get('/detail', async (req, res) => {
  // res.send('activity detail page');
  const sql = 'SELECT * FROM `activity` WHERE 1'
  const [rows] = await db.query(sql)
  res.json(rows[0])
})

router.get('/signup', (req, res) => {
  res.send('activity sign up page')
})

router.get('/success', (req, res) => {
  res.send('activity success page')
})

module.exports = router
