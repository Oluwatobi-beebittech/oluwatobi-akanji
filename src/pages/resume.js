import * as React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AzureAdminImg from "../images/azure.png";
import AzureFunImg from "../images/azure-fundamentals.png";
import GoogleImg from "../images/google.png";
import JenkinsImg from "../images/jenkins.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GitImg from "../images/git.png";
import HtmlImg from "../images/html.jpg";
import CssImg from "../images/css3.png";
import SqlImg from "../images/sql.jpg";
import LaravelImg from "../images/laravel.png";
import ReactImg from "../images/react.png";
import JavascriptImg from "../images/javascript.png";
import BootImg from "../images/bootstrap.jpg";
import TailImg from "../images/tailwind.png";
import Layout from "../components/layout";

const ResumePage = () => {
  return (
    <Layout>
      <h1 className="merienda text-4xl text-purple-900">Resume</h1>
      <h4 className="mt-1 font-semibold">
        Over the years, I have built skills in cloud technologies and software
        development.
      </h4>
      <p className="mt-5 text-white font-medium">
        <a
          className="p-2.5 transition duration-500 ease-in-out bg-purple-900 hover:text-purple-900 hover:bg-purple-100 rounded-lg"
          href="#h"
        >
          Download my resume <span className="fa fa-download"></span>
        </a>
      </p>

      <div className="mt-10">
        <h4 className="font-bold text-lg">Work Experience</h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
          <div className="mx-auto">
            <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
              <span className="fa fa-cloud mt-2.5"></span>
            </div>
          </div>
          <div className="md:col-start-2 md:col-span-4">
            <div className="text-center md:text-left ">
              <h1 className="font-bold">IT Infrastructure Engineer</h1>
              <h4 className="text-gray-600 font-semibold">
                Steamledge Limited
              </h4>
              <h6 className="text-gray-600">Minna, Nigeria</h6>
              <h6 className="text-gray-600">January 2020 - Present</h6>
            </div>
            <div className="mt-2">
              <p>
                Worked on the cloud architecture for a fintech project while
                considering billing and risks.
              </p>
              <p>
                Slashed expected user onboarding time for Steamledge learning
                portal from 48 hours to 2 hours.
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
              <h1 className="font-bold">Thrustlead (Volunteer)</h1>
              <h4 className="text-gray-600 font-semibold">
                Steamledge Limited
              </h4>
              <h6 className="text-gray-600">Minna, Nigeria</h6>
              <h6 className="text-gray-600">September 2019 - December 2019</h6>
            </div>

            <div className="mt-2">
              <p>
                Developed 21st century skill curriculum for schools in Minna,
                Niger State.
              </p>
              <p>
                Increased the STEM knowledge of over 50 students by 70% using
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
              <h1 className="font-bold">STEM Tutor</h1>
              <h4 className="text-gray-600 font-semibold">
                Kyomnom Firm Foundation Academy
              </h4>
              <h6 className="text-gray-600">Jos, Nigeria</h6>
              <h6 className="text-gray-600">October 2017 - February 2019</h6>
            </div>
            <div className="mt-2">
              <p>
                Reduced learners' idle time by 50% through a schedule redesign.
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
              <h1 className="font-bold">Network Engineer Intern</h1>
              <h4 className="text-gray-600 font-semibold">University of Jos</h4>
              <h6 className="text-gray-600">Jos, Nigeria</h6>
              <h6 className="text-gray-600">June 2014 - December 2014</h6>
            </div>
            <div className="mt-2">
              <p>
                Assisted in configuring departments’ internet connectivity in
                the University which resulted in a 10% increase in internet
                access of the university’s community.
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

      <div className="mt-10">
        <h4 className="font-bold text-lg">Technology Stack</h4>
        <p className="text-gray-100">
          I have used these technologies to develop products
        </p>
        <div className="grid grid-cols-3 gap-y-1 md:grid-cols-12 text-center">
          <div className="space-y-1">
            <img src={LaravelImg} alt="Laravel" className="w-10 h-10 mx-auto" />
            <p className="font-medium">Laravel</p>
          </div>
          <div className="space-y-1">
            <img src={ReactImg} alt="React" className="w-10 h-10 mx-auto" />
            <p className="font-medium">React JS</p>
          </div>
          <div className="space-y-1">
            <img
              src={JavascriptImg}
              alt="Javascript"
              className="w-10 h-10 mx-auto"
            />
            <p className="font-medium">Javascript</p>
          </div>
          <div className="space-y-1">
            <img src={GitImg} alt="Git" className="w-10 h-10 mx-auto" />
            <p className="font-medium">Git</p>
          </div>
          <div className="space-y-1">
            <img src={SqlImg} alt="MySQL" className="w-10 h-10 mx-auto" />
            <p className="font-medium">MySQL</p>
          </div>
          <div className="space-y-1">
            <img src={HtmlImg} alt="HTML" className="w-10 h-10 mx-auto" />
            <p className="font-medium">HTML5</p>
          </div>
          <div className="space-y-1">
            <img src={CssImg} alt="CSS" className="w-10 h-10 mx-auto" />
            <p className="font-medium">CSS3</p>
          </div>
          <div className="space-y-1">
            <img src={BootImg} alt="Bootstrap" className="w-10 h-10 mx-auto" />
            <p className="font-medium">Bootstrap</p>
          </div>
          <div className="space-y-1">
            <img
              src={TailImg}
              alt="Tailwind CSS"
              className="w-10 h-10 mx-auto"
            />
            <p className="font-medium">Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h4 className="font-bold text-lg">Certifications</h4>
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
      </div>

      <div className="my-10">
        <h4 className="font-bold mb-2 text-lg">Education</h4>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="postgraduate"
            id="postgraduate"
            classes={{
              expanded: "font-semibold text-purple-900",
              root: "font-semibold",
            }}
          >
            Postgraduate Education
          </AccordionSummary>
          <AccordionDetails classes={{ root: "bg-gray-100" }}>
            <div className="w-5/6 space-y-1">
              <div className="flex justify-between">
                <p className="font-medium">
                  Federal University of Technology, Minna, Nigeria
                </p>
                <p className="font-medium">2019-2021</p>
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
              expanded: "font-semibold text-purple-900",
              root: "font-semibold",
            }}
          >
            Undergraduate Education
          </AccordionSummary>
          <AccordionDetails classes={{ root: "bg-gray-100" }}>
            <div className="w-5/6 space-y-1">
              <div className="flex justify-between">
                <p className="font-medium">
                  Ahmadu Bello University, Zaria, Nigeria
                </p>
                <p className="font-medium">2011-2015</p>
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
              expanded: "font-semibold text-purple-900",
              root: "font-semibold",
            }}
          >
            Secondary Education
          </AccordionSummary>
          <AccordionDetails classes={{ root: "bg-gray-100" }}>
            <div className="w-5/6 space-y-1">
              <div className="flex justify-between">
                <p className="font-medium">Salama High School, Jos, Nigeria</p>
                <p className="font-medium">2006-2011</p>
              </div>
              <p>Senior Secondary School Certificate</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </Layout>
  );
};

export default ResumePage;
