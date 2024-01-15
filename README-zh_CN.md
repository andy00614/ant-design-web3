<div align="center">

<h1 align="center">Level Link Library</h1>

The Level Link Web3 component toolkit

[![CI status][github-action-image]][github-action-url] [![codecov][codecov-image]][codecov-url] [![NPM version][npm-image]][npm-url]

[github-action-image]: https://github.com/ant-design/ant-design-web3/workflows/Test/badge.svg
[github-action-url]: https://github.com/ant-design/ant-design-web3/actions/workflows/test.yml
[codecov-image]: https://img.shields.io/codecov/c/github/ant-design/ant-design-web3/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/ant-design/ant-design-web3/branch/master
[npm-image]: https://img.shields.io/npm/v/@ant-design/web3.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@ant-design/web3
[download-image]: https://img.shields.io/npm/dm/@ant-design/web3.svg?style=flat-square
[download-url]: https://npmjs.org/package/@ant-design/web3
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi
[antd-image]: https://img.shields.io/badge/-Ant%20Design-blue?labelColor=black&logo=antdesign&style=flat-square
[antd-url]: https://ant.design
[twitter-image]: https://img.shields.io/twitter/follow/AntDesignWeb3.svg?label=Ant%20Design%20Web3
[twitter-url]: https://twitter.com/AntDesignWeb3
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@ant-design/web3?style=flat-square

</div>

## Features

- 🎨 基于antd web3组件库二次开发，融合我们线上线下钱包
- 🔌 支持多区块链网络

## Installation

```shell
npm i antd @ant-design/web3 @ant-design/web3-wagmi wagmi --save
```

## 目录结构

pnpm-workspace(monorepo)的项目结构如下：-packages/assets: 静态资源库，如节点信息配置 -packages/common: 一些公共的方法，如配置web3的Provide，转化数值等 -packages/icon: 一些图标 -packages/ui: 市场, 官网等公共组件库 -packages/llwallet: ll线上钱包provider,加密和状态同步的方法库 -packages/wagmi: antd dapp的Provider -packages/web3：antd-Dapp的ui组件

## Development

切换到dev分支，main分之是antd web3的源码，我们基于antd web3的源码进行二次开发,放在dev分支

```bash
$ git clone http://whyindian.ddns.net:222/gitlab/boyindia/ll-library.git
$ git checkout dev
$ pnpm i
$ pnpm dev:lib // hot reload
$ pnpm dev:demo // new terminal
```
