import * as React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Avatar from "@material-ui/core/Avatar";
import "../styles/site.css";
import PassportImg from "../images/passport.jpg";
import AzureAdminImg from "../images/azure.png";
import AzureFunImg from "../images/azure-fundamentals.png";
import GoogleImg from "../images/google.png";
import JenkinsImg from "../images/jenkins.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor: 'blue',
  },
}));

const ResumePage = () => {
  const classes = useStyles();
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
          <div
            className="absolute top-0 z-10 pr-4 space-x-4 bg-purple-900 h-16 w-screen md:w-full flex justify-end font-bold"
            id="top-bar"
          >
            <nav className="py-5 space-x-2 hidden md:block">
              <Link
                to="/"
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
                to="/resume"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                Resume
              </Link>
              <Link
                to="/portfolio"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="transition duration-500 ease-in-out p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
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
              <p className="font-weight-bold text-white mt-5">
                Oluwatobi Akanji
              </p>
            </Link>
          </div>
          <div className="w-full md:w-5/6 bg-white h-screen overflow-y-scroll mx-auto text-black">
            <div className="mt-20 w-11/12 mx-auto">
              <h1 className="merienda text-4xl text-purple-900">Resume</h1>
              <h4 className="mt-1">
                Over the years, I have built skills in cloud technologies and
                software development.
              </h4>
              <h4 className="mt-10 font-bold">Certifications</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                <div className="text-center rounded-lg space-y-2 shadow-box h-60 transition transform ease-in-out hover:scale-105">
                  <img
                    src={AzureAdminImg}
                    className="mx-auto mt-1 w-1/2"
                    alt="Microsoft Certified: Azure Administrator Associate"
                  />

                  <h4 className="font-bold">Azure Administrator Associate</h4>
                  <p className="text-gray">June 2021 - June 2023</p>
                  <a
                    className="p-2 rounded-lg bg-purple-900 text-white leading-9"
                    href="https://www.credly.com/badges/0864ed09-5c49-4df7-a3af-5b20060b3164"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential{" "}
                    <span className="fa fa-external-link-alt"></span>
                  </a>
                </div>
                <div className="text-center rounded-lg space-y-2 shadow-box h-60 transition transform ease-in-out hover:scale-105">
                  <img
                    src={GoogleImg}
                    className="mx-auto mt-1 w-1/2"
                    alt="Google Associate Cloud Engineer"
                  />

                  <h4 className="font-bold">Associate Cloud Engineer</h4>
                  <p className="text-gray">February 2021 - February 2023</p>
                  <a
                    className="p-2 rounded-lg bg-purple-900 text-white leading-9"
                    href="https://www.credential.net/52eb18d3-950e-463a-bfc5-d239c664ca6f"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential{" "}
                    <span className="fa fa-external-link-alt"></span>
                  </a>
                </div>
                <div className="text-center rounded-lg space-y-2 shadow-box h-60 transition transform ease-in-out hover:scale-105">
                  <img
                    src={JenkinsImg}
                    className="mx-auto mt-1 w-2/5"
                    alt="Certified Jenkins Engineer 2020"
                  />

                  <h4 className="font-bold">Certified Jenkins Engineer</h4>
                  <p className="text-gray">December 2020</p>
                  <a
                    className="p-2 rounded-lg bg-purple-900 text-white leading-9"
                    href="https://www.credly.com/badges/0864ed09-5c49-4df7-a3af-5b20060b3164"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential{" "}
                    <span className="fa fa-external-link-alt"></span>
                  </a>
                </div>
                <div className="text-center rounded-lg space-y-2 shadow-box h-60 transition transform ease-in-out hover:scale-105">
                  <img
                    src={AzureFunImg}
                    className="mx-auto w-1/2 mt-1"
                    alt="Microsoft Certified: Azure Fundamentals"
                  />

                  <h4 className="font-bold">Azure Fundamentals</h4>
                  <p className="text-gray">July 2020</p>
                  <a
                    className="p-2 rounded-lg bg-purple-900 text-white leading-9"
                    href="https://www.youracclaim.com/badges/4dd59497-d3b3-40db-a366-e244115c8d07?source=linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential{" "}
                    <span className="fa fa-external-link-alt"></span>
                  </a>
                </div>
              </div>

              <h4 className="mt-10 font-bold">Education</h4>
              <Accordion>
                <AccordionSummary
                  expandIcon={ExpandMoreIcon}
                  aria-controls="postgraduate"
                  id="postgraduate"
                  classes={classes}
                >
                  Hello
                </AccordionSummary>
                <AccordionDetails>hgkg</AccordionDetails>
              </Accordion>
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

export default ResumePage;
