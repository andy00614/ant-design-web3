# @levellink/web3

## 0.0.2

### Patch Changes

- - 将两个钱包的chains配置都是用同一个配置变量
  - 统一本地钱包和线上钱包链接按钮的样式
- Updated dependencies
  - @levellink/web3-assets@0.0.2
  - @levellink/web3-common@0.0.2
  - @levellink/web3-icons@0.0.2

## 0.0.1

### Patch Changes

- 测试是否patch更新
- Updated dependencies
  - @levellink/web3-assets@0.0.1
  - @levellink/web3-common@0.0.1
  - @levellink/web3-icons@0.0.1

## 0.0.0

### Patch Changes

- 版本依赖的调整
- Updated dependencies
  - @levellink/web3-assets@0.0.0
  - @levellink/web3-common@0.0.0
  - @levellink/web3-icons@0.0.0

## 0.0.0-alpha-20240116013921

### Patch Changes

- Updated dependencies
  - @levellink/web3-common@0.0.0-alpha-20240116013921
  - @levellink/web3-assets@0.0.0-alpha-20240116013921

## 0.0.0-alpha-20240115151406

### Minor Changes

- test alpha 发布

### Patch Changes

- Updated dependencies
  - @levellink/web3-assets@0.0.0-alpha-20240115151406
  - @levellink/web3-common@0.0.0-alpha-20240115151406
  - @levellink/web3-icons@0.0.0-alpha-20240115151406

## 0.0.0-alpha-20240115150811

### Patch Changes

- test
- Updated dependencies
  - @levellink/web3-assets@0.0.0-alpha-20240115150811
  - @levellink/web3-common@0.0.0-alpha-20240115150811
  - @levellink/web3-icons@0.0.0-alpha-20240115150811

## 0.0.0-alpha-20240115144528

### Minor Changes

- 879548d: feat: Add extendsContextFromParent props for web3-config-provider

### Patch Changes

- ee2159c: add levellink core repo, Made some antd-web3 modifications to adapt to levellink
- e6368f1: fix: unexpected QRCode after disconnect #457
- f93aedf: test:Increase ConnectButton test coverage
- 880d915: type: use ?: instead of undefined
- 9f62728: fix: fix intl for connect-button
- 10d5962: test:Increase connector test coverage
- Updated dependencies [ee2159c]
- Updated dependencies [879548d]
  - @levellink/web3-assets@0.0.0-alpha-20240115144528
  - @levellink/web3-common@0.0.0-alpha-20240115144528

## 1.2.0

### Minor Changes

- e5db9b7: feat: Add UniversalWallet for support TokenPocket and more wallets
- 18def13: intl: Address support intl
- 7778597: feat: Copy address to try a more internationalized interaction.

### Patch Changes

- 2e3af3f: perf: Remove redundant code
- 2e3af3f: perf: Delete variables that are not used in the array structure
- b575468: fix: remove no-unused-vars
- 17ca201: perf: Modify import type
- Updated dependencies [e5db9b7]
- Updated dependencies [8bba386]
- Updated dependencies [18def13]
- Updated dependencies [dc083a3]
- Updated dependencies [64a2de3]
- Updated dependencies [c549a09]
- Updated dependencies [17ca201]
  - @levellink/web3-common@1.2.0
  - @levellink/web3-icons@1.2.0
  - @levellink/web3-assets@1.1.3

## 1.1.2

### Patch Changes

- d6a5339: chore: release 1.1.2 for republish
- Updated dependencies [d6a5339]
  - @levellink/web3-assets@1.1.2
  - @levellink/web3-common@1.1.2
  - @levellink/web3-icons@1.1.2

## 1.1.1

### Patch Changes

- 32f276a: chore: 1.1.1
- Updated dependencies [32f276a]
  - @levellink/web3-assets@1.1.1
  - @levellink/web3-common@1.1.1
  - @levellink/web3-icons@1.1.1

## 1.1.0

### Minor Changes

- b3e95c2: feat: support safeheron browser wallet
- 3547f6b: feat: ConnectButton support internationalization

### Patch Changes

