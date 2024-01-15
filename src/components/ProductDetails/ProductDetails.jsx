import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useGetProductDetailsQuery } from "../../redux/services/productsAPi";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  const { image, title, category, price, description, rating } = data || {};

  const handleAddToCart = () => {
    dispatch(addToCart({ id: Number(id), title, price, image }));
  };

  return (
    <>
      <div key={`product-detail-${id}`}>
        <img src={image} alt="" width="200px" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>${price}</p>
        <p>{description}</p>
        <p>
          Rate: {rating?.rate} ({rating.count})
        </p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
