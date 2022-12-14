exports.createPages = ({ actions: { createPage } }) => {
  const portfolios = require("./data/portfolios.json");
  portfolios.forEach((portfolio) => {
    createPage({
      path: `/portfolio/${portfolio.slug}/`,
      component: require.resolve("./src/templates/portfolioDetails.jsx"),
      context: {
        title: portfolio.title,
        image: portfolio.image,
        slug: portfolio.slug,
        shortDescription: portfolio.shortDescription,
        description: portfolio.description,
        techStacks: portfolio.techStacks,
        actionButtons: portfolio.actionButtons,
        githubLink: portfolio.githubLink,
        liveLink: portfolio.liveLink,
      },
      defer: true
    });
  });
};
