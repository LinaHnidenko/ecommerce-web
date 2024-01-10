// import React from "react";

// const ProductItem = ({ images, categoryName, name, price }) => {
//   return (
//     <li>
//       <img src={images[0].baseUrl} alt={name} width="200px" height="200px" />
//       <h3>{name}</h3>
//       <p>Category: {categoryName}</p>
//       <p>{price.formattedValue}</p>
//     </li>
//   );
// };

// export default ProductItem;

import React from "react";

const ProductItem = ({ image, category, title, price, id }) => {
  return (
    <li>
      <img src={image} alt={title} width="200px" height="200px" />
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>{price}</p>
    </li>
  );
};

export default ProductItem;
