import * as React from "react";
import { Link } from "gatsby";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Avatar from "@material-ui/core/Avatar";
import Home from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "../styles/site.css";

// markup
const IndexPage = () => {
  return (
    <main className="h-screen">
      <title>Oluwatobi Akanji</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Merienda+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
        rel="stylesheet"
      />

      <div className="flex inline h-full">
        <div className="bg-purple-900 w-2/12 md:hidden md:w-0 overflow-y-scroll">
          
          <nav className="mt-36 space-y-4">
            <Link
              to="/about"
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
              to="/about"
              className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
            >
              <DescriptionIcon />
            </Link>
            <Link
              to="/about"
              className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
            >
              <AppsIcon />
            </Link>
            <Link
              to="/about"
              className="text-center w-2/3 mx-auto block p-2 bg-white bg-opacity-10 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
            >
              <ContactPhoneIcon />
            </Link>
          </nav>
        </div>
        <div className="flex flex-wrap content-center bg-purple-900 bg-opacity-70 w-10/12 md:w-screen md:h-screen ">
          <button className="absolute top-0 mt-2 p-2 bg-purple-100 text-purple-900 rounded-lg font-bold hover:text-purple-100 hover:bg-purple-900 ">
            <MenuIcon />
          </button>
          <div className="w-full md:w-1/2"></div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <Avatar
              alt="Oluwatobi Akanji Avatar"
              src="https://avatars.githubusercontent.com/u/13138782?v=4"
              style={{ width: "5em", height: "5em" }}
              className="bg-purple-900 text-white mx-auto md:mx-0"
            >
              OA
            </Avatar>
            <h1 className="hero-text">Oluwatobi Akanji</h1>
            <h2 className="text-2xl font-bold text-purple-100">
              I am a Software Engineer
            </h2>
            <nav className="py-5 space-x-2 hidden md:block ">
              <Link
                to="/about"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100 "
              >
                Home
              </Link>
              <Link
                to="/about"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                About
              </Link>
              <Link
                to="/about"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                Resume
              </Link>
              <Link
                to="/about"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                Contact
              </Link>
            </nav>
            <div className="space-x-4 mt-5">
              <a
                href="https://www.linkedin.com/in/oluwatobiakanji/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  fontSize="large"
                  className="text-purple-200 hover:text-purple-100"
                />
              </a>
              <a
                href="https://github.com/Oluwatobi-beebittech"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  fontSize="large"
                  className="text-purple-200 hover:text-purple-100"
                />
              </a>
              <a
                href="mailto:akanjioluwatobishadrach@yahoo.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailIcon
                  fontSize="large"
                  className="text-purple-200 hover:text-purple-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
