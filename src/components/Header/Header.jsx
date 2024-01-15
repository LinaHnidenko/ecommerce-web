import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTotalAmount } from "../../redux/selectors";

const Header = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div>
      <Link to="/">
        <h2>StoreCart</h2>
      </Link>
      <Link to="/cart">
        <button>Cart {totalAmount}</button>
      </Link>
    </div>
  );
};

export default Header;
