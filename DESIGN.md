# DESIGN.md — Eau Claire Tree Trimming

**Mode:** NEW (per `web-design` skill)
**Created:** 2026-08-08
**Build status:** Asset prep complete. Subagent build kickoff ready.

---

## Design Read (declared aloud)

> "Reading this as: local service microsite for homeowners researching tree care, with a **quiet-authority language** (forest greens, professional serif headlines, restrained motion), leaning toward the **Eau Claire Tree Removals design family** but with its own **trim/care-specific character**."

---

## Client

| Field | Value |
|---|---|
| **Business** | Eau Claire Tree Trimming (division of Eau Claire Tree Service) |
| **Owner** | Rick Olson (20+ years) |
| **Phone** | (715) 579-1942 |
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
| **Voice** | Urgent, emergency, "we show up fast" | Calm, proactive, "we keep your trees healthy" |
| **Hero** | Storm damage, hazard tree | Healthy mature tree in manicured yard |
| **CTA** | "Call Now — Free Estimate" | "Call Now" (direct, no qualification) |
| **Hours** | 24/7 (emergency work) | None (proactive work, no urgency) |
| **Stats** | 47+ years, 24/7, 100% free estimates | 20+ years, licensed/insured, free consultations, Chippewa Valley |
| **Trust signal** | Rick's direct phone, 24/7 | Rick's direct phone, 20+ years tenure |

---

## Design system (locked)

### Colors
| Token | Value | Use |
|---|---|---|
| `--forest-primary` | `#1e3a1e` | Primary forest green (CTAs, headings on light) |
| `--forest-secondary` | `#2a5a2a` | Card backgrounds, hover states |
| `--forest-tertiary` | `#326632` | Hover, active states |
| `--cream` | `#f5f2e9` | Light backgrounds, off-white sections |
| `--cream-warm` | `#e8e2d0` | Subtle accent backgrounds |
| `--charcoal` | `#1a1a1a` | Body text |
| `--charcoal-soft` | `#3a3a3a` | Secondary text |
| `--sage` | `#7a8a6a` | Soft accent (use sparingly — only for "care" framing touches) |
| `--white` | `#ffffff` | Pure white |

**Anti-slop guard:** No purple-blue gradients, no beige+brass+espresso artisan palette, no Inter+slate-900 default.

### Fonts
- **Headlines:** Playfair Display 700/900 (serif, professional, same family as removals site)
- **Body:** Source Sans 3 400/600/700 (clean sans-serif, same family as removals site)

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
  "telephone": "+1-715-579-1942",
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
    "telephone": "+1-715-579-1942"
  }
}
```

**Phone format:** Always `+1-715-579-1942` (E.164). Never `(715) 579-1942` raw in JSON-LD.

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

**1. `index.html`**
- Title: "Tree Trimming & Care | Eau Claire Tree Trimming | Western Wisconsin"
- H1: "Healthy Trees, Year After Year."
- Hero subhead: "From seasonal pruning and crown work to disease treatment and health plans — we keep your trees strong, safe, and beautiful."
- Hero image: `images/hero/hero-main-1920w.jpg` (arborist in harness mid-cut, golden hour)
- 2 service cards: Tree Trimming & Pruning + Tree Health & Care
- Why us: 4 cards (20+ years, licensed/insured, healthy tree/healthy property, free consultations)
- Trust strip: 4 stats
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

### CSS + JS (clone from removals site)
- `css/style.css` (copy from `eau_claire_tree_removals/css/style.css`, ~40KB)
- `js/main.js` (copy from `eau_claire_tree_removals/js/main.js`, ~4KB)

---

## Coordination (locked, all resolved)

- **Logo:** AI-generated (CF Workers AI, flux-1-schnell) ✅
- **Hero images:** AI-generated (CF Workers AI) ✅
- **Service area:** 6 cities matching sister sites ✅
- **CTA:** "Call Now" (no estimate/consultation qualifier) ✅
- **Hours:** None published (matches parent) ✅
- **Phone format:** E.164 `+1-715-579-1942` in schema, `(715) 579-1942` in visible copy ✅

---

## Build order (recommended for subagent)

1. Copy `css/style.css` and `js/main.js` from `/workspace/clients/rick-olson/eau_claire_tree_removals/` to `/workspace/clients/rick-olson/eauclairetreetrim/`
2. Build `index.html` first (homepage sets the design language)
3. Build `tree-trimming.html` (service page template)
4. Build `tree-care.html` (parallel structure to tree-trimming)
5. Build `eau-claire.html` and `chippewa-falls.html` (city page templates)
6. Build `contact-us.html` (most complex, save for last)
7. Generate `sitemap.xml` with all 6 URLs
8. Update all internal `href` references to match the 6 new page filenames

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

## Verification gates (before deploy)

- [ ] All 6 pages parse at https://validator.schema.org/ with zero errors
- [ ] All `parentOrganization` blocks present
- [ ] All phone numbers in E.164 format in JSON-LD
- [ ] All visible phone numbers in display format `(715) 579-1942`
- [ ] Single outbound link in footer to parent (no sibling links)
- [ ] No fake testimonials, no fake precision numbers
- [ ] WCAG contrast gate passes (use `verify-contrast-failures.js` to filter timing false positives)
- [ ] Playwright visual QA at desktop + mobile, no broken layouts
- [ ] Sitemap.xml includes all 6 URLs with correct `lastmod` dates

---

*This is the source of truth for the build. Subagent brief should reference this file directly.*
