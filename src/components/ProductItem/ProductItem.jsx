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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { TbShoppingBag } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

const ProductItem = ({ image, category, title, price, id }) => {
  const [isAddedToCard, setIsAddedToCard] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
    setIsAddedToCard(true);
  };

  return (
    <li className="w-[290px] xl:w-[400px]">
      <Link
        key={id}
        to={`/products/${id}`}
        className="flex justify-center items-center flex-col rounded gap-4 p-4 w-[290px] xl:w-[400px] h:[300px] border border-borderItem transition-all hover:border-grayText mb-2 "
      >
        <img src={image} alt={title} className="w-40 h-48 " />
      </Link>

      <h3 className="font-semibold text-left truncate md:text-xl">{title}</h3>
      <p className="text-sm text-grayText mb-2 md:text-base">
        {category
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
          .join(" ")}
      </p>
      <div className="flex justify-between mb-6 md:mb-0 ">
        <p className="text-base md:text-xl">${price}</p>
        <button onClick={handleAddToCart} className="">
          {isAddedToCard ? (
            <TbShoppingBagCheck className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 transition-all hover:fill-accent2" />
          ) : (
            <TbShoppingBag className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 transition-all hover:fill-lightBlue" />
          )}
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