- 73e8e32: feat: ConnectModal support Intl
- 69a3597: fix: Improve the package.json information and add a main field to accommodate more projects.
- f5a1b82: refactor: Update deprecated antd Modal props
- 9de319c: feat: NFTCard support intl
- f8dce24: perf: use `??` Instead of `||`
- 13d0207: fix: debug connect-button ui
- Updated dependencies [73e8e32]
- Updated dependencies [69a3597]
- Updated dependencies [b00a377]
- Updated dependencies [b3e95c2]
- Updated dependencies [3547f6b]
- Updated dependencies [9de319c]
  - @levellink/web3-common@1.1.0
  - @levellink/web3-assets@1.1.0
  - @levellink/web3-icons@1.1.0

## 1.0.1

### Patch Changes

- fd51e5d: chore: release @levellink/web3 1.0.1

## 1.0.0

### Major Changes

- f330908: docs: Update new logo and prepare release 1.0.0

### Patch Changes

- 5a86696: fix: add @levellink/web3-assets dep in @levellink/web3
- Updated dependencies [f330908]
  - @levellink/web3-assets@1.0.0
  - @levellink/web3-common@1.0.0
  - @levellink/web3-icons@1.0.0

## 0.3.0

### Minor Changes

- 80b1957: feat: ConnectModal support mode
- a2119bf: refactor: rename hasBrowserExtensionInstalled to hasWalletReady and rename onSelectWallet to onWalletSelected

### Patch Changes

- a86e7c6: fix: qrcode style bug in simple ConnectModal
- caa86c4: fix: Get wallet dowload bug
- bf23a50: fix: ConnectModal info style bug
- d319842: fix: use antd Modal design token
- 42b7ebe: fix: ConnectModal button height, use antd large button
- e9f8fd4: fix: Get wallet button not work in ConnectModal panel mode
- 7bae140: fix: ConnectButton text color bug
- ab50e5a: fix: ConnectModal QrCode link style
- 5dbecd5: fix: NFTCard action button click not work
- Updated dependencies [a2119bf]
  - @levellink/web3-common@0.2.0

## 0.2.0

### Minor Changes

- 606136b: Avatar is displayed in connect button component

### Patch Changes

- c57eed3: feat: export ConnectModal.ModalPanel for user custom
- 2d7ae4f: refactor: auto config wagmi provider chains
- 0df085f: feat: Add and update circle icons
- 1639b80: feat: connect modal build-in guide
- cb5d1eb: fix: Should not show Disconnect and Copy Address action in dropdown menu when not connected
- d3e5988: feat: add link for wallet qrcode for support connect in mobile
- 96837b3: fix: NFTCard ETH icon style detail
- a2d17cd: feat: optimize connect-modal close icon style
- c508982: feat: optimize connect modal style
- 3fbd1eb: fix: Connect trigger onDisconnectClick type bug
- e6a30be: feat: browser link support get chain icon from provider
- 1d2bb80: feat: New hook useConnction ⭐
- 39782e4: feat: ethereum adapter support show balance
- 78b9282: feat: New component CryptoPrice 🚀
- fe42780: fix: chain icon size in avatar
- c15bfdf: feat: BrowserLink support get url from chain in @levellink/web3-assets
- ee9754a: feat: NFTCard show Skeleton when request metadata
- bf5ec8e: feat: ConnectButton support balance
- Updated dependencies [2d7ae4f]
- Updated dependencies [0df085f]
- Updated dependencies [9bac342]
- Updated dependencies [3fbd1eb]
- Updated dependencies [39782e4]
- Updated dependencies [c15bfdf]
  - @levellink/web3-common@0.1.1
  - @levellink/web3-icons@0.2.0

## 0.1.0

### Patch Changes

- Release new alpha version
- Updated dependencies
  - @levellink/web3-common@0.1.0
  - @levellink/web3-icons@0.1.0

## 0.1.0-alpha.1

### Patch Changes

- First alpha version.
- Updated dependencies
  - @levellink/web3-common@0.1.0-alpha.1
  - @levellink/web3-icons@0.1.0-alpha.1
