import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../redux/cartSlice/cartSlice";
import { selectItems, selectTotalPrice } from "../../redux/selectors";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { GiBroom } from "react-icons/gi";

const Cart = () => {
  const cart = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddOneMore = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="min-h-[70vh]">
      <div className="container">
        {cart.length > 0 ? (
          <>
            <div className="flex justify-between items-center">
              <h1 className="mt-8 text-4xl font-bold mb-8 ">
                Your Shopping Cart
              </h1>

              <GiBroom
                className="w-6 h-6 xl:w-8 xl:h-8 cursor-pointer hover:fill-accent1 focus:fill-accent1 transition-all"
                onClick={handleClearCart}
              />
            </div>
            <ul className="divide-y divide-accent4 border-b border-t border-accent4">
              {cart?.map((item) => (
                <li key={item.id} className="flex py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className=" h-24 w-24 flex justify-center items-center flex-shrink-0 rounded-md border border-accent4 0 sm:h-32 sm:w-32"
                  >
                    <img src={item.image} alt="" className="w-16 h-[72px] " />
                  </Link>
                  <div className=" flex flex-1 flex-col justify-between p-4 py-2">
                    <div className="flex justify-between justify-items-start gap-4 text-sm md:text-base">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="font-bold">${item.totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="flex gap-1 justify-end items-center">
                      <button
                        onClick={() => handleAddOneMore(item)}
                        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-11 border border-accent4 text-center font-bold rounded hover:bg-accent1 focus:bg-accent1 transition-all hover:text-white focus:text-white"
                      >
                        +
                      </button>
                      <p className="text-sm md:text-base font-bold">
                        {item.amount}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-11 border border-accent4 text-center font-bold rounded hover:bg-accent1 focus:bg-accent1 transition-all hover:text-white focus:text-white"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <div className="rounded border border-accent4 bg-grayBg px-4 py-2">
                <div className="flex items-center justify-between gap-2 py-2 font-semibold">
                  <p>Your Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center mb-[70px]">
              <button
                className="rounded border border-transparent bg-darkBlueBtn px-6 py-3 text-center font-medium text-white shadow hover:bg-lightBlue focus:bg-lightBlue  transition-all   sm:px-14 "
                onClick={() => Notify.success("Thank you for your shopping!")}
              >
                Buy Now
              </button>
            </div>
          </>
        ) : (
          <div className="min-h-[70vh] ">
            <p className="my-12 text-sm text-grayText">
              Looks like you haven't added any items to the cart yet.
            </p>
            <Link
              to="/"
              className=" rounded border border-transparent bg-darkBlueBtn px-6 py-3 text-center font-medium text-white shadow hover:bg-lightBlue focus:bg-lightBlue  transition-all  sm:px-14"
            >
              Explore products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
