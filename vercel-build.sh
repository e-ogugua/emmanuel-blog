#!/bin/bash
set -e

# Install pnpm if not present
if ! command -v pnpm &> /dev/null; then
  npm install -g pnpm@9
fi

# Install dependencies
pnpm install --frozen-lockfile

# Build the project
pnpm run build
