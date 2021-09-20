/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mode: 'production',
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
    bundle: true,
    minify: true,
    preload: false,
    sourcemap: true,
    target: 'es2017'
  },

  knownEntrypoints: [
    '@spectrum-css/vars/dist',
    '@spectrum-css/page/dist',
    '@spectrum-css/typography/dist',
    '@spectrum-css/icon/dist',
    '@spectrum-css/site/dist',
    '@spectrum-css/actionbutton/dist',
    '@spectrum-css/actiongroup/dist/',
    '@spectrum-css/progressbar/dist/',
    '@spectrum-css/steplist/dist/',
    '@spectrum-css/table/dist/',
    '@prismicio/client/types/'
  ],

  env: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {}
}
