/*
 * @Author: jessLiu
 */
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // 打包文件
    filename: "index.js",
    // 向外暴露的对象的名称
    library: "whutils",
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: "umd",
  },
};
