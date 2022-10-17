import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { authActions } from "../Store/auth";

const CartNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.Logout());
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-info p-3 fixed-top">
        <div>
          <NavLink to="/">
            <BiArrowBack style={{ color: "#fff", fontSize: "1.6rem" }} />
          </NavLink>
          <span className="navbar-brand mb-0 mx-2 h1">My Cart</span>
        </div>

        <NavLink to="/">
          <FiLogOut
            className="mx-2 text-white"
            style={{ fontSize: "1.5rem" }}
            onClick={handleLogout}
          />
        </NavLink>
      </nav>
    </>
  );
};

export default CartNav;
