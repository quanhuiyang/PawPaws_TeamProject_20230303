var express = require('express')
var router = express.Router()
const db = require('../models/myconnection')

router.get('/', async (req, res) => {
  // console.log(process.env.DB_Password);
  // res.send('activity page');
  const sql = 'SELECT * FROM `activity`'
  const [rows, fields] = await db.query(sql)
  res.json(rows)
})

router.get('/detail', async (req, res) => {
  // res.send('activity detail page');
  const sql = 'SELECT * FROM `activity` WHERE 1'
  const [rows, fields] = await db.query(sql)
  res.json(rows[0])
})

router.get('/signup', (req, res) => {
  res.send('activity sign up page')
})

router.get('/success', (req, res) => {
  res.send('activity success page')
})

module.exports = router
