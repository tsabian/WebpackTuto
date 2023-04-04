import * as path from "path";
import * as webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import DotEnvPlugin from 'dotenv-webpack'; // https://www.npmjs.com/package/dotenv-webpack
import HtmlWebPackPlugin from 'html-webpack-plugin'; // https://www.npmjs.com/package/html-webpack-plugin
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // https://www.npmjs.com/package/clean-webpack-plugin

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_module/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: "file-loader",
        exclude: /node_module/,
        options: {
          name: 'assets/[contenthash].[ext]'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_module/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_module/,
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
        exclude: /node_module/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
        exclude: /node_module/
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    }),
    new webpack.DefinePlugin({
      VERS: JSON.stringify('1.0.0.0'),
    }),
    new DotEnvPlugin(),
    new HtmlWebPackPlugin()
  ]
};

export default config;
