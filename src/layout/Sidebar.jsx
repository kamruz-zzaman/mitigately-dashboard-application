import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice.js";
import { toggleSidebar } from "../features/layout/layoutSlice";
import MenuData from "./navbar-data/navMenuData";

import logo from "../assets/logo1.png";
import { Menu, Transition } from "@headlessui/react";

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
  const [childrenView, setChildrenView] = useState(false);
  return (
    <React.Fragment>
      <button
        className="absolute top-[3.15rem] left-8 block lg:hidden text-white z-50"
        onClick={handleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.948 6H20.051C20.573 6 21 6.427 21 6.949V7.051C21 7.573 20.573 8 20.051 8H3.948C3.426 8 3 7.573 3 7.051V6.949C3 6.427 3.426 6 3.948 6ZM20.051 11H3.948C3.426 11 3 11.427 3 11.949V12.051C3 12.573 3.426 13 3.948 13H20.051C20.573 13 21 12.573 21 12.051V11.949C21 11.427 20.573 11 20.051 11ZM20.051 16H3.948C3.426 16 3 16.427 3 16.949V17.051C3 17.573 3.426 18 3.948 18H20.051C20.573 18 21 17.573 21 17.051V16.949C21 16.427 20.573 16 20.051 16Z"
            fill="#92929D"
          />
        </svg>
      </button>
      <div
        className={`bg-[#F5F5F5] w-[250px] border border-l-2 border-[#E8ECF5] top-0 absolute lg:fixed z-[1010] h-screen -left-full lg:left-0 ${
          isSidebarOpen ? "left-0" : ""
        } 
        transition-all duration-300 ease-in-out  } `}
      >
        <Link to={"/"}>
          <img src={logo} className="mt-10 w-4/6 mx-auto" alt="" />
        </Link>
        {/* top Nav Items */}
        <ul className="mt-6">
          {menuData.map((item) => {
            return (
              <li
                className={`relative my-2 px-6 font-Jost font-medium text-[16px] flex items-center ${
                  currentPath === item.id
                    ? "after:content-[''] after:absolute after:top-0 after:left-0 after:w-[5px] after:h-full z-50 after:bg-[#0070D2] after:rounded-tr-lg after:rounded-br-lg"
                    : "text-[#131635]"
                }`}
                key={item.id}
                onClick={() => {
                  item.click();
                }}
              >
                <div
                  className={`w-[95%] py-2 pl-2 rounded-[6px] ${
                    currentPath === item.id
                      ? "bg-[#0070D233] text-[#0070D2]"
                      : "text-[#131635]"
                  }`}
                >
                  <Link
                    to={item.link}
                    className="flex items-center gap-[10px] ms-2"
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom Items */}
        <div className="absolute bottom-24 md:bottom-10 right-0 left-0">
          <div className="pl-11">
            <button
              onClick={() => setChildrenView(!childrenView)}
              className="flex items-center"
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M10 5.93898C9.73479 5.93898 9.48043 6.04342 9.2929 6.22932C9.10536 6.41523 9 6.66736 9 6.93027V10.8954C9 11.1583 9.10536 11.4105 9.2929 11.5964C9.48043 11.7823 9.73479 11.8867 10 11.8867C10.2652 11.8867 10.5196 11.7823 10.7071 11.5964C10.8946 11.4105 11 11.1583 11 10.8954V6.93027C11 6.66736 10.8946 6.41523 10.7071 6.22932C10.5196 6.04342 10.2652 5.93898 10 5.93898ZM10.92 14.4839C10.8981 14.4207 10.8679 14.3607 10.83 14.3054L10.71 14.1568C10.5694 14.0192 10.3908 13.926 10.1968 13.889C10.0028 13.8519 9.80212 13.8727 9.62 13.9486C9.49882 13.9988 9.38721 14.0692 9.29 14.1568C9.19732 14.2494 9.124 14.3592 9.07423 14.48C9.02447 14.6008 8.99924 14.7301 9 14.8606C9.00159 14.9901 9.02876 15.1181 9.08 15.2373C9.12492 15.3603 9.19657 15.472 9.28989 15.5645C9.38321 15.657 9.49591 15.728 9.62 15.7726C9.73971 15.825 9.86913 15.8521 10 15.8521C10.1309 15.8521 10.2603 15.825 10.38 15.7726C10.5041 15.728 10.6168 15.657 10.7101 15.5645C10.8034 15.472 10.8751 15.3603 10.92 15.2373C10.9712 15.1181 10.9984 14.9901 11 14.8606C11.0049 14.7946 11.0049 14.7283 11 14.6623C10.9828 14.5991 10.9558 14.5389 10.92 14.4839ZM10 0.982544C8.02219 0.982544 6.08879 1.56392 4.4443 2.65316C2.79981 3.74241 1.51809 5.29058 0.761209 7.10193C0.00433284 8.91327 -0.193701 10.9064 0.192152 12.8293C0.578004 14.7522 1.53041 16.5185 2.92894 17.9049C4.32746 19.2912 6.10929 20.2353 8.0491 20.6178C9.98891 21.0003 11.9996 20.804 13.8268 20.0537C15.6541 19.3034 17.2159 18.0329 18.3147 16.4027C19.4135 14.7726 20 12.856 20 10.8954C20 9.59364 19.7413 8.30461 19.2388 7.10193C18.7363 5.89924 17.9997 4.80645 17.0711 3.88596C16.1425 2.96546 15.0401 2.23529 13.8268 1.73712C12.6136 1.23895 11.3132 0.982544 10 0.982544ZM10 18.8257C8.41775 18.8257 6.87104 18.3606 5.55544 17.4892C4.23985 16.6178 3.21447 15.3793 2.60897 13.9302C2.00347 12.4811 1.84504 10.8866 2.15372 9.34829C2.4624 7.80997 3.22433 6.39692 4.34315 5.28785C5.46197 4.17878 6.88743 3.42349 8.43928 3.1175C9.99113 2.81151 11.5997 2.96855 13.0615 3.56878C14.5233 4.169 15.7727 5.18545 16.6518 6.48958C17.5308 7.79371 18 9.32695 18 10.8954C18 12.9987 17.1572 15.0158 15.6569 16.503C14.1566 17.9902 12.1217 18.8257 10 18.8257Z"
                    fill="#A4B4CB"
                  />
                </svg>
              </div>
              Get Help {dropicon}
            </button>
          </div>
          {(childrenView ||
            currentPath === "get-help/frequently-asked-questions" ||
            currentPath === "get-help/contact-us") && (
            <div className="ml-16 mt-2">
              <div
                className={`w-[95%] py-2 pl-2 rounded-[6px] ${
                  currentPath === "get-help/frequently-asked-questions"
                    ? "bg-[#0070D233] text-[#0070D2]"
                    : "text-[#131635]"
                }`}
              >
                <Link to={"/get-help/frequently-asked-questions"}>FAQ's</Link>
              </div>
              <div
                className={`w-[95%] py-2 pl-2 rounded-[6px] ${
                  currentPath === "get-help/contact-us"
                    ? "bg-[#0070D233] text-[#0070D2]"
                    : "text-[#131635]"
                }`}
              >
                <Link to={"/get-help/contact-us"}>Contact US</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;

const dropicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
