# breakpoints-grid: content-first

Content cards start near 18rem; breakpoints add columns only after allowing gaps and gutters.

## When to use / when not

Start here, then move breakpoints where real content stops fitting.

Do not infer device categories or promise that desktop layouts work on native unchanged. CSS custom properties cannot supply media-query conditions.

## Usage decisions

- Resolve width from the viewport or an explicitly chosen container, never from device names. The specimen simulates a viewport in a scrollable region; its inner grid retains the maximum content width.
- Media queries below repeat numeric thresholds intentionally: var() is invalid there. Generate them from JSON to avoid drift.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). 

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-breakpoint-small` | `40rem` | 640 | Independently derived: Rounded content capacity threshold: start near 18rem per card plus gaps/gutters. |
| `--ds-breakpoint-medium` | `64rem` | 1024 | Independently derived: Rounded content capacity threshold: start near 18rem per card plus gaps/gutters. |
| `--ds-breakpoint-large` | `88rem` | 1408 | Independently derived: Rounded content capacity threshold: start near 18rem per card plus gaps/gutters. |
| `--ds-grid-max` | `72rem` | 1152 | Independently derived: Independent maximum working width; wide viewports retain side margins. |
| `--ds-grid-gap` | `1rem` | 16 | Independently derived: One 16px content gap. |
| `--ds-grid-gutter` | `1.5rem` | 24 | Independently derived: 24px outer gutter; narrow layouts must preserve available content width. |
| `--ds-grid-columns-0` | `1` | 1 | Independently derived: Column count for the corresponding ordered width state. |
| `--ds-grid-columns-1` | `2` | 2 | Independently derived: Column count for the corresponding ordered width state. |
| `--ds-grid-columns-2` | `3` | 3 | Independently derived: Column count for the corresponding ordered width state. |
| `--ds-grid-columns-3` | `4` | 4 | Independently derived: Column count for the corresponding ordered width state. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-grid { display:grid; grid-template-columns:repeat(1,minmax(0,1fr)); gap:var(--grid-gap,1rem); }
@media (min-width:40rem) { .example-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (min-width:64rem) { .example-grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
@media (min-width:88rem) { .example-grid { grid-template-columns:repeat(4,minmax(0,1fr)); } }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `e72bb11b21e01fb04394519c647ddb49f4fb0bade5d73de5aa19ac6a9609b594`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/breakpoints-grid/options/content-first/tokens.css
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
    ds-loop scorecard foundations/breakpoints-grid/options/content-first/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                                  report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
