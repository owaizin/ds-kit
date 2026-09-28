# borders-opacity: functional

Small width steps distinguish separators, control boundaries and selected emphasis. Opacity budgets are separate from text colour.

## When to use / when not

Use with explicit role assignments and contrast-tested surfaces.

Do not dim active text or an entire subtree to create muted text. Decorative dividers do not establish control visibility.

## Usage decisions

- Disabled opacity is for truly inactive controls, not read-only content or labels users still need to read.
- Overlay opacity assumes a separate scrim layer; applying opacity to the modal would dim its contents too.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). 

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-border-none` | `0rem` | 0 | Independently derived: Original 0/1/2/4px width series at the reference root. |
| `--ds-border-hairline` | `0.0625rem` | 1 | Independently derived: Original 0/1/2/4px width series at the reference root. |
| `--ds-border-strong` | `0.125rem` | 2 | Independently derived: Original 0/1/2/4px width series at the reference root. |
| `--ds-border-emphasis` | `0.25rem` | 4 | Independently derived: Original 0/1/2/4px width series at the reference root. |
| `--ds-border-style-solid` | `solid` | — | Independently derived: CSS line style; solid for boundaries, dashed/dotted only with an explained meaning. |
| `--ds-border-style-dashed` | `dashed` | — | Independently derived: CSS line style; solid for boundaries, dashed/dotted only with an explained meaning. |
| `--ds-border-style-dotted` | `dotted` | — | Independently derived: CSS line style; solid for boundaries, dashed/dotted only with an explained meaning. |
| `--ds-opacity-disabled` | `0.48` | 0.48 | Independently derived: Independently chosen compositing budget; measure the result against its actual backdrop. |
| `--ds-opacity-overlay` | `0.48` | 0.48 | Independently derived: Independently chosen compositing budget; measure the result against its actual backdrop. |
| `--ds-opacity-hover` | `0.08` | 0.08 | Independently derived: Independently chosen compositing budget; measure the result against its actual backdrop. |
| `--ds-opacity-pressed` | `0.16` | 0.16 | Independently derived: Independently chosen compositing budget; measure the result against its actual backdrop. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-divider { border-block-start: var(--divider-width, 1px) var(--divider-style, solid) var(--divider-color, #777777); }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `0fc9df60dd7bf5cb0f7857b5c7fbe8ed005be48273c65d697acbf957754b8775`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/borders-opacity/options/functional/tokens.css
```

Exit status: `0`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:4204ec9a4d54   adapter css-custom-props@0.3.0   config b158c121
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
    ds-loop scorecard foundations/borders-opacity/options/functional/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                              report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
