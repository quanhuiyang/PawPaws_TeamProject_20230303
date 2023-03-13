import React from 'react'
import Table from '../Table'

function HotelOrder() {
  const orderList2 = [
    {
      id: 1,
      customerName: 'Hotel',
      orderDate: '2023-03-10',
      product: 'apple10',
      orderStatus: 'Processing',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      orderDate: '2023-03-11',
      product: 'apple11',
      orderStatus: 'Shipped',
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      orderDate: '2023-03-12',
      product: 'apple12',
      orderStatus: 'Delivered',
    },
  ]
  return (
    <>
      <Table
        orderList={orderList2}
        header={['a_pid', 'a_email', 'a_address', 'a_phone', 'a_name']}
      ></Table>
    </>
  )
}

export default HotelOrder
