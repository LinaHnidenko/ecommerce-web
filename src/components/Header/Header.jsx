import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
    </div>
  );
};

export default Header;
