import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-[100vw]">
      <Header />
      <div className="flex justify-center align-center grow max-w-[1550px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
