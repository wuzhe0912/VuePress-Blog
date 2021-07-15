---
title: Webpack(01)：Init Project
date: 2020-07-03 12:12:05
categories: 
 - Module bundlers
tags:
 - Webpack
---
記錄當不使用框架提供的 cli 工具時，如何使用 webpack 構建專案?
<!--more-->
## init project
``` sh
mkdir project-name

cd project-name

yarn init
# or
npm init
```

### 安裝 webpack-cli
``` sh
yarn add webpack webpack-cli --dev

touch webpack.config.js
```

## 初步結構
``` sh
|-- README.md
|-- package.json
|-- src
    |-- index.js
|-- webpack.config.js
```
webpack.config.js 的命名是官方預設的名稱，所以這邊就遵循相同的命名方式，內部寫法是依照 NodeJS 的格式書寫：
``` js
module.exports = {
  entry: './src/index.js'
}
```
先將 src/index.js 作為入口。