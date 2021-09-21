/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mode: 'development',
  root: './',
  entry: './src/index.html',

  mount: {
    src: '/',
    public: '/public'
  },

  exclude: ['**/node_modules/**/*'],

  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-typescript'
  ],

  resolve: {
    input: ['.sass', '.scss', '.ts', '.tsx'],
    output: ['.css', '.js']
  },

  optimize: {
    bundle: false,
    minify: false,
    preload: true,
    sourcemap: true,
    target: 'es2017'
  },

  knownEntrypoints: [],
  env: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {}
}
