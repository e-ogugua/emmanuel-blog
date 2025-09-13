#!/bin/bash
set -e

# Install pnpm if not present
if ! command -v pnpm &> /dev/null; then
  npm install -g pnpm@9
fi

# Install dependencies without frozen lockfile in CI
if [ -n "$VERCEL" ]; then
  pnpm install --no-frozen-lockfile
else
  pnpm install --frozen-lockfile
fi

# Build the project
pnpm run build
