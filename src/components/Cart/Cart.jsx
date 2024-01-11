import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/cartSlice/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart?.map(({ id, image, title, price, quantity }) => (
            <li key={id}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>${price}</p>
              <p>Quantity - {quantity}</p>
              <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
