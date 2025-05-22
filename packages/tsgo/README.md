# Unofficial TypeScript Go

This package contains **unofficial** distribution of [TypeScript 7 (native port)](https://github.com/microsoft/typescript-go),
built daily using GitHub Actions.

Read more about the TypeScript 7 [here](https://devblogs.microsoft.com/typescript/typescript-native-port/)!

> [!WARNING]
> This is **NOT** an official distribution from the TypeScript official team.

## Usage

```bash
npm install tsgo-dev

npx tsgo-dev -v
# Version 7.0.0-dev.20250519
```

### Programmatic API

```ts
import { getBinaryPath } from 'tsgo-dev/api'
console.log(getBinaryPath())
```

## License

The TypeScript project and this project both are licensed under the [Apache License 2.0](./LICENSE).
