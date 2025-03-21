#!/bin/bash

DATE=$(date +%Y%m%d)
# Only works on Linux
sed -i "s/7\.0\.0-dev/7.0.0-dev.$DATE/g" tsgo/internal/core/version.go
