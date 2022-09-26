module.exports = {
  siteMetadata: {
    author: "Oluwatobi Akanji",
    siteUrl: "https://www.oluwatobiakanji.com",
    title: "Oluwatobi Akanji - Home",
    description: "Oluwatobi Akanji Portfolio Website",
    keywords: "Oluwatobi Akanji, Oluwatobi Shadrach Akanji, Akanji, Oluwatobi, Shadrach, Oluwatobi-beebittech, React, Typescript, Laravel, Software Engineer, Frontend Developer, React Developer, Typescript Developer",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.oluwatobiakanji.com",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
