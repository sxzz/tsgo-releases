// @ts-check

import { createRequire } from 'node:module'
import process from 'node:process'

const require = createRequire(import.meta.url)

export function getBinaryPath() {
  let goos, goarch
  switch (process.platform) {
    case 'darwin':
    case 'linux':
      goos = process.platform
      break
    case 'win32':
      goos = 'windows'
      break
    default:
      console.error(`Unsupported platform: ${process.platform}`)
      process.exit(1)
  }

  switch (process.arch) {
    case 'x64':
      goarch = 'amd64'
      break
    case 'arm64':
      goarch = 'arm64'
      break
    default:
      console.error(`Unsupported architecture: ${process.arch}`)
      process.exit(1)
  }

  const bin = require.resolve(`@tsgo-dev/${goos}-${goarch}`)
  return bin
}
