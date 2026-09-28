# motion: productive

Short feedback and transitions for repeated work.

## When to use / when not

Choose one timing character. Carbon informs the productive/expressive distinction only; these numbers and curves are independently selected.

Do not make routine work wait for decoration, autoplay movement, or conceal state changes until an animation ends.

## Usage decisions

- tokens.css sets all duration tokens to 0ms and travel to 0rem under prefers-reduced-motion: reduce. Consumers must use these tokens, not cached durations.
- Only enable nonessential transforms in prefers-reduced-motion: no-preference. State updates still occur when duration is zero. Use platform accessibility preferences on native; do not rely on animationend callbacks to finish work.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). [Carbon motion](https://carbondesignsystem.com/elements/motion/overview/) informs the productive/expressive distinction only. [WCAG interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) informs the opt-out; no source values or prose are copied.

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-motion-fast` | `80ms` | 80 | Independently derived: productive: independently chosen 80ms budget for fast transitions. |
| `--ds-motion-standard` | `160ms` | 160 | Independently derived: productive: independently chosen 160ms budget for standard transitions. |
| `--ds-motion-deliberate` | `240ms` | 240 | Independently derived: productive: independently chosen 240ms budget for deliberate transitions. |
| `--ds-motion-ease-enter` | `cubic-bezier(0.2, 0, 0, 1)` | — | Independently derived: Original deceleration curve; x coordinates remain in [0,1]. |
| `--ds-motion-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | — | Independently derived: Original acceleration curve for exiting content. |
| `--ds-motion-distance` | `0.5rem` | 8 | Independently derived: One or two 8px steps; never required to understand a state change. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
/* Motion is opt-in; the base state updates immediately. */
@media (prefers-reduced-motion: no-preference) {
  .example-item { transition: transform var(--motion-standard, 160ms) var(--motion-enter, ease-out); }
}
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `113ead51ead2d0e23040cb41aa1565c5e33e4ad66060c3066790311819f8c5d9`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/motion/options/productive/tokens.css
```

Exit status: `0`. Standard output, verbatim except the kit's absolute root path, which is removed:

```text
  config: ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  ✓ clean — every rule that ran could judge this source, and found nothing


  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  0
    colors-per-distinct-in-scope 0
    ambiguous-share              0

  next
    ds-loop scorecard foundations/motion/options/productive/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                     report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
