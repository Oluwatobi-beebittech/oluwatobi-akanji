import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import Gif from "../images/oluwatobi-akanji.gif";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="merienda text-4xl text-purple-900">
        Meet Oluwatobi Akanji
      </h1>
      <h4 className="mt-10 font-bold text-lg">Who am I?</h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="img-circle-wrapper-profile mx-auto my-auto">
          <img src={Gif} className="img-circle" alt="Oluwatobi Akanji" />
        </div>
        <div className="space-y-2">
          <div className="flex ml-5 space-x-4 mt-5 md-mt-1">
            <span
              className="iconify text-7xl md:text-4xl text-purple-900"
              data-icon="ci:user-check"
            ></span>
            <p className="">
              A <b>Cloud Software Engineer</b> with experience developing
              websites, full-stack web applications, APIs.
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
              Focused on implementing highly performant, secure, and scalable
              systems.
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
                Steamledge <span className="fa fa-external-link-alt"></span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h4 className="font-bold text-lg">What I do</h4>
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
              I implement the logic of web applications as APIs using codes.
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
    </Layout>
  );
};

export default AboutPage;
