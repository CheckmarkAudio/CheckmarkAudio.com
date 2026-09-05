---
title: Document Map and Conflict Rules
status: active
updated: 2026-09-05
---

# Document Map and Conflict Rules

This file is the routing guide for website work. It is not another source-of-truth checklist. Its purpose is to make the long document names easy to reference and prevent multiple useful plans from silently competing.

## Short Names

The following short names may be used in chats, notes, and task instructions:

| Short name | Exact file | Role |
| --- | --- | --- |
| **Source of Truth** | `CHECKMARK_AUDIO_WEBSITE_SOURCE_OF_TRUTH.docx` | The only active business-requirements and completion checklist |
| **SEO Master Plan** | `CheckmarkAudio.com_SEO_Website_Master_Implementation_Plan.docx` | SEO architecture, page strategy, implementation order, and acceptance gates |
| **SEO Training Manual** | `Checkmark_Audio_SEO_Strategy_Team_Training_Manual-3.docx` | Repeatable content workflow, staff checklists, templates, QA, and maintenance practices |
| **Website Plan** | `WEBSITE_PLAN.md` | Earlier detailed build plan and historical decision record; useful where it has not been superseded |
| **Platform Architecture** | `PLATFORM_ARCHITECTURE.md` | Current cross-repository, Supabase, client-account, inquiry, and calendar architecture |
| **Policy Library** | `../POLICIES/README.md` | Working register for studio, Checkmark Tonight, school/lesson, and website-policy documents; entries are not approved merely because they are filed there |
| **Website Change Log** | `WEBSITE_CHANGE_LOG.md` | Chronological visual decisions and approval status |
| **September 5 Audit** | `../MIGRATION/STATUS_2026-09-05.md` | Dated Git, contributor, QA, and migration evidence; not a second completion checklist |
| **Approved Baselines** | `APPROVED_VISUAL_BASELINES/` | Screenshots explicitly approved as visual references |

“Review the three website documents” means review the **Source of Truth**, **SEO Master Plan**, and **SEO Training Manual**. An AI coder should not require Bridget to repeat their full filenames.

## Required Reading

Before broad website, content, SEO, page-structure, or asset work:

1. Read `PROJECT_STATE.md` and `RULES.md` for the latest confirmed project decisions.
2. Read this document map.
3. Review the Source of Truth, SEO Master Plan, and SEO Training Manual.
4. Consult `SEO_STRUCTURE.md`, `PLATFORM_ARCHITECTURE.md`, and `NEXT_STEPS.md` for the active implementation state.
5. For image, audio, video, or asset work, follow `MEDIA_SEO_PLAN.md` and `MEDIA/README.md`.
6. Use the Website Plan for additional detail that has not been superseded.

For a narrowly scoped edit, the three DOCX files do not need to be re-read cover to cover if their relevant requirements have already been reviewed in the current session. The coder must still check this map and the relevant active files before making assumptions.

## Authority and Conflict Order

When sources disagree, use this order:

1. Bridget and Gavin's latest explicit, confirmed decisions, as recorded in `PROJECT_STATE.md`, `RULES.md`, or a dated decision entry.
2. The Source of Truth for business facts, approved requirements, and completion status.
3. The SEO Master Plan for SEO architecture and build sequencing, except where current project decisions override an outdated assumption.
4. The SEO Training Manual for recurring research, writing, QA, and maintenance workflow.
5. Platform Architecture for the current shared Supabase, client-account, inquiry, and calendar implementation.
6. The Website Plan for earlier build detail that is still compatible with the sources above.
7. The current Wix website as migration evidence, not automatic truth.
8. `ARCHIVE/` as history only.

Do not resolve a real business conflict by guessing. Record the discrepancy in the appropriate active Markdown file and ask Bridget or Gavin for a decision. Once decided, update every affected active reference in the same pass.

## Confirmed Overrides to Older Material

These current decisions override contrary or outdated passages in any planning document:

- The school is a separate website. CheckmarkAudio.com may briefly introduce and link to it, but it will not duplicate school service pages or target school search intent.
- Approved public starting-price model: vocal recording from **$50/hour**, general studio/engineering from **$65/hour**, and band recording from **$75/hour**. Project work is quoted.
- The public Cal.com calendar is fully clickable for the free one-hour consultation. Anyone may self-select an available consultation time; paid project-session self-booking remains separate.
- The repository root is the only active replacement website. Root `index.html` is the homepage direction Bridget selected on 2026-08-21; drafts and archives do not override it.
- Browser-local media choices are not protected until written into root files and `MEDIA/WEBSITE_MEDIA_SELECTIONS.json`.
- `MEDIA/` is the only active website-media library. Public filenames follow Gavin's formula in `SEO/ASSET_NAMING_RULES.md`.
- `POLICIES/` is the working policy-document library. Follow each file's status; draft frameworks and recovered specifications are not approved public or operating policy.
- The website and internal staff tool remain separate repositories sharing one Supabase backend.
- Wix remains live until the replacement is approved, tested, and ready for controlled cutover.

## How the Documents Work Together

- The Source of Truth answers: **What must be true and approved?**
- The SEO Master Plan answers: **What should we build, in what SEO-aware order, and how do we know it is complete?**
- The SEO Training Manual answers: **How should the team research, write, review, and maintain it consistently?**
- The active Markdown files answer: **What is true now, what changed, and what happens next?**
- The Website Plan supplies earlier detail, but it never overrides a newer confirmed decision.

Keep these roles separate instead of merging the files into one giant document. Reconcile decisions into the short active Markdown files so future sessions have a clear front door without losing the depth of the original documents.
