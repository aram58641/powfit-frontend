#!/usr/bin/env bash

# -----------------------------------------------------
# init script
cd "$(dirname "$0")/../../" || exit 1

if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

source "$(dirname "$0")/../includes.sh"

BUILD_LOG_FILE="$ROOT_DIR/build-log.log"
if [[ -f "$BUILD_LOG_FILE" ]]; then
  rm "$BUILD_LOG_FILE" > /dev/null 2>&1
fi

trap on_process_kill SIGINT

# -----------------------------------------------------
# start
clear

echo ""
echo -e " \033[0;32m===================================================================\033[0m"
echo -e " \033[0;32m======               DEPLOYMENT SCRIPT STARTED               ======\033[0m"
echo -e " \033[0;32m===================================================================\033[0m"
echo ""

# -----------------------------------------------------
# check .env configuration
execute_action "$BUILD_LOG_FILE" \
  "npm run tool:app:env-check" \
  "Checking .env configration" \
  ".env file was not configured properly or it missing."

# -----------------------------------------------------
# check node modules installed
if [[ ! -d "node_modules" ]]; then
  execute_action "$BUILD_LOG_FILE" \
    "npm install" \
    "Installing required dependencies" \
    "Failed to install app dependecies."
else
  execute_action "$BUILD_LOG_FILE" \
    "npm run tool:sum-hash:check" \
    "Installing required dependency updates" \
    "Failed to install app dependency updates."
fi

# -----------------------------------------------------
# build production
execute_action "$BUILD_LOG_FILE" \
  "NODE_ENV=production '$APP_NPM_CLI_BIN/next' build" \
  "Building pruduction release" \
  "Failed to build application."

# -----------------------------------------------------
# replace release folder
execute_action "$BUILD_LOG_FILE" \
  "rm -rf .release && mkdir -p .release && mv .next .release/.next" \
  "Replacing release artifacts with new one" \
  "Failed to replace release artifacts."

# -----------------------------------------------------
# stopping previous pm2 app
execute_action "$BUILD_LOG_FILE" \
  "pm2 delete ecosystem.config.js" \
  "Stopping previous PM2 app" \
  "Failed to stop PM2 app."

# -----------------------------------------------------
# starting previous pm2 app
execute_action "$BUILD_LOG_FILE" \
  "pm2 start ecosystem.config.js" \
  "Starting new PM2 app" \
  "Failed start PM2 app."

# -----------------------------------------------------
# saving pm2 state
execute_action "$BUILD_LOG_FILE" \
  "pm2 save()" \
  "Saving PM2 state" \
  "Failed save PM2 state."

# -----------------------------------------------------
# clearing cloudflare cache
if [[ ! -d "node_modules" ]]; then
  execute_action "$BUILD_LOG_FILE" \
    "npm run tool:app:purge-cache" \
    "Clearing cloudflare cache" \
    "Failed to clear cloudflare cache."
fi
