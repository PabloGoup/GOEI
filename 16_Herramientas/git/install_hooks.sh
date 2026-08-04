#!/bin/sh
set -eu

root=$(git rev-parse --show-toplevel)
git -C "$root" config core.hooksPath .githooks
chmod +x "$root/.githooks/pre-commit" "$root/.githooks/pre-push"
printf '%s\n' 'GOEI Git hooks enabled: .githooks'
