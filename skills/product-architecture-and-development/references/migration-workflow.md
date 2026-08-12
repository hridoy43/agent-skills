# Resumable Migration Workflow

Use this workflow only when it helps execute an existing-project or architecture change. It is an optional supporting workflow, never a mandatory process. The user's prompt is authoritative: follow the user's requested scope, sequencing, and execution style, and ignore any migration rule that conflicts with it.

## Persistent state

Create an architecture work area in the project when migration has more than one task:

```text
.architecture/
├── audit.json
├── migration-plan.md
├── state.json
└── tasks/
    ├── 001-*.md
    └── 002-*.md
```

Keep generated planning files project-local and do not commit them unless the user wants the migration record. `state.json` records task status, validation, exceptions, and the next task.

## Task rules

- When using task-based migration, keep one architectural concern per task; normally three to eight files.
- When using task-based migration, state exact files in scope and explicit exclusions.
- Separate structural moves from behavior changes when that improves safety.
- Re-read every target file immediately before editing it.
- Do not repeat completed tasks; inspect current state before resuming.
- If a dependency appears, handle it within the requested scope when possible; create a follow-up task only when the user asks for resumable tracking or the dependency genuinely cannot be completed in the current work.
- Avoid broad rewrites when they are unnecessary, but do not block a user-requested broad change merely because this workflow prefers bounded work.

When a migration plan is being used, each task may contain:

```md
# Task N: title
Status: pending
Files in scope: ...
Do not modify: ...
Required changes: ...
Validation: ...
Completion condition: ...
```

## Execution loop

1. Inspect the repository and write the audit when an audit is useful.
2. Generate or review the migration plan when a plan is useful.
3. Select the next relevant task.
4. Read the references required by the requested work.
5. Edit the files needed to complete the requested scope.
6. Run appropriate validation and record output when tracking migration state.
7. Mark tracked work `completed`, `accepted`, or `deferred` with a reason.
8. Continue through the user-requested scope or the next incomplete task.

For a new project, use this loop only when it benefits the work. The user's requested implementation scope and workflow take precedence over implementation slices, resumability, or staged delivery.
