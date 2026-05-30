# Artifacts: video-01-channel-intro

## Output Folder

- `build/`

## Remotion Source

- Workspace: `remotion/`
- Root registration: `remotion/src/Root.tsx`
- Current branded composition implementation: `remotion/src/Composition.tsx`

## Composition Registry

### Existing

- `KernelSpaceIntro`
- Purpose: branded opener / still / reusable channel intro visual
- Status: implemented
- Default settings: `1920x1080`, `30fps`, `90 frames`

### Planned For Video 01

- `Video01HookCards`
- Purpose: hook typography package and `vere oru game` emphasis beat
- Status: implemented

- `Video01JourneyStrip`
- Purpose: section 1 timeline / journey strip motion
- Status: planned

- `Video01SignalCards`
- Purpose: manifesto cards, stacked terminal text, and question cards
- Status: planned

- `Video01SkillSplit`
- Purpose: future-skill split / merge composition
- Status: implemented

- `Video01NextTease`
- Purpose: next-video teaser cards and close transition
- Status: implemented

## Render Commands

- Studio preview: `cd remotion && npm run dev`
- Lint + typecheck: `cd remotion && npm run lint`
- Bundle check: `cd remotion && npm run build`
- Existing still: `cd remotion && npm run render:still`
- Existing intro video: `cd remotion && npm run render:intro`

## Planned Render Commands

- Hook cards still: `cd remotion && remotion still Video01HookCards ../scripts/video-01-channel-intro/build/video-01-hook-cards-still.png --frame=45`
- Skill split still: `cd remotion && remotion still Video01SkillSplit ../scripts/video-01-channel-intro/build/video-01-skill-split-still.png --frame=45`
- Next tease still: `cd remotion && remotion still Video01NextTease ../scripts/video-01-channel-intro/build/video-01-next-tease-still.png --frame=30`
- Hook cards video: `cd remotion && remotion render Video01HookCards ../scripts/video-01-channel-intro/build/video-01-hook-cards.mp4`
- Skill split video: `cd remotion && remotion render Video01SkillSplit ../scripts/video-01-channel-intro/build/video-01-skill-split.mp4`
- Next tease video: `cd remotion && remotion render Video01NextTease ../scripts/video-01-channel-intro/build/video-01-next-tease.mp4`

## Current Props

- `KernelSpaceIntro`
- `title: kernel_space`
- Brand intro treatment: blank background, faster typed `kernel_space |`, 1-second hold, select-all highlight, delete to blank
- `Video01HookCards`
- `introLine: AI code ezhuthum.`
- `questionLine: Pakshe production software?`
- `emphasisLine: Vere oru game.`
- `footerLabel: code generate cheyyunnathil ninn production vare`
- `Video01SkillSplit`
- `leftTitle: Strong fundamentals`
- `rightTitle: AI leverage`
- `leftPoints: System thinking, Debugging, Maintainability`
- `rightPoints: Speed, Iteration, Tool use`
- `mergeLabel: Speed + judgment`
- `Video01NextTease`
- `title: Next: TinqrBox full story`
- `cards: What it is, Why I built it, Architecture, AI helped where?, Engineer stepped in where?, What actually broke`
- `footerLabel: adutha video-yil proper aayi dive cheyyam`

## Planned Text Payloads

- Hook cards:
- `AI code ezhuthum.`
- `Pakshe production software?`
- `Vere oru game.`
- Journey strip labels:
- `Idea`
- `Architecture`
- `Implementation`
- `Deployment`
- `Observability`
- `Maintenance`
- Skill split:
- `Strong fundamentals`
- `AI leverage`
- `Speed + judgment`
- Next tease:
- `What it is`
- `Why I built it`
- `Architecture`
- `AI helped where?`
- `Engineer stepped in where?`

## Current Artifacts

- Branded still target: `build/kernel-space-intro-still.png`
- Branded intro target: `build/kernel-space-intro.mp4`
- Hook cards still: `build/video-01-hook-cards-still.png`
- Skill split still: `build/video-01-skill-split-still.png`
- Next tease still: `build/video-01-next-tease-still.png`
- Hook cards video: `build/video-01-hook-cards.mp4`
- Skill split video: `build/video-01-skill-split.mp4`
- Next tease video: `build/video-01-next-tease.mp4`
- Supporting capture assets remain defined in `production.md`

## Planned Artifact Targets

- `build/video-01-hook-cards-still.png`
- `build/video-01-skill-split-still.png`
- `build/video-01-next-tease-still.png`
- `build/video-01-hook-cards.mp4`
- `build/video-01-skill-split.mp4`
- `build/video-01-next-tease.mp4`
- `build/kernel-space-intro.mp4`

## Notes

- Generated files should stay local and ignored from git.
- Keep this manifest updated whenever output paths, composition IDs, or render commands change.
- `Video01HookCards`, `Video01SkillSplit`, and `Video01NextTease` are now registered in `remotion/src/Root.tsx` and have rendered approval stills.
- `KernelSpaceIntro`, `Video01HookCards`, `Video01SkillSplit`, and `Video01NextTease` now have rendered motion outputs in the episode `build/` folder.
- `Video01JourneyStrip` and `Video01SignalCards` remain the next documented build slices.