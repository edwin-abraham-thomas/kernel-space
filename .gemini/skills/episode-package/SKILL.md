---
name: episode-package
description: 'Package a kernel_space episode for execution. Trigger on mentions of: package episode, align script, handoff, pre-record pass. Use for aligning script.md, production.md, and status.md; sharpening overlays and visual beats; listing dependencies; and making the episode ready for recording or editing.'
---

# Episode Package

Use this skill near the handoff points: before recording, before editing, or when the episode files have drifted apart.

## When to Use
- `script.md` and `production.md` no longer match cleanly
- The episode needs explicit overlays, assets, or screen-recording tasks
- `status.md` is stale or missing useful blocker notes
- Prompts, guides, or artifact manifests are missing or stale
- The user wants a pre-record or pre-edit readiness pass

## Procedure
1. Read `_project/project-doc.md` first, then the target `script.md`, `production.md`, `status.md`, `prompts.md`, `guide.md`, and `artifacts.md` together.
2. Compare the files using the package checklist (if available in references).
3. Tighten `production.md` where visuals, dependencies, or positioning are underspecified.
4. If Remotion is part of the episode, make sure `guide.md` explains which sections of `production.md` drive the visuals and which required files the build depends on.
5. Make sure prompt decisions, execution notes, render commands, and artifact paths are documented in the right episode-local files.
6. Update `status.md` so it reflects the real state of the episode.
7. Call out anything that still blocks recording or editing.

## Output
- Better-aligned episode files
- A clearer dependency list for recording and edit prep
- Episode-local prompts, guides, and artifact docs that match the current state
- Explicit blockers instead of hidden assumptions
