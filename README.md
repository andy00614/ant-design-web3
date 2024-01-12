<div align="center">

<h1 align="center">Level Link Library</h1>

<b>The Level Link Web3 component toolkit</b>

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

## Tech Stack

### [Wagmi: Blockchain Frontend Library](<[链接地址](https://1.x.wagmi.sh/)>)

Wagmi 是一个用于区块链前端开发的库。

### [Viem: Blockchain Communication Library](<[链接地址](https://viem.sh/)>)

Viem 是一个与区块链沟通的库，类似于 ethers，但与 WAGMI 高度集成。

#### [Ant Design Web3: AntD DApp Component Library](<[链接地址](https://web3.ant.design/)>)

AntD Web3 是基于 Ant Design 的 DApp 组件库。

## Installation

```shell
npm i antd @ant-design/web3 @ant-design/web3-wagmi @levellink/wallet wagmi --save
```

## 目录结构

```
pnpm-workspace（单体仓库）
│
├── packages
│   ├── assets
│   │   └── 静态资源库，例如节点配置信息
│   │
│   ├── common
│   │   └── 通用工具，如配置 Web3 提供者，数值转换等
│   │
│   ├── icon
│   │   └── 图标集合
│   │
│   ├── ui
│   │   └── 市场、官网等公共 UI 组件库
│   │
│   ├── llwallet
│   │   └── LL 在线钱包提供者，包括加密和状态同步方法
│   │
│   ├── wagmi
│   │   └── Ant Design DApp 提供者
│   │
│   └── web3
│       └── Ant Design DApp 的 UI 组件

```

## Development

我们在dev分之开发，因此切换到 dev 分支，main 分支是 antd web3 的源码，我们fork antd web3 的源码进行二次开发，不影响它的功能，它有更新我们可以直接拉取他们的代码

```bash
$ git clone http://whyindian.ddns.net:222/gitlab/boyindia/ll-library.git
$ git checkout dev
$ pnpm i
$ pnpm dev:lib // 所以monorepo下的报处于调试状态
$ pnpm dev:demo // 打开一个新的终端，进行调试
```
