import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useGetProductDetailsQuery } from "../../redux/cartSlice/services/productsAPi";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  const { image, title, category, price, description, rating } = data || {};

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image }));
  };

  return (
    <>
      <Link to={location.state}>Go Back</Link>
      <div>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>Rate: {rating?.rate}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
