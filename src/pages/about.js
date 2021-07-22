import * as React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import "../styles/site.css";
import Gif from "../images/oluwatobi-akanji.gif";
import Nav from "../component/nav";

const AboutPage = () => {
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
              <h1 className="merienda text-4xl text-purple-900">
                Meet Oluwatobi Akanji
              </h1>
              <h4 className="mt-10 font-bold text-lg">Who am I?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="img-circle-wrapper-profile mx-auto my-auto">
                  <img
                    src={Gif}
                    className="img-circle"
                    alt="Oluwatobi Akanji"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex ml-5 space-x-4 mt-5 md-mt-1">
                    <span
                      className="iconify text-7xl md:text-4xl text-purple-900"
                      data-icon="ci:user-check"
                    ></span>
                    <p className="">
                      A <b>Cloud Software Engineer</b> with experience
                      developing websites, full-stack web applications, APIs.
                    </p>
                  </div>
                  <div className="flex ml-5 space-x-4 mt-1">
                    <span
                      className="iconify text-5xl md:text-2xl text-purple-900"
                      data-icon="ci:user-check"
                    ></span>
                    <p className="">
                      A <b>Masters Degree in Computer Science (Distinction) </b>
                      holder.
                    </p>
                  </div>
                  <div className="flex ml-5 space-x-4 mt-1">
                    <span
                      className="iconify text-6xl md:text-3xl text-purple-900"
                      data-icon="ci:user-check"
                    ></span>
                    <p className="">
                      Focused on implementing highly performant, secure, and
                      scalable systems.
                    </p>
                  </div>
                  <div className="flex ml-5 space-x-4 mt-1">
                    <span
                      className="iconify text-5xl md:text-3xl text-purple-900"
                      data-icon="ci:user-check"
                    ></span>
                    <p className="">
                      Currently working as an IT Infrastructure Engineer at{" "}
                      <a
                        href="https://steamledge.com"
                        className="font-bold text-purple-900"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Steamledge{" "}
                        <span className="fa fa-external-link-alt"></span>
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="mt-10 font-bold text-lg">What I do</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mb-5 md:mt-2">
                <div className="text-center rounded-lg shadow-box h-40 transition transform ease-in-out hover:scale-105">
                  <span
                    className="iconify mx-auto my-2 text-5xl text-red-500"
                    data-icon="ant-design:cloud-twotone"
                  ></span>
                  <h4 className="font-bold">Cloud Architecture</h4>
                  <p>
                    I design the architecture of the cloud platform to host a
                    software.
                  </p>
                </div>
                <div className="text-center rounded-lg shadow-box h-40 transition transform ease-in-out hover:scale-105">
                  <span
                    className="iconify mx-auto my-2 text-5xl text-blue-500"
                    data-icon="ant-design:api-twotone"
                  ></span>
                  <h4 className="font-bold">Back-End Web Development</h4>
                  <p>
                    I implement the logic of web applications as APIs using
                    codes.
                  </p>
                </div>
                <div className="text-center rounded-lg shadow-box h-40 transition transform ease-in-out hover:scale-105">
                  <span
                    className="iconify mx-auto my-2 text-5xl text-green-500"
                    data-icon="icon-park-outline:cycle-arrow"
                  ></span>
                  <h4 className="font-bold">Devops</h4>
                  <p>I configure and manage cloud resources for CI/CD.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
