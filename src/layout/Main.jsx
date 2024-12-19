import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Main;
