# radius: round

round uses 8/16/24px corners for small controls, cards and large panels. Full rounding is reserved for pills.

## When to use / when not

Friendly products with generous component geometry.

Do not change existing component corners without checking nested shapes and clipping. Full rounding does not make every rectangle a suitable pill.

## Usage decisions

- Small: 28–40px controls; medium: cards and 40–56px controls; large: larger panels. These are starting roles, not automatic size rules.
- Nested corners need a radius consistent with their inset; do not blindly repeat the outer radius.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). 

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-radius-small` | `0.5rem` | 8 | Independently derived: round: small corner independently selected from a 2px grid. |
| `--ds-radius-medium` | `1rem` | 16 | Independently derived: round: medium corner independently selected from a 2px grid. |
| `--ds-radius-large` | `1.5rem` | 24 | Independently derived: round: large corner independently selected from a 2px grid. |
| `--ds-radius-full` | `624.9375rem` | 9999 | Independently derived: Oversized radius is clamped by CSS to half the box dimensions; not a layout size. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-card { border-radius: var(--radius-card, 8px); }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `94edcd43e1b8bc49ea25a1a591053d3502284e84a0c7abff717ff1bf3fde1c0d`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/radius/options/round/tokens.css
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
    ds-loop scorecard foundations/radius/options/round/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
