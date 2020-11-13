const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle-[hash].js",
    path: __dirname + "/dist",
  },
  mode: 'production',

  // Enable sourcemaps for debugging webpack's output.
  devtool: "none",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  node: {
    fs: "empty",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,loader: 'url-loader?limit=100000'},
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.worker\.ts$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html'
   })
  ],
  
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "@material-ui/core": "MaterialUI",
    "@material-ui/core/SvgIcon": ["MaterialUI", "SvgIcon"],
    "react-virtualized": "ReactVirtualized",
    "prop-types": "PropTypes",
    "react-dropzone": "reactDropzone",
  }
};
