import * as React from "react";
import PassportImg from "../images/passport.jpg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "gatsby";
import "../styles/site.css";
const Nav = () => {
  return (
    <div
      className="absolute top-0 z-10 pr-4 space-x-4 bg-purple-900 h-16 w-screen md:w-full flex justify-end font-semibold"
      id="top-bar"
    >
      <nav className="py-5 space-x-2 hidden md:block">
        <Link
          to="/"
          className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg hover:text-purple-900 hover:bg-purple-100 "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg hover:text-purple-900 hover:bg-purple-100"
        >
          About
        </Link>
        <Link
          to="/resume"
          className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg hover:text-purple-900 hover:bg-purple-100"
        >
          Resume
        </Link>
        <Link
          to="/portfolio"
          className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg hover:text-purple-900 hover:bg-purple-100"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg hover:text-purple-900 hover:bg-purple-100"
        >
          Contact
        </Link>
      </nav>
      <Avatar
        alt="Oluwatobi Akanji Avatar"
        src={PassportImg}
        className="bg-purple-900 text-white my-auto"
      >
        OA
      </Avatar>
      <Link to="/about">
        <p className="font-weight-bold text-white mt-5">Oluwatobi Akanji</p>
      </Link>
    </div>
  );
};

export default Nav;
