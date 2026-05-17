# kernel_space — Project Setup Guide

> **For AI Agents:** This is an interactive setup guide. Follow each phase in order. At every `ASK:` prompt, pause and ask the user for the required information before proceeding. At every `CONFIRM:` prompt, show the user what you are about to do and wait for approval. Do not batch steps across phases without user confirmation.

---

## Overview

This guide sets up the `kernel_space` content project with:

- A **Git repository** on the local dev drive (source of truth)
- A **simple folder structure** for notes and scripts
- **Simple, manual workflow** — edit files in the repo, commit to git

```
[Git Repo on Dev Drive]
   (source of truth)
```

---

## Phase 0 — Pre-flight: Gather Information

> **AI Agent:** Ask the user for all of the following before doing anything. Collect all answers first, then proceed to Phase 1.

### ASK: Required Inputs

Ask the user for each of the following:

1. **DEV_DIR** — Where should the git repo live?
   - Default suggestion: `~/Dev/kernel_space`
   - Example: `/Users/yourname/Dev/kernel_space`

2. **GIT_REMOTE** — Do you have a remote git repository (GitHub/GitLab) to push to?
   - Yes / No
   - If yes: provide the remote URL (e.g., `git@github.com:username/kernel_space.git`)

### CONFIRM: Summary

After collecting answers, display a summary like this and ask the user to confirm before proceeding:

```
Here's what I'll set up:

  Git repo:      ~/Dev/kernel_space
  Git remote:    git@github.com:username/kernel_space.git

Proceed? (yes/no)
```

---

## Phase 1 — Pre-flight Checks

> **AI Agent:** Run these checks before making any changes. If any check fails, tell the user and stop.

```bash
# 1. Verify git is installed
git --version

# 2. Check that DEV_DIR parent exists
# If ~/Dev doesn't exist, ask user: "Should I create ~/Dev as well?"
ls "$(dirname $DEV_DIR)"

# 3. Check that DEV_DIR doesn't already exist (prevent overwrite)
# If it exists, ask: "A folder already exists at $DEV_DIR. Should I use it as-is, or abort?"
ls "$DEV_DIR" 2>/dev/null && echo "EXISTS" || echo "OK"
```

---

## Phase 2 — Git Repository Setup

### Step 2.1 — Initialise Git Repo

```bash
# If DEV_DIR doesn't exist yet, create it
mkdir -p "$DEV_DIR"
cd "$DEV_DIR"

# Init git
git init
git branch -M main
```

### Step 2.2 — Create .gitignore

Create the file `$DEV_DIR/.gitignore` with this content:

```gitignore
# OS
.DS_Store
Thumbs.db

# Hidden files and folders
.*

# Node / JS build artifacts
node_modules/
dist/
build/
.next/
out/

# Python
__pycache__/
*.pyc
.venv/
*.egg-info/

# Video / Audio production (large files)
assets/raw/
assets/exports/
*.mp4
*.mov
*.avi
*.mkv
*.wav
*.aiff

# Logs
*.log

# Environment
.env
.env.local
.env.*
```

### Step 2.3 — Create Project Structure

```bash
cd "$DEV_DIR"

# Core content directories
mkdir -p _project
mkdir -p scripts
mkdir -p notes
mkdir -p research

# Assets (heavy files)
mkdir -p assets/raw
mkdir -p assets/exports
mkdir -p assets/graphics

# Keep empty dirs tracked by git
touch assets/raw/.gitkeep
touch assets/exports/.gitkeep
touch assets/graphics/.gitkeep
```

### Step 2.4 — Create README.md

Create `$DEV_DIR/README.md` with this content:

```markdown
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
| `assets/` | Graphics, raw footage, exports |

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
Write/edit files in the repo
  ↓
git add . && git commit -m "..."
  ↓
git push origin main
```
```

### Step 2.5 — Create Video Script Scaffolds

```bash
cd "$DEV_DIR"

