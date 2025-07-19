purgeCache('npm/tsgo-wasm/package.json')
purgeCache('npm/tsgo-wasm/tsgo.wasm')

async function purgeCache(path: string) {
  const resp: any = await fetch(`https://purge.jsdelivr.net/${path}`).then(
    (res) => res.json(),
  )
  if (resp.status !== 'finished') {
    console.error(`Failed to purge: ${path} - ${resp}`)
  } else {
    console.log(`Purged: ${path}`)
  }
}
