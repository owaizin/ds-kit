# elevation: border-led

Borders communicate containment; shadows are deliberately absent.

## When to use / when not

Choose for raised surfaces, overlays and modal containers with explicit ordering.

Do not use shadows as the sole boundary in dark themes or high contrast. Elevation is not z-index and does not escape ancestor stacking contexts.

## Usage decisions

- Raised: local cards; overlay: menus/popovers; modal: a dialog container. These values do not supply dialog semantics or focus management.
- Native shadow arrays describe intent; platform APIs differ in spread, clipping and multiple-shadow support. Translate and render-test them.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). 

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-elevation-raised` | `none` | — | Independently derived: Original two-lobe geometry increases offset and blur by level; opacity stays below 0.2 per lobe. |
| `--ds-elevation-edge-raised` | `0.0625rem` | 1 | Independently derived: A visible edge survives surfaces where black shadows have little contrast. |
| `--ds-elevation-overlay` | `none` | — | Independently derived: Original two-lobe geometry increases offset and blur by level; opacity stays below 0.2 per lobe. |
| `--ds-elevation-edge-overlay` | `0.0625rem` | 1 | Independently derived: A visible edge survives surfaces where black shadows have little contrast. |
| `--ds-elevation-modal` | `none` | — | Independently derived: Original two-lobe geometry increases offset and blur by level; opacity stays below 0.2 per lobe. |
| `--ds-elevation-edge-modal` | `0.125rem` | 2 | Independently derived: A visible edge survives surfaces where black shadows have little contrast. |
| `--ds-elevation-edge-color` | `#777777` | — | Independently derived: Independent middle grey boundary; recheck against adopted surfaces. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-overlay { box-shadow: var(--shadow-overlay, none); border: var(--surface-edge-width, 1px) solid var(--surface-edge, #777777); }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `209d73fd0cec9d9926510c72f646cea6a14f1c883fdd82991d3058298827e20e`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/elevation/options/border-led/tokens.css
```

Exit status: `0`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

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
    ds-loop scorecard foundations/elevation/options/border-led/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                        report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
