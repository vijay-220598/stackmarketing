import React, { useState } from "react";
import {
  IconHome,
  IconLayoutDashboard,
  IconBox,
  IconShoppingCart,
  IconSettings,
  IconChevronLeft,
  IconSearch,
  IconBell,
  IconUserCircle,
  IconShoppingBag,
  IconUserFilled,
} from "@tabler/icons-react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../image/logo-3.png";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <nav
          className={`${
            open ? "w-65" : "w-20"
          } duration-300 bg-indigo-950 text-white p-5 pt-8 relative`}
        >
          <IconChevronLeft
            className={`absolute cursor-pointer -right-3 top-15 w-7 h-7 p-1 border-2 rounded-full bg-slate-500 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              alt="ogo"
              className={`w-7 h-7 cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h2
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Stack
            </h2>
          </div>
          <ul className="space-y-4 pt-6 mt-6">
            <li>
              <Link
                to="dashboard"
                className="flex items-center gap-x-5 text-gray-300 p-2 rounded-md hover:bg-slate-600"
              >
                <IconLayoutDashboard className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className="flex items-center gap-x-5 text-gray-300 p-2 rounded-md hover:bg-slate-600"
              >
                <IconShoppingBag className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="order"
                className="flex items-center gap-x-5 text-gray-300 p-2 rounded-md hover:bg-slate-600"
              >
                <IconShoppingCart className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Order
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                className="flex items-center gap-x-5 text-gray-300 p-2 rounded-md hover:bg-slate-600"
              >
                <IconSettings className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Settings
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                className="flex items-center gap-x-5 text-gray-300 p-2 rounded-md hover:bg-slate-600"
              >
                <IconUserFilled className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  User Profile
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 p-3 overflow-auto">
          <div className="w-full h-13 p-3 rounded-xl flex justify-between">
            <div>
              <IconHome
                onClick={() => navigate("dashboard")}
                className="cursor-pointer hover:text-blue-900"
              />
            </div>
            <div className="flex gap-3 items-center">
              <IconSearch className="cursor-pointer hover:text-blue-900" />
              <IconBell className="cursor-pointer hover:text-blue-900" />
              <IconUserCircle className="cursor-pointer hover:text-blue-900" />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navber;
