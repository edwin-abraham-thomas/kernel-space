---
name: remotion-build
description: 'Build or document Remotion visuals for a kernel_space episode. Use when turning production.md beats, guide.md execution notes, and artifacts.md output paths into reusable compositions, render commands, and episode-local build artifacts.'
argument-hint: 'Target episode folder, the visual slice to build, and whether you want planning, implementation, or render packaging'
---

# Remotion Build

Use this skill when an episode needs actual Remotion work rather than just visual planning.

## When to Use
- `production.md` already describes visual beats and you want to implement them in Remotion
- An episode needs branded intro/outro visuals, title cards, data-motion segments, or reusable overlays
- The user wants a buildable Remotion pass with documented commands and output paths
- `guide.md` or `artifacts.md` is missing the source mapping needed to reproduce visuals later

## Required Inputs
- `_project/project-doc.md` for brand, audience, and editorial context
- Episode `production.md` as the visual source of truth
- Episode `guide.md` for execution notes and any capture dependencies
- Episode `artifacts.md` for composition IDs, commands, and output paths
- Episode `script.md` when timing or phrase emphasis affects the animation

## Procedure
1. Read `_project/project-doc.md` first.
2. Read the target episode's `production.md`, `guide.md`, and `artifacts.md`.
3. Pull the Remotion build inputs from `production.md`:
   - beat timeline
   - visual direction
   - on-screen text
   - emphasis words
   - dependencies
   - screen recording or demo requirements
4. Decide what belongs in Remotion versus what should stay as captured footage or simple edit overlays.
5. If implementing, update the Remotion codebase with reusable components or compositions.
6. Record in `guide.md` which `production.md` sections the build is based on and what supporting files are required.
7. Record in `artifacts.md` the composition IDs, commands, output paths, and current artifact state.
8. Keep episode-specific outputs in that episode's `build/` directory.
9. Validate the build with the narrowest meaningful command: lint/check, still render, then full render when needed.

## Output
- A clearer Remotion build plan or implemented Remotion visuals
- Updated `guide.md` documenting the source sections and required files
- Updated `artifacts.md` documenting render commands and output paths
- Episode-local outputs under `build/`

## Rules
- Do not invent visual beats that contradict `production.md`
- Do not hide render commands in chat only; write them to `artifacts.md`
- Do not place episode-specific outputs in shared root folders
- Prefer reusable Remotion components over one-off hardcoded motion when the same motif may recur