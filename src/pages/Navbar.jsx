import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/product"}>Product</NavLink>
      <NavLink to={"/user"}>User</NavLink>
    </div>
  );
};

export default Navbar;
