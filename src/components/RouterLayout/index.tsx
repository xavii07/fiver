import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const RouterLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RouterLayout;
