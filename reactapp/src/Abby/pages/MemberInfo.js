import { useState } from 'react'
import Edit from '../components/Edit'
import Order from '../components/Order'
import myCollection from '../components/myCollection'


export default function MemberInfo() {
  const [page, setPage] = useState(0)

  return (
    <>
      <div className="container">
        <div className="formHeader">
          <button
            className={`member-button ${page === 0 ? ' active' : ''}`}
            onClick={() => setPage(0)}
          >
            個人資訊
          </button>
          <button
            className={`member-button ${page === 1 ? ' active' : ''}`}
            onClick={() => setPage(1)}
          >
            訂單查詢
          </button>
          <button
            className={`member-button ${page === 2 ? ' active' : ''}`}
            onClick={() => setPage(2)}
          >
            我的追蹤
          </button>
        </div>
        {page === 0 && <Edit />}
        {page === 1 && <Order />}
        {page === 2 && <myCollection />}

       
      </div>
    </>
  )
}
