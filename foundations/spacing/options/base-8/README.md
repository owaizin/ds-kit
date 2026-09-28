# base-8 spacing

An independently constructed 8-point scale keeps the primary spacing increments coarse enough for roomy layouts. Both density modes reuse existing steps through project aliases.

## Values

Pixel equivalents assume a 16px root. All CSS/JSON values are rem. The scale has 13 strictly increasing steps, including zero; 12 positive steps.

| Token | Value | px at 16px root | Source / licence or derivation |
|---|---|---|---|
| `--ds-space-0` | 0rem | 0px | Independent selected 8-point scale with 2px/4px fractional steps; 0px / 16 = 0rem. |
| `--ds-space-0-25` | 0.125rem | 2px | Independent selected 8-point scale with 2px/4px fractional steps; 2px / 16 = 0.125rem. |
| `--ds-space-0-5` | 0.25rem | 4px | Independent selected 8-point scale with 2px/4px fractional steps; 4px / 16 = 0.25rem. |
| `--ds-space-1` | 0.5rem | 8px | Independent selected 8-point scale with 2px/4px fractional steps; 8px / 16 = 0.5rem. |
| `--ds-space-2` | 1rem | 16px | Independent selected 8-point scale with 2px/4px fractional steps; 16px / 16 = 1rem. |
| `--ds-space-3` | 1.5rem | 24px | Independent selected 8-point scale with 2px/4px fractional steps; 24px / 16 = 1.5rem. |
| `--ds-space-4` | 2rem | 32px | Independent selected 8-point scale with 2px/4px fractional steps; 32px / 16 = 2rem. |
| `--ds-space-5` | 2.5rem | 40px | Independent selected 8-point scale with 2px/4px fractional steps; 40px / 16 = 2.5rem. |
| `--ds-space-6` | 3rem | 48px | Independent selected 8-point scale with 2px/4px fractional steps; 48px / 16 = 3rem. |
| `--ds-space-8` | 4rem | 64px | Independent selected 8-point scale with 2px/4px fractional steps; 64px / 16 = 4rem. |
| `--ds-space-10` | 5rem | 80px | Independent selected 8-point scale with 2px/4px fractional steps; 80px / 16 = 5rem. |
| `--ds-space-12` | 6rem | 96px | Independent selected 8-point scale with 2px/4px fractional steps; 96px / 16 = 6rem. |
| `--ds-space-16` | 8rem | 128px | Independent selected 8-point scale with 2px/4px fractional steps; 128px / 16 = 8rem. |

## Rationale and density adjustments

Independently select 0, 2, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96 and 128px. The 2px and 4px steps are quarter/half of the 8px base (0.125rem and 0.25rem). Names 0-25 and 0-5 encode these fractional indices. After 48px, intervals grow to 16px, then 32px; divide each px value by 16 for rem. No vendor table is used.

The following slot mappings are independent design proposals, not Tailwind density defaults. They are metadata in JSON and a recipe for project layer-2 aliases. The CSS primitive table is identical in both modes. Scope density to the relevant container; do not globally multiply all spacing or reduce text size and hit areas with it.

| Proposed alias slot | Comfortable (px at 16px root) | Compact (px at 16px root) |
|---|---|---|
| inline-gap | `--ds-space-1` (8px) | `--ds-space-0-5` (4px) |
| control-inset | `--ds-space-2` (16px) | `--ds-space-1` (8px) |
| group-gap | `--ds-space-3` (24px) | `--ds-space-2` (16px) |
| section-gap | `--ds-space-8` (64px) | `--ds-space-6` (48px) |
| page-gutter | `--ds-space-4` (32px) | `--ds-space-3` (24px) |

Choose mappings after checking actual consumers. No runtime mode switch or alias stylesheet is supplied. Keep minimum hit areas independently constrained; do not infer a touch target from padding alone.

## When to use / when not

**Use:** roomy layouts where an 8px rhythm is sufficient and fewer small increments help consistency.

**Do not choose by default:** layouts needing many intermediate values between the supplied steps. The explicit 2px/4px steps cover small icon/text gaps; they do not justify shrinking hit areas.

## Platforms and adoption

**Web:** import one option per foundation. Options reuse token names and must not be loaded together. Keep the user's root font preference; px columns assume 16px only. Map these literal layer-1 values into the project's layer-2 aliases before component use. These files contain no aliases, component styles, resets or font downloads.

**Native:** Every rem token includes numeric `px` at a 16px reference root. Typography's `native.roles` contains numeric fontSize, lineHeight and letterSpacing; spacing's `native.steps` and `native.density` contain numeric values. These use logical units, not physical device pixels. Native styles omit fontFamily for the platform default; choose a platform monospace face for code and register Inter separately if used. Preserve accessibility text scaling. Numeric compatibility is checked; React Native rendering is not. This kit format does not claim engine JSON-adapter support.

## Source and licence

All values follow the independently derived 8-point formula above. Density mappings are independently selected proposals.

No values or copy from principles-only sources were used. Every token records provenance in [tokens.json](tokens.json).

## Checks and adoption status

`node scripts/check-options.mjs` checks scale order, JSON/CSS parity and density references. [Spec](spec.md) describes adoption. The [local specimens](../../../../specimens/README.md) exercise both densities in web compositions. Product-specific wrapping, native scaling and a full accessibility review remain **not checked**. Adopt through a representative consumer before wider migration.

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `af29978dfb2298b80997b4e826f57c1b14bd0f07a36119fe5cc69f93911a1eda`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/spacing/options/base-8/tokens.css
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
    ds-loop scorecard foundations/spacing/options/base-8/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                  report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->

### Result limits

Zero findings describes the rules run on this declaration-only CSS file. It does not verify density choices, hit areas, spacing in a rendered consumer or native behavior. JSON/CSS parity and scale progression are checked by the local script, not established by this audit.
