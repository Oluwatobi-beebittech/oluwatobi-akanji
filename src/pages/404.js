import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Not found</title>
      </Helmet>

      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        I couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">
          <span className="p-2 bg-purple-900 text-white hover:bg-purple-100 hover:text-purple-900">
            Go to my homepage
          </span>
        </Link>
        .
      </p>
    </main>
  );
};

export default NotFoundPage;
