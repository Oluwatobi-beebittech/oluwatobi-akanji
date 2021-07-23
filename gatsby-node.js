exports.createPages = ({ actions: { createPage } }) => {
  const portfolios = require("./data/portfolios.json");
  portfolios.forEach((portfolio) => {
    createPage({
      path: `/portfolio/${portfolio.slug}/`,
      component: require.resolve("./src/templates/portfolioDetails.js"),
      context: {
        title: portfolio.title,
        image: portfolio.image,
        shortDescription: portfolio.shortDescription,
        description: portfolio.description,
        techStack: portfolio.techStack,
        githubLink: portfolio.githubLink,
        liveLink: portfolio.liveLink,
      },
    });
  });
};
