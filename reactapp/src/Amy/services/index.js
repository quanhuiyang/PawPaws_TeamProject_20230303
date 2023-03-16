import axios from "axios";

const service ={
  getData: async ({from, to}) => {
    try {
      const response = await axios.get('http://localhost:3000/shop/');
      const data = response.data.slice(from, to);

      return {
        count: response.data.length,
        data: data.map(item => ({
          id: item.s_id,
          category: item.s_category,
          usage: item.s_usage,
          name: item.s_name1,
          name2: item.s_name2,
          price: item.s_price,
          description: item.s_description1,
          description2: item.s_description2,
          description3: item.s_description3,
          image: item.s_image1,
          image2: item.s_image2,
        }))
      }
    } catch (error) {
      console.error(error);
      return {
        count: 0,
        data: [],
      };
    }
  }
}

export default service;

// import { products } from "../data";

// const service ={
// 	getData: ({from, to}) =>{
// 		return new Promise((resolve, reject) =>{
			
// 			const data = products.slice(from, to);

// 			resolve({
// 				count: products.length,
// 				data: data
// 			})
// 		});
// 	}
// }
// export default service;