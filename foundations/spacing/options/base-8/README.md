# base-8 spacing

An independently constructed 8-point scale keeps the primary spacing increments coarse enough for roomy layouts. Both density modes reuse existing steps through project aliases.

## Values

Pixel equivalents assume a 16px root. All CSS/JSON values are rem. The scale has 13 strictly increasing steps, including zero; 12 positive steps.

| Token | Value | px at 16px root | Source / licence or derivation |
|---|---|---|---|
| `--ds-space-0` | 0rem | 0px | Independently derived: 0 × 8px ÷ 16 |
| `--ds-space-1` | 0.5rem | 8px | Independently derived: 1 × 8px ÷ 16 |
| `--ds-space-2` | 1rem | 16px | Independently derived: 2 × 8px ÷ 16 |
| `--ds-space-3` | 1.5rem | 24px | Independently derived: 3 × 8px ÷ 16 |
| `--ds-space-4` | 2rem | 32px | Independently derived: 4 × 8px ÷ 16 |
| `--ds-space-5` | 2.5rem | 40px | Independently derived: 5 × 8px ÷ 16 |
| `--ds-space-6` | 3rem | 48px | Independently derived: 6 × 8px ÷ 16 |
| `--ds-space-7` | 3.5rem | 56px | Independently derived: 7 × 8px ÷ 16 |
| `--ds-space-8` | 4rem | 64px | Independently derived: 8 × 8px ÷ 16 |
| `--ds-space-9` | 4.5rem | 72px | Independently derived: 9 × 8px ÷ 16 |
| `--ds-space-10` | 5rem | 80px | Independently derived: 10 × 8px ÷ 16 |
| `--ds-space-11` | 5.5rem | 88px | Independently derived: 11 × 8px ÷ 16 |
| `--ds-space-12` | 6rem | 96px | Independently derived: 12 × 8px ÷ 16 |

## Rationale and density adjustments

For integer n from 0 through 12, value = n × 8px; serialize as n × 0.5rem. This formula is independently derived; no vendor table is used.

The following slot mappings are independent design proposals, not Tailwind density defaults. They are metadata in JSON and a recipe for project layer-2 aliases. The CSS primitive table is identical in both modes. Scope density to the relevant container; do not globally multiply all spacing or reduce text size and hit areas with it.

| Proposed alias slot | Comfortable (px at 16px root) | Compact (px at 16px root) |
|---|---|---|
| inline-gap | `--ds-space-1` (8px) | `--ds-space-1` (8px) |
| control-inset | `--ds-space-2` (16px) | `--ds-space-1` (8px) |
| group-gap | `--ds-space-4` (32px) | `--ds-space-3` (24px) |
| section-gap | `--ds-space-8` (64px) | `--ds-space-6` (48px) |
| page-gutter | `--ds-space-6` (48px) | `--ds-space-4` (32px) |

Choose mappings after checking actual consumers. No runtime mode switch or alias stylesheet is supplied. Keep minimum hit areas independently constrained; do not infer a touch target from padding alone.

## When to use / when not

**Use:** roomy layouts where an 8px rhythm is sufficient and fewer small increments help consistency.

**Do not choose by default:** tight icon/text relationships or dense controls needing 2–4px adjustments. Choose base-4 or record an explicit small-step extension instead of inventing hidden half steps.

## Platforms and adoption

**Web:** import one option per foundation. Options reuse token names and must not be loaded together. Keep the user's root font preference; px columns assume 16px only. Map these literal layer-1 values into the project's layer-2 aliases before component use. These files contain no aliases, component styles, resets or font downloads.

**Native:** JSON is a kit interchange format, not a native stylesheet or a promise of engine JSON coverage. Convert rem to baseline logical points/dp with `rem × 16`, then apply the platform's text/content scaling policy. Convert em tracking using the role's font size; turn unitless line-height into a native line height if required. Map generic families to platform fonts and explicitly register Inter if chosen. Do not treat CSS px as physical device pixels or disable accessibility scaling. Native rendering is not checked.

## Source and licence

All values follow the independently derived 8-point formula above. Density mappings are independently selected proposals.

No values or copy from principles-only sources were used. Every token records provenance in [tokens.json](tokens.json).

## Checks and adoption status

`node scripts/check-options.mjs` checks scale order, JSON/CSS parity and density references. [Spec](spec.md) describes adoption. Actual rendered density, wrapping, hit areas, web/native scaling and accessibility: **not checked**. Adopt through a representative consumer before wider migration.

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/token-suggestions`, commit `92a51436b96682745333da23597111ab755cd2d8`; Node v22.17.1. Run 2026-09-27 against this uncommitted option snapshot; the report Git revision identifies the parent kit commit, not the content of these new files. No exceptions or custom severity filters applied.

Audited `tokens.css` SHA-256: `b83276eebea594890991d350abe255f378a97368ce819069bd4a4782f364e635`.

From the kit root, set `DS_LOOP_SOURCE` to that checked-out engine directory:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/spacing/options/base-8/tokens.css
```

Exit status: `0`. Standard output, verbatim:

```text

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:2eac58edc7a4   adapter css-custom-props@0.3.0   config 6b7f4662
  13 rules run

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
    ds-loop scorecard foundations/spacing/options/base-8/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                  report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->

### Result limits

Zero findings describes the rules run on this declaration-only CSS file. It does not verify density choices, hit areas, spacing in a rendered consumer or native behavior. JSON/CSS parity and scale progression are checked by the local script, not established by this audit.
