import React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/site.css";
import Layout from "../components/layout";
import { portfolios } from "../../data/portfolioData";

const PortfolioPage = () => {
  return (
    <Layout>
      <h1 className="merienda text-4xl text-purple-900">Portfolio</h1>
      <h4 className="mt-1 font-semibold">
        Here is my portfolio showing some of my works.
      </h4>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolios.map((portfolio) => (
            <div
              className="h-64 bg-purple-500"
              key={`${portfolio.slug}-${portfolio.title}`}
            >
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-full"
              />
              <div className="transition ease-in-out duration-75 bg-purple-900 bg-opacity-25 hover:bg-opacity-70 text-white md:text-black hover:text-white w-full h-full relative -mt-64">
                <Link
                  className="w-full h-full mx-auto font-semibold flex justify-center"
                  to={portfolio.slug}
                >
                  <p className="mt-32 text-center">
                    <span className=" p-2 rounded-lg bg-purple-900 bg-opacity-50 md:bg-opacity-0 md:rounded-none md:bg-transparent md:p-0">
                      {portfolio.title} <span className="fa fa-link"></span>
                    </span>
                    <ul className="space-x-4 mt-1 px-2 rounded-md font-medium bg-blue-900 bg-opacity-50 md:bg-opacity-0 md:rounded-none md:bg-transparent">
                      {portfolio.techStacks.map((stack) => (
                        <li
                          key={`${portfolio.slug}-${stack}`}
                          className="inline"
                        >
                          {stack}
                        </li>
                      ))}
                    </ul>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
