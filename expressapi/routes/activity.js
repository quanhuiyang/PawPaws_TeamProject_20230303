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
  const aid = req.params.activity_id
  const sql = 'SELECT * FROM `activity` WHERE `activity_id`=?'
  const [rows] = await db.query(sql, [aid])
  res.json(rows)
})

//收藏
router.use((req, res, next) => {
  const { url, baseUrl, originalUrl } = req

  //...res.locals的作用是把url, baseUrl, originalUrl塞進去
  res.locals = { ...res.locals, url, baseUrl, originalUrl }

  next()
})

router.get('/toggle-like/:activity_id', async (req, res) => {
  const output = {
    success: false,
    error: '',
    action: '',
  }
  // 必須是已登入的會員
  // if (!req.session.user) {
  //   output.error = '必須登入會員, 才能加到最愛'
  //   return res.json(output)
  // }

  const sql1 = 'SELECT * FROM a_like WHERE `m_id`=? AND `activity_id`=?'
  // const [likes] = await db.query(sql1, [req.session.user.id, req.params.a_like])
  const [likes] = await db.query(sql1, [req.params.a_like])

  if (likes.length === 1) {
    const sql2 = 'DELETE FROM `a_like` WHERE `a_like`=' + likes[0].a_like
    const [result] = await db.query(sql2)
    output.success = !!result.affectedRows
    output.action = 'delete'
  } else {
    // TODO: 判斷有沒有這個活動

    const sql3 = 'INSERT INTO `a_like`(`m_id`, `activity_id`) VALUES (?,?)'
    // const [result] = await db.query(sql3, [req.session.user.id, req.params.a_like])
    const [result] = await db.query(sql3, [req.params.a_like])
    output.success = !!result.affectedRows
    output.action = 'insert'
  }
  res.json(output)
})

//用戶收藏
router.get('/alikes', async (req, res) => {
  const output = {
    logined: false, // 有沒有登入
    error: '',
    likes: [],
  }
  if (!req.session.user) {
    return res.json(output)
  }
  output.logined = true //已登入

  // const sql = `SELECT p.*, pl.product_id FROM product_likes pl
  // JOIN products p
  //   ON pl.product_id=p.sid
  // WHERE pl.member_id=${req.session.user.id}
  // ORDER BY pl.created_at ASC`

  const sql = `SELECT a.*, l.aid FROM alike l
    JOIN activity a
      ON l.activity_id=a.activity_id
    WHERE l.sid=${req.session.user.id}
    ORDER BY l.created_at ASC`

  const [rows] = await db.query(sql)
  output.likes = rows

  res.json(output)
})

//收藏2

//其他
router.get('/signup', (req, res) => {
  res.send('activity sign up page')
})

router.get('/success', (req, res) => {
  res.send('activity success page')
})

module.exports = router
