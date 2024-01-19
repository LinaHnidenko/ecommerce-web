import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice/cartSlice";
import { useGetProductDetailsQuery } from "../../redux/services/productsAPi";
import StarRating from "../../StarRating/StarRating";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  width: "300px",
  position: "center-top",
});

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  const dispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error!</p>;

  const { image, title, category, price, description, rating } = data || {};

  const handleAddToCart = () => {
    dispatch(addToCart({ id: Number(id), title, price, image }));

    Notify.success("Added to cart");
  };

  return (
    <section className="min-h-[90vh] md:min-h-[85vh]">
      <div className="container flex justify-center flex-col gap-5 py-12 md:py-20 md:flex-row md:justify-between md:gap-[60px]">
        <img
          src={image}
          alt=""
          className="self-center w-[200px] md:w-[300px] xl:w-[400px]"
        />
        <div className="flex flex-col justify-start items-start gap-2">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-sm text-grayText mb-2 md:text-base">
            {category
              .split(" ")
              .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
              .join(" ")}
          </p>
          <p className="mb-[12px]">{description}</p>
          <div className="flex items-start  md:items-baseline md:justify-between flex-col md:flex-row w-[100%] gap-3">
            <p className=" md:text-xl"> ${price}</p>
            <button
              onClick={handleAddToCart}
              className="border rounded-md bg-darkBlueBtn py-3 px-6 items-self font-medium text-white mb-10 shadow hover:bg-lightBlue focus:bg-lightBlue transition-all"
            >
              Add to cart
            </button>
          </div>
          <p className="flex flex-col gap-2">
            <StarRating rate={rating?.rate} />
            {rating?.rate}/5 ({rating.count} reviews)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
