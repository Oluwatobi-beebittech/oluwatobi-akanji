import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import favicon from "../images/favicon.ico";
import Nav from "./nav";
import MobileNav from "./mobileNav";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  useEffect(() => {
    const handleClick = () => {
      const mobileNavBtnIcon = document.getElementById("mobile-nav-btn-icon");
      const mobileNav = document.getElementById("mobile-nav");
      const topBar = document.getElementById("top-bar");
      mobileNav.classList.toggle("hidden");
      mobileNavBtnIcon.classList.toggle("fa-bars");
      mobileNavBtnIcon.classList.toggle("fa-times");
      if (topBar !== null) {
        topBar.classList.toggle("w-screen");
        topBar.classList.toggle("w-85vw");
      }
    };
    const mobileNavBtn = document.getElementById("mobile-nav-btn");

    mobileNavBtn.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <main className="h-screen">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta name="robots" content="all" />
        <meta name="description" content="Oluwatobi Akanji Portfolio Website" />
        <meta name="author" content="Oluwatobi Akanji" />
        <meta
          name="keywords"
          content="Oluwatobi Akanji, Oluwatobi Shadrach Akanji, Akanji, Oluwatobi, Shadrach, Oluwatobi-beebittech, Laravel, Google Cloud Platform, Azure, Cloud Software Engineer"
        />
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Oluwatobi Akanji</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Helmet>

      <div className="flex inline h-full">
        <MobileNav />
        <div className="w-screen flex flex-wrap content-center bg-purple-900 bg-opacity-70 md:h-screen ">
          <button
            id="mobile-nav-btn"
            className="mobile md:hidden absolute top-0 z-50 mt-2 p-2 bg-purple-100 text-purple-900 rounded-lg font-bold hover:text-purple-100 hover:bg-purple-900 "
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
