import React, {  useState, useEffect } from 'react'

const ConnectServer = () => {
	const [products, setProducts] = useState([]);
  const getProducts = async()=>{
    //axios套件
    //fetch原生
    // const response = await fetch('http://localhost:3000/products');
    //轉成json物件
    const response =  await fetch(`${process.env.REACT_APP_DEV_SERVER_URL/products}`)
    const data = await response.json();
    setProducts(data);
  }
    useEffect(() => {
      getProducts();
    },[])
	return (
		<>
	<div>Products Page</div>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>product_id</th>
        <th>product_name</th>
        <th>category</th>
        <th>price</th> 
        <th>side_pic1</th>
        <th>side_pic2</th>
        <th>side_pic3</th>
      </tr>
    </thead>
    <tbody>
    {
      products.map((product, pid) => {
        const {product_id, product_name, category, price,side_pic1, side_pic2, side_pic3} = product;
        return (<tr key= {pid}>
          <td>{product_id}</td>
          <td>{product_name}</td>
          <td>{category}</td>
          <td>{price}</td>
          <td>{side_pic1}</td>
          <td>{side_pic2}</td>
          <td>{side_pic3}</td>
        </tr>)
      })
    }
    </tbody>
  </table>
  </>
	)
}

export default ConnectServer