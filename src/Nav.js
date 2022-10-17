import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { authActions } from "./Store/auth";

const Nav = () => {
  const dispatch = useDispatch();
  let count = 0;
  const cartItems = useSelector((state) => state.cart.itemsList);

  cartItems.forEach((item) => {
    count += item.quantity;
  });
  const handleLogout = () => {
    dispatch(authActions.Logout());
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-info p-3 fixed-top">
        <span className="navbar-brand mb-0 mx-2 h1">SKTee Store</span>

        <div>
          <NavLink
            to="/cart"
            type="button"
            className="btn mx-1 btn-outline-info"
          >
            <FaShoppingCart
              className="text-white"
              style={{ fontSize: "1.5rem" }}
            />
            <span className="badge badge-pill badge-light">{count}</span>
          </NavLink>
          <FiLogOut
            className="mx-1 text-white"
            style={{ fontSize: "1.5rem" }}
            onClick={handleLogout}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
