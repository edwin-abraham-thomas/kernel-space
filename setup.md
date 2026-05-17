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

## Phase 3 — Final Verification

> **AI Agent:** Run all of these and confirm success with the user.

```bash
# 1. Git repo is initialised and has commits
cd "$DEV_DIR"
git log --oneline

# 2. Project structure is correct
find "$DEV_DIR" -not -path '*/.git/*' -type f | sort

# 3. Check git status
git status
```

### CONFIRM: Setup Complete

Display this summary to the user:

```
✅ Setup complete!

  Git repo:    $DEV_DIR
  
Next steps:
  1. Add your video scripts to scripts/video-01-channel-intro/script.md
  2. Run: cd $DEV_DIR && git status
  3. Commit changes: git add . && git commit -m "your message"
  4. Push to remote: git push origin main
```

---

## Reference: Day-to-Day Workflow

```
1. Edit files in the repo  (terminal, Cursor, VS Code)
2. git add . && git commit -m "your message"
3. git push origin main
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Git command not found | Ensure git is installed: `brew install git` |
| Permission denied on git push | Check SSH keys are set up for GitHub/GitLab |
| Files not showing in git | Check `.gitignore` isn't excluding them, or run `git status` |