# simple-roles

A named role contract with literal upstream snapshots; project aliases remain layer 2.

## Rationale

Radix provides separate light and dark ramps. The 12 step jobs are retained; descriptive labels are paraphrased. Cool/warm/pure neutrals select slate/sand/gray. Accent/success/attention/danger use blue/green/amber/red. 

Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team wants a concrete starting role vocabulary. Do not add a competing contract to an already coherent naming system. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Web and native share opaque six-digit sRGB strings. CSS contains literal layer-1 --ds-* declarations; JSON names every mode/neutral explicitly. Select a variant through project aliases, with fallbacks, rather than importing all variants as component API. Native can consume the same hex strings; rendered native behavior is unverified.

[Radix source](https://github.com/radix-ui/colors/tree/dbdb85470547c7d34b9001f48fddb08ded335979/src), revision dbdb85470547c7d34b9001f48fddb08ded335979, MIT; values unchanged from src/light.ts and src/dark.ts. [Notice](../../../../LICENSES/Radix-Colors-MIT.txt).  Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Values

| Token | sRGB | Role | Source per value |
|---|---|---|---|
| `--ds-color-simple-roles-cool-light-surface-default` | #fcfcfd | Example surface-default | radix: slate1 |
| `--ds-color-simple-roles-cool-light-text-default` | #1c2024 | Example text-default | radix: slate12 |
| `--ds-color-simple-roles-cool-light-text-muted` | #60646c | Example text-muted | radix: slate11 |
| `--ds-color-simple-roles-cool-light-border-control` | #80838d | Example border-control | radix: slate10 |
| `--ds-color-simple-roles-cool-light-surface-muted` | #f0f0f3 | Example surface-muted | radix: slate3 |
| `--ds-color-simple-roles-cool-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-cool-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-cool-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-cool-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-simple-roles-cool-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-simple-roles-cool-dark-surface-default` | #111113 | Example surface-default | radix: slate1 |
| `--ds-color-simple-roles-cool-dark-text-default` | #edeef0 | Example text-default | radix: slate12 |
| `--ds-color-simple-roles-cool-dark-text-muted` | #b0b4ba | Example text-muted | radix: slate11 |
| `--ds-color-simple-roles-cool-dark-border-control` | #696e77 | Example border-control | radix: slate9 |
| `--ds-color-simple-roles-cool-dark-surface-muted` | #212225 | Example surface-muted | radix: slate3 |
| `--ds-color-simple-roles-cool-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-cool-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-cool-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-cool-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-simple-roles-cool-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-simple-roles-warm-light-surface-default` | #fdfdfc | Example surface-default | radix: sand1 |
| `--ds-color-simple-roles-warm-light-text-default` | #21201c | Example text-default | radix: sand12 |
| `--ds-color-simple-roles-warm-light-text-muted` | #63635e | Example text-muted | radix: sand11 |
| `--ds-color-simple-roles-warm-light-border-control` | #82827c | Example border-control | radix: sand10 |
| `--ds-color-simple-roles-warm-light-surface-muted` | #f1f0ef | Example surface-muted | radix: sand3 |
| `--ds-color-simple-roles-warm-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-warm-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-warm-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-warm-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-simple-roles-warm-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-simple-roles-warm-dark-surface-default` | #111110 | Example surface-default | radix: sand1 |
| `--ds-color-simple-roles-warm-dark-text-default` | #eeeeec | Example text-default | radix: sand12 |
| `--ds-color-simple-roles-warm-dark-text-muted` | #b5b3ad | Example text-muted | radix: sand11 |
| `--ds-color-simple-roles-warm-dark-border-control` | #6f6d66 | Example border-control | radix: sand9 |
| `--ds-color-simple-roles-warm-dark-surface-muted` | #222221 | Example surface-muted | radix: sand3 |
| `--ds-color-simple-roles-warm-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-warm-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-warm-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-warm-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-simple-roles-warm-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-simple-roles-pure-light-surface-default` | #fcfcfc | Example surface-default | radix: gray1 |
| `--ds-color-simple-roles-pure-light-text-default` | #202020 | Example text-default | radix: gray12 |
| `--ds-color-simple-roles-pure-light-text-muted` | #646464 | Example text-muted | radix: gray11 |
| `--ds-color-simple-roles-pure-light-border-control` | #838383 | Example border-control | radix: gray10 |
| `--ds-color-simple-roles-pure-light-surface-muted` | #f0f0f0 | Example surface-muted | radix: gray3 |
| `--ds-color-simple-roles-pure-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-pure-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-pure-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-pure-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-simple-roles-pure-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-simple-roles-pure-dark-surface-default` | #111111 | Example surface-default | radix: gray1 |
| `--ds-color-simple-roles-pure-dark-text-default` | #eeeeee | Example text-default | radix: gray12 |
| `--ds-color-simple-roles-pure-dark-text-muted` | #b4b4b4 | Example text-muted | radix: gray11 |
| `--ds-color-simple-roles-pure-dark-border-control` | #6e6e6e | Example border-control | radix: gray9 |
| `--ds-color-simple-roles-pure-dark-surface-muted` | #222222 | Example surface-muted | radix: gray3 |
| `--ds-color-simple-roles-pure-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-simple-roles-pure-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-simple-roles-pure-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-simple-roles-pure-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-simple-roles-pure-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |

## Declared contrast pairs

Computed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.

| Variant | Pair | Ratio | Minimum |
|---|---|---|---|
| cool/light | ink on paper | 15.983 | 4.5 |
| cool/light | muted on paper | 5.791 | 4.5 |
| cool/light | error on paper | 12.129 | 4.5 |
| cool/light | success on paper | 12.014 | 4.5 |
| cool/light | attention on paper | 11.091 | 4.5 |
| cool/light | ink on wash | 14.408 | 4.5 |
| cool/light | muted on wash | 5.220 | 4.5 |
| cool/light | error on wash | 10.933 | 4.5 |
| cool/light | success on wash | 10.830 | 4.5 |
| cool/light | attention on wash | 9.998 | 4.5 |
| cool/light | Action label | 6.433 | 4.5 |
| cool/light | Control boundary | 3.691 | 3 |
| cool/light | Large heading | 15.983 | 3 |
| cool/dark | ink on paper | 16.246 | 4.5 |
| cool/dark | muted on paper | 9.056 | 4.5 |
| cool/dark | error on paper | 13.808 | 4.5 |
| cool/dark | success on paper | 14.652 | 4.5 |
| cool/dark | attention on paper | 15.568 | 4.5 |
| cool/dark | ink on wash | 13.702 | 4.5 |
| cool/dark | muted on wash | 7.638 | 4.5 |
| cool/dark | error on wash | 11.645 | 4.5 |
| cool/dark | success on wash | 12.357 | 4.5 |
| cool/dark | attention on wash | 13.129 | 4.5 |
| cool/dark | Action label | 6.433 | 4.5 |
| cool/dark | Control boundary | 3.680 | 3 |
| cool/dark | Large heading | 16.246 | 3 |
| warm/light | ink on paper | 16.018 | 4.5 |
| warm/light | muted on paper | 5.934 | 4.5 |
| warm/light | error on paper | 12.218 | 4.5 |
| warm/light | success on paper | 12.102 | 4.5 |
| warm/light | attention on paper | 11.172 | 4.5 |
| warm/light | ink on wash | 14.325 | 4.5 |
| warm/light | muted on wash | 5.307 | 4.5 |
| warm/light | error on wash | 10.926 | 4.5 |
| warm/light | success on wash | 10.823 | 4.5 |
| warm/light | attention on wash | 9.991 | 4.5 |
| warm/light | Action label | 6.433 | 4.5 |
| warm/light | Control boundary | 3.797 | 3 |
| warm/light | Large heading | 16.018 | 3 |
| warm/dark | ink on paper | 16.263 | 4.5 |
| warm/dark | muted on paper | 9.011 | 4.5 |
| warm/dark | error on paper | 13.832 | 4.5 |
| warm/dark | success on paper | 14.677 | 4.5 |
| warm/dark | attention on paper | 15.595 | 4.5 |
| warm/dark | ink on wash | 13.707 | 4.5 |
| warm/dark | muted on wash | 7.595 | 4.5 |
| warm/dark | error on wash | 11.658 | 4.5 |
| warm/dark | success on wash | 12.370 | 4.5 |
| warm/dark | attention on wash | 13.143 | 4.5 |
| warm/dark | Action label | 6.433 | 4.5 |
| warm/dark | Control boundary | 3.648 | 3 |
| warm/dark | Large heading | 16.263 | 3 |
| pure/light | ink on paper | 15.881 | 4.5 |
| pure/light | muted on paper | 5.768 | 4.5 |
| pure/light | error on paper | 12.121 | 4.5 |
| pure/light | success on paper | 12.007 | 4.5 |
| pure/light | attention on paper | 11.084 | 4.5 |
| pure/light | ink on wash | 14.297 | 4.5 |
| pure/light | muted on wash | 5.193 | 4.5 |
| pure/light | error on wash | 10.912 | 4.5 |
| pure/light | success on wash | 10.809 | 4.5 |
| pure/light | attention on wash | 9.978 | 4.5 |
| pure/light | Action label | 6.433 | 4.5 |
| pure/light | Control boundary | 3.695 | 3 |
| pure/light | Large heading | 15.881 | 3 |
| pure/dark | ink on paper | 16.275 | 4.5 |
| pure/dark | muted on paper | 9.107 | 4.5 |
| pure/dark | error on paper | 13.824 | 4.5 |
| pure/dark | success on paper | 14.669 | 4.5 |
| pure/dark | attention on paper | 15.586 | 4.5 |
| pure/dark | ink on wash | 13.713 | 4.5 |
| pure/dark | muted on wash | 7.673 | 4.5 |
| pure/dark | error on wash | 11.648 | 4.5 |
| pure/dark | success on wash | 12.360 | 4.5 |
| pure/dark | attention on wash | 13.132 | 4.5 |
| pure/dark | Action label | 6.433 | 4.5 |
| pure/dark | Control boundary | 3.703 | 3 |
| pure/dark | Large heading | 16.275 | 3 |

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `07f3ce95214a84df22673c827d5b7adf7c0caa93`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `08566d213614b338971da4134fa1e0f9850d922a78a5febaf20d7f716944d5d5`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/simple-roles/tokens.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:c48ef043cf06   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [MEDIUM] color/literal-duplicate-tokens
  │ 8 colour value(s) are declared by 30 different tokens
  │ where: #0090ff <- --ds-color-simple-roles-cool-light-brand-fill, --ds-color-simple-roles-cool-dark-brand-fill, --ds-color-simple-roles-warm-light-brand-fill, --ds-color-simple-roles-warm-dark-brand-fill, --ds-color-simple-roles-pure-light-brand-fill, --ds-color-simple-roles-pure-dark-brand-fill; #000000 <- --ds-color-simple-roles-cool-light-brand-on-fill, --ds-color-simple-roles-cool-dark-brand-on-fill, --ds-color-simple-roles-warm-light-brand-on-fill, --ds-color-simple-roles-warm-dark-brand-on-fill, --ds-color-simple-roles-pure-light-brand-on-fill, --ds-color-simple-roles-pure-dark-brand-on-fill; #641723 <- --ds-color-simple-roles-cool-light-status-danger, --ds-color-simple-roles-warm-light-status-danger, --ds-color-simple-roles-pure-light-status-danger; #193b2d <- --ds-color-simple-roles-cool-light-status-success, --ds-color-simple-roles-warm-light-status-success, --ds-color-simple-roles-pure-light-status-success; #4f3422 <- --ds-color-simple-roles-cool-light-status-attention, --ds-color-simple-roles-warm-light-status-attention, --ds-color-simple-roles-pure-light-status-attention; #ffd1d9 <- --ds-color-simple-roles-cool-dark-status-danger, --ds-color-simple-roles-warm-dark-status-danger, --ds-color-simple-roles-pure-dark-status-danger
  │ risk:  The next person to change this colour changes one of the names and not the others, and the system carries two values for one decision.
  │ fix:   Keep one canonical token per value; make the rest var() aliases of it.

  1 findings — 0 blocking · 0 high · 1 medium · 0 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  1.579
    colors-per-distinct-in-scope 1.579
    ambiguous-share              0

  next
    decide on the rest                                                    nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/simple-roles/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                      report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
