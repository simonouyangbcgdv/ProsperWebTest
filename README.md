# Prosper Platform Front End

## Tech Stack

- Language: [TypeScript](https://www.typescriptlang.org/)
- Framework: [Gatsby](https://www.gatsbyjs.org/)
- View: [React](https://reactjs.org/)
- Theme & Style: [theme-ui](https://theme-ui.com/), style guide driven development
  - [Emotion](https://emotion.sh/docs/introduction): a performant and flexible CSS-in-JS library
  - [Styled System](https://styled-system.com/): theme based styling library
  - [Typography.js](https://kyleamathews.github.io/typography.js/): for creating rich typographic styles with a simple, high-level API
- Source control: Git
- Version control: [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
- IDE: VSCode (see below)

## Coding Style guide

- [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)

  - naming conventions for variables and methods
  - comments
  - etc

- TypeScript style guide is driven by eslint rules in this project

- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
  - code structure
  - etc

## Prerequisites

#### Disable Case-Insensitivity in Git

```
git config --global core.ignorecase false
```

#### Node.js, nvm and yarn

- Install node.js with [nvm](https://github.com/creationix/nvm)
- use [node 12](https://nodejs.org/en/about/releases/) (current node LTS version)

#### VSCode Setup

- install [VSCode](https://code.visualstudio.com/)
- install [VSCode command line tool](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)
- install the following extensions from command line

  ```sh
  code --install-extension EditorConfig.EditorConfig \
  --install-extension PeterJausovec.vscode-docker \
  --install-extension ms-kubernetes-tools.vscode-kubernetes-tools \
  --install-extension mikestead.dotenv \
  --install-extension dbaeumer.vscode-eslint \
  --install-extension eamodio.gitlens \
  --install-extension streetsidesoftware.code-spell-checker \
  --install-extension esbenp.prettier-vscode
  --install-extension silvenon.mdx
  ```

## 🚀 Quick start

- make sure you're using node 12 (ex, `nvm use 12`)
- `yarn`
- create .env file (refer to .env.SAMPLE)
- `yarn dev:hsf`

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## About .env

This project supports multi-tenancy by using one repo of source code with multiple .env files.

The .env file is named with the pattern: `.env.TENANT_NAME.ENV_NAME`.

List of tenant names:

- hsf
- tgs
- TODO: add here when we support more tenants

List of environments:

- dev
- staging
- uat
- prod

Example:

- `.env.hsf.dev`
- `.env.hsf.prod`

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── stories
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

- **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

- **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

- **`/stories`**: This directory will contain all of the code related to what you will see on the storybook site. The storybook site serves as a live documentation for the project. The file name convention for the story file is `*.stories.(tsx|mdx)`.

- **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

- **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

- **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

- **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

- **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

- **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## Storybook

[Storybook](https://storybook.js.org/docs/basics/introduction/) is used to provide the documentation for the React components and allows to test the components interactively.

### Running locally

```
$ yarn storybook
```

and open http://localhost:6006 in the browser.

### Build static site

```
$ yarn storybook:build
```

This will generate static files under `storybook-static`. To run the static app locally,

```
$ yarn storybook:start
```

and open http://localhost:8080 in the browser.

## TODO

- Auth
- multi-tenant support
  - layout
  - page template
  - optional: create hsf-theme and prosper-tgs-theme packages for easy override with multiple tenants
# ProsperWebTest
