## 开发

本仓库引入了我们LL钱包的核心开发库，可以作为我们调试环境，来测试我们的库以及最小化运行我们的功能

## 开发参考

- https://react.dev/learn
- https://1.x.wagmi.sh/react/getting-started
- https://viem.sh/

### 开发命令

1. 退回到我们的根目录
2. 执行 https://whyindian.ddns.net/gitlab/boyindia/ll-library#development
3. 完成上述执行之后，运行 `pnpm dev:demo`
4. 开始开发

## 项目目录

```
├── App.tsx 入口文件
│   ├── components
│   │   └── GGC 官网中
│   │
```

## TODO

- [ ] 支持线上线下钱包统一登录 @boyinda
- [x] 抽离 Vault 中与合约交互的功能方法 @boyindia
- [x] 抽离 Powerups(Mint) 中与合约交互的功能方法 @boyindia @mundo
- [x] 切换区块链的时候动态改变合约地址 @boyindia
- [x] 获取账户ggc余额 @boyindia
- [x] useAccount的api统一 @boyindia
- [x] 处理monorepo的依赖，以及打包的问题，引入第三方引用 @boyindia
