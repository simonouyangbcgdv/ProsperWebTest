const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const getArticles = makeRequest(
    graphql,
    `
  {
    allDirectusArticle {
      edges {
        node {
          slug
        }
      }
    }
  }
  `
  ).then(result => {
    // Create pages for each article.
    result.data.allDirectusArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/article.tsx`),
        context: {
          slug: node.slug,
        },
      });
    });
  });

  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([getArticles]);
};
