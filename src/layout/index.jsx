// import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toggleSidebar } from "../features/layout/layoutSlice";
import Sidebar from "./Sidebar";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();
  const handleNavClose = () => {
    if (!isSidebarOpen) return;
    dispatch(toggleSidebar());
  };
  return (
    <div className="none lg:block font-poppins ">
      <Sidebar />
      <div className=" lg:ml-[250px] ml-0 grow ">
        <div
          onClick={handleNavClose}
          className={`px-3 lg:px-4 xl:px-5 pt-8 pb-6 lg:pt-8 lg:pb-2 min-h-screen bg-white text-black overflow-y-scroll ${
            isSidebarOpen ? "fixed inset-0 bg-white opacity-95  z-50" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
