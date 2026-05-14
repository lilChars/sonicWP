# Enhancements Plan (Branch: enhancements)

## Goal
Upgrade the portfolio into a more emotional, game-like experience while keeping it fast, accessible, and production-ready.

## Creative Direction
- Keep the Sonic spirit: speed, momentum, confidence, bright worlds.
- Avoid copyrighted official assets, logos, and ripped game files.
- Use original or licensed art inspired by Green Hill aesthetics (grass islands, loops, checker patterns, palm silhouettes, sky gradients).

## Priorities

### 1) Content and Voice (High)
- Rewrite hero and section copy to feel less "UI-generic" and more human.
- Keep concise, punchy lines with a high-energy tone.
- Add 1-2 short iconic-style lines inspired by Sonic attitude (original wording, not direct trademarked slogans as core branding).
- Improve CTA clarity and consistency.

### 2) Visual Identity Upgrade (High)
- Add a stronger visual system:
  - Background layers (sky gradients, distant hills, subtle clouds).
  - Environmental accents (rings, loop arcs, motion streaks).
  - Better depth with parallax-like composition.
- Improve section rhythm and spacing to reduce "flat card" feeling.

### 3) Images and Illustrations (High)
- Add custom hero illustration set:
  - Character-inspired silhouette (original art, non-infringing).
  - Green Hill-inspired scene fragments.
- Add supporting section visuals (skills icons, small thematic separators).
- Export and optimize images (WebP/AVIF) with responsive sizes.

### 4) Animation System (High)
- Introduce a coherent animation language:
  - Entry reveals with stagger and stronger timing curves.
  - Background floating/parallax motion on desktop.
  - Green Hill-inspired ambient motion (cloud drift, ring rotation, shimmer lines).
- Add interaction polish:
  - Better button hover states.
  - Magnetic or spring-like CTA feedback.
- Respect reduced-motion preferences.

### 5) UX and Accessibility (Medium)
- Improve readability on all breakpoints.
- Audit color contrast and focus states.
- Ensure keyboard navigation remains clean after animation upgrades.

### 6) Performance and Delivery (Medium)
- Keep Lighthouse performance high after media additions.
- Lazy-load non-critical visuals.
- Minimize animation cost (GPU-friendly transforms, avoid layout thrashing).

## Work Phases

### Phase A - Copy + Structure
- Rewrite section text and CTA labels.
- Reduce overlong paragraphs and improve storytelling flow.

### Phase B - Art Direction Implementation
- Add themed backgrounds and decorative assets.
- Integrate visual separators and stronger composition.

### Phase C - Motion Pass
- Apply animation presets and section-specific motion behaviors.
- Tune timing for desktop/mobile separately.

### Phase D - QA + Polish
- Accessibility and performance checks.
- Final typography/spacing refinement.
- Deploy and test on production domain.

## Definition of Done
- Site feels distinctly Sonic-inspired without using official copyrighted assets.
- Copy sounds personal and intentional in English.
- Visuals and animation quality are noticeably improved.
- No regressions in mobile usability, accessibility, or deployment flow.
