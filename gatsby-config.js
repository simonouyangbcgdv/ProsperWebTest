/* eslint-disable @typescript-eslint/camelcase */

// load env file, it has tenant and env specific info
const envPath = `.env.${process.env.GATSBY_ACTIVE_TENANT}.${process.env.GATSBY_ACTIVE_ENV}`;
console.log(`Loading env file: ${envPath}`);
const envResult = require('dotenv').config({ path: envPath });
if (envResult.error) {
  console.log(`Error parsing env file: '${envPath}' ...`);
  throw new Error(envResult.error);
}

const tenant = process.env.GATSBY_TENANT;
const tenantConfig = require(`${__dirname}/tenants/${tenant}/gatsby-config.js`);
console.log(tenantConfig);

const baseConfig = {
  pathPrefix: `/venture-prosper/prosper-platform-fe`,
  plugins: [
    {
      // ref: https://github.com/directus/gatsby-source
      resolve: 'gatsby-source-directus-cms',
      options: {
        url: process.env.CMS_URL,
        project: process.env.CMS_PROJECT_NAME,
        auth: {
          email: process.env.CMS_USERNAME,
          password: process.env.CMS_PASSWORD,
        },
        targetStatuses: ['published'],
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-theme-ui`,
  ],
};

const config = { ...baseConfig, ...tenantConfig };

module.exports = config;
