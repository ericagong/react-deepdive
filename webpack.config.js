const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * webpack :: 1, 2를 통해 번들링 된 하나의 파일을 반환.
 * 1. entry에 입력 받은 js 파일들을 module 프로그램의 인풋으로 트랜스파일 수행
 * 2. 트랜스파일 된 파일들을 plugin 프로그램들이 처리하고 하나의 output을 출력.
 * mode : 개발용인지 최종 배포용인지
 * entry : 입력 js 파일
 * output : 어느 위치에 어느 이름의 파일로 번들링 파일을 출력할 것인지
 */
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    compress: true,
    port: 9999,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "2. 간단한 객체 만들어 DOM 객체로 변환하기",
      template: "index.html",
    }),
  ],
};
