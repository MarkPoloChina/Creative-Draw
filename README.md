# CreativeDraw 前端开发标准

## 准备工作

- 安装yarn作为包管理器，以及安装vue-cli4

```shell
npm install yarn
yarn global add @vue/cli
```

- 安装依赖

```shell
cd creative-draw
yarn install
```

## 运行项目

```shell
yarn serve
```

## 跟踪需求

请查看github的issue来跟踪当前工程需求。若完成对应需求，可以在commit message 中附上形如`close #1`来关闭对应issue。

## 项目结构

- api 网络通讯
- assets所有静态资源（含图形、字体等）
- components 组件，视图的构成
- js 其他脚本
- router 路由定义
- scss 全局样式表
- store vuex
- views 直接路由，路由直接视图应该定义在这里，然后再import components里面的组件

## 样式系统

- 全局使用element ui plus
- 统一使用scss
- 如果要把样式穿透到内组件（尤其是自定义element组件时），使用`:deep(css-selector)`
