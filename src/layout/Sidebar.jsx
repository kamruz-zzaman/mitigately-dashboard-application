import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice.js";
import { toggleSidebar } from "../features/layout/layoutSlice";
import MenuData from "./navbar-data/navMenuData";

import logo from "../assets/logo.png";

const Sidebar = () => {
  const layout = useSelector((state) => state.layout);
  const { isSidebarOpen } = layout || {};
  const dispatch = useDispatch();

  const location = useLocation();

  const currentPath = location?.pathname.slice(1) || location;
  console.log(currentPath);

  const handleSidebar = () => {
    // handle through redux
    dispatch(toggleSidebar());
  };
  const menuData = MenuData().props.children || [];
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    dispatch(userLoggedOut());
    navigate("/login");
  };

  return (
    <React.Fragment>
      <button
        className=" absolute top-6 left-8 block lg:hidden text-white z-50"
        onClick={handleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          color="#fff"
        >
          <path
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h18M3 12h18M3 19h18"
          ></path>
        </svg>
      </button>
      <div
        className={`bg-[#F5F5F5] w-[250px] border border-l-2 border-[#E8ECF5] top-0 absolute lg:fixed  z-[1010] h-screen -left-full lg:left-0 ${
          isSidebarOpen ? "left-0" : ""
        } 
        transition-all duration-300 ease-in-out  } `}
      >
        <img src={logo} className="mt-10 w-4/6 mx-auto" alt="" />
        {/* top Nav Items */}
        <ul className="mt-6 px-6">
          {menuData.map((item) => {
            return (
              <li
                className={`my-2 font-Jost font-medium text-[16px] py-1.5 flex items-center rounded-[6px] ${
                  currentPath === item.id
                    ? "bg-[#0070D233] text-[#0070D2]"
                    : "text-[#131635]"
                }`}
                key={item.id}
                onClick={() => {
                  item.click();
                }}
              >
                <Link to={item.link} className="flex items-center px-6 ms-2">
                  {item.icon && item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom Items */}
        <div className="absolute bottom-8">
          {/* Logout */}
          <div
            className="ms-2 px-6 flex items-center cursor-pointer py-2"
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              color="black"
            >
              <path
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12h7m0 0-3 3m3-3-3-3M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
              ></path>
            </svg>

            <button className="text-black hover:text-gray-800 ml-2">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
