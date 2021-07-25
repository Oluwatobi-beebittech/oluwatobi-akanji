import * as React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Layout from "../components/layout";
import {
  workExperiences,
  technologyStacks,
  certifications,
  pdfCV,
} from "../../data/resumeData";

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
          href={pdfCV}
        >
          Download my resume <span className="fa fa-download"></span>
        </a>
      </p>

      <div className="mt-10">
        <h4 className="font-bold text-lg">Work Experience</h4>
        {workExperiences.map((experience) => (
          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2"
            key={`${experience.title}-${experience.location}-${experience.duration}`}
          >
            <div className="mx-auto">
              <div className="rounded-full w-11 h-11 bg-blue-600 text-center text-white border-4 border-purple-300">
                <span className={`${experience.icon} mt-2.5`}></span>
              </div>
            </div>
            <div className="md:col-start-2 md:col-span-4">
              <div className="text-center md:text-left ">
                <h1 className="font-bold">{experience.title}</h1>
                <h4 className="text-gray-600 font-semibold">
                  {experience.company}
                </h4>
                <h6 className="text-gray-600">{experience.location}</h6>
                <h6 className="text-gray-600">{experience.duration}</h6>
              </div>
              <div className="mt-2">
                {experience.descriptions.map((description) => (
                  <p key={`${experience.title}-${experience.duration}`}>
                    {description}
                  </p>
                ))}
              </div>

              <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
                {experience.techStacks.map((stack) => (
                  <li key={`${experience.title}-${experience.duration}`}>
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h4 className="font-bold text-lg">Technology Stack</h4>
        <p className="text-gray-100">
          I have used these technologies to develop products
        </p>
        <div className="grid grid-cols-3 gap-y-1 md:grid-cols-12 text-center">
          {technologyStacks.map((stack) => (
            <div className="space-y-1" key={stack.name}>
              <img
                src={stack.image}
                alt={stack.name}
                className="w-10 h-10 mx-auto"
              />
              <p className="font-medium">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h4 className="font-bold text-lg">Certifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {certifications.map((cert) => (
            <div
              className="text-center rounded-lg space-y-2 shadow-box h-60 transition transform ease-in-out hover:scale-105"
              key={`${cert.title}-${cert.duration}`}
            >
              <img
                src={cert.image}
                className="mx-auto mt-1 w-2/5"
                alt={cert.title}
              />

              <h4 className="font-bold">{cert.title}</h4>
              <p className="text-gray">{cert.duration}</p>
              <a
                className="p-2 rounded-lg bg-purple-900 text-white leading-9"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                View credential{" "}
                <span className="fa fa-external-link-alt fa-xs"></span>
              </a>
            </div>
          ))}
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
