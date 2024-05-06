// build/webpack.config.js
// node.js里面自带的操作路径的模块
// 引入Node.js内置的path模块，用于处理文件路径
const path = require("path");
// 引入htmlWebpackPlugin自动导入js文件
// 它可以自动生成HTML文件，并自动引入打包后的JavaScript文件。
const htmlWebpackPlugin = require("html-webpack-plugin");
// 引入vue-loader插件
// 这是处理.vue文件所必需的
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// 拷贝静态资源
// 它用于将静态文件复制到打包输出的目录
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // webpack打包的入口文件
  // 告诉webpack从main.js开始打包
  entry: {
    main: path.resolve(__dirname, "../examples/main.js"),
  },
  // webpack打包的输出相关的额配置
  output: {
    // 打包过后的文件的输出的路径
    path: path.resolve(__dirname, "../dist"),
    // 打包后生成的js文件，带hash值来保证文件的唯一性
    filename: "js/[name].[hash:4].js",
    // 生成的chunk文件名
    chunkFilename: "js/[name].[hash:4].js",
    // 资源的引用路径（这个跟你打包上线的配置有关系）
    publicPath: "/",
  },
  // 配置打包输出相关的设置，包括输出路径、文件名及其公共路径。
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // 来转译JavaScript代码，使用插件来支持动态import语法
              // 使用vue官方的懒加载语法并结合babel需使用这个插件，不然会报错
              plugins: ["@babel/plugin-syntax-dynamic-import"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        // 这儿组件库的css一般都是处理过的，我们使用一般的loader即可
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5120, // 当文件大于5kb时走file-loader相关的配置
              esModule: false, // 这个参数要设置成false,不然生成图片的路径时[object Module]
              fallback: "file-loader", // 当文件大于5kb时走file-loader相关的配置
              name: "images/[name].[hash:4].[ext]", // 生成的路径和文件名
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5120,
              esModule: false,
              fallback: "file-loader",
              name: "media/[name].[hash:4].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5120,
              esModule: false,
              fallback: "file-loader",
              name: "fonts/[name].[hash:4].[ext]",
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            //编译组件的模板时不要保留空白字符。可以减少输出文件的大小，因为所有不必要的空白都被去除了。它可以避免因为模板中的空白导致的CSS布局问题。
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      // 指定模板
      template: path.resolve(__dirname, "../public/index.html"),
      // 输出的文件
      filename: path.resolve(__dirname, "../dist/index.html"),
    }),
    new VueLoaderPlugin(),
    // 拷贝静态资源
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../public"),
        to: path.resolve(__dirname, "../dist"),
      },
    ]),
  ],
  resolve: {
    alias: {
      // 写了这句，我们可以这样写代码 import Vue from 'vue'
      vue$: "vue/dist/vue.runtime.esm.js",
      // 写了这句，省去到处找路径定位到src的麻烦
      "@": path.resolve(__dirname, "../examples"),
      UI: path.resolve(__dirname, "../packages/components"),
    },
    // 添加一个 resolve.extensions 属性，方便我们引入依赖或者文件的时候可以省略后缀
    extensions: ["*", ".js", ".vue"],
  },
};
