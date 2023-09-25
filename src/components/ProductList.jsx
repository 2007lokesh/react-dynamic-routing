import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProduct(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* <h1>Product List</h1>
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.title}</Link>
            <span> | </span>
            <Link to={`/category/${item.category}`}>{item.category}</Link>
          </li>
        ))}
      </ul> */}

      <table border="1">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>description</td>
          <td>price</td>
          <td>discountPercentage</td>
          <td>rating</td>
          <td>stock</td>
          <td>brand</td>
          <td>category</td>
          <td>thumbnail</td>
          <td>Images</td>
        </tr>
        
          {product.map((item)=><tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.descriptoin}</td>
          <td>{item.price}</td>
          <td>{item.discountPercentage}</td>
          <td>{item.rating}</td>
          <td>{item.stock}</td>
          <td>{item.brand}</td>
          <td>{item.category}</td>
          <td>{item.thumbnail}</td>
          <td>{item.images}</td>
        </tr>)}
        
      </table>
    </div>
  );
}

export default ProductList;
