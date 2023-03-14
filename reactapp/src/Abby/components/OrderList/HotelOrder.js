import React from 'react'
import Table from '../Table'

function HotelOrder({ sid }) {
  const orderList2 = [
    {
      id: 1,
      customerName: 'Hotel',
      orderDate: '2023-03-10',
      product: 'apple10',
      orderStatus: 'Processing',
      sid: 1111,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2023-03-11',
      product: 'apple11',
      orderStatus: 'Shipped',
      sid: 1085,
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      orderDate: '2023-03-12',
      product: 'apple12',
      orderStatus: 'Delivered',
      sid: 1085,
    },
  ]
  return (
    <>
      <Table
        orderList={orderList2}
        header={['id', 'customerName', 'orderDate', 'product', 'orderStatus']}
        sid={sid}
      ></Table>
    </>
  )
}

export default HotelOrder
