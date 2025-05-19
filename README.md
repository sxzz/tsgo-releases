# Unofficial TypeScript 7 (native) Releases

This repository contains **unofficial** binary distribution of [TypeScript 7 (native port)](https://github.com/microsoft/typescript-go),
built daily using GitHub Actions.
You can find the binary files at [Releases](https://github.com/sxzz/tsgo-releases/releases).

Read more about the TypeScript 7 [here](https://devblogs.microsoft.com/typescript/typescript-native-port/)!

> [!WARNING]
> This is **NOT** an official distribution from the TypeScript official team.

## NPM

The package is available on npm as `tsgo-dev`.

```bash
npm install -g tsgo-dev
tsgo -v
# Version 7.0.0-dev.20250519
```

## WASM

The WASM version is available on npm as `tsgo-wasm`. Use this version if your operating system or architecture is not supported by the native build, or if you need to run it in a browser.

```bash
npm install -g tsgo-wasm

tsgo-wasm -v
# Version 7.0.0-dev.20250519
```

## 🧯 Safety

The binaries are built through GitHub Actions using source code directly from the official TypeScript repository.
Our automated build process preserves the code integrity without any modifications.
The complete build workflow is transparent and open-source, available for inspection [here](./.github/workflows/release.yml).

We understand security concerns regarding unofficial binaries.
For additional peace of mind, you're welcome to fork this repository and execute the build workflow yourself.

## Credits

Thanks to Claude 3.7 Sonnet for helping me build the GitHub Actions workflow.

## License

The TypeScript project and this project both are licensed under the [Apache License 2.0](./LICENSE).
