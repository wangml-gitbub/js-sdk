# Space sdk

## 技术

内置 Webpack + ES6 + Babel

## 过程记录

1、创建 webpack-demo 文件夹， 安装 webpack、 webpack-cli、babel

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
npm install -D babel-loader @babel/core @babel/preset-env webpack
npm install --save-dev babel-loader
touch .babelrc
```

2、调整 package.json 文件，以便确保我们安装包是 private(私有的)，并且移除 main 入口

```json
{
  "name": "js-sdk",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.21.8",
    "@babel/preset-env": "^7.21.5",
    "babel-loader": "^9.1.2",
    "webpack": "^5.82.0",
    "webpack-cli": "^5.1.1"
  },
  "dependencies": {
    "axios": "^1.4.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
```

3、创建以下目录结构、文件和内容

```bash
 webpack-demo
  |- /node_modules
  |- package.json
  |- package-lock.json
  |- webpack.config.js
  |- .babelrc
  |- .gitignore
  |- /src
    |- index.js
```

4、webpack.config.js 内容

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'Space',
    libraryTarget: 'umd'
  },
  plugins: [ new webpack.SourceMapDevToolPlugin({})],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
}
```

5、编辑 .babelrc 内容

```bash
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

6、打包编译

```bash
npx webpack --config webpack.config.js

或者

npm run build
```

7、发包（npm）

```bash
nrm use npm
npm login
npm publish
```
