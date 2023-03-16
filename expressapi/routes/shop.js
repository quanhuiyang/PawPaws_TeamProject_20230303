const express = require('express')
const router = express.Router()
const db = require('../models/myconnection')
const { v4: uuid4 } = require('uuid')

//選取全部商品
router.get('/', async (req, res) => {
  // console.log(process.env.DB_Password);
  // res.send('shop page');
  const sql = 'SELECT * FROM `shop`'
  const [rows, fields] = await db.query(sql)

  // ES6 解構賦值
  // const [rows, fields] = await db.query(sql) //['result1', 'result2']
  // const {light} = {shade:'xxxxx', light:'xxxxxx'}
  // ES5
  // const dbResult = ['result1', 'result2']
  // const rows = dbResult[0]
  // const fields = dbResult[1]

  res.json(rows)
})

//選取某項商品
router.get('/:s_id', async (req, res) => {
  const aid = req.params.s_id
  const sql = 'SELECT * FROM `shop` WHERE s_id = ?'
  const [rows] = await db.query(sql, [aid])
  res.json(rows)
})

//產生訂單
router.post('/checkout', async (req, res) => {
  // console.log('req', req.body.cart)
  // console.log('req', req.body.user)
  // console.log('uuid', Date.now())
  const timestamp = Date.now() + ''
  const randomNum = Math.floor(Math.random() * 99)
  // console.log('uuid', randomNum < 10 ? '0' + randomNum : randomNum)

  const orderId = timestamp + randomNum
  // console.log('orderId', orderId)

  const totalAmount = req.body.cart.reduce((acc, cur) => {
    return acc + +cur.itemTotal
  }, 0)

  //有req要有res
  // res.json(req.body)
  //資料console.log成功後加入以下程式
  // const { email, password, name } = req.body
  const sql =
    'INSERT INTO `s_order`(`s_order_id`, `s_order_total`,`s_order_user_id` , `s_order_status`, `s_order_pay`, `s_order_ship`) VALUES (?,?,?,"訂單成立","貨到付款","尚未出貨")'
  const createOrder = await db.query(sql, [
    orderId,
    totalAmount,
    req.body.user.sid,
  ])

  //如果create為True則回傳成功資訊
  if (createOrder) {
    const sql2 =
      'INSERT INTO `s_order_detail`( `s_order_id`, `s_order_detail_name`, `s_order_detail_img`, `s_order_detail_quantity`, `s_order_detail_itemtotal`) VALUES (?,?,?,?,?)'

    //回傳的是 JSON 格式的物件
    req.body.cart.map(async (v) => {
      try {
        const createDetail = await db.query(sql2, [
          orderId,
          v.name2,
          v.image,
          v.quantity,
          v.itemTotal,
        ])
      } catch (err) {
        console.log('err')
      }
    })

    res.json({
      state: true,
      message: `訂購成功！`,
    })
  } else {
    res.json({
      state: false,
      message: `訂購失敗！`,
    })
  }
})


//TODO

// 訂單編號-訂單狀態-訂購日期-訂單金額-付款方式-出貨狀態-會員ID >>>訂單查詢（指定會員id）
// SELECT * FROM `s_order` WHERE `s_order_user_id` = 1076;

// 商品流水號-訂單編號-商品名-商品圖片-商品數量-商品合計 >>>訂單明細（指定訂單編號id）
// SELECT * FROM `s_order_detail` WHERE `s_order_id`='167872153862858';

// 訂單編號-會員名稱-信箱-手機-地址-訂單金額 >>>訂購人資料(全部訂單)
// SELECT o.s_order_id,m.name,m.email,m.mobile,m.address,o.s_order_total FROM `s_order` AS o JOIN `members` AS m ON o.`s_order_user_id` = m.`sid` WHERE o.`s_order_user_id`;  


module.exports = router
