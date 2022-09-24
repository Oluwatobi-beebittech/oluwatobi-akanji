import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import Gif from "../images/oluwatobi-akanji.gif";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oluwatobi Akanji - About</title>
        <meta name="description" content="Oluwatobi Akanji Portfolio Website About Page" />
      </Helmet>
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
              data-icon="icon-park-twotone:arrow-circle-right"
              data-width="55"
              data-height="55"
            ></span>
            <p className="">
              A <b>Software Engineer (Frontend Heavy)</b> with experience developing
              interactive dashboards, websites, full-stack web applications, and APIs.
            </p>
          </div>
          <div className="flex ml-5 space-x-4 mt-1">
            <span
              className="iconify text-purple-900"
              data-icon="icon-park-twotone:arrow-circle-right"
              data-width="40"
              data-height="40"
            ></span>
            <p className="">
              Focused on implementing highly performant, secure, and scalable
              systems both frontend and backend.
            </p>
          </div>
          <div className="flex ml-5 space-x-4 mt-1">
            <span
              className="iconify text-purple-900"
              data-icon="icon-park-twotone:arrow-circle-right"
              data-width="25"
              data-height="25"
            ></span>
            <p className="">
              Currently working as a Frontend Engineer at{" "}
              <a
                href=""
                className="font-bold text-purple-900"
                target="_blank"
                rel="noreferrer"
              >
                a digital agency <span className="fa fa-external-link-alt"></span>
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
              className="iconify mx-auto my-2 text-5xl text-green-500"
              data-icon="ant-design:build-twotone"
            ></span>
            <h4 className="font-bold">User Experience</h4>
            <p>I increase users' efficiency by creating intuitive applications.</p>
          </div>
          <div className="text-center rounded-lg shadow-box h-40 transition transform ease-in-out hover:scale-105">
            <span
              className="iconify mx-auto my-2 text-5xl text-red-500"
              data-icon="ant-design:rocket-twotone"
            ></span>
            <h4 className="font-bold">Frontend Development</h4>
            <p>
              I present dynamic data insights using simple dashboards and charts.
            </p>
          </div>
          <div className="text-center rounded-lg shadow-box h-40 transition transform ease-in-out hover:scale-105">
            <span
              className="iconify mx-auto my-2 text-5xl text-blue-500"
              data-icon="ant-design:api-twotone"
            ></span>
            <h4 className="font-bold">Back-End Web Development</h4>
            <p>
              I funnel valuable information to dashboards for visual representation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
