import React from "react";
import { Link } from "gatsby";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Button, POSITION } from "../components/button";
import "../styles/site.css";

const PortfolioDetailsPage = ({ pageContext }) => {
  const defaultButtonConfig = {
    [POSITION.LEFT]: {
      iconName: "fab fa-github",
      name: "View on Github",
    },
    [POSITION.RIGHT]: {
      iconName: "fa fa-play-circle",
      name: "View Live",
    },
  };
  const {
    actionButtons,
    description,
    shortDescription,
    slug,
    image,
    techStacks,
    title,
  } = pageContext;

  return (
    <Layout>
      <h1 className="merienda text-4xl text-purple-900">{title}</h1>
      <h4 className="mt-1 font-semibold">{shortDescription}</h4>
      <div className="my-10 space-y-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/portfolio/" className="text-purple-900 font-medium">
            Portfolio
          </Link>
          <Link to={`/portfolio/${slug}/`} className="text-black font-medium">
            {pageContext.title}
          </Link>
        </Breadcrumbs>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center">
            <img className="my-auto" alt={`${title} Demo`} src={image} />
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-2xl text-black">{title}</h4>
            <p>{description}</p>
            <ul className="inline-flex list-disc list-inside space-x-4 text-gray-600 mt-2">
              {techStacks.map((tech) => (
                <li key={`${tech}-${title}`}>{tech}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actionButtons.map((button, index) => {
                const buttonPosition =
                  (index + 1) % 2 === 0 ? POSITION.RIGHT : POSITION.LEFT;

                if (button.useDefaultButtonConfig) {
                  const { iconName, name } =
                    defaultButtonConfig[buttonPosition];
                  return (
                    <Button
                      key={name}
                      isExternalLink
                      link={button.link}
                      position={buttonPosition}
                      iconName={iconName}
                      name={name}
                    />
                  );
                }

                const {
                  isExternalLink,
                  isDownloadLink,
                  isButtonDisabled,
                  downloadName,
                  iconName,
                  name,
                  link,
                } = button;

                return (
                  <Button
                    key={name}
                    downloadName={downloadName}
                    iconName={iconName}
                    isDownloadLink={Boolean(isDownloadLink)}
                    isExternalLink={Boolean(isExternalLink)}
                    link={link}
                    name={name}
                    position={buttonPosition}
                    disabled={isButtonDisabled}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDetailsPage;

export const Head = ({ pageContext, location }) => (
  <Seo
    description={pageContext.description}
    title={pageContext.title}
    pathname={location.pathname}
    imageUrl={pageContext?.seoImage ?? pageContext.image}
  />
);
