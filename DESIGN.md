# DESIGN.md — Eau Claire Tree Trimming

**Mode:** SHIPPED (per `web-design` skill)
**Created:** 2026-08-08
**Last updated:** 2026-10-01 (token system correction + canonical phone swap + design parity with removals)

---

## Design Read (declared aloud)

> "Reading this as: local service microsite for homeowners researching tree care, with a **quiet-authority language** (navy + gold truck-signage brand system, Great Vibes + Barlow Condensed + DM Sans typography, restrained motion), aligned to the **Eau Claire Tree Removals design family** with its own **trim/care-specific editorial voice**."

---

## Client

| Field | Value |
|---|---|
| **Business** | Eau Claire Tree Trimming (division of Eau Claire Tree Service) |
| **Owner** | Rick Olson (20+ years) |
| **Phone** | (715) 834-5239 |
| **Email** | rickolson456@gmail.com |
| **Service area** | Eau Claire, Chippewa Falls, Altoona, Menomonie, Mondovi, Bloomer (6 cities, matches sister sites) |
| **Parent brand** | EauClaireTreeService.com (managed by Rick's wife, do not touch) |

## Service focus

| Service | Status |
|---|---|
| Tree trimming & pruning | PRIMARY (seasonal pruning, crown work, deadwood removal, shape restoration) |
| Tree health & care | PRIMARY (disease diagnosis, treatment plans, fertilization, pest management) |
| Land clearing | NOT a service (sister site `eauclairetreeremovals.com` owns this) |
| Stump grinding | NOT a service (sister site `eauclairetree.com` will own this after prune) |
| Tree removal | NOT a service (sister site `eauclairetreeremovals.com` owns this) |

## Audience

**Eau Claire + Chippewa Valley homeowners with mature trees on their property.** Homeowners who:
- Want their trees to look good and stay healthy
- Care about property value and curb appeal
- Want a knowledgeable local arborist, not a national chain
- Prefer phone calls to contact forms (Rick handles this himself)
- Are researching "tree trimming Eau Claire" or "tree pruning near me" or "tree care service"

## Differentiation vs sister sites

| | Removals | Trim/Care (this) |
|---|---|---|
| **Voice** | Craft, "done right", permanence | Calm, proactive, "we keep your trees healthy" |
| **Hero** | Storm damage, hazard tree | Healthy mature tree in manicured yard |
| **H1 (homepage)** | "Done right. Done safely." (synced 2026-10-01) | "Healthy trees. Year after year." |
| **CTA** | "Call Now — Free Estimate" | "Call Now" (direct, no qualification) |
| **Hours** | 24/7 (emergency work) | None (proactive work, no urgency) |
| **Stats** | 20+ years, licensed/insured, named equipment, fast response | 20+ years, licensed/insured, free consultations, Chippewa Valley |
| **Trust signal** | Rick's direct phone, 20+ years tenure | Rick's direct phone, 20+ years tenure |

**Voice pattern (both sites):** specific outcome > generic promise. Concrete details (named neighborhoods, response times, real equipment) over marketing cliches. Truth claims before features ("20+ Years of Local Experience" with proof, not "Fast Service"). Editorial > transactional.

---

## Design system (locked)

### Colors
| Token | Value | Use |
|---|---|---|
| `--navy` | `#1a2a4a` | Primary navy (CTAs, headings on light, brand mark) |
| `--navy-light` | `#243656` | Hover states, secondary navy surfaces |
| `--navy-dark` | `#131f3a` | Deep navy, hero overlays, footer |
| `--gold` | `#c9a84c` | Primary gold (CTA accents, eyebrow text, gold borders on badge pills) |
| `--gold-light` | `#d4bc6a` | Hover/active gold, decorative highlights |
| `--gold-dark` | `#a8893a` | Subdued gold for borders, dividers |
| `--gold-ink` | `#7a5f18` | AA-passing gold for body text on cream/white (use instead of `--gold` for inline text) |
| `--cream` | `#F2EBD9` | Light backgrounds, off-white sections, page base |
| `--cream-soft` | `#f7f0e3` | Subtle accent backgrounds |
| `--cream-dark` | `#e8e0c9` | Cards, table headers |
| `--cream-darker` | `#d8cfb6` | Borders, dividers on cream |
| `--white` | `#ffffff` | Pure white surfaces |
| `--text-dark` | `#0f1623` | Body text |
| `--text-mid` | `#4a4a4a` | Secondary text |

**Why navy + gold:** extracted from truck signage (see `/workspace/clients/rick-olson/eau_claire_tree_service/logo.png`). Consistent brand identity across all Rick-operated microsites. Green tokens (legacy forest palette) are **aliased to navy/gold** in the CSS — old rules still reference them and get navy/gold automatically.

**Anti-slop guard:** No purple-blue gradients, no beige+brass+espresso artisan palette, no Inter+slate-900 default.

### Fonts
- **Display/Logo:** Great Vibes 400 (script, "Eau Claire" wordmark only)
- **Headlines:** Barlow Condensed 700/800 (compressed sans-serif, "TREE TRIMMING" wordmark + section titles)
- **Body:** DM Sans 400/500/600 (clean sans-serif, body copy + UI)

Loaded via single Google Fonts request: `Great+Vibes|Barlow+Condensed:wght@700;800|DM+Sans:wght@400;500;600&display=swap`.

### Motion
- 140-220ms for control transitions
- Animate `transform` and `opacity` only — never `width`, `height`, `top`, `left`
- One motion language across all 6 pages
- `prefers-reduced-motion: reduce` fallback required on all animations
- No decorative loops, no particle effects, no custom cursors
- Scroll-reveal pattern (matches removals site proven implementation)

### Layout rules
- 1 eyebrow per 3 sections max (per anti-slop rules)
- No 3 consecutive zigzag layouts
- No 6 equal white cards in a row (vary composition)
- No 3-card equal columns (asymmetric, editorial)
- Type scale: H1 ~48-64px, H2 ~32-40px, H3 ~20-24px, body 16-17px

---

## Hub-and-spoke constraints (NON-NEGOTIABLE)

| Rule | Reason |
|---|---|
| NO links to `eauclairetreeremovals.com` or `eauclairetree.com` from any page | PBN signal, Google penalty risk |
| NO separate GBP for `eauclairetreetrim.com` | Google policy — multiple listings for same operator prohibited |
| NO citation building (Yelp, BBB, etc.) for this site | Citations only on parent `EauClaireTreeService.com` |
| `parentOrganization` JSON-LD block on every page | Schema declares the relationship to parent |
| Single outbound link in footer to parent | "A service of Eau Claire Tree Service" |
| NO "Call Eau Claire Tree Service" or "Call Eau Claire Tree Removals" CTAs | Only Rick's direct phone |

---

## Schema template (every page)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TreeService"],
  "@id": "https://eauclairetreetrim.com/#organization",
  "name": "Eau Claire Tree Trimming",
  "alternateName": "Eau Claire Tree Service — Trimming & Care Division",
  "url": "https://eauclairetreetrim.com/",
  "telephone": "+1-715-834-5239",
  "email": "rickolson456@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Eau Claire",
    "addressRegion": "WI",
    "postalCode": "54701",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Eau Claire"},
    {"@type": "City", "name": "Chippewa Falls"},
    {"@type": "City", "name": "Altoona"},
    {"@type": "City", "name": "Menomonie"},
    {"@type": "City", "name": "Mondovi"},
    {"@type": "City", "name": "Bloomer"}
  ],
  "priceRange": "$$",
  "parentOrganization": {
    "@type": "Organization",
    "@id": "https://eauclairetreeservice.com/#organization",
    "name": "Eau Claire Tree Service",
    "url": "https://eauclairetreeservice.com/",
    "telephone": "+1-715-834-5239"
  }
}
```

**Phone format:** Always `+1-715-834-5239` (E.164). Never `(715) 834-5239` raw in JSON-LD.

---

## Required footer (every page)

```html
<div class="parent-brand-footer">
  <p>A service of <a href="https://eauclairetreeservice.com/" rel="noopener">Eau Claire Tree Service</a></p>
