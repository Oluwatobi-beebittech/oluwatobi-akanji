import * as React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const MobileNav = () => {
  return (
    <div
      id="mobile-nav"
      className="hidden bg-purple-900 w-2/12 md:hidden md:w-0 overflow-y-scroll"
    >
      <nav className="mt-36 space-y-4">
        <Link
          to="/"
          className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
        >
          <Home />
        </Link>
        <Link
          to="/about"
          className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
        >
          <PersonPinIcon />
        </Link>
        <Link
          to="/resume"
          className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
        >
          <DescriptionIcon />
        </Link>
        <Link
          to="/portfolio"
          className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
        >
          <AppsIcon />
        </Link>
        <Link
          to="/contact"
          className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
        >
          <ContactPhoneIcon />
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
