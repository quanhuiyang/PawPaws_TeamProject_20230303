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
