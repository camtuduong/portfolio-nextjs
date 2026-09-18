#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"

cd "$ROOT"

if [ ! -f ".agent/PLAN.md" ]; then
  echo "ERROR: .agent/PLAN.md does not exist."
  exit 1
fi

mkdir -p .agent

echo "==> Starting Antigravity executor"

agy \
  --agent codex-executor \
  --sandbox \
  --output-format json \
  --print-timeout 30m \
  -p "
ROLE=EXECUTOR

Read:
- AGENTS.md
- .agent/PLAN.md

If .agent/REVIEW.md exists, also read it and treat it as Codex review feedback.

Implement the approved plan in this repository.

Do not push or merge anything.

Run the required validation defined in AGENTS.md.

At completion, summarize:
- files changed;
- implementation completed;
- validation executed;
- validation results;
- unresolved issues.
" > .agent/RESULT.json

echo
echo "==> Antigravity finished"
echo
echo "Changed files:"
git status --short

echo
echo "Diff:"
git diff --stat