for VIDEO in \
  "video-01-channel-intro" \
  "video-02-tinqrbox-full-story" \
  "video-03-ai-first-development" \
  "video-04-hobby-vs-production-ai" \
  "video-05-local-llms"
do
  mkdir -p "scripts/$VIDEO"
  touch "scripts/$VIDEO/script.md"
  touch "scripts/$VIDEO/notes.md"
  touch "scripts/$VIDEO/outline.md"
done
```

### Step 2.6 — Initial Commit

```bash
cd "$DEV_DIR"
git add .
git commit -m "chore: init kernel_space project structure"
```

### Step 2.7 — Add Remote (if provided)

```bash
# Only run if user provided a remote URL
git remote add origin "$GIT_REMOTE"
git push -u origin main
```

---

## Phase 4 — Obsidian Sync Setup

### Step 4.1 — Create rsync Exclude File

Create `$DEV_DIR/sync/.rsync-exclude` with this content:

```
# Hidden files and folders (Obsidian, git, DS_Store etc.)
.*

# Git internals
.git/
.gitignore

# Build artifacts
node_modules/
dist/
build/
__pycache__/
*.pyc
.venv/

# Assets (large binary files)
assets/raw/
assets/exports/
*.mp4
*.mov
*.avi
*.mkv
*.wav
*.aiff

# Remotion
remotion/node_modules/
remotion/out/
remotion/.cache/
remotion/public/

# Sync tooling itself (no need in Obsidian)
sync/

# Logs and env
*.log
.env
.env.*

# gitkeep files
.gitkeep
```

### Step 4.2 — Create Sync Script

Create `$DEV_DIR/sync/sync-to-obsidian.sh` with this content (replace paths with actual resolved values):

```bash
#!/usr/bin/env bash
# sync-to-obsidian.sh
# One-way sync from kernel_space git repo → Obsidian vault folder
# Source of truth: git repo. Never edit files from the Obsidian side.

set -euo pipefail

SOURCE="$DEV_DIR/"
DEST="$OBSIDIAN_VAULT/$OBSIDIAN_SUBFOLDER/"
EXCLUDE_FILE="$DEV_DIR/sync/.rsync-exclude"
LOG_FILE="$DEV_DIR/sync/sync.log"

# Ensure destination exists
mkdir -p "$DEST"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting sync..." | tee -a "$LOG_FILE"

rsync -av \
  --exclude-from="$EXCLUDE_FILE" \
  --delete \
  "$SOURCE" \
  "$DEST" \
  >> "$LOG_FILE" 2>&1

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Sync complete." | tee -a "$LOG_FILE"
```

```bash
# Make it executable
chmod +x "$DEV_DIR/sync/sync-to-obsidian.sh"
```

> **Important:** The `--delete` flag removes files from the Obsidian folder that no longer exist in the repo. This keeps them in sync. Files should always be edited in the git repo, never in the Obsidian vault directly.

### Step 4.3 — Test the Sync Manually

```bash
bash "$DEV_DIR/sync/sync-to-obsidian.sh"

# Verify files appeared in Obsidian vault
ls "$OBSIDIAN_VAULT/$OBSIDIAN_SUBFOLDER/"
```

> **AI Agent:** Show the user the output and confirm files appeared correctly before setting up auto-sync.

### Step 4.4 — Set Up launchd Auto-Sync (Mac)

Create `$DEV_DIR/sync/com.kernelspace.obsidian-sync.plist` with this content (replace paths with actual resolved values):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.kernelspace.obsidian-sync</string>

  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$DEV_DIR/sync/sync-to-obsidian.sh</string>
  </array>

  <key>StartInterval</key>
  <integer>$SYNC_INTERVAL</integer>

  <key>RunAtLoad</key>
  <true/>

  <key>StandardOutPath</key>
  <string>$DEV_DIR/sync/launchd.log</string>

  <key>StandardErrorPath</key>
  <string>$DEV_DIR/sync/launchd-error.log</string>
</dict>
</plist>
```

