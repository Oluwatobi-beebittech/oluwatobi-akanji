import * as React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import "../styles/site.css";
import Nav from "../component/nav";
import WebBuddy from "../images/webbuddy.png";

const PortfolioPage = () => {
  return (
    <main className="h-screen">
      <div className="flex inline h-full">
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

        <div className="w-screen flex flex-wrap content-center bg-purple-900 bg-opacity-70 md:h-screen ">
          <button
            id="mobile-nav-btn"
            className="md:hidden absolute top-0 z-50 mt-2 p-2 bg-purple-100 text-purple-900 rounded-lg font-bold hover:text-purple-100 hover:bg-purple-900 "
          >
            <span id="mobile-nav-btn-icon" className="fa fa-bars fa-2x"></span>
          </button>
          <Nav />
          <div className="w-full md:w-5/6 bg-white h-screen overflow-y-scroll mx-auto text-black">
            <div className="mt-20 w-11/12 mx-auto">
              <h1 className="merienda text-4xl text-purple-900">Portfolio</h1>
              <h4 className="mt-1 font-semibold">
                Here is my portfolio showing some of my works.
              </h4>
              <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-64 bg-purple-500">
                    <img
                      src={WebBuddy}
                      alt="WebBuddy"
                      className="w-full h-full"
                    />
                    <div className="bg-red-100 w-full h-full relative top-0">
                      k
                    </div>
                  </div>
                  <div className="h-64 bg-purple-500"></div>
                  <div className="h-64 bg-purple-500"></div>
                  <div className="h-64 bg-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
