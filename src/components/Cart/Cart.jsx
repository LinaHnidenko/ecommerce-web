import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/cartSlice/cartSlice";
import { selectItems, selectTotalPrice } from "../../redux/selectors";

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
  return (
    <>
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cart?.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>${item.totalPrice}</p>
              <p>Quantity - {item.amount}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price of All Products: ${Math.ceil(totalPrice).toFixed(2)} </p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </>
  );
};

export default Cart;
