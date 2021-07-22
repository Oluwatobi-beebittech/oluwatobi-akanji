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

const ResumePage = () => {
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
              <h4 className="mt-10 font-bold">Work Experience</h4>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                  <div className="mx-auto">
                    <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
                      <span className="fa fa-cloud mt-2.5"></span>
                    </div>
                  </div>
                  <div className="md:col-start-2 md:col-span-4">
                    <div className="text-center md:text-left ">
                      <h1 className="font-bold text-lg">
                        IT Infrastructure Engineer
                      </h1>
                      <h4 className="text-gray-600">Steamledge Limited</h4>
                      <h6 className="text-gray-600">Minna, Nigeria</h6>
                      <h6 className="text-gray-600">January 2020 - Present</h6>
                    </div>
                    <div className="text-gray-700 mt-2">
                      <p>
                        Worked on the cloud architecture for a fintech project
                        while considering billing and risks.
                      </p>
                      <p>
                        Slashed expected user onboarding time for Steamledge
                        learning portal from 48 hours to 2 hours.
                      </p>
                    </div>

                    <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
                      <li>AWS</li>
                      <li>GCP</li>
                      <li>Azure</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                  <div className="mx-auto">
                    <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
                      <span className="fa fa-chalkboard-teacher mt-2.5"></span>
                    </div>
                  </div>
                  <div className="md:col-start-2 md:col-span-4">
                    <div className="text-center md:text-left ">
                      <h1 className="font-bold text-lg">
                        Thrustlead (Volunteer)
                      </h1>
                      <h4 className="text-gray-600">Steamledge Limited</h4>
                      <h6 className="text-gray-600">Minna, Nigeria</h6>
                      <h6 className="text-gray-600">
                        September 2019 - December 2019
                      </h6>
                    </div>

                    <div className="text-gray-700 mt-2">
                      <p>
                        Developed 21st century skill curriculum for schools in
                        Minna, Niger State.
                      </p>
                      <p>
                        Increased the knowledge of over 50 students by 70% using
                        project-based STEM lessons.
                      </p>
                    </div>

                    <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
                      <li>Laravel</li>
                      <li>Arduino</li>
                      <li>MIT App Inventor</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                  <div className="mx-auto">
                    <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
                      <span className="fa fa-chalkboard-teacher mt-2.5"></span>
                    </div>
                  </div>
                  <div className="md:col-start-2 md:col-span-4">
                    <div className="text-center md:text-left ">
                      <h1 className="font-bold text-lg">STEM Tutor</h1>
                      <h4 className="text-gray-600">
                        Kyomnom Firm Foundation Academy
                      </h4>
                      <h6 className="text-gray-600">Jos, Nigeria</h6>
                      <h6 className="text-gray-600">
                        October 2017 - February 2019
                      </h6>
                    </div>
                    <div className="text-gray-700 mt-2">
                      <p>
                        Reduced learners' idle time by 50% through a schedule
                        redesign.
                      </p>
                    </div>

                    <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
                      <li>Excel</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                  <div className="mx-auto">
                    <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
                      <span className="fa fa-wifi mt-2.5"></span>
                    </div>
                  </div>
                  <div className="md:col-start-2 md:col-span-4">
                    <div className="text-center md:text-left ">
                      <h1 className="font-bold text-lg">
                        Network Engineer Intern
                      </h1>
                      <h4 className="text-gray-600">University of Jos</h4>
                      <h6 className="text-gray-600">Jos, Nigeria</h6>
                      <h6 className="text-gray-600">
                        June 2014 - December 2014
                      </h6>
                    </div>
                    <div className="text-gray-700 mt-2">
                      <p>
                        Assisted in configuring departments’ internet
                        connectivity in the University which resulted in a 10%
                        increase in internet access of the university’s
                        community.
                      </p>
                      <p>
                        Enhanced work efficiency through the troubleshooting of
                        workstations for internet connectivity and resolving
                        connectivity issues.
                      </p>
                    </div>

                    <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
                      <li>Networking</li>
                      <li>Support</li>
                    </ul>
                  </div>
                </div>
              </div>
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
                    <span className="fa fa-external-link-alt fa-xs"></span>
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
                    <span className="fa fa-external-link-alt fa-xs"></span>
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
                    <span className="fa fa-external-link-alt fa-xs"></span>
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
                    <span className="fa fa-external-link-alt fa-xs"></span>
                  </a>
                </div>
              </div>

              <h4 className="mt-10 font-bold mb-2">Education</h4>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="postgraduate"
                  id="postgraduate"
                  classes={{
                    expanded: "font-bold text-purple-900",
                    root: "font-bold",
                  }}
                >
                  Postgraduate Education
                </AccordionSummary>
                <AccordionDetails classes={{ root: "bg-gray-100" }}>
                  <div className="w-5/6 space-y-1">
                    <div className="flex justify-between">
                      <p>Federal University of Technology, Minna, Nigeria</p>
                      <p className="font-bold">2019-2021</p>
                    </div>
                    <p>MTech. Computer Science</p>
                    <p>Distinction</p>
                  </div>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="undergraduate"
                  id="undergraduate"
                  classes={{
                    expanded: "font-bold text-purple-900",
                    root: "font-bold",
                  }}
                >
                  Undergraduate Education
                </AccordionSummary>
                <AccordionDetails classes={{ root: "bg-gray-100" }}>
                  <div className="w-5/6 space-y-1">
                    <div className="flex justify-between">
                      <p>Ahmadu Bello University, Zaria, Nigeria</p>
                      <p className="font-bold">2011-2015</p>
                    </div>
                    <p>BSc. Computer Science</p>
                    <p>Second Class Upper (2:1)</p>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="secondary"
                  id="secondary"
                  classes={{
                    expanded: "font-bold text-purple-900",
                    root: "font-bold",
                  }}
                >
                  Secondary Education
                </AccordionSummary>
                <AccordionDetails classes={{ root: "bg-gray-100" }}>
                  <div className="w-5/6 space-y-1">
                    <div className="flex justify-between">
                      <p>Salama High School, Jos, Nigeria</p>
                      <p className="font-bold">2006-2011</p>
                    </div>
                    <p>Senior Secondary School Certificate</p>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
