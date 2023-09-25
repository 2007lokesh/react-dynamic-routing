import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Fetch products of the specified category
    fetch(`https://dummyjson.com/products?category=${categoryName}`)
      .then((response) => response.json())
      .then((data) => setCategoryProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, [categoryName]);

  // Inside the Category component
return (
    <div>
      <h1>{categoryName} Products</h1>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default Category;
