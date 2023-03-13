import React from 'react'

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

function Table({ orderList, header }) {
  return (
    <div>
      <div style={orderListArea}>
        <div>
          {/* <div style={orderContainer}> */}
          <table style={orderTable}>
            <thead>
              <tr>
                <th style={{ ...ThTdTable, ...th }}>訂單編號</th>
                <th style={{ ...ThTdTable, ...th }}>email</th>
                <th style={{ ...ThTdTable, ...th }}>address</th>
                <th style={{ ...ThTdTable, ...th }}>phone</th>
                <th style={{ ...ThTdTable, ...th }}>name</th>
              </tr>
            </thead>
            <tbody>
              {/* [{id: 1}] */}
              {orderList.map((order, idx) => (
                <tr key={idx}>
                  <td style={{ ...ThTdTable, ...td }}>{order[header[0]]}</td>
                  <td style={{ ...ThTdTable, ...td }}>{order[header[1]]}</td>
                  <td style={{ ...ThTdTable, ...td }}>{order[header[2]]}</td>
                  <td style={{ ...ThTdTable, ...td }}>{order[header[3]]}</td>
                  <td style={{ ...ThTdTable, ...td }}>{order[header[4]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Table
