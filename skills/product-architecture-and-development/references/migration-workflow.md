# Resumable Migration Workflow

Use this workflow for an existing project or any large architecture change. It is designed for agents with limited context windows.

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

- One architectural concern per task; normally three to eight files.
- State exact files in scope and explicit exclusions.
- Separate structural moves from behavior changes.
- Re-read every target file immediately before editing it.
- Do not repeat completed tasks; inspect current state before resuming.
- If a dependency appears, stop and create a follow-up task.
- Never use a broad rewrite to save context.

Each task contains:

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

1. Inspect the repository and write the audit.
2. Generate or review the migration plan.
3. Select the first incomplete task.
4. Read only the references required by that task.
5. Edit only its in-scope files.
6. Run its validation and record output.
7. Mark it `completed`, `accepted`, or `deferred` with a reason.
8. Continue from the next incomplete task.

For a new project, use the same loop for implementation slices after architecture confirmation. The first slice should be the smallest vertical path through the product, not a speculative folder scaffold.
