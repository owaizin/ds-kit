# z-index: named-layers

Gaps of 100 leave room for local ordering within a shared stacking context.

## When to use / when not

Use when overlays share a known root and a documented portal policy.

A bigger number cannot escape an ancestor stacking context; native ordering and browser top-layer dialogs require separate review.

## Usage decisions

- Base < sticky < dropdown < overlay < modal < toast < tooltip keeps open menus above sticky headers in the shared root stack. A dropdown inside a modal must stay in the modal context.
- Keep tooltips noninteractive and do not let toasts obscure dialog controls. Top-layer popovers/dialogs do not participate in this numeric scale.

## Platforms and source

Web uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.

Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported. Original kit material; see [source policy](../../../../SOURCES.md). 

## Values

| Token | CSS value | Reference px / numeric | Derivation and source |
|---|---|---|---|
| `--ds-z-base` | `0` | 0 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-sticky` | `100` | 100 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-dropdown` | `200` | 200 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-overlay` | `300` | 300 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-modal` | `400` | 400 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-toast` | `500` | 500 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |
| `--ds-z-tooltip` | `600` | 600 | Independently derived: Original ordering by role; the 100-step gap is bookkeeping, not visual elevation. |


## Consumer recipe

Map upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.

```css
.example-toast { position: fixed; z-index: var(--z-toast, 500); }
```

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `e17b1cf46f4949ccb8d044d439a16c3860c10a5a63ee961fad0ccc429804261d`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/z-index/options/named-layers/tokens.css
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
    ds-loop scorecard foundations/z-index/options/named-layers/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                        report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
