# Resumable migration workflow

Optional; the user's requested scope and sequencing always win. Use it for multi-task changes that must survive context loss.

`node scripts/create-migration-plan.mjs <project>` creates `.architecture/{migration-plan.md, state.json, tasks/NNN-*.md}` (commit only if the user wants the record). Each task file holds status, files in scope, files not to modify, required changes, validation, and completion condition.

Loop: inspect current state → pick the next incomplete task → re-read target files right before editing → make the change → run the smallest relevant check → mark `completed`, `accepted`, or `deferred` with a reason in `state.json` → continue. One concern per task (usually three to eight files); separate structural moves from behavior changes when safer; never repeat completed tasks. Handle in-scope dependencies directly; create follow-up tasks only when asked or when something truly can't finish now. Never block a user-requested broad change because this workflow prefers small slices.
