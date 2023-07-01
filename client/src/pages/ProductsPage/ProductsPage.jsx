import React from "react";

const ProductPage = ({ name, category, price, description, quantity, image }) => {
  return (
    <div>
      <img src={image} alt="Product picture" />
      <p>{name}</p>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <p>{description}</p>
      <p>Available: {quantity}</p>
    </div>
  );
};

export default ProductPage;
