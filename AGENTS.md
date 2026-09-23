# AGENTS.md

## Project

Build, test, approve, and launch Checkmark Audio's independent replacement for the Wix-hosted CheckmarkAudio.com website. Wix is the current production host, not the destination. Keep it live until the replacement is approved and ready for controlled cutover.

The replacement includes branded EmailJS inquiries and a selectable Cal.com calendar for the free one-hour consultation. Paid project-session self-booking is separate future work.

## Mandatory session context and handoff

Bridget's standing instruction, September 23, 2026:

- At the start of EVERY new chat and when resuming after a gap or context compaction, review the current project's `START_HERE/PROJECT_STATE.md`, `RULES.md`, `DOCUMENT_MAP.md`, `NEXT_STEPS.md`, and recent relevant `WEBSITE_CHANGE_LOG.md` entries before opening a website preview, editing, or advising on the current implementation. Follow the remaining task-specific Read first requirements below.
- Verify the actual checkout, branch/commit, staged/unstaged/untracked changes, and preview server's source directory. Do not treat an old task's cwd, a remembered URL, GitHub Pages, or a branch name as proof of the latest version. If another task contains newer work, read its relevant context before proceeding; do not overwrite or merge it blindly.
- As of September 23, the current working website is `/Users/bridges/GITHUB/CheckmarkAudio.com`, previewed on port 4191. The `48c9` worktree is a stale September 5 snapshot. Treat these as a recorded baseline to verify, not a permanent assumption. Never present the stale worktree as the current website.
- Update the current project's context in the same pass whenever work changes implementation, decisions, approval status, preview/source location, validation results, blockers, or next steps. Before ending a work session, ensure Project State and Next Steps say where work stopped and what comes next; record meaningful visual/behavioral changes in the Change Log and lasting instructions in Rules/AGENTS.md. Do this without waiting for Bridget to ask.
- Keep records concise, reconcile superseded statements, and distinguish local/uncommitted work from published work and implemented work from approved work. Do not create a second completion checklist; the Source of Truth DOCX remains authoritative. A read-only turn with no new state need not add duplicate log entries.
- Context maintenance does not authorize committing, pushing, deployment, or domain cutover. Preserve all existing user work and staging.

## Assistant attribution and team communication

Standing instruction from Bridget, September 23, 2026. Applies to Codex, Claude, Grok, and all other human/assistant contributors:

- Every new or materially revised Markdown work entry must name the work's author/assistant, provider and exact model when known, date, task/chat title or identifier, and scope. Separate the person/assistant who implemented work from the assistant who reviewed, documented, or committed it.
- Use `Author: <assistant/provider; model if verified>` and `Task: <title or id>` on dated entries. State changed files/behavior, validation actually performed, current status (draft/implemented/approved/committed/pushed), and remaining work. Include relevant commit hashes or references when available.
- Preserve earlier authorship when updating an entry. Add an update attribution instead of claiming the original work. Never infer model or author from style, Git's shared account name, or assumptions. Mark unknown attribution explicitly and cite the task/commit evidence that is available.
- For a summary combining several contributors, distinguish their roles and evidence. Do not retrospectively label all historical work as the current assistant's work. Keep the startup review and handoff requirements above so incoming Grok or other teammates use the same current context.

## Read first

1. `START_HERE/PROJECT_STATE.md`
2. `START_HERE/RULES.md`
3. `START_HERE/DOCUMENT_MAP.md`
4. `START_HERE/NEXT_STEPS.md`
5. `START_HERE/SEO_STRUCTURE.md`
6. `START_HERE/MEDIA_SEO_PLAN.md` for media work
7. `START_HERE/PLATFORM_ARCHITECTURE.md`
8. `START_HERE/CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx`
9. the two required SEO DOCX files listed in `DOCUMENT_MAP.md`
10. `SEO/README.md` and relevant `SEO/` references

## Non-negotiable rules

- The Source of Truth DOCX is the only active completion checklist. Do not rename it without Bridget's approval.
- The repository root is the one active replacement website. Do not create a second active site tree.
- `index.html` is the protected homepage direction selected on 2026-08-21. Preserve its approved visual baseline and media selections unless Bridget asks for a change.
- The site remains `noindex` and in development until explicit launch approval.
- `MEDIA/` is the only active website-media library.
- `DRAFTS/active/` is for genuinely active off-direction experiments only; each experiment gets one dated folder. Drafts never override root.
- `DRAFTS/reference/` and `ARCHIVE/` are reference-only unless Bridget explicitly revives an item.
- Do not invent prices, policies, testimonials, credits, team facts, or booking details.
- Preserve user changes and update references in the same pass when moving files.
- Browser-local visual changes are not safely preserved until written into root files and `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- Do not point the domain away from Wix until the replacement is approved and tested.
- Keep the school on its separate website; the studio site may introduce and link to it without duplicating its SEO pages.

## Media naming

Follow `SEO/ASSET_NAMING_RULES.md`: lowercase kebab-case using service, useful location, specific description, and brand only when useful. Do not keyword-stuff or invent a location.

## Git

Before committing, confirm the changed-file list matches the request and do not revert user work. Before pushing `main`, sync with `origin/main` and report the final commit hash.