</div>
```

CSS for `.parent-brand-footer` already exists in `/workspace/clients/rick-olson/eau_claire_tree_removals/css/style.css` — copy verbatim.

---

## Pages to build (6)

| # | File | Purpose | Model template |
|---|---|---|---|
| 1 | `index.html` | Homepage | removals/index.html |
| 2 | `tree-trimming.html` | Service: trimming & pruning | removals/tree-removal.html |
| 3 | `tree-care.html` | Service: tree health & care | removals/lot-clearing.html |
| 4 | `chippewa-falls.html` | City landing | removals/chippewa-falls.html |
| 5 | `eau-claire.html` | City landing | removals/eau-claire.html |
| 6 | `contact-us.html` | Contact | removals/contact-us.html |

### Per-page intent

**1. `index.html`** (SHIPPED 2026-08-08)
- Title: "Eau Claire Tree Trimming | Tree Trimming & Care | Western Wisconsin"
- H1: "Healthy trees. Year after year." (shipped)
- Hero subhead: "Seasonal pruning, crown work, disease treatment and health plans throughout Western Wisconsin. Licensed, insured, and every call is answered by Rick personally." (shipped)
- Hero image: `images/hero/hero-main-1920w.jpg` (arborist in harness mid-cut, golden hour)
- 2 service cards: Tree Trimming & Pruning + Tree Health & Care
- Why us: 4 cards (20+ years, licensed/insured, free assessment, healthy tree/property value)
- Trust strip: 3-badge pill row (Licensed & Insured / Free Assessment / 20+ Years Experience)
- Service area: 6 city cards
- CTA band: "Ready for Healthier Trees?" + phone

**2. `tree-trimming.html`**
- Title: "Tree Trimming & Pruning Services | Eau Claire Tree Trimming"
- H1: "Expert Tree Trimming" (matches removals "Expert Tree Removal" pattern)
- Hero image: `images/hero/service-trimming-1920w.jpg`
- 4-step process: Free consultation → Tree health assessment → Custom pruning plan → Clean-up + haul-away
- Why trimming matters: 3-4 bullets (safety, tree health, aesthetics, property value)
- FAQ: 4-5 questions
- 6-city service area grid

**3. `tree-care.html`**
- Title: "Tree Health & Care Services | Eau Claire Tree Trimming"
- H1: "Expert Tree Health Care"
- Hero image: `images/hero/service-health-1920w.jpg`
- 4-step process: Consultation → Diagnosis → Treatment plan → Follow-up
- Why care matters: 3-4 bullets (longevity, prevention, cost savings, property value)
- FAQ: 4-5 questions
- 6-city service area grid

**4. `chippewa-falls.html`**
- Title: "Tree Trimming in Chippewa Falls, WI | Eau Claire Tree Trimming"
- H1: "Tree Trimming & Care in Chippewa Falls"
- 6 neighborhood cards (Downtown, Northside, Southside, Lake Wissota area, Anson, etc.)
- Chippewa-Falls-specific FAQ
- Internal links: home, tree-trimming, contact-us

**5. `eau-claire.html`**
- Title: "Tree Trimming in Eau Claire, WI | Eau Claire Tree Trimming"
- H1: "Tree Trimming & Care in Eau Claire"
- 6 neighborhood cards (Downtown, Southside, Northside, Putnam Heights, Lake Altoona/Altoona adjacent, East Side & Rural Eau Claire County) — same as removals site
- Eau-Claire-specific FAQ
- Internal links: home, tree-trimming, contact-us

**6. `contact-us.html`**
- Title: "Contact Eau Claire Tree Trimming"
- H1: "Talk to Rick — Free Consultation"
- 7 sections (mirror removals contact page exactly):
  1. Page hero
  2. Trust strip (3 badges)
  3. Split contact (60/40 — phone card + Best Ways panel)
  4. Why-call section (3 bullets)
  5. Enhanced areas (6 cities w/ descriptors)
  6. FAQ (4-5 questions)
  7. CTA band
- FAQPage JSON-LD
- Internal links: home, tree-trimming, tree-care

---

## Assets (ready)

### Logo
- `images/logo-420w.png` (95KB) — primary logo, badge style with tree icon + "EAU CLAIRE / TREE TRIMMING" wordmark
- `images/logo-840w.png` (343KB) — retina version

### Hero images (6)
- `images/hero/hero-main-1920w.jpg` (625KB) + `hero-main-640w.jpg` (91KB) — arborist in harness mid-cut
- `images/hero/hero-care-1920w.jpg` (539KB) + `hero-care-640w.jpg` (72KB) — healthy trees in suburban yard
- `images/hero/service-trimming-1920w.jpg` (356KB) + `service-trimming-640w.jpg` (61KB) — two arborists up a tree
- `images/hero/service-pruning-1920w.jpg` (218KB) + `service-pruning-640w.jpg` (45KB) — pruning close-up
- `images/hero/service-health-1920w.jpg` (252KB) + `service-health-640w.jpg` (49KB) — health diagnostic
- `images/hero/service-crown-1920w.jpg` (463KB) + `service-crown-640w.jpg` (64KB) — crown work result

### Stock image (1, backup)
- `images/stock/pexels-oak-1920w.jpg` (760KB) + `pexels-oak-640w.jpg` — beautiful mature oak tree

### Favicon
- `favicon.png` (51KB) — minimalist green tree icon

### CSS + JS (canonical source of truth = `/workspace/clients/rick-olson/eauclairetreetrim/css/style.css`)
- `css/style.css` — canonical style system (~49KB, 1972 lines). This is the source of truth for ALL sister microsites.
- `js/main.js` — canonical JS (~3KB, 103 lines). Drawer menu, smooth-scroll, scroll-reveal.

**Design parity (locked 2026-10-01):** `eauclairetreeremovals.com` CSS + JS cloned from this repo. Going forward, any CSS/JS change is made here first and propagated to sister sites. Hub-and-spoke design system.

---

## Coordination (locked, all resolved)

- **Logo:** AI-generated (CF Workers AI, flux-1-schnell) ✅
- **Hero images:** AI-generated (CF Workers AI) ✅
- **Service area:** 6 cities matching sister sites ✅
- **CTA:** "Call Now" (no estimate/consultation qualifier) ✅
- **Hours:** None published (matches parent) ✅
- **Phone format:** E.164 `+1-715-834-5239` in schema, `(715) 834-5239` in visible copy ✅
- **Canonical phone:** Switched from `(715) 579-1942` to `(715) 834-5239` on 2026-10-01. Both numbers remain active per Rick's confirmation. ✅
- **Design parity with removals:** CSS + JS canonicalized here on 2026-10-01. Trim is the source of truth going forward; removals mirrors. ✅

---

## Build status (SHIPPED 2026-08-08)

All 6 pages built and deployed per the recommended subagent order below. Trim is the canonical design system for the Eau Claire Tree Service microsite family — use this site as the build template for any new sister site going forward.

### Subagent build order (kept for reference / new sister sites)

1. Copy `css/style.css` and `js/main.js` from this repo to the new sister site
2. Build `index.html` first (homepage sets the design language)
3. Build service pages (one per primary service)
4. Build `eau-claire.html` and other city pages (city page templates)
5. Build `contact-us.html` (most complex, save for last)
6. Generate `sitemap.xml` with all URLs
7. Update all internal `href` references to match the new page filenames

---

## What NOT to do (from anti-slop rules)

- ❌ NO purple-blue glow gradients
- ❌ NO Inter as default font (use Playfair + Source Sans 3)
- ❌ NO 3-card equal columns in a row
- ❌ NO "Get in touch" + "Contact us" on same page (one CTA only)
- ❌ NO Lorem ipsum, no fake testimonials, no fake precision numbers
- ❌ NO "revolutionary" / "seamless" / "cutting-edge" marketing adjectives
- ❌ NO oversized rounded corners everywhere
- ❌ NO decorative effects that don't support comprehension

---

## Verification gates (kept for future iterations / new sister sites)

- [ ] All pages parse at https://validator.schema.org/ with zero errors
- [ ] All `parentOrganization` blocks present
- [ ] All phone numbers in E.164 format in JSON-LD
- [ ] All visible phone numbers in display format `(715) 834-5239`
- [ ] Single outbound link in footer to parent (no sibling links)
- [ ] No fake testimonials, no fake precision numbers
- [ ] WCAG contrast gate passes (use `verify-contrast-failures.js` to filter timing false positives)
- [ ] Playwright visual QA at desktop + mobile, no broken layouts
- [ ] Sitemap.xml includes all 6 URLs with correct `lastmod` dates

## Last design sync

**2026-10-01:** CSS + JS canonicalized to trim site. `eauclairetreeremovals.com` CSS/JS cloned from this repo. Phone `(715) 579-1942` → `(715) 834-5239` across all 4 sites + docs. Removals copy editorial voice aligned with trim (H1 "Done right. Done safely.", Why "The Job Done Right, Every Time"). See git log for `commit 29291ef` (trim canonicalization) + `commit 9ff380c` (removals copy).

---

*This is the source of truth for the build. Subagent brief should reference this file directly.*
