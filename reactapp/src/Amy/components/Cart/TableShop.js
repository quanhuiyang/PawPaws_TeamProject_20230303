import React from 'react'
import Order from '../../../Abby/components/OrderList/Order'

const orderListArea = {
  margin: 'auto',
  borderRadius: '0px 10px 10px 10px',
  overflow: 'hidden',
  background: '#fff',
  paddingBottom: '30px',
  //   width: '1200px',
}

const orderContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '1rem',
}

const orderTable = {
  borderCollapse: 'collapse',
  width: '100%',
}

const ThTdTable = {
  border: '1px solid #ffffff',
  textAlign: 'left',
  padding: '8px',
  textAlign: 'center',
}
const th = {
  backgroundColor: '#E2E2E2',
  color: '#000',
}

const td = {
  backgroundColor: '#FFF5EA',
  color: '#000',
}

function TableShop({ orderList, header, sid }) {
  console.log(orderList)
  return (
    <div>
      <div style={orderListArea}>
        <div>
          {/* <div style={orderContainer}> */}
          <table style={orderTable}>
            <thead>
              <tr>
                <th style={{ ...ThTdTable, ...th }}>訂單編號</th>
                <th style={{ ...ThTdTable, ...th }}>訂單狀態</th>
                <th style={{ ...ThTdTable, ...th }}>訂購日期</th>
                <th style={{ ...ThTdTable, ...th }}>訂購金額</th>
                <th style={{ ...ThTdTable, ...th }}>付款方式</th>
								<th style={{ ...ThTdTable, ...th }}>出貨狀態</th>

              </tr>
            </thead>
            <tbody>
              {!orderList.length ? (
                <tr>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
									<td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                </tr>
              ) : (
                orderList
                  .filter((order) => {
                    return order.sid === sid
                  })
                  .map((order, idx) => (
                    <tr key={idx}>
                      <td style={{ ...ThTdTable, ...td }}>
                        {order[header[0]]}
                      </td>
                      <td style={{ ...ThTdTable, ...td }}>
                        {order[header[1]]}
                      </td>
                      <td style={{ ...ThTdTable, ...td }}>
                        {order[header[2]]}
                      </td>
                      <td style={{ ...ThTdTable, ...td }}>
                        {order[header[3]]}
                      </td>
                      <td style={{ ...ThTdTable, ...td }}>
                        {order[header[4]]}
                      </td>
											<td style={{ ...ThTdTable, ...td }}>
                        {order[header[5]]}
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

{
  /* <tr>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                  <td style={{ ...ThTdTable, ...td }}>&nbsp;</td>
                </tr> */
}

export default TableShop
