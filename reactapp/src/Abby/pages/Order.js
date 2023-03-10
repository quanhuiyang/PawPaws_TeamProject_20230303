import React from "react";
import OrderList from "../../Abby/components/OrderList";

function Order() {
  const listArr = [
    { sid: 1, name: "a" },
    { sid: 2, name: "b" },
    { sid: 3, name: "c" },
    { sid: 4, name: "d" },
  ];

  return (
    <>
      <form>
        <div className="form-area-edit">
          <div className="form-body">
            <div style={{ textAlign: "center" }}>
              <h2>訂購查詢</h2>
              <table>
                <tr>
                  <th>訂單編號</th>
                  <th>姓名</th>
                  <th>email</th>
                  <th>手機</th>
                  <th>地址</th>
                  <th>購買商品</th>
                  <th>數量</th>
                  <th>價格</th>
                </tr>

                {listArr &&
                  listArr.length > 0 &&
                  listArr.map((data, index) => {
                    return <OrderList userdata={data} key={data.sid} />;
                  })}
              </table>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Order;
