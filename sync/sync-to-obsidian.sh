#!/usr/bin/env bash
# sync-to-obsidian.sh
# One-way sync from kernel_space git repo → Obsidian vault folder
# Source of truth: git repo. Never edit files from the Obsidian side.

set -euo pipefail

SOURCE="/Users/edwinabrahamthomas/edwinat/kernel-space-|/"
DEST="/Users/edwinabrahamthomas/Library/CloudStorage/OneDrive-Personal/Documents/Notebooks/ContentCreation/kernel_space/"
EXCLUDE_FILE="/Users/edwinabrahamthomas/edwinat/kernel-space-|/sync/.rsync-exclude"
LOG_FILE="/Users/edwinabrahamthomas/edwinat/kernel-space-|/sync/sync.log"

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
