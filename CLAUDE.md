# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository shape

Vite + React SPA. The entire app is a single component file at `src/reverse-vaccinology.jsx` (~1170 lines) mounted by `src/main.jsx` into `index.html`. Commands:

```bash
npm install         # first time only
npm run dev         # starts Vite at http://localhost:5173
npm run build       # production build to dist/
npm run preview     # serve the production build locally
```

There is no test suite and no linter configured.

## Architecture

`src/reverse-vaccinology.jsx` is an educational single-page app (Portuguese, pt-BR) about **reverse vaccinology**, structured as one default-exported `App` that composes four full-screen sections navigated by a fixed top nav:

- `Nav` — fixed header; section ids: `hero`, `pipeline`, `mhc`, `ramachandran`.
- `Hero` — landing section.
- `Pipeline` — reverse vaccinology workflow visualization.
- `MHCSection` — MHC / epitope prediction explainer; contains the inline-SVG *A. baumannii* drawing inside `renderVisual()` when `p.visual === "bacteria"`.
- `Ramachandran` — interactive SVG scatter plot.
- `App` — wires sections together, tracks the active nav item via `IntersectionObserver`, and injects global CSS (keyframes + responsive `@media` rules) via a single `<style>` tag.

All styling is **inline `style={}` objects** driven by two module-level constants near the top of the file:

- `COLORS` — dark-theme palette (bg/surface/accent/warning/danger/purple/blue/pink + dim/glow variants). Reuse these tokens instead of hardcoding hex values.
- `FONT` (JetBrains Mono stack) and `FONT_BODY` (Inter stack).

Responsiveness uses a hybrid approach: typography and paddings use `clamp()` directly in inline styles, and layout switches (Ramachandran plot min-width, nav item sizes, pipeline button sizes) are handled by `@media` rules injected in the `<style>` tag targeting classNames (`nav-items`, `pipeline-steps`, `rama-row`, `rama-plot`, `rama-svg`). When in doubt, prefer `clamp()` for fluid values and the injected `@media` block with `!important` descendant selectors for layout breakpoints — don't refactor to CSS modules.

Interactive visualizations use `useState`/`useRef`/`useMemo` and render to SVG inline — keep new visualizations self-contained within their section component rather than extracting shared chart infrastructure, matching the current file's style.

## Language & domain

- UI copy is **Portuguese (pt-BR)**; preserve language when editing user-facing strings.
- Domain is immunoinformatics / vaccine design (MHC-I/II epitope prediction, Ramachandran φ/ψ angles, pipeline stages). When changing scientific content, flag uncertainty rather than inventing values.
