# Application composition validation — 2026-10-02

## Outcome

The kit now explains how to compose application screens, rather than supplying foundation values alone. All twelve foundation entry guides have application-use rules; the former layout/iconography placeholders have authored guidance; three original recipes and three working example screens exercise those rules. The checked token inventory remains 22 options across ten token categories.

The original collection, settings and detail examples show comparable alignment, grouping and primary/secondary hierarchy to the selected local Tailwind application UI renders. This is **the author's qualitative judgment**, supported by rendered examples and measured behavior, not a universal claim that ds-kit surpasses Tailwind. Mobile collections remain more verbose, and the kit does not yet offer a complete icon family or production component contracts.

[Open the original examples](../specimens/application-ui/index.html) · [Read the composition guide](../foundations/layout-composition/README.md) · [Source/observation register](application-ui-benchmarks.md).

## What was tested in isolation

The fictional Fieldwork screens were created from the revised kit's existing CSS options, twelve foundation guides and collection/settings/detail recipes. No ds-loop design advice, second design library, Tailwind utilities/runtime, external font or vendor asset appears in their implementation. Markup, CSS, behavior, icons, names and data are independently authored.

This is a solo informed forward test: the author had already studied the benchmark. It is not a blind independent-agent retrieval test. The work establishes that the revised guidance can support these compositions; it does not estimate what every future agent/team will produce.

The starting repository revision was `f9ce8fb99ae0da393b628277cc87ab8ff10d63c2`, with a clean ds-kit working tree. The changes are delivered in this repository; the unrelated ds-loop working tree was left untouched during the study. Before this work, layout/composition, iconography and product patterns were reserved placeholders; other foundation entry guides mainly routed to option values. There was no controlled before/after screen-generation experiment, so improvements in future model output are not statistically measured.

## Visual comparison

Selected sources and byte hashes are in the [benchmark register](application-ui-benchmarks.md). Original screens and benchmark sources were rendered at matched 1440px / 375px widths. The three primary component benchmarks were also rendered in dark mode at both widths. The private harness used Tailwind CSS/CLI 4.1.13, with an explicit class-based dark variant; the archive supplies source snippets rather than complete runnable apps.

Remote images and vendor interaction scripts were not loaded. Missing logo/avatar assets in full-page references limit judgments about branding and asset polish, but the form/table/fact sources do not depend on remote images. The benchmark interaction behavior was **not** tested; comparisons below judge composition, not feature parity or accessibility superiority. Raw source and benchmark pixels remain in `/tmp/ds-kit-tailwind-20261002`, outside the distributable kit.

| Criterion | Benchmark observation | Original kit result / judgment |
|---|---|---|
| Task hierarchy | Page identity/actions above content; full-page references distinguish primary work from supporting activity | Collection's work table remains dominant; settings explains each section; detail puts facts/findings before activity. Comparable task hierarchy. |
| Alignment | Stable content rail, repeated label/value and field starts | Header, filters and table share a rail; form fields share a capped measure; detail facts align independently of activity. Comparable structure. |
| Grouping rhythm | Tight relationships within rows/fields; larger section boundaries | Distinct label/control, field/group and section gaps select existing kit steps. Comparable grouping without extra token scales. |
| Surface emphasis | Quiet neutral work regions; restrained edges; selective accent | Separate decorative dividers and control boundaries, one summary strip, an unraised table. Kit input edges are visibly stronger than the benchmark; this is an intentional affordance/contrast tradeoff. |
| Typography | Most labels/rows are small and stable; weight/colour separate priorities | 30px page title, 16px section role, 14px desktop body, 16px narrow input text; semantic levels remain correct. Application hierarchy is clear without applying a large heading role to every region. |
| Narrow information retention | Table source moves secondary fields beneath identity; form explanation stacks before inputs | Collection retains site, visit ID, scope, date/time, owner, status and action. Settings/detail retain their relationships. Kit mobile rows are longer; the guidance favours data retention over silently truncated unique values. |
| Theme | Separate dark surface/text/edge styles rather than blanket inversion | Both kit themes render consistently with measured example-specific contrast. No assertion that kit colours are better than the benchmark. |
| State/interaction | Static source illustrates selected/focus/empty/error treatments | Kit filtering/reset, invalid form/save/discard and review outcome actually work. Their browser tests verify these tasks; benchmark behavior remains unjudged. |
| Icon/brand polish | Sources use a consistent richer icon vocabulary and brand/portrait slots | Original examples use a small set of independently drawn symbols and a letter mark. Adequate to test layout; iconography guidance is not a finished asset library. |

## Issues found and corrections

- The first mobile summary occupied too much vertical space before the table. Replaced a tall stacked summary with an auto-fitting compact strip; redundant summary descriptions collapse on narrow screens while labels/counts remain. At larger text sizes its track count can reduce instead of forcing cramped columns.
- Native table headers defaulted to centred alignment. Explicit start alignment restored the row/heading rail, with end alignment retained for numeric readings/actions.
- At 200% root text scaling, mobile chrome and summary tracks could overflow. Wrapping header groups and bounded auto-fitting tracks resolved it. Positioning the labelled table scroll region prevents screen-reader-only labels escaping its containing context. Necessary table overflow remains local and keyboard-reachable.
- A proposed primary hover used a text-role colour as its background. In dark mode that role becomes pale, conflicting with white on-fill text. The final hover preserves the checked fill/on-fill pair and uses an underline cue. Colour guidance now explains the failure, and hover contrast is checked in both themes.
- The settings section marker did not follow the clicked anchor. It now updates `aria-current` with section navigation.

