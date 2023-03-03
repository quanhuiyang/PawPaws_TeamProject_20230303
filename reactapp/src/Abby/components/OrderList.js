import React from "react";

function OrderList(props) {
  const { userdata } = props;

  return (
    <tr>
      <td>no.{userdata.sid}</td>
      <td>鄭艾比{userdata.name}</td>
      <td>abby@test.com</td>
      <td>0912345678</td>
      <td>高雄市某一區某一路某號</td>
      <td>貓飼料500g</td>
      <td>1</td>
      <td>500</td>
    </tr>
  );
}

export default OrderList;
