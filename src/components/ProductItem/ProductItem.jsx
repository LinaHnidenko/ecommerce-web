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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";

const ProductItem = ({ image, category, title, price, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
  };

  return (
    <li>
      <Link key={id} to={`/products/${id}`}>
        <img src={image} alt={title} width="200px" height="200px" />
      </Link>
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </li>
  );
};

export default ProductItem;
