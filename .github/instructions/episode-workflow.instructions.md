---
description: "Use when editing episode files, packaging a video, documenting prompts, or recording build outputs for kernel_space. Enforces episode-local prompts, guides, artifact manifests, and build output conventions."
applyTo: "scripts/**/*.md, remotion/**/*.md"
---

# Episode Workflow Structure

- Episode-specific material belongs inside that episode folder under `scripts/video-XX-.../`.
- Standard episode documents are:
  - `script.md`
  - `production.md`
  - `status.md`
  - `prompts.md`
  - `guide.md`
  - `artifacts.md`
- Episode-specific generated outputs go in `build/` inside that same episode folder and should be ignored from git.
- `prompts.md` is for reusable AI prompts, role briefs, or prompt variations that materially shaped the episode.
- `guide.md` is for execution notes, capture order, render instructions, and handoff guidance.
- `artifacts.md` is for composition IDs, render commands, output paths, and the current state of generated stills or videos.
- If Remotion is used, `guide.md` should document which sections of `production.md` and which required files drive the visual build.
- If Remotion is used, `artifacts.md` should document composition IDs, commands, and episode-local output paths.
- Shared channel strategy belongs in `_project/` or root docs, not in episode-local files.