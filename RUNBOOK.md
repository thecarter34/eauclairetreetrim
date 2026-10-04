# `eauclairetreetrim.com` — Tree Trimming Microsite (Runbook)

> **Status:** Maintenance (11ty migration **COMPLETE**; architecture unified; contact page unified to canonical template; **LIVE on prd**. Contact fix `Call or Text → Call` + email wrapping shipped 2026-10-04 via PR #13 `abb9d5e`.)
> **Why:** Josh-managed spoke 4 of the Eau Claire Tree Service hub-and-spoke. Owns the **tree trimming, tree pruning, tree care, arborist pruning, tree disease treatment** keyword bucket. Static HTML on Cloudflare Pages — built Aug 2026. **Also the canonical CSS/JS source of truth for the entire microsite family.**
> **Engine:** claude_code (no active workstream — 11ty migration shipped, contact fix mirrored from stump PR #15)
> **Workflow (locked 2026-10-04):** No `dev` branch. Every change is a new branch → squash-merge PR → prd. CF Pages auto-deploys from `prd`. See §13.
> **Next:** No in-flight work. If Rick reports a phone-dial issue, dump the byte-level tel: first (see hub RUNBOOK §13 lesson on glyph-rendering).
> **Blocker:** 🟢 None
> **Last touched:** 2026-10-04 late (PR #13 `abb9d5e` — contact page `Call or Text → Call` + email wrapping fix, mirrored from stump PR #15 / commit `8bd18cf`. Cross-repo parity verified — `.contact-option-detail` and `.contact-option-detail--email` CSS byte-identical on all 3 repos; 0 instances of "Call or Text" remaining. Production verified live: contact-us page renders `<h3>Call</h3>` and email on one line. See hub RUNBOOK §16 cross-cutting touch list.)

## 0. In flight

- (2026-10-04 evening) dev → prd squash-merge complete. All visual alignment, SVG logos, webmanifest, and og-image normalization live in production. Nothing in flight.
- [x] (2026-10-03 — done) **11ty migration complete.** All phases shipped: POC merged (PR #1 `a1037cd`), JSON-LD wrapper in `base.njk` (PR #3 `bd56e04`), contact page unified (PR #4 `f92d912` + PR #5 `f71d66e`), SVG truck-signage logos + webmanifest + og-image normalization (PR #6 `79d0da0`). Promoted to prd via squash-merge `15c5bef` 2026-10-04. No further work on this site.
- [x] (2026-10-02 — done) 11ty Phase 1 POC complete. 6 HTML files ported to Nunjucks templates. `npm run build` exits 0 in ~0.1s. CSS/JS passthrough is BYTE-IDENTICAL to source. Element-count parity verified per page. Visual check OK.

## 1. Quick facts

| Field | Value |
|---|---|
| **Domain** | `eauclairetreetrim.com` |
| **Production URL** | https://eauclairetreetrim.com/ |
| **Manager** | Josh (built from scratch Aug 2026) |
| **Repo** | `github.com/thecarter34/eauclairetreetrim.git` |
| **Local path** | `/workspace/clients/rick-olson/eauclairetreetrim/` |
| **Hosting** | Cloudflare Pages (project: `eauclairetreetrim`) — auto-picks up `prd` branch |
| **Stack** | Static HTML/CSS/JS (current); **11ty v3 + Nunjucks** (migration in progress) |
| **Branches** | `prd` (only branch — production + working). New work: branch off `prd` → squash-merge PR → delete branch. |
| **Last commit on prd** | `15c5bef` (release: dev to prd — visual alignment + SVG logos + webmanifest (#6)) |
| **Phone** | `(715) 834-5239` (E.164 `+1-715-834-5239`) — canonical |
| **Fonts** | Great Vibes (script logo) + Barlow Condensed (headlines 700/800/900) + DM Sans (body 400/500/600) |
| **Design system** | Navy (#1a2a4a / #131f3a) + Gold (#c9a84c) + Cream (#f2ebd9) — **THIS SITE is the canonical CSS/JS source for the microsite family** |
| **Keywords owned** | tree trimming, tree pruning, tree health care, arborist pruning, tree disease treatment |
| **Parent brand** | `EauClaireTreeService.com` (wife manages — `parentOrganization` schema references + single outbound footer link) |
| **DESIGN.md** | [DESIGN.md](./DESIGN.md) — SHIPPED, design tokens + voice pattern + voice guide |

## 2. Source-of-truth folders

| Purpose | Path |
|---|---|
| Local repo (this site) | `/workspace/clients/rick-olson/eauclairetreetrim/` |
| Hub runbook (architecture, billing, design system, schema templates) | `/workspace/clients/rick-olson/RUNBOOK.md` |
| **Canonical CSS** (microsite family source) | `/workspace/clients/rick-olson/eauclairetreetrim/css/style.css` (1972 lines, ~49 KB) |
| **Canonical JS** (microsite family source) | `/workspace/clients/rick-olson/eauclairetreetrim/js/main.js` (103 lines, ~3 KB) |
| **Stump microsite** | [../eau_claire_tree/RUNBOOK.md](../eau_claire_tree/RUNBOOK.md) |
| **Removals microsite** | [../eau_claire_tree_removals/RUNBOOK.md](../eau_claire_tree_removals/RUNBOOK.md) |
| **Build plan (historical, 2026-08-08)** | `../eauclairetreetrim-com-build-plan.md` (closed — see Change Log) |
| Required schema snippet | `../RUNBOOK.md` → "Required Schema Snippet" |
| Required footer block | `../RUNBOOK.md` → "Required Footer Block" |

## 3. Site inventory (6 pages)

| File | Purpose |
|---|---|
| `index.html` | Home — H1: "Healthy trees. Year after year." |
| `tree-trimming.html` | Service: trimming & pruning |
| `tree-care.html` | Service: tree health & care |
| `eau-claire.html` | Primary city landing (Eau Claire — 6 neighborhoods) |
| `chippewa-falls.html` | Secondary city landing (Chippewa Falls) |
| `contact-us.html` | Contact — phone-only, "Talk to Rick" |

All 6 pages verified in audit (Aug 2026): SEO 6/6, A11y 8/8, Design A, Responsive A, Content A. 200 OK across the board.

## 4. Voice + brand

**Tone:** Calm, proactive, ongoing relationship. **Lead with:** long-term tree health, preventive care. **Tagline:** "Healthy trees. Year after year."

This is the **quiet-authority** voice pattern that was the editorial template for the whole family — `eauclairetreeremovals.com` was rewritten to match this on 2026-10-01. Specific outcome > generic promise. Truth claims before features. Editorial > transactional.

**Wordmark (header/footer/drawer/favicon/OG):** Cream plate (4px 10px on mobile, 6px 12px desktop) with navy "Eau Claire" + navy "TREE TRIMMING" with gold outline.

**OG image:** 1200×630 navy gradient + gold accent bar + Great Vibes "Eau Claire" (gold) + Barlow Condensed 900 "TREE TRIMMING" (white with gold outline) + phone + tagline.

**No sibling cross-links.** No published hours. No "24/7" or "Free Estimate" copy. All CTAs say "Call Now" — no qualifier.

**Service area:** 6 cities — Eau Claire, Chippewa Falls, Altoona, Menomonie, Mondovi, Bloomer.

## 5. SEO + schema

- Every page: `<title>`, meta description, canonical, og:url, og:title/description/image/type/site_name/locale, twitter:card (`summary_large_image`) + twitter:title/description/image, robots meta, `lang="en"`.
- JSON-LD `LocalBusiness` + `TreeService` schema on every page. `parentOrganization` block points to `EauClaireTreeService.com`. Phone E.164 `+1-715-834-5239`.
- `FAQPage` schema on `tree-trimming.html`, `tree-care.html`, `contact-us.html`.
- Title pattern: `<Service> in <City>, WI | Eau Claire Tree Trimming | <Differentiator>`.

## 6. Canonical design system (THE role this site plays)

Beyond SEO, this site is the **single source of truth for the microsite family's design system**. See [hub RUNBOOK.md §Canonical Design System](../RUNBOOK.md#canonical-design-system-locked-2026-10-01) for the full rule.

| Layer | Source | Sister sites |
|---|---|---|
| **CSS** | `css/style.css` (1972 lines, ~49 KB) | Clone to all sister sites |
| **JS** | `js/main.js` (103 lines, ~3 KB) | Clone to all sister sites |
| **Color tokens** | Navy + Gold + Cream (truck-signage). Green tokens aliased to navy/gold for backward-compat. | Identical |
| **Typography** | Great Vibes (logo) + Barlow Condensed (headlines) + DM Sans (body) | Identical |
| **Editorial voice** | Specific outcome > generic promise. Truth claims before features. | Same rule, site-specific execution |

**Propagation rule:**
1. Any CSS/JS change is implemented on `eauclairetreetrim.com` first.
2. Sister sites (`eau_claire_tree_removals`, future trim variations) clone from here via `cp` after each release. Sister sites do NOT make independent CSS/JS edits.
3. HTML content (headlines, body copy, page-specific sections) is authored per-site.
4. Schema, footer parent brand link, `tel:` hrefs are site-specific but follow the canonical patterns in the [hub RUNBOOK.md](../RUNBOOK.md).

**Why this rule exists:** Without a canonical source, the sites drift. The Aug 2026 polish pass on trim drifted 615 CSS lines ahead of removals. The 2026-10-01 design parity reset cloned trim's `style.css` + `main.js` to removals and restored visual alignment.

## 7. Hub-and-spoke rules (do not violate)

- **No sibling cross-links.** No links to `eauclairetree.com` or `eauclairetreeremovals.com` from any page.
- **Single outbound link** to parent `EauClaireTreeService.com` (footer "A service of" block).
- **No separate GBP** — the GBP lives on the parent only.
- **No separate citations** — all citations point at the parent.

## 8. Maintenance schedule

Static site — minimal ongoing cost. See [hub RUNBOOK.md §Maintenance Schedule](../RUNBOOK.md#maintenance-schedule) for the full schedule; this site only needs:

| Cadence | Tasks |
|---|---|
| **Monthly** | Verify CF Pages deploys work; uptime check; broken-link scan |
| **Quarterly** | Content review, SEO audit, schema validate, screenshot pass desktop+mobile for regressions |
| **Biannual** (Jun, Dec) | Coincide with billing |
| **Annually** (domain anniversary) | Domain renewal (CF auto), SSL renewal (CF Pages auto) |

## 9. Decisions log

| Date | Decision | Why |
|---|---|---|
| 2026-08-08 | Domain chosen: `eauclairetreetrim.com` (not `…trimming.com` or `…care.com` — both blocked) | Clean alternative, all 6 city pages readable |
| 2026-08-08 | Build a static CF Pages site, not WordPress | Static = no CMS, free hosting, fast deploys |
| 2026-08-08 | "Healthy trees. Year after year." H1 | Proactive, ongoing-relationship voice — different emotional register from removals (urgent) |
| 2026-08-08 | "Free Consultation" copy everywhere | Lower barrier than removals' "Free Estimate" — care work often starts with assessment |
| 2026-08-08 | Re-skin to navy + gold + cream (truck signage) | Brand consistency across the microsite family |
| 2026-10-01 | Lock this site as the canonical CSS/JS source of truth for the family | Drift was the root cause of the visual divergence — locks the propagation rule |
| 2026-10-01 | Editorial voice pattern = specific outcome > generic promise | Calm, proactive, ongoing relationship; the editorial template for the family |
| 2026-10-01 | Phone canonical: `(715) 579-1942` → `(715) 834-5239` | Rick requested all numbers align to his work business line |
| 2026-10-02 | Start 11ty migration (Phase 1 POC) | Drift is already biting (615 CSS lines); local preview broken without a server; window to refactor without breaking production |
| 2026-10-02 | POC branch: `feat/11ty-migration` (NOT pushed) | Josh handles push — agent work ends at verified dev push |

## 10. Lessons learned

- **This site is the design system anchor.** Treat `css/style.css` and `js/main.js` as production-critical shared assets. Test changes here first, then propagate.
- **The verify-contrast-failures script drops alpha channel** when parsing `rgba()` — any CSS fix must use solid hex to pass audit-after-fix.
- **No "Free Consultation" → "Free Assessment" copy migration.** The original Aug 2026 build had "Free Consultation" everywhere; the polish pass normalized to "Free Assessment" across trust bars, why-list, FAQ. (Inherited by removals during the voice alignment pass.)
- **Header logo at 200px is too big in a 68px-tall header** — always render and screenshot before declaring done. The polish pass shrunk the header logo to 42px and cropped the white background from the PNG.
- **prefers-reduced-motion compliance** — removed the decorative infinite `bounceDown` animation from the hero scroll hint. Required for a11y audit.
- **11ty autoescape converts one apostrophe in `Tree's Health?` to `&#39;`.** Renders identically to a browser. Leave as-is (safer default). Verified 2026-10-02 in the POC.
- **Local file:// rendering is broken** with root-absolute paths (`/css/style.css`). 11ty's dev server fixes this — one of the strong arguments for the migration.

## 11. 11ty migration plan (active workstream)

### Goal
Move all 3 Josh-managed microsites from hand-rolled static HTML to **11ty (Eleventy) v3.x** as a single hub-and-spoke build system. Structural refactor — no copy, content, or visual design changes. **Visual parity is the success criterion.**

### Why now
- **Drift is already biting us.** The removals site had 2 separate class-mismatch bugs from copy-pasted HTML (`area-descriptor` class, `area-card-link` class). Header/footer markup drifts between sites every time one is edited.
- **Local preview is broken without a server.** Root-absolute paths work in production but render unstyled when opening .html directly via `file://`. 11ty's dev server fixes this.
- **Stump site isn't live yet** on the new design (still in active redesign). Window to refactor without breaking production.

### Target architecture
```
/workspace/clients/rick-olson/
├── _design-system/                 # 11ty site, holds shared design tokens, base layout, partials
│   ├── _data/
│   │   ├── tokens.json             # colors, fonts, spacing — source of truth
│   │   └── site.json               # phone, parent brand, social, address
│   ├── _includes/
│   │   ├── base.njk                # HTML shell, links to css/style.css
│   │   ├── header.njk              # shared header
│   │   ├── footer.njk              # shared footer
│   │   └── components/             # CTA band, contact block, etc.
│   ├── css/                        # passthrough (canonical, never edited here)
│   ├── js/                         # passthrough (canonical)
│   └── images/                     # passthrough shared imagery
├── eauclairetreetrim/              # Spoke 1 — 6 pages, CANONICAL design system source
├── eauclairetreeremovals/          # Spoke 2 — 6 pages, remote repo thecarter34/EauClaireTreeRemovals (no local git yet)
└── eau_claire_tree/                # Spoke 3 — 22 pages, dev branch active redesign
```

Each site is a sibling 11ty project. They all consume the same shared partials. Drift becomes impossible because the header is one file, edited once, all 3 sites rebuild.

### Phases

| Phase | Status | Work | Decision gate |
|---|---|---|---|
| **Phase 1 — POC** | ✅ Complete 2026-10-02 | Port this site (smallest, canonical design source) to 11ty v3. 6 HTML files → 6 Nunjucks templates. New `package.json` (only `@11ty/eleventy` as devDep), `.eleventy.js`, `src/` folder structure. Byte-equivalent `_site/` output to current source. | Visual + element-count parity verified |
| **Phase 2 — Push and review** | ✅ Complete 2026-10-03 | Push to `origin/dev`, PR against `dev`, review, merge. PRs #1–#6 all squash-merged. | All merged |
| **Phase 3 — Port the other 2 spokes** | ✅ Complete 2026-10-04 | Removals and stump both shipped their 11ty migrations before this phase gate. See their per-site runbooks. | Per-site visual parity verified |
| **Phase 4 — Promote to prd** | ✅ Complete 2026-10-04 | All 3 sites squash-merged dev → prd (`15c5bef`, `1e58533`, `5ac525a`). 11ty `_site/` output is now what CF Pages serves from prd. | Live in production |
| **Phase 5 — CF Pages build config** | ⏳ Partial | CF Pages already auto-builds the 11ty output (no `wrangler` deploy needed). No config change required. | n/a |

### What we explicitly do NOT do
- Do NOT add Tailwind, React, Vue, Svelte, jQuery, or any framework beyond 11ty + Nunjucks
- Do NOT add analytics, chat widgets, or third-party scripts not already in source
- Do NOT refactor copy, content, or design during the port
- Do NOT touch Rick's `eauclairetreeservice.com` — reference only, never edit
- Do NOT change the canonical phone `(715) 834-5239` or any of the locked design tokens

### Files in scope (per site)
- **Trim (Phase 1):** `index.html`, `tree-trimming.html`, `tree-care.html`, `chippewa-falls.html`, `eau-claire.html`, `contact-us.html`
- **Removals (Phase 3, Spoke 2):** `index.html`, `tree-removal.html`, `lot-clearing.html`, `chippewa-falls.html`, `eau-claire.html`, `contact-us.html`
- **Stump (Phase 3, Spoke 3):** 22 files (homepage, 404, about, services hub, 6 service subpages, areas hub, 10 city pages, contact)

### Active 11ty session
| Field | Value |
|---|---|
| Started | 2026-10-02 18:35 CDT |
| Engine | Claude Code 2.1.284, M3 routed |
| Worktree | `/tmp/eauclairetreetrim-11ty` |
| Branch | `feat/11ty-migration` (from `origin/dev`) |
| Commit | `3719095` — "feat: migrate eauclairetreetrim to 11ty v3 (proof of concept)" |
| Status | ✅ POC complete, verified, NOT pushed (Josh handles push) |

### Phase 1 results (verified 2026-10-02)
- 6 source HTML files ported to Nunjucks templates under `src/`
- Partials: `base.njk` (45 lines, was 157), `header.njk`, `footer.njk`, `cta-band.njk` (5/6 pages include cta-band)
- `src/_data/site.json` for brand metadata
- `package.json` minimal: only `@11ty/eleventy@^3.1.6` as devDep
- `npm run build` exits 0, 6 files written in ~0.1s
- `npm run start` serves all 6 pages at 200 on http://127.0.0.1:8767/
- Element-count parity verified per page (section/div/svg/a/p counts match source exactly)
- CSS (`51,670 bytes`) and JS (`3,791 bytes`) passthrough is BYTE-IDENTICAL to source — never edited
- Visual check via headless browser screenshot: renders correctly, all sections present, palette intact
- One known micro-quirk: Nunjucks autoescape converts one apostrophe in `Tree's Health?` to `&#39;`. Renders identically to a browser. Leave as-is (safer default).

## 13. Git workflow (locked 2026-10-04)

**No `dev` branch.** All work happens on throwaway branches off `prd`, squash-merged back to `prd` via PR, and the branch is deleted on merge.

**Pattern (every change):**

```bash
cd /workspace/clients/rick-olson/eauclairetreetrim/
git checkout prd
git pull --prune
git checkout -b <type>/<short-name>   # type: feat | fix | chore | docs | refactor
# ... make changes ...
git add -A
git -c user.name="Josh Carter" -c user.email="littlecarter21@gmail.com" commit -m "<subject>"
git push -u origin <type>/<short-name>
gh pr create --base prd --head <type>/<short-name> --title "<subject>" --body "..."
# (verify yourself per the standing rule, then approve + squash-merge)
gh pr merge <N> --squash --delete-branch
git remote prune
```

**Branch naming:** `feat/`, `fix/`, `chore/`, `docs/`, `refactor/` followed by a short kebab-case subject. No dates, no `JJ/` prefix, no leftover `dev` worktrees.

**Commit metadata:** Use `git -c user.name="Josh Carter" -c user.email="littlecarter21@gmail.com"` per-call since the repo has no committer config. (Or set it once globally — see hub RUNBOOK.)

**Force-push:** Allowed on feature branches (`git push --force-with-lease origin <branch>`) — never on `prd`.

**Deploy:** CF Pages watches `prd`. Squash-merge → push to `prd` → CF Pages auto-builds and deploys within ~30 seconds. No `wrangler` deploy for this site. The build log URL is in the CF Pages dashboard; PRs to `prd` show the deploy preview link in the PR timeline.

**Merge conflicts on a `prd` PR** (rare now that there's no `dev` drift): rebase the feature branch onto `prd` locally, resolve, push. Squash-merge again.

**Standing rule:** After every merge, `git branch -D <branch>` (locally) + `git remote prune origin`. Feature branches are throwaway — never keep them around after merge.

## 12. Change log

- **2026-10-04 (evening):** **dev → prd squash-merge `15c5bef` — all alignment + SVG logos live in production.** 33 files changed, 557+/259-. 16 add/add conflicts resolved by taking dev's version (prd was on the old flat-`.html` layout). CF Pages will auto-rebuild from prd. Verified: `npm run build` exits 0, 6 files written, contact page dials `tel:+1-715-834-5239` correctly. Tel: was already correct on this site (no fix needed). Asset roll-out: new `src/images/logo.svg` + `src/images/logo-dark.svg` (SVG truck-signage matching the navy/gold/cream wordmark), new `src/site.webmanifest`, `src/images/og-image-640w.jpg` and `src/images/og-image-apple.png` removed in favor of the new `src/images/og-image.png`.
- **2026-10-04:** Contact page unified to canonical template. Hero: eyebrow "Get In Touch" + H1 "Call Rick. Anytime." + sub (no change to JSON-LD). Added trust strip (Licensed & Insured / 24/7 Emergency / Free Estimates). 2-card direct contact (phone + email). What to Expect: trust bar + 4 service cards. Service area: 6 cities with area descriptors (gold pin for Eau Claire, amber pins for others). FAQ: 4 trim-specific questions kept. Order now: Hero → Trust Strip → Direct Contact → What to Expect → Service Area → FAQ. Commit `fd2c04b` on `feat/unify-contact-page`.
- **2026-10-03:** Runbook split — extracted from the hub god-doc. Consolidated the 11ty migration plan into §11 (was scattered across the god-doc). Cross-refs to the hub [RUNBOOK.md](../RUNBOOK.md) for client info / billing / architecture. No code changes this session.
- **2026-10-02:** 11ty Phase 1 POC complete (see §11). Branch `feat/11ty-migration` in `/tmp/eauclairetreetrim-11ty`, commit `3719095`. Not pushed — Josh handles push.
- **2026-10-01:** Locked as canonical CSS/JS source of truth for the microsite family. Commits `47fab4c`, `f5d76d9`, `02adf01` all squash-merged from dev→prd.
- **2026-10-01:** Phone canonical swap `(715) 579-1942` → `(715) 834-5239`. Commit `fd47b39` + merge to prd.
- **2026-10-01:** DESIGN.md updated from NEW → SHIPPED with accurate tokens (navy/gold not forest-green), accurate fonts, design parity note, voice pattern documentation.
- **2026-10-01:** Editorial voice alignment pass on the removals site (rewrote copy to match this site's pattern). H1 "Your trees. Our expertise." → "Done right. Done safely." Why section reframe. Commits `9ff380c` (copy on removals) + `bedb6ea` (merge to prd).
- **2026-08-08:** Premium polish + SEO rollout (see old `eauclairetreetrim-com-build-plan.md` for the build pipeline). Mobile hero refinements, badge strip, wordmark consistency, font stack alignment, sub-page structure fix, FAQ schema, custom OG image. Final prd hash `9ee0a5f`. Single clean dev→prd flow.
- **2026-08-08:** Domain procured + 6 pages built. Subagent QA pass (axe-core, JSON-LD validation, internal-link integrity, sister-site cross-link check — all clean).
- **2026-08-08:** POLISH pass via `web-design` skill. Fixed 6 CSS orphan blocks, added missing CSS for `.why-insured-badge` and `.contact-option-card`, updated all "Free Consultation" → "Free Assessment", reduced header logo from 200px to 42px, cropped white background from logo PNGs, removed decorative `bounceDown` animation (prefers-reduced-motion compliance).

---

*This is a living document. Update the Status header + §0 In-flight + Change Log on every meaningful change. Inherits conventions from the workspace `runbook-tracking` skill.*
