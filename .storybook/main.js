const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async config => {
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];
    // typescript support, tree shaking ant design
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          'babel-plugin-remove-graphql-queries',
        ],
      },
    });
    // propTypes doc
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
