import * as React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  return (
    <main className="h-screen">
      <Helmet>
        {/* <script src="/mobileNav.js" /> */}
        <title>Oluwatobi Akanji</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Helmet>

      <div className="flex inline h-full">
        <MobileNav />
        <div className="w-screen flex flex-wrap content-center bg-purple-900 bg-opacity-70 md:h-screen ">
          <button
            id="mobile-nav-btn"
            className="md:hidden absolute top-0 z-50 mt-2 p-2 bg-purple-100 text-purple-900 rounded-lg font-bold hover:text-purple-100 hover:bg-purple-900 "
          >
            <span id="mobile-nav-btn-icon" className="fa fa-bars fa-2x"></span>
          </button>
          <Nav />
          <div className="w-full md:w-5/6 bg-white h-screen overflow-y-scroll mx-auto text-black">
            <div className="mt-20 w-11/12 mx-auto">{props.children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