Early local HTTP import failures and an initial focus measurement targeting a hidden mobile control were test-harness issues. The final acceptance script serves its own files, checks that all foundation styles loaded, selects a visible control and asserts that its actual keyboard ring is active before measuring colour. Earlier incomplete measurements are not retained as passing evidence.

## Measured browser evidence

[Raw evidence](../specimens/application-ui/validation.json) records source hashes, browser version, case measurements, contrast samples and limits. Browser: Chrome 154.0.8037.95. The source hashes must match before relying on this receipt.

- **36** ordinary layout cases: three screens × six widths (320, 375, 768, 769, 1024, 1440) × two themes. No document-level horizontal overflow; visible controls meet the kit's 44px target minimum.
- **6** 200% root text-scaling cases: three screens at 375px and 1440px. Actual body text grows from 14px to 28px; no document overflow. This is text scaling, not a claim about every browser's page-zoom/platform behavior.
- **3** long-content stress cases: expanded titles plus a long identifier or helper text. No document overflow at 375px.
- **5** behavior groups: collection filter intersection/empty/reset/focus/mobile navigation; settings invalid-state/retained input/save/discard/selection marker; detail review status/announcement/duplicate prevention; keyboard skip/checkbox/focus plus forced-colour outline and reduced-motion transition; theme-swap/hover restoration/rapid flips and matched icon strokes.
- **6** rendered contrast groups: all three screens in both themes, with actual text, control boundary, primary hover and focus-on-canvas samples. These measure the example's rendered pairs, not all conceivable uses of a palette.
- No runtime, console, failed-network, missing-gallery-image or external-request errors in the final run.

| Screen / theme | Text samples | Lowest text ratio | Lowest control boundary ratio | Primary hover text | Focus on canvas |
|---|---:|---:|---:|---:|---:|
| collection / light | 90 | 4.77:1 | 3.60:1 | 4.77:1 | 4.26:1 |
| collection / dark | 90 | 5.07:1 | 3.43:1 | 5.07:1 | 3.93:1 |
| settings / light | 29 | 4.77:1 | 3.60:1 | 4.77:1 | 4.26:1 |
| settings / dark | 29 | 5.07:1 | 3.43:1 | 5.07:1 | 3.93:1 |
| detail / light | 42 | 4.77:1 | 3.69:1 | 4.77:1 | 4.26:1 |
| detail / dark | 42 | 5.07:1 | 3.47:1 | 5.07:1 | 3.93:1 |

Threshold comparisons use unrounded ratios: text/primary hover at least 4.5:1, control boundaries and measured focus/canvas pair at least 3:1. Decorative dividers deliberately have no control-boundary claim. Screen-reader operation, native rendering, placeholder/disabled/alpha variants outside the sampled cases and exhaustive accessibility conformance remain unverified.

Thirteen original screenshots are retained: three screens × desktop/mobile × light/dark, plus a mobile form-error state. [Gallery](../specimens/application-ui/index.html) and [screenshots](../specimens/application-ui/screenshots/). No licensed benchmark screenshots are distributed.

## Approved better-ui follow-up

The three approved polish findings are resolved in the guidance and examples:

- Theme changes suppress transitions on elements and pseudo-elements before updating colour roles. A forced style flush commits the change; two frame callbacks then restore normal interaction transitions. The browser check replays at 10% speed, confirms zero theme-swap transitions, verifies the original 80ms hover/easing returns and checks cleanup after rapid repeated flips.
- Navigation icons use 2px strokes beside semibold (600) labels. Their shapes use non-scaling strokes so the 20px glyph box does not thin the stroke. Guidance also records the 1.5px regular-text mapping.
- Closely nested rounded surfaces now use the explicit outer-radius = inner-radius + inset rule, with independent treatment beyond 24px padding and optical judgment for asymmetric insets.

The 45 layout/content cases and six rendered contrast groups still pass; the additional polish checks bring the behavior groups to five. Screenshots and source-hash evidence have been refreshed. These checks verify the approved fixes; a full optical-alignment review and every possible loading/animation state remain outside this follow-up's scope.

## Existing checks and continuation

`node scripts/check-options.mjs`: all 22 options pass. `node --test scripts/*.test.mjs`: all 26 tests pass. `node scripts/build-specimens.mjs --check`: generated foundation specimen remains current. `git diff --check`: no whitespace errors. Token CSS/JSON and generated option specimen were not changed by this guidance work.

The optional [application browser checker](../scripts/check-application-ui.mjs) is reproducible using available Playwright/Chromium; [commands and dependencies](../specimens/application-ui/README.md#run-and-verify). Source hashes in the evidence attribute its results to the current original screens. Re-run after changing them.

For a new application screen, start with `foundations/layout-composition/README.md`, choose a pattern, then read the foundation guides and selected option specs. Record consumer exceptions as project aliases/decisions. The next meaningful validation beyond this goal would be a blind fresh-context build or human preference comparison; no such result is claimed here.
