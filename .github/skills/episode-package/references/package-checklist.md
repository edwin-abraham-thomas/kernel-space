# Package Checklist

## Cross-File Consistency
- Do the sections in `script.md` map cleanly to the sections in `production.md`?
- Does the hook in both files point to the same promise?
- Are there any visuals planned for ideas that the script never mentions?
- Does the episode still match the audience and positioning in `_project/project-doc.md`?
- Are `prompts.md`, `guide.md`, and `artifacts.md` present and still aligned with the current episode plan?

## Recording Readiness
- Is the voiceover complete enough to record without improvising major ideas?
- Are pauses, emphasis points, and tricky terms clear enough for delivery?
- Are pronunciations or phrasing likely to sound awkward when spoken?

## Edit Readiness
- Does `production.md` specify overlays, callouts, screen captures, and b-roll clearly?
- Are dependencies explicit: assets, fonts, recordings, diagrams, motion work?
- Is there a note for anything still missing or blocked?
- Is the edit plan lean enough for a solo creator when a simpler execution would still work?
- Are render commands and output paths documented in `artifacts.md`?
- Are episode-specific generated outputs expected under the episode's `build/` directory?
- If Remotion is used, does `guide.md` explain which `production.md` sections and required files feed the build?

## Status Hygiene
- Is the workflow checklist still accurate?
- Are blockers or revisions captured in `status.md` notes?
- Can another session understand the current state in under a minute?
- Are episode-specific prompts and execution notes documented locally instead of in root docs?