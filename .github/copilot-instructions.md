# kernel_space — Copilot Instructions

## Project
Malayalam tech content channel for working engineers. Focus: AI, software engineering, local tooling, and production systems.

## Mission
Build the go-to Malayalam source for AI and software development by tinkering, experimenting, and breaking things to truly understand them, always moving toward production-grade systems.

## Audience
Malayalee engineers and aspiring engineers across Kerala and the global diaspora.
Assume the viewer is smart, busy, and allergic to fluff.

## Brand Voice
- Conversational Manglish written in English alphabets
- Practitioner tone: engineer-to-engineer, never lecturer mode
- Deep over surface-level, grounded in tradeoffs and production reality
- Mild humour is fine; hype is not

## Strategic Context
- This is not a tutorial farm and not a news channel
- TinqrBox is a major differentiator and should be used when it strengthens credibility
- Prioritize practical AI, build-in-public, developer tooling, and software engineering fundamentals
- Optimize for working engineers first; aspiring engineers should still feel invited, not pandered to

## Channel Style
- Faceless production: screen recordings, voiceover, overlays, motion graphics
- Show real terminals, real code, real output when the topic benefits from it
- Hook with a sharp observation or tension, not with a generic YouTube intro
- Screen recording plus voiceover is enough; do not assume heavy production is required

## Repo Workflow
- `scripts/video-XX/script.md` is voiceover only
- `scripts/video-XX/production.md` holds structure, shots, overlays, timing, and dependencies
- `scripts/video-XX/status.md` is the operational checklist and blocker log
- `scripts/video-XX/prompts.md` stores episode-specific prompts and reusable agent briefs
- `scripts/video-XX/guide.md` stores episode-specific execution, capture, render, and handoff notes
- `scripts/video-XX/artifacts.md` stores build artifact manifests, render commands, and output paths
- `scripts/video-XX/build/` holds generated episode outputs and should remain local and ignored from git
- `_project/project-doc.md` is the planning source of truth for the channel

## Writing Rules
- Write for spoken delivery: short sentences, natural pauses, one idea per paragraph
- Keep timestamps in section headings when drafting scripts or production plans
- Use English tech terms naturally inside Malayalam sentences
- Prefer concrete examples, failure modes, and tradeoffs over slogans

## Never
- Mention employer or confidential work context
- Write literary or formal Malayalam
- Over-explain basics unless the point is nuance or a hidden tradeoff
- Mix production notes into `script.md`

## Working Heuristic
Before drafting a video file, read the matching files in that video folder first.
Always read `_project/project-doc.md` before making strategic, structural, or tonal decisions.
Keep episode-specific prompts, guides, artifact manifests, and generated outputs inside that episode folder rather than root docs.
Always ask: would a working engineer actually find this worth watching?