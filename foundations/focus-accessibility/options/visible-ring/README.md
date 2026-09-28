# focus-accessibility: visible-ring

Two independently selected middle greys each pass 3:1 against the declared light and dark surfaces. A 2px outline and 2px offset expose the indicator outside the control.

## When to use / when not

Use where a custom ring is needed and all adjacent surfaces have been measured.

This is not a full accessibility certification. Recheck images, gradients, branded fills, clipping and every new surface; retain the browser indicator if it is better.

## Usage decisions

- Use :focus-visible; never remove the default outline without a visible replacement. Leave room for the ring and check overflow clipping.
- Use native controls and natural Tab order. Preserve a system-colour outline in forced-colors mode. Minimum target is a kit choice, not a claim that every WCAG target must be 44px.
- No focus animation is required. Respect reduced-motion preferences elsewhere; use platform focus APIs on native.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). [WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) supplies the 3:1 measurement criterion, not the token values.

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-focus-ring` | `#777777` | — | Independently derived: Independent middle greys: adjust luminance until contrast clears 3:1 against all four reference surfaces. |
| `--ds-focus-ring-alternate` | `#808080` | — | Independently derived: Independent alternate middle greys; validated against the same four surfaces. |
| `--ds-focus-width` | `0.125rem` | 2 | Independently derived: Original kit target: 2px ring and offset, 44px minimum control target. |
| `--ds-focus-offset` | `0.125rem` | 2 | Independently derived: Original kit target: 2px ring and offset, 44px minimum control target. |
| `--ds-focus-target-min` | `2.75rem` | 44 | Independently derived: Original kit target: 2px ring and offset, 44px minimum control target. |
| `--ds-focus-surface-light` | `#ffffff` | — | Independently derived: Invented reference surface, not an assertion about every adopted theme. |
| `--ds-focus-surface-light-muted` | `#f3f4f6` | — | Independently derived: Invented reference surface, not an assertion about every adopted theme. |
| `--ds-focus-surface-dark` | `#111111` | — | Independently derived: Invented reference surface, not an assertion about every adopted theme. |
| `--ds-focus-surface-dark-muted` | `#202020` | — | Independently derived: Invented reference surface, not an assertion about every adopted theme. |

## Declared focus pairs

| Ring | Surface | Ratio | Minimum |
|---|---|---|---|
| --ds-focus-ring | --ds-focus-surface-light | 4.4781 | 3 |
| --ds-focus-ring | --ds-focus-surface-light-muted | 4.0691 | 3 |
| --ds-focus-ring | --ds-focus-surface-dark | 4.2168 | 3 |
| --ds-focus-ring | --ds-focus-surface-dark-muted | 3.6384 | 3 |
| --ds-focus-ring-alternate | --ds-focus-surface-light | 3.9494 | 3 |
| --ds-focus-ring-alternate | --ds-focus-surface-light-muted | 3.5887 | 3 |
| --ds-focus-ring-alternate | --ds-focus-surface-dark | 4.7812 | 3 |
| --ds-focus-ring-alternate | --ds-focus-surface-dark-muted | 4.1255 | 3 |

## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-control:focus-visible { outline: var(--focus-width,2px) solid var(--focus-color,#777777); outline-offset: var(--focus-offset,2px); }
@media (forced-colors: active) { .example-control:focus-visible { outline: 2px solid Highlight; } }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `0313332a3a9cc380730c56e2685ed641d3fd505a878e02ca9446011c9dfefce5`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/focus-accessibility/options/visible-ring/tokens.css
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
    literal-colors-per-distinct  1
    colors-per-distinct-in-scope 1
    ambiguous-share              0

  next
    ds-loop scorecard foundations/focus-accessibility/options/visible-ring/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                                    report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
