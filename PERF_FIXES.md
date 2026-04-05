# Performance Fixes — cleanngo.be

Baseline scores (Lighthouse simulated mobile, throttled 4G, production build):

| Page | Before | After | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|---|
| `/` | 61 | **42** ⚠️ | 4.3s | 6.1s | 1000ms | 0 |
| `/services` | 72 | **74** ↑ | 3.0s | 5.1s | 90ms | 0.017 |
| `/contact` | 75 | **76** ↑ | 3.4s | 4.6s | 80ms | 0.017 |
| `/services/nettoyage-residentiel` | 79 | **80** ↑ | 2.8s | 4.2s | 80ms | 0.005 |
| `/services/grand-nettoyage` | 79 | **81** ↑ | 2.8s | 4.0s | 90ms | 0.032 |
| `/services/nettoyage-post-travaux` | 65 | **81** ↑↑ | 1.7s | 4.2s | 220ms | 0.005 |
| `/services/emmenagement-demenagement` | 77 | **81** ↑↑ | 2.9s | 4.1s | 40ms | 0.021 |
| `/services/bureaux-commerces` | 78 | **86** ↑↑ | 2.0s | 4.1s | 0ms | 0.005 |
| `/services/nettoyage-vitres` | 73 | **86** ↑↑ | 1.9s | 4.1s | 0ms | 0.021 |
| `/services/panneaux-solaires` | 59 | **82** ↑↑ | 2.9s | 4.1s | 0ms | 0.005 |
| `/services/nettoyage-toiture` | 67 | **85** ↑↑ | 2.0s | 4.1s | 0ms | 0.005 |
| `/services/nettoyage-facade` | 57 | **86** ↑↑ | 1.7s | 4.1s | 50ms | 0.005 |
| `/services/nettoyage-terrasse` | 72 | **85** ↑↑ | 2.0s | 4.1s | 0ms | 0.005 |
| `/services/nettoyage-veranda` | 75 | **86** ↑↑ | 2.0s | 4.1s | 0ms | 0.005 |

> ⚠️ `/` regressed to 42 — homepage TBT spiked to 1000ms. Likely the `requestIdleCallback`
> wrapper conflicting with the Hero entrance + slot machine animation running simultaneously.
> Needs investigation.

---

## Fix 1 — LCP: Preload hero images ✅ DONE

**Metric impact:** LCP (-2 to -3s on service pages, -1.5s on homepage)
**Files to touch:**
- `src/layouts/BaseLayout.astro` — already has `<slot name="head" />`, use it
- `src/pages/services/[slug].astro` — inject `<link rel="preload">` + add `fetchpriority="high"` to the hero `<Picture>`
- `src/pages/index.astro` — preload the video poster (`/images/glass_cleaning.avif`)
- `src/components/ui/Picture.astro` — accept and forward a `fetchpriority` prop

**What to do:**
1. Add a `fetchpriority?: "high" | "low" | "auto"` prop to `Picture.astro` and pass it to `<img>`
2. In `[slug].astro`, pass `fetchpriority="high"` to the hero `<Picture>` and inject a `<link rel="preload">` in the `head` slot using the correct AVIF/JPG path
3. In `index.astro`, inject `<link rel="preload" as="image" href="/images/glass_cleaning.avif" type="image/avif">` in the `head` slot

---

## Fix 2 — TBT: Defer scroll-triggered GSAP init ✅ TODO

**Metric impact:** TBT (-200 to -500ms across all pages)
**Files to touch:**
- `src/layouts/BaseLayout.astro` — the main animation script block
- `src/components/ui/ServiceCard.astro` — per-card GSAP scroll setup

**What to do:**
1. In `BaseLayout.astro`, wrap the scroll-triggered animation setup (`[data-reveal]` loops + `magneticEffect`) inside `requestIdleCallback` (with a `setTimeout` fallback for Safari). The hero entrance in `Hero.astro` stays synchronous — it must fire immediately.
2. In `ServiceCard.astro`, wrap the `ScrollTrigger.create` calls in the same `requestIdleCallback` pattern.

**Constraint:** Do NOT defer `Hero.astro`'s timeline. Do NOT change any animation values, easing, or durations.

---

## Fix 3 — CLS: Reserve image space ✅ TODO

**Metric impact:** CLS (eliminate layout shift on all pages)
**Files to touch:**
- `src/components/ui/Picture.astro` — add `width` and `height` props

**What to do:**
1. Add optional `width` and `height` props to `Picture.astro` and forward them to both `<img>` and `<source>`. When omitted, fall back to `width="1600" height="900"` as a safe default aspect ratio for fluid/cover images.

---

## Re-audit

After all three fixes are applied:
1. Rebuild: `npm run build`
2. Re-run audit: `bash /tmp/lh_audit.sh` (update port if needed)
3. Update baseline table above with new scores
