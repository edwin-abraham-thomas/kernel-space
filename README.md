# kernel_space

> We tinker, experiment, and break things to truly understand them — building towards production-grade systems with AI, deep over surface level. For working engineers and those who want to become one.

## Quick Links

- 📘 **Full Guide:** [PROJECT_GUIDE.md](PROJECT_GUIDE.md) — Comprehensive documentation
- 🔗 **GitHub:** https://github.com/edwin-abraham-thomas/kernel-space
- 📺 **Scripts:** [scripts/](scripts/) — Video content

## Quick Start

```bash
cd /Users/edwinabrahamthomas/edwinat/kernel-space-|

# Edit a video script
open scripts/video-01-channel-intro/script.md

# After changes
git add .
git commit -m "your message"
git push origin main
```

## Structure

| Folder | Purpose |
|--------|---------|
| `scripts/` | 📹 Video scripts (script.md, production.md, status.md) |
| `_project/` | 📊 Project documents & planning |
| `remotion/` | 🎞️ Motion graphics and branded video builds |
| `notes/` | 📝 General notes |
| `research/` | 🔬 Deep-dive research |
| `assets/` | 🎨 Logos, banners, brand assets |

## Video Scripts Format

Each video folder contains:

```
video-01-channel-intro/
├── script.md       ← Recording voiceover (clean focus)
├── production.md   ← Shots, overlays, timing cues
├── status.md       ← Workflow and blockers
├── prompts.md      ← Episode-specific prompts and reusable agent briefs
├── guide.md        ← Episode-specific execution guide and handoff notes
├── artifacts.md    ← Build artifact manifest, render commands, output paths
└── build/          ← Generated episode outputs (ignored from git)
```

Global guides stay in `_project/` or root docs. Episode-specific prompts, guides, build notes, and render outputs stay inside that episode folder.

## Git Workflow

```bash
# Make changes
git add .
git commit -m "feat: describe your changes"
git push origin main
```

## Day-to-Day

1. Edit scripts in `scripts/video-XX/`
2. Keep script.md and production.md separate
3. Use status.md to track progress
4. Commit & push frequently

## Idea To Video Flow

This is the typical flow with the current agent and skill setup.

### 1. Start with the episode idea

- Read `_project/project-doc.md` for channel positioning, audience, content pillars, and the current video plan
- Pick or create the target folder in `scripts/video-XX/`
- Keep episode-specific prompts, guides, artifact manifests, and generated outputs inside that folder
- If the idea is still loose, use the `Creative Director` agent or the `episode-kickoff` skill

### 2. Turn the idea into a production plan

- Primary tool: `Creative Director` agent
- Workflow skill alternative: `episode-kickoff`
- Main output: `production.md`
- Goal: define the hook, section flow, pacing, overlays, screen recordings, dependencies, and open questions

If the planning pass produces a reusable brief or execution note, document it in `prompts.md` or `guide.md` instead of scattering it into root docs.

This is the stage where the episode should become structurally clear. If the hook is weak or the sections feel generic, stay here and tighten `production.md` before writing voiceover.

### 3. Turn the production plan into spoken script

- Primary tool: `Script Writer` agent
- Workflow skill alternative: `spoken-script-pass`
- Main output: `script.md`
- Supporting reference: `_project/creator-voice-profile.md`

If a prompt pattern or rewrite instruction becomes part of the episode workflow, keep it in `prompts.md` in the same episode folder.

The script writer should read the project doc first, then `production.md`, and write only voiceover. No shot notes or overlay notes should go into `script.md`.

### 4. Sharpen visuals and execution details

- Primary tool: `Visual Editor` agent
- Main output: usually `production.md`, `guide.md`, and `artifacts.md`, sometimes reusable implementation work if a motion codebase exists

Use this when the episode needs better overlays, screen-recording beats, motion ideas, b-roll planning, or a more explicit visual system.

### 5. Package the episode before recording or editing

- Workflow skill: `episode-package`
- Inputs: `script.md`, `production.md`, `status.md`, `prompts.md`, `guide.md`, `artifacts.md`
- Outputs: tighter alignment between files, clearer dependencies, updated blockers/status, and documented artifact/output paths

This is the cleanup pass. Use it when the files have drifted, the visuals are underspecified, or you want a pre-record / pre-edit readiness check.

### 6. Record, edit, publish

- Record from `script.md`
- Execute from `production.md`
- Keep prompts, execution notes, and render commands documented in `prompts.md`, `guide.md`, and `artifacts.md`
- Put generated episode-specific outputs in `scripts/video-XX/build/`
- Track readiness and blockers in `status.md`
- Commit each meaningful stage

## Agent vs Skill

- Use an agent when you want a role to do focused work: planning, script writing, or visual direction
- Use a skill when you want a repeatable workflow pass: kickoff, spoken-script polish, or packaging
- In practice, the common flow is: `Creative Director` -> `Script Writer` -> `Visual Editor` -> `episode-package`

---

**For detailed documentation, see [PROJECT_GUIDE.md](PROJECT_GUIDE.md)**
