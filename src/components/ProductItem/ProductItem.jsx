import React from "react";

const ProductItem = ({ images, categoryName, name, price }) => {
  return (
    <li>
      <img src={images[0].baseUrl} alt="" />
      <h3>{name}</h3>
      <p>Category: {categoryName}</p>
      <p>{price.formattedValue}</p>
    </li>
  );
};

export default ProductItem;
