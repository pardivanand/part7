import React from 'react';

function Productlist({ products, addToCart }) {
  return (
    <div>
      <h2>Products list</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span> - Rs.{product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productlist;