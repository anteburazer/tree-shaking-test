const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  // devtool: getDevTool(env),
  devtool: false,
  stats: {
    modulesSort: 'size',
    assets: true,
    assetsSort: 'size'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    // Create an HTML page to serve our webpack bundle (dist/main.js)
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    // new webpack.DefinePlugin(getEnvKeys(env)),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          }
        },
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  }
});
