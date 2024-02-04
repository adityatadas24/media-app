import React from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  let { pathname } = useLocation();

  return (
    <div className="Footer h-10 bg-white text-white fixed sm:hidden text-3xl flex justify-center items-center gap-10  bottom-0 z-50  w-full ">
      <NavLink to="/">
        <IoHomeSharp
          className={`${pathname === "/" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
        />
      </NavLink>
      <NavLink to="/notification">
        <FaBell
          className={`${pathname === "/notification" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
        />
      </NavLink>
      <NavLink to="/bookmark">
        <FaBookmark
          className={`${pathname === "/bookmark" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
        />
      </NavLink>
      <NavLink to="/user/details">
        <FaUser
          className={`${pathname === "/user/details" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
        />
      </NavLink>
    </div>
  );
};

export default Footer;
