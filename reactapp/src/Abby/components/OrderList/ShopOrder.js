import React from 'react'
import TableShop from '../../../Amy/components/Cart/TableShop'

function ShopOrder({ sid }) {
  const orderList3 = [
    {
      s_order_id: 167895101280613,
      s_order_status: '訂單成立',
      s_order_date: '2023-03-16',
      s_order_total: '760',
      s_order_pay: '貨到付款',
      s_order_ship: '尚未出貨',
    },
    {
      s_order_id: 167895036394036,
      s_order_status: '訂單成立',
      s_order_date: '2023-03-16',
      s_order_total: '1000',
      s_order_pay: '貨到付款',
      s_order_ship: '尚未出貨',
    },
    {
      s_order_id: 167895036376720,
      s_order_status: '訂單成立',
      s_order_date: '2023-03-16',
      s_order_total: '1000',
      s_order_pay: '貨到付款',
      s_order_ship: '尚未出貨',
    },
  ]

  return (
    <>
      <TableShop
        orderList={orderList3}
        header={['s_order_id', 's_order_status', 's_order_date', 's_order_total','s_order_pay','s_order_ship']}
        sid={sid}
      ></TableShop>
    </>
  )
}

export default ShopOrder

//TODO

// 訂單編號-訂單狀態-訂購日期-訂單金額-付款方式-出貨狀態-會員ID >>>訂單查詢（指定會員id）
// SELECT * FROM `s_order` WHERE `s_order_user_id` = 1076;

// 商品流水號-訂單編號-商品名-商品圖片-商品數量-商品合計 >>>訂單明細（指定訂單編號id）
// SELECT * FROM `s_order_detail` WHERE `s_order_id`='167872153862858';

// 訂單編號-會員名稱-信箱-手機-地址-訂單金額 >>>訂購人資料(全部訂單)
// SELECT o.s_order_id,m.name,m.email,m.mobile,m.address,o.s_order_total FROM `s_order` AS o JOIN `members` AS m ON o.`s_order_user_id` = m.`sid` WHERE o.`s_order_user_id`;
