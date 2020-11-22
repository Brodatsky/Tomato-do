const path = require("path");
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    filename: "bundle.js",
    path: "path.resolve(__dirname, 'dist')"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: "env",
          },
        },
      },
    ],
  },
  plugins: [],
};
