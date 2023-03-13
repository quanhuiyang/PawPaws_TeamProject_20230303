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
// router.use((req, res, next) => {
//   const { url, baseUrl, originalUrl } = req

//   //...res.locals的作用是把url, baseUrl, originalUrl塞進去
//   res.locals = { ...res.locals, url, baseUrl, originalUrl }

//   next()
// })

// router.get('/toggle-like/:activity_id', async (req, res) => {
//   const output = {
//     success: false,
//     error: '',
//     action: '',
//   }
//   // 必須是已登入的會員
//   if (!req.session.user) {
//     output.error = '必須登入會員, 才能加到最愛'
//     return res.json(output)
//   }

//   const sql1 = 'SELECT * FROM a_like WHERE `sid`=? AND `activity_id`=?'
//   // const [likes] = await db.query(sql1, [req.session.user.id, req.params.a_like])
//   const [likes] = await db.query(sql1, [req.params.a_like])

//   if (likes.length === 1) {
//     const sql2 = 'DELETE FROM `a_like` WHERE `a_like`=' + likes[0].a_like
//     const [result] = await db.query(sql2)
//     output.success = !!result.affectedRows
//     output.action = 'delete'
//   } else {
//     // TODO: 判斷有沒有這個活動

//     const sql3 = 'INSERT INTO `a_like`(`sid`, `activity_id`) VALUES (?,?)'
//     // const [result] = await db.query(sql3, [req.session.user.id, req.params.a_like])
//     const [result] = await db.query(sql3, [req.params.a_like])
//     output.success = !!result.affectedRows
//     output.action = 'insert'
//   }
//   res.json(output)
// })

//用戶收藏
router.get('/alikes/:sid', async (req, res) => {
  const output = {
    logined: false, // 有沒有登入
    error: '',
    likes: [],
  }
  const sid = +req.params.sid || 0

  if (!sid) {
    return res.json(output)
  }
  output.logined = true //已登入

  const sql = `SELECT alike_collection.*, activity.*, members.sid FROM alike_collection JOIN activity ON alike_collection.activity_id=activity.activity_id JOIN members ON alike_collection.sid=members.sid WHERE alike_collection.sid=1`

  const [rows] = await db.query(sql)
  output.likes = rows

  res.json(output)
})

//添加收藏
router.post('/collection/:activity_id/:sid', async (req, res) => {
  const { sid, activity_id } = req.params
  const sql1 =
    'SELECT * FROM alike_collection WHERE `sid`=? AND `activity_id`=?'
  const sql2 = 'DELETE FROM alike_collection WHERE `sid`=? AND `activity_id`=?'
  const sql3 =
    'INSERT INTO `alike_collection`( `sid`, `activity_id`) VALUES (?,?)'

  try {
    const [[select]] = await db.query(sql1, [sid, activity_id])
    console.log(select)
    if (select) {
      const [result] = await db.query(sql2, [sid, activity_id])
      console.log(result)
      res.sendStatus(200)
    } else {
      const [result2] = await db.query(sql3, [sid, activity_id])
      console.log(result2)
      res.sendStatus(200)
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('Error: database error')
  }
})

//拿到報名資訊
router.post('/participants', (req, res) => {
  const {
    name: a_name,
    email: a_email,
    phone: a_phone,
    address: a_address,
    activity_id: activity_id,
    sid: sid,
  } = req.body
  console.log(req.body)
  const sql =
    'INSERT INTO participants (a_name, a_email, a_phone, a_address ,activity_id, sid) VALUES (?, ?, ?, ?, ?, ?)'
  db.query(
    sql,
    [a_name, a_email, a_phone, a_address, activity_id, sid],
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error: database error')
      }
      console.log(result)
      res.sendStatus(200)
    }
  )
})

//搜尋功能 縣市
router.get('/search', async (req, res) => {
  const keyword = req.query.q // 從 URL 參數中取得搜尋條件
  const sql = `SELECT * FROM activity WHERE location LIKE '%${keyword}%'` // 使用 SQL 查詢語句搜尋符合條件的資料
  console.log('req.query.q', req.query.q)
  console.log('sql', sql)
  try {
    const result = await db.query(sql)
    console.log('result', result)

    if (result && result[0].length > 0) {
      res.json(result[0])
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('Error')
  }
})

//其他
router.get('/success', (req, res) => {
  res.send('activity success page')
})

module.exports = router
