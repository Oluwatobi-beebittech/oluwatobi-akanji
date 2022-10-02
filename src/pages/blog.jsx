import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Seo } from "../components/seo";
import "../styles/site.css";
import Layout from "../components/layout";

const Blog = () => {
  return (
    <Layout>
      <h1 className="merienda text-4xl text-purple-900">Blog</h1>
      <h4 className="mt-1 font-semibold">
        Coming soon...
      </h4>
    </Layout>
  );
};

export default Blog;

export const Head = ({ location }) => (
  <Seo
    description="Blog"
    title="Blog"
    pathname={location.pathname}
  />
);
