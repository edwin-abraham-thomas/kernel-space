# kernel_space

> We tinker, experiment, and break things to truly understand them — building towards
> production-grade systems with AI, deep over surface level.
> For working engineers and those who want to become one.

## Structure

| Folder | Purpose |
|---|---|
| `_project/` | Project documents, strategy, phase planning |
| `scripts/` | Video scripts, one folder per video |
| `notes/` | General notes and research |
| `research/` | Deep-dive research notes per topic |
| `assets/` | Graphics, raw footage, exports (not synced to Obsidian) |
| `sync/` | rsync scripts and launchd config for Obsidian sync |

## Obsidian Sync

Content is one-way synced from this repo → Obsidian vault via rsync.

**Manual sync:**
```bash
bash sync/sync-to-obsidian.sh
```

**Auto-sync:** Runs every 60 seconds via launchd in the background.

## Scripts Naming Convention

```
scripts/
  video-01-channel-intro/
    script.md
    notes.md
    outline.md
  video-02-tinqrbox/
    script.md
    notes.md
```

## Day-to-Day Workflow

```
Write/edit files in dev directory  (terminal, Cursor, VS Code)
  ↓
Files auto-sync to Obsidian every 60 seconds
  ↓
git add . && git commit -m "..." && git push
```
