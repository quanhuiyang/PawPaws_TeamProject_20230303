const express = require('express')
const router = express.Router()
const db = require('../models/myconnection')

router.get('/', function (req, res) {
  res.send('這是我的members page')
})

//會員登入
router.post('/login', async function (req, res) {
  console.log('req', req.body.userEmail)
  console.log('req', req.body.userPassword)

  const sql = 'SELECT * FROM members WHERE email=? AND password=?'
  const [rows] = await db.query(sql, [
    req.body.userEmail,
    req.body.userPassword,
  ])
  if (rows.length < 1) {
    const output = {}
    output.error = '帳號或密碼錯誤'
    output.code = 410
    return res.json(output)
  } else {
    const row = rows[0]

    const output = {}
    output.state = true
    output.userInfo = row
    res.json(output)
  }

  // req.session.userId = result.sid
})

//會員註冊
router.post('/register', async (req, res, next) => {
  console.log('req', req.body.email)
  console.log('req', req.body.password)
  const { email, password } = req.body
  const sql = `INSERT INTO members ( email, password ) VALUES (?,?)`
  const checkSql = `SELECT * FROM members WHERE email = ?`
  try {
    const check = await db.query(checkSql, [email])
    if (check[0].length > 0) {
      res.json({
        state: false,
        message: `此信箱已註冊過了！`,
      })
    } else {
      const create = await db.query(sql, [email, password])
      if (create) {
        res.json({
          state: true,
          message: `註冊成功！`,
        })
      } else {
        res.json({
          state: false,
          message: `註冊失敗！`,
        })
      }
    }
  } catch (err) {
    next(err)
  }
})

router.put('/update', async function (req, res) {
  console.log('req', req.body.birthday)

  const output = {}

  const sql =
    'UPDATE `members` SET `name`=? ,`birthday`=?,`address`=?, `mobile`=? WHERE `email`=?'
  const { name, birthday, address, email, mobile } = req.body
  const [result] = await db.query(sql, [name, birthday, address, mobile, email])

  output.result = result
  output.success = !!result.changedRows

  res.json(output)

  // req.session.userId = result.sid
})

module.exports = router
