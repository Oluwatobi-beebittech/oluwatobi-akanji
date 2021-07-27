import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Oluwatobi Akanji - Contact</title>
        <meta
          name="description"
          content="Oluwatobi Akanji Portfolio Website Contact Page"
        />
      </Helmet>
      <h1 className="merienda text-4xl text-purple-900">Contact</h1>
      <h4 className="mt-1 font-semibold">
        I'm open to knowing about opportunities and interesting projects.
      </h4>
      <h4 className="mt-1 text-gray-500 font-semibold">Let's have a chat</h4>
      <div className="my-10 text-center">
        <p className="font-medium">
          <span className="text-gray-600">
            I'm aware that contact forms are not some people's thing.
          </span>
          <br /> Reach me swiftly via these channels{" "}
        </p>
        <div className="flex justify-center w-full gap-x-8 my-4">
          <div className="transition duration-75 ease-in-out hover:border-b-2 border-purple-900">
            <a
              href="https://www.linkedin.com/in/oluwatobiakanji/"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="iconify text-5xl"
                data-icon="logos:linkedin-icon"
                data-inline="false"
              ></span>
            </a>
          </div>
          <div className="hover:border-b-2 border-purple-900">
            <a href="https://wa.link/l30v10" target="_blank" rel="noreferrer">
              <span
                className="iconify text-5xl"
                data-icon="logos:whatsapp"
                data-inline="false"
              ></span>
            </a>
          </div>
          <div className="hover:border-b-2 border-purple-900">
            <a href="mailto:akanjioluwatobishadrach@yahoo.com">
              <span
                className="iconify text-2xl mt-2.5"
                data-icon="logos:yahoo"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
        <p className="mb-2 font-medium">Or give me a call on </p>
        <a
          href="tel:+2348101089396"
          className="p-2 bg-purple-900 text-white rounded-lg font-semibold"
        >
          <span className="fa fa-phone-alt"></span>
          &nbsp;+234 810 108 9396
        </a>
        <p className="my-2 font-medium">Or send me an SMS on </p>
        <a
          href="sms://+2348101089396?body=I%27m%20interested%20in%20speaking%20with%20you.%20Kindly%20contact%20me."
          className="p-2 bg-blue-900 text-white rounded-lg font-semibold"
        >
          <span className="fa fa-sms"></span>
          &nbsp;+234 810 108 9396
        </a>
      </div>
    </Layout>
  );
};

export default ContactPage;
