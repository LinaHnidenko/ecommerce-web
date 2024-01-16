import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTotalAmount } from "../../redux/selectors";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <header className=" bg-grayBg shadow">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h2 className="text-3xl font-bold py-4 text-lightBlue hover:text-accent3">
            StoreCart
          </h2>
        </Link>
        <Link to="/cart" className="flex items-center relative">
          <FiShoppingBag className="w-7 h-7  flex items-center" />
          {totalAmount > 0 && (
            <span className="absolute bottom-0 right-0 -mb-2 -mr-2 flex w-4 h-4 flex-col items-center justify-center rounded bg-accent1 text-xs font-medium text-white  ">
              {totalAmount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