```bash
# Install the launchd agent
PLIST_DEST="$HOME/Library/LaunchAgents/com.kernelspace.obsidian-sync.plist"
cp "$DEV_DIR/sync/com.kernelspace.obsidian-sync.plist" "$PLIST_DEST"

# Load it (starts immediately and on every login)
launchctl load "$PLIST_DEST"

# Verify it's running
launchctl list | grep kernelspace
```

### Step 4.5 — Add Sync Log to .gitignore

```bash
echo "sync/sync.log" >> "$DEV_DIR/.gitignore"
echo "sync/launchd.log" >> "$DEV_DIR/.gitignore"
echo "sync/launchd-error.log" >> "$DEV_DIR/.gitignore"

git add .gitignore
git commit -m "chore: ignore sync logs"
```

---

## Phase 5 — Obsidian Configuration

> **AI Agent:** These steps are manual — guide the user through them verbally.

1. Open **Obsidian**
2. Go to **Settings → Files and Links**
   - Set **Default location for new notes** to a folder of your choice (not the root)
3. Verify that `kernel_space/` appears in the vault file explorer
4. Optionally: **right-click `kernel_space/`** → Pin to top
5. Recommended plugins to enable:
   - **Dataview** — query your scripts/notes as a database
   - **Templater** — create script/note templates
   - **Git** (Obsidian Git plugin) — optional, shows git status inside Obsidian

> **Note:** Do NOT use Obsidian Git to commit from the Obsidian side. Always commit from the terminal in `$DEV_DIR`. Obsidian is view-only for this project.

---

## Phase 6 — Final Verification

> **AI Agent:** Run all of these and confirm success with the user.

```bash
# 1. Git repo is initialised and has commits
cd "$DEV_DIR"
git log --oneline

# 2. Project structure is correct
find "$DEV_DIR" -not -path '*/.git/*' -type f | sort

# 3. Obsidian vault has synced content
ls "$OBSIDIAN_VAULT/$OBSIDIAN_SUBFOLDER/"

# 4. launchd agent is loaded
launchctl list | grep kernelspace

# 5. Sync log exists and shows success
tail -5 "$DEV_DIR/sync/sync.log"
```

### CONFIRM: Setup Complete

Display this summary to the user:

```
✅ Setup complete!

  Git repo:          $DEV_DIR
  Obsidian view:     $OBSIDIAN_VAULT/$OBSIDIAN_SUBFOLDER/
  Auto-sync:         every $SYNC_INTERVAL seconds via launchd
  Manual sync:       bash $DEV_DIR/sync/sync-to-obsidian.sh

Next steps:
  1. Open Obsidian and verify kernel_space/ appears in the vault
  2. Add your video scripts to scripts/video-01-channel-intro/script.md
  3. Run: cd $DEV_DIR && git status
  4. Push to remote: git push origin main
```

---

## Reference: Day-to-Day Workflow

```
Write/edit files in $DEV_DIR  (terminal, Cursor, VS Code)
  ↓
Files auto-sync to Obsidian every $SYNC_INTERVAL seconds
  ↓
git add . && git commit -m "..." && git push
```

### Manual sync (on demand)
```bash
bash ~/Dev/kernel_space/sync/sync-to-obsidian.sh
```

### Unload auto-sync (if needed)
```bash
launchctl unload ~/Library/LaunchAgents/com.kernelspace.obsidian-sync.plist
```

### Reload auto-sync
```bash
launchctl load ~/Library/LaunchAgents/com.kernelspace.obsidian-sync.plist
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Files not appearing in Obsidian | Run manual sync, check `sync/sync.log` for errors |
| launchd not running | Run `launchctl list \| grep kernelspace` — if missing, re-run load command |
| rsync deleting files you want | Check `.rsync-exclude` — the `--delete` flag removes anything not in source |
| OneDrive storage bloating | Ensure `assets/raw/` and `assets/exports/` are in both `.gitignore` and `.rsync-exclude` |
| Obsidian shows old content | launchd syncs every N seconds — run manual sync or reduce `StartInterval` |