import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navContainer">
      <Link to={"/"}>BLOG.io</Link>
      <div className="nav-bar">
        <NavLink to={"/posts"}>Posts</NavLink>
        <NavLink to={"/create-post"}>Create Post</NavLink>
      </div>
    </section>
  );
};

export default Navbar;
