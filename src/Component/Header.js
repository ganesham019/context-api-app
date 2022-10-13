import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <Navbar className="header p-0 m-0 shadow-sm" fixed="top">
      <div className="header_wrap">
        <p className="nav-links">
          <Link to="/">Home</Link>
        </p>
        <p className="nav-links">
          <Link to="/cart">Cart ({cart.length})</Link>
        </p>
      </div>
    </Navbar>
  );
};

export default Header;
