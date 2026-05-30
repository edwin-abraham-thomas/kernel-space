# Guide: video-01-channel-intro

## Source Files

- `script.md`
- `production.md`
- `status.md`
- `prompts.md`
- `artifacts.md`

## Remotion Goal For This Episode

- Build a reusable visual package for the first channel intro, not a fully synthetic video.
- Remotion should provide the branded motion layer and typography system.
- Real editor, terminal, deployment, logs, and TinqrBox footage should remain the proof layer inside the final edit.

## Source Of Truth

- `production.md` is the visual source of truth for timing, emphasis words, transitions, and section intent.
- `script.md` is the timing source of truth for phrase rhythm and word emphasis.
- `artifacts.md` is the record of composition IDs, commands, output targets, and render state.

## Production Sections Driving Remotion

- `Hook (0:00-0:23)`
- `Section 1 - Who You Are, What This Channel Is (0:23-1:00)`
- `Section 2 - What Viewers Should Expect Here (1:00-1:45)`
- `Section 3 - Why This Matters Now (1:45-2:32)`
- `Section 4 - Future Skill Thesis (2:32-3:12)`
- `Section 5 - TinqrBox Teaser (3:12-4:18)` for overlays only
- `Section 6 - What This Channel Will Cover (4:18-4:49)`
- `Section 7 - Next Video Setup (4:49-5:12)`
- `Takeaway / Close (5:12-5:25)`

## Remotion Ownership Split

### Remotion Owns

- branded opener and end card
- cursor-based text reveals
- section divider cards
- emphasis-word cards
- pipeline / journey strip
- thesis split diagram
- teaser-card system for the next-video setup
- overlay shells that can frame captured footage in the same visual language

### Edit Owns

- all real screen recordings
- cut timing against final voiceover
- placement of captured proof shots between Remotion beats
- any last-mile pacing trims for runtime

## Current Remotion State

- Existing composition ID: `KernelSpaceIntro`
- Implemented episode composition IDs:
- `Video01HookCards`
- `Video01SkillSplit`
- `Video01NextTease`
- Existing source files:
- `remotion/src/Root.tsx`
- `remotion/src/Composition.tsx`
- Existing npm scripts:
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run render:intro`
- `npm run render:still`
- Current composition is a branded intro card and not yet the full episode graphics system.

## Recommended Composition Plan

### Phase 1 - Reusable Intro Package

- `KernelSpaceIntro`
- Purpose: branded opener / end-card-compatible visual language for the channel
- Source sections: Hook open, Close
- Status: exists now

### Phase 2 - Episode Overlay Kit

- `Video01HookCards`
- Purpose: opening hook text cards, cursor wipes, `vere oru game` emphasis sequence
- Source sections: Hook
- Status: implemented

- `Video01JourneyStrip`
- Purpose: `idea -> architecture -> implementation -> deployment -> observability -> maintenance` strip
- Source sections: Section 1
- Status: planned

- `Video01SignalCards`
- Purpose: section 2 and 3 emphasis cards, question cards, and stacked terminal-like text
- Source sections: Section 2, Section 3
- Status: planned

- `Video01SkillSplit`
- Purpose: the future-skill split layout and merge animation
- Source sections: Section 4
- Status: implemented

- `Video01NextTease`
- Purpose: next-video teaser cards and end transition into subscribe frame
- Source sections: Section 7, Close
- Status: implemented

## Prop / Content Inputs To Prepare

- Channel name: `kernel_space`
- Hook phrases:
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
- Thesis labels:
- `Strong fundamentals`
- `AI leverage`
- `Speed + judgment`
- TinqrBox labels:
- `TinqrBox`
- `Personal engineering workspace`
- `Infra`
- `Deployment`
- `CI/CD`
- `Logging`
- `Observability`
- Next-video teaser labels:
- `What it is`
- `Why I built it`
- `Architecture`
- `AI helped where?`
- `Engineer stepped in where?`

## Required Capture Inputs For The Final Edit

- short code editor clip
- short terminal clip
- short CI/CD or deployment clip
- short logs / observability clip
- TinqrBox repo or project structure clip
- TinqrBox runtime or interaction clip if available
- one imperfect / manual-work clip if available
- optional short desk or device shot for section 1

## Build Order

1. Lock the Remotion ownership split from `production.md`.
2. Keep the current `KernelSpaceIntro` composition as the baseline visual language.
3. Build the section-specific graphics kit as separate compositions or reusable components.
4. Render stills first for design approval.
5. Render motion pieces only after the text treatment and typography scale feel right.
6. Drop rendered assets into the edit with captured footage and final voiceover.

## Render Sequence

1. Run `npm run lint` in `remotion/`.
2. Open `npm run dev` to inspect the compositions interactively.
3. Render approval stills for opener, thesis split, and next-video teaser.
4. Render the branded intro video.
5. Render any additional motion assets once composition IDs and props are locked.

## Current Validation State

- `npm run lint` passes in `remotion/`.
- Approval stills now exist for:
- `Video01HookCards`
- `Video01SkillSplit`
- `Video01NextTease`
- The next implementation pass should cover `Video01JourneyStrip` and `Video01SignalCards` before rendering motion videos for the episode kit.

## File / Handoff Expectations

- Any composition added for this episode must be registered in `remotion/src/Root.tsx`.
- Any output path used for this episode must be logged in `artifacts.md`.
- Any render-dependent design decision should be written back here, not kept only in chat.
- Episode-local outputs stay under `scripts/video-01-channel-intro/build/`.

## Execution Plan

1. Finalize the faceless versus light A-roll decision.
2. Capture the required proof footage listed above.
3. Build or extend Remotion compositions for the overlay kit and opener package.
4. Render approval stills before rendering motion.
5. Render motion assets into the episode `build/` folder.
6. Assemble the final edit using Remotion assets plus real footage.
7. Keep any episode-specific visual instructions or render decisions documented here instead of in root docs.

## Remotion Build Workflow

### Source Of Truth

- `production.md` is the visual source of truth.
- Pull build inputs from:
	- beat timeline
	- visual direction
	- on-screen text
	- emphasis words
	- dependencies
	- screen recording or demo requirements

### Required Files

- `production.md` for the actual visual brief
- `script.md` when delivery timing changes the animation rhythm
- `artifacts.md` for commands, output paths, and rendered asset inventory
- `prompts.md` if a reusable visual/build brief shaped the Remotion implementation

### Build Decision Rule

- Use Remotion for branded intro/outro visuals, title cards, kinetic text, or reusable motion motifs.
- Keep real software proof as captured footage when the shot needs to feel lived-in, credible, or readable.
- If a visual can be solved in the edit without making the workflow messier, do that instead of forcing a Remotion build.

### Episode-Specific Build Notes

- Current branded composition source: `remotion/src/Root.tsx` -> `KernelSpaceIntro`
- Current branded composition implementation: `remotion/src/Composition.tsx`
- Current episode-local output targets are tracked in `artifacts.md`
- Any new composition or render command used for this episode should be logged back into `artifacts.md`
- The best first build slice for this episode is: opener cards, thesis split, next-video teaser, and end card.

## Output Location

- Generated outputs: `build/`