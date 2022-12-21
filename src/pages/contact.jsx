import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Seo } from "../components/seo";
import "../styles/site.css";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
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
            <a href="mailto:akanjioluwatobishadrach@yahoo.com">
              <span
                className="iconify text-2xl mt-2.5"
                data-icon="logos:yahoo"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = ({ location }) => (
  <Seo
    description="Contact Oluwatobi Akanji"
    title="Contact"
    pathname={location.pathname}
  />
);
