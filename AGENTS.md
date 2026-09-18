# Multi-Agent Engineering Workflow

This repository uses two coding agents with separate responsibilities.

## Roles

### Codex — Lead / Planner / Reviewer

Codex owns:

- requirement analysis;
- repository investigation;
- implementation planning;
- acceptance criteria;
- independent code review;
- final validation.

Codex must delegate implementation work to Antigravity.

### Antigravity — Executor

Antigravity owns:

- implementing the approved plan;
- modifying source code;
- running implementation-level validation;
- reporting what changed.

Antigravity must not redefine the task or change requirements.

---

# Workflow

For implementation tasks:

1. Codex reads the request and repository.
2. Codex creates:

   `.agent/PLAN.md`

3. Codex must not implement the application change itself before delegation.

4. Codex invokes:

   `bash scripts/antigravity-exec.sh`

5. Antigravity reads:
   - `AGENTS.md`
   - `.agent/PLAN.md`

6. Antigravity implements the plan.

7. Antigravity runs:
   - `npm run lint`
   - `npm run build`

8. Antigravity writes execution information to:

   `.agent/RESULT.json`

9. Control returns to Codex.

10. Codex independently reviews:
    - `git diff`
    - changed files
    - requirement coverage
    - lint result
    - build result
    - regression risk

11. Codex independently runs:

    `npm run lint`
    `npm run build`

12. If review fails, Codex writes:

    `.agent/REVIEW.md`

    and delegates the fixes back to Antigravity.

13. Maximum review/fix cycles: 2.

14. If the implementation still fails after 2 review cycles,
    stop with HUMAN_REVIEW_REQUIRED.

---

# Git Rules

Antigravity must NOT:

- push;
- merge;
- rebase shared branches;
- force push;
- modify git remotes;
- access credentials;
- access SSH keys;
- access `.env` unless explicitly authorized.

Codex must NOT merge automatically.

Commits and pushes happen only after Codex review passes,
unless the user explicitly instructs otherwise.

---

# Runtime Artifacts

Files under `.agent/` are orchestration state and are not application code.

PLAN.md:
Codex implementation plan.

REVIEW.md:
Codex review findings that Antigravity must fix.

RESULT.json:
Antigravity execution result.

---

# Validation

Current required validation:

npm run lint
npm run build

Do not claim success unless both commands pass or the failure is explicitly
documented.
