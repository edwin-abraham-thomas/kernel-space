# kernel_space — Project Guide

> We tinker, experiment, and break things to truly understand them — building towards production-grade systems with AI, deep over surface level. For working engineers and those who want to become one.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Repository Structure](#repository-structure)
4. [Video Script Workflow](#video-script-workflow)
5. [File Formats & Templates](#file-formats--templates)
6. [Git Workflow](#git-workflow)
7. [Remote & Collaboration](#remote--collaboration)
8. [Common Tasks](#common-tasks)
9. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Get Started Immediately

```bash
cd /Users/edwinabrahamthomas/edwinat/kernel-space-|

# Edit a video script
open scripts/video-01-channel-intro/script.md

# After changes
git add .
git commit -m "your message"
git push origin main
```

### View Repository Online

- **GitHub:** https://github.com/edwin-abraham-thomas/kernel-space
- **Raw scripts:** https://github.com/edwin-abraham-thomas/kernel-space/raw/main/scripts/

---

## 📖 Project Overview

**kernel_space** is a **video content creation project** for producing educational engineering videos.

### Key Characteristics

- **Solo project** with git-only workflow (no rsync/sync complexity)
- **GitHub-backed** for backup and sharing with AI agents
- **Markdown-first** — all scripts and planning in git
- **5 video series planned** (channel intro → full production)
- **Clear separation** between recording scripts and production notes

### Target Audience

- Working engineers
- People learning to become engineers
- Focus on production-grade AI systems

---

## 📂 Repository Structure

```
kernel-space/
│
├── README.md                   # Quick reference (this file)
├── PROJECT_GUIDE.md            # This comprehensive guide
├── setup.md                    # Setup instructions for new contributors
├── .gitignore                  # Git ignore rules
│
├── scripts/                    # 📹 Video content (main work area)
│   ├── video-01-channel-intro/
│   ├── video-02-tinqrbox-full-story/
│   ├── video-03-ai-first-development/
│   ├── video-04-hobby-vs-production-ai/
│   └── video-05-local-llms/
│
├── _project/                   # 📊 Project documents
│   └── (project planning, strategy, phase docs)
│
├── notes/                      # 📝 General notes
│   └── (miscellaneous notes, ideas, references)
│
├── research/                   # 🔬 Deep-dive research
│   └── (topic-specific research)
│
└── assets/                     # 🎨 Brand & media assets
    ├── kernel_space_logo.svg
    ├── kernel_space_banner.svg
    ├── kernel_space.png
    └── kernel_space_banner.png
```

### Directory Purposes

| Folder | Purpose | Who Edits | Content Type |
|--------|---------|-----------|--------------|
| `scripts/` | Video scripts & production notes | You (main area) | `.md` files per video |
| `_project/` | Project planning & strategy | You | Roadmap, milestones, phase docs |
| `notes/` | General working notes | You | Ideas, references, drafts |
| `research/` | Deep research by topic | You | In-depth learning, technical notes |
| `assets/` | Brand assets (logos, banners) | You | `.svg`, `.png` brand materials |

---

## 🎬 Video Script Workflow

### Per-Video Structure

Each video has its own folder with three key files:

```
scripts/video-01-channel-intro/
├── script.md          # ← RECORDING SCRIPT (what you read/voiceover)
├── production.md      # ← PRODUCTION NOTES (shots, overlays, timing)
└── status.md          # ← WORKFLOW TRACKING (draft→recorded→edited→published)
```

### File Purposes

#### `script.md` — Recording Script
- **What it is:** The actual text you read/record as voiceover
- **Focus:** Clear, natural language; organized by section
- **Structure suggestion:**
  ```markdown
  # Video Title
  
  ## Intro (0:00-0:15)
  [Your intro voiceover here]
  
  ## Section 1 (0:15-1:30)
  [Main content voiceover]
  
  ## Conclusion (1:30-1:45)
  [Closing voiceover]
  ```
- **Keep it:** Clean, readable, no production clutter

#### `production.md` — Production Notes
- **What it is:** Technical and creative production details
- **Content:**
  - Shot descriptions ("Show code on screen at 0:05")
  - Overlay cues ("Insert metrics chart")
  - B-roll markers ("Cut to keyboard typing at 0:20")
  - Audio/visual timing notes
  - Graphics or animations needed
  - Screen recordings needed
- **Structure suggestion:**
  ```markdown
  # Production Notes: Video Title
  
  ## Intro (0:00-0:15)
  - [ ] Show kernel_space_banner.png
  - [ ] Fade to black at 0:05
  - [ ] Text overlay: "kernel_space"
  
  ## Section 1 (0:15-1:30)
  - [ ] Screen recording: code example
  - [ ] Insert screenshot at 0:25
  - [ ] Overlay: key metrics
  ```
- **Keep it:** Separate from script, focused on technical execution

#### `status.md` — Workflow Tracking
- **What it is:** Project status and blockers for this video
- **Content:**
  - Workflow checklist (Draft → Recorded → Edited → Published)
  - Blockers or notes
  - Revision history
- **Example:**
  ```markdown
  # Status: video-01-channel-intro
  
  ## Workflow
  - [x] Draft script
  - [ ] Record voiceover
  - [ ] Edit video
  - [ ] Publish
  
  ## Notes
  - Waiting on logo animation
  - Need better B-roll footage
  ```

---

## 📄 File Formats & Templates

### Markdown Conventions

All files use **GitHub Flavored Markdown** (GFM):

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** or __bold__
*Italic text* or _italic_
`inline code`

## Code blocks
\`\`\`python
# Python example
print("hello")
\`\`\`

## Lists
- Item 1
- Item 2
  - Nested item

## Checklists
- [x] Completed
- [ ] Not done
```

### Creating a New Video

**When you add a new video:**

1. Create folder: `scripts/video-XX-title/`
2. Add three files:
   ```bash
   touch scripts/video-XX-title/{script.md,production.md,status.md}
   ```
3. Use templates below or copy from existing video
4. Commit: `git add . && git commit -m "feat: add video-XX scaffolding"`

**Script template:**
```markdown
# Video Title

## Intro (0:00-0:XX)
[Voiceover text]

## Section [N] (0:XX-0:XX)
[Voiceover text]

## Conclusion (0:XX-0:XX)
[Closing voiceover]
```

**Production template:**
```markdown
# Production: Video Title

## Intro (0:00-0:XX)
- [ ] Visual: description
- [ ] Overlay: text or graphic
- [ ] Audio: notes

## Section [N] (0:XX-0:XX)
- [ ] Visual: description
- [ ] Overlay: text or graphic
```

**Status template:**
```markdown
# Status: video-XX-title

## Workflow
- [ ] Draft script
- [ ] Record voiceover
- [ ] Edit video
- [ ] Publish

## Notes
(Any blockers, revisions, etc.)
```

---

## 🔄 Git Workflow

### Daily Workflow

```bash
# 1. Navigate to repo
cd /Users/edwinabrahamthomas/edwinat/kernel-space-|

# 2. Check status
git status

# 3. Edit files (in your editor: VS Code, Cursor, etc.)
# ...make changes...

# 4. Stage changes
git add .
# or specific files:
git add scripts/video-01-channel-intro/script.md

# 5. Commit with descriptive message
git commit -m "feat: draft script for video-01"
# or
git commit -m "docs: update production notes"
# or
git commit -m "refactor: split script and production notes"

# 6. Push to GitHub
git push origin main
```

### Commit Message Convention

Use clear, conventional commits:

```
feat: new feature (new script, new video)
docs: documentation updates
refactor: reorganizing files/content
fix: corrections or fixes
chore: maintenance, updates
```

Examples:
- `feat: draft channel intro script`
- `docs: add production notes for video-02`
- `refactor: split script.md and production.md`
- `fix: correct typos in video-01 script`

### Viewing Changes

```bash
# See what changed
git diff

# See commit history
git log --oneline

# See specific file history
git log --oneline scripts/video-01-channel-intro/script.md

# See a specific commit
git show COMMIT_HASH
```

---

## 🌐 Remote & Collaboration

### Your Remote

- **URL:** https://github.com/edwin-abraham-thomas/kernel-space.git
- **Branch:** `main`
- **Push:** `git push origin main`
- **Pull:** `git pull origin main`

### Sharing Scripts with AI Agents

Claude and other AI agents can read your scripts directly via raw GitHub URLs:

```
https://github.com/edwin-abraham-thomas/kernel-space/raw/main/scripts/video-01-channel-intro/script.md
```

This enables:
- AI feedback on scripts
- Content analysis
- Automated script improvements
- Reference in other projects

### Backup & Safety

- **GitHub = automatic backup** (no local-only risk)
- **Always push before closing:** `git push origin main`
- **Recovery:** If local files corrupt, `git clone` from GitHub

---

## 🛠 Common Tasks

### Add a New Video Series

```bash
cd scripts/

# Create folder
mkdir video-06-your-title

# Initialize files
touch video-06-your-title/{script.md,production.md,status.md}

# Commit
git add video-06-your-title/
git commit -m "feat: scaffold video-06-your-title"
git push origin main
```

### Update Project Planning

```bash
# Edit project doc
open _project/project-doc.md

# Commit
git add _project/
git commit -m "docs: update project roadmap"
git push origin main
```

### Add Research Notes

```bash
# Create research doc
echo "# Research: Topic Title" > research/topic-title.md

# Commit
git add research/topic-title.md
git commit -m "docs: add research on topic-title"
git push origin main
```

### Review Your Progress

```bash
# See all scripts
ls -la scripts/video-*/

# See commit history
git log --oneline | head -20

# See what's changed recently
git log --oneline -10

# Check repo size
du -sh .
```

---

## 🐛 Troubleshooting

### Git Issues

#### "fatal: not a git repository"
```bash
# You're not in the repo folder
cd /Users/edwinabrahamthomas/edwinat/kernel-space-|
```

#### "error: src refspec main does not match any"
```bash
# No commits yet
git add . && git commit -m "initial commit"
```

#### "Permission denied (publickey)"
```bash
# SSH key issue for GitHub
# Set up SSH or use HTTPS instead
git remote set-url origin https://github.com/edwin-abraham-thomas/kernel-space.git
```

#### "Your branch is ahead of 'origin/main' by X commits"
```bash
# You have local commits not pushed
git push origin main
```

### File Issues

#### "Can't find my file"
```bash
# Search across repo
find . -name "*.md" | grep keyword

# Or use git
git ls-files | grep keyword
```

#### "Accidentally deleted a file"
```bash
# Recover from git
git checkout HEAD -- path/to/file.md
```

---

## 📚 Reference

### Key Files

| File | Purpose | Edit Frequency |
|------|---------|-----------------|
| `scripts/video-XX/script.md` | Recording script | High (main work) |
| `scripts/video-XX/production.md` | Production notes | High |
| `scripts/video-XX/status.md` | Workflow tracking | Medium |
| `_project/project-doc.md` | Project planning | Low |
| `README.md` | Quick ref | Low |
| `PROJECT_GUIDE.md` | This guide | Rarely |

### Useful Commands

```bash
# Check status
git status

# See all commits
git log --oneline

# Push to GitHub
git push origin main

# Pull latest from GitHub
git pull origin main

# See what changed
git diff

# Stage specific file
git add path/to/file.md

# Undo last commit (keep changes)
git reset --soft HEAD~1

# View file at specific commit
git show COMMIT_HASH:path/to/file.md
```

### Remote Setup (Already Done)

```bash
# Your remote is already configured
git remote -v
# Should show:
# origin  https://github.com/edwin-abraham-thomas/kernel-space.git (fetch)
# origin  https://github.com/edwin-abraham-thomas/kernel-space.git (push)
```

---

## 💡 Tips & Best Practices

### Script Writing

- ✅ Write for **spoken word** — scripts should sound natural when read aloud
- ✅ Use **short sentences** — easier to read during recording
- ✅ **Mark pauses** with `[pause]` or `...` if helpful
- ✅ **Time estimates** in comments help match voiceover to video
- ❌ Don't mix recording script with production notes

### Production Notes

- ✅ Be **specific** — exact timestamps and file names
- ✅ Use **checkboxes** — track what's done during post-production
- ✅ Link to **external resources** if needed (stock footage, libraries)
- ✅ Note **dependencies** — what other videos/assets needed first

### Commits

- ✅ Commit **frequently** — small, logical chunks
- ✅ Use **descriptive messages** — helps future you understand changes
- ✅ Push **before closing work** — GitHub = automatic backup
- ❌ Don't commit huge files (use `.gitignore` for videos, exports)

### Workflow

- ✅ Keep **script.md focused** on recording text only
- ✅ Keep **production.md focused** on technical notes only
- ✅ Use **status.md** as your checklist during post-production
- ✅ Push often to keep **GitHub up-to-date**

---

## 🎯 Next Steps

1. **Open a video script:** `scripts/video-01-channel-intro/script.md`
2. **Start writing** your voiceover text
3. **Add production notes** in `production.md`
4. **Track progress** in `status.md`
5. **Commit & push:** `git add . && git commit -m "..." && git push origin main`

---

## Questions?

This guide covers the essential workflow. As you use the repo, you'll develop your own patterns and shortcuts.

**Remember:** 
- Git is your friend — commit often, push to backup
- Scripts stay separate from production notes
- GitHub is your backup and collaboration platform

Happy creating! 🎬

