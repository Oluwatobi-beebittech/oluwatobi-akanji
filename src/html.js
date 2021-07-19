import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
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
        <title>Oluwatobi Akanji</title>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const mobileNavBtn = document.getElementById("mobile-nav-btn");
            const mobileNavBtnIcon = document.getElementById("mobile-nav-btn-icon");
            const mobileNav = document.getElementById("mobile-nav");

            mobileNavBtn.onclick = function(){
              mobileNav.classList.toggle("hidden");
              mobileNavBtnIcon.classList.toggle("fa-bars");
              mobileNavBtnIcon.classList.toggle("fa-times");
              
            };

        `,
        }}
      />
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
