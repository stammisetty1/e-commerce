import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h2>Products</h2>
          <ul>

            {console.log(products.id)}
            {Array.isArray(products) && products.map((product) => (
              <li key={product.id}>{product.id}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Products;
