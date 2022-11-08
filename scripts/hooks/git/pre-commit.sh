#!/usr/bin/env bash

# -----------------------------------------------------
# init script
cd "$(dirname "$0")/../../../" || exit 1

if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

source "$(dirname "$0")/../../includes.sh"

# -----------------------------------------------------
# format code
npm run tool:format:code
exist_with_message $? "Failed to format code."

# -----------------------------------------------------
# clear old lint cache
npm run tool:lint:uncache
exist_with_message $? "Failed to clear eslint cache."

# -----------------------------------------------------
# execute lint
npm run tool:lint:execute:prod
exist_with_message $? "Linting failed for production mode."

# -----------------------------------------------------
# format scripts
npm run tool:format:scripts
exist_with_message $? "Failed to format scripts."

# -----------------------------------------------------
# add re-formatted files to git
git add .
