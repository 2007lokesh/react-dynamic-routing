import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

// Inside the ProductList component
return(
  <>
  <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          {/* Add any other product details you want to display */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
</>
)
}


export default ProductDetail;
