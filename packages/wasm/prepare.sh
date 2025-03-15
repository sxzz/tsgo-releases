#!/bin/bash

DATE=$(date +%Y%m%d)
# Only works on Linux
sed -i "s/DATE/$DATE/g" package.json
sed -i "s/COMMIT/$TSGO_COMMIT/g" package.json

cp ../../dist/tsgo-wasm_js_wasm/tsgo.wasm .
