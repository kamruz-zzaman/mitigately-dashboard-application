import React, { Fragment } from "react";
import UserImg from "../../assets/user.png";
import { Menu, Transition } from "@headlessui/react";

const Profile = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex items-center gap-5 py-5">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M19.3114 17.2075C19.3114 17.6553 18.9483 18.0184 18.5005 18.0184H3.60627C3.15845 18.0184 2.79541 17.6553 2.79541 17.2075C2.79541 16.7597 3.15844 16.3966 3.60627 16.3966H3.62121V10.7458C3.62121 6.70119 6.94917 3.42287 11.0534 3.42287C15.1576 3.42287 18.4856 6.70119 18.4856 10.7458V16.3966H18.5005C18.9483 16.3966 19.3114 16.7597 19.3114 17.2075ZM5.2728 16.3966H16.834V10.7458C16.834 7.59719 14.2459 5.0446 11.0534 5.0446C7.86085 5.0446 5.2728 7.59719 5.2728 10.7458V16.3966ZM9.23436 19.7879C8.96947 19.3033 9.43661 18.8292 9.98889 18.8292H12.1179C12.6702 18.8292 13.1373 19.3033 12.8724 19.7879C12.7778 19.961 12.6573 20.1212 12.5132 20.2626C12.126 20.6428 11.6009 20.8564 11.0534 20.8564C10.5059 20.8564 9.98074 20.6428 9.59357 20.2626C9.44953 20.1212 9.32897 19.961 9.23436 19.7879Z"
                  fill="#C1C1C1"
                />
                <circle cx="16.0997" cy="6.63431" r="4.12899" fill="white" />
                <circle cx="16.0996" cy="6.63431" r="3.21144" fill="#7267CB" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 min-w-[200px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Notification one
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Notification two
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="25px"
                width="25px"
              >
                <path d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-256 16c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72z" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 min-w-[200px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Setting
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Profile;
