import * as React from "react";
import { Link } from "gatsby";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar';
import "../styles/site.css";

// markup
const IndexPage = () => {
  return (
    <main className="w-screen h-screen">
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

      <div className="flex flex-wrap h-screen content-center bg-purple-900 bg-opacity-70">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full text-center md:w-1/2 md:text-left">
        <Avatar alt="Oluwatobi Akanji Avatar" src="https://avatars.githubusercontent.com/u/13138782?v=4" className="bg-red-500 w-full h-full mx-0">
          OA
        </Avatar>
          <h1 className="hero-text">Oluwatobi Akanji</h1>
          <h2 className="text-2xl font-bold text-purple-100">
            I am a Software Engineer &amp; Cloud Architect
          </h2>
          <nav className="py-5 space-x-2">
            <Link
              to="/about"
              className="p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
            >
              About
            </Link>
            <Link
              to="/about"
              className="p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
            >
              Resume
            </Link>
            <Link
              to="/about"
              className="p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="p-2 bg-purple-900 text-white rounded-lg font-bold hover:text-purple-900 hover:bg-purple-100"
            >
              Contact
            </Link>
          </nav>
          <div className="space-x-4">
            <a
              href="https://www.linkedin.com/in/oluwatobiakanji/"
              target="_blank"
              rel="noreferrer"
              
            >
              <LinkedInIcon fontSize="large" className="text-purple-200 hover:text-purple-100"/>
            </a>
            <a
              href="https://github.com/Oluwatobi-beebittech"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" className="text-purple-200 hover:text-purple-100"/>
            </a>
            <a
              href="mailto:akanjioluwatobishadrach@yahoo.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon fontSize="large" className="text-purple-200 hover:text-purple-100"/>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
