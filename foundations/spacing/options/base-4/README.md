# base-4 spacing

A selected Tailwind step scale offers 4px increments at the small end and larger jumps for layout spacing. Both density modes reuse existing steps through project aliases.

## Values

Pixel equivalents assume a 16px root. All CSS/JSON values are rem. The scale has 13 strictly increasing steps, including zero; 12 positive steps.

| Token | Value | px at 16px root | Source / licence or derivation |
|---|---|---|---|
| `--ds-space-0` | 0rem | 0px | Tailwind spacing[0], MIT (zero unit normalized) |
| `--ds-space-1` | 0.25rem | 4px | Tailwind spacing[1], MIT |
| `--ds-space-2` | 0.5rem | 8px | Tailwind spacing[2], MIT |
| `--ds-space-3` | 0.75rem | 12px | Tailwind spacing[3], MIT |
| `--ds-space-4` | 1rem | 16px | Tailwind spacing[4], MIT |
| `--ds-space-5` | 1.25rem | 20px | Tailwind spacing[5], MIT |
| `--ds-space-6` | 1.5rem | 24px | Tailwind spacing[6], MIT |
| `--ds-space-8` | 2rem | 32px | Tailwind spacing[8], MIT |
| `--ds-space-10` | 2.5rem | 40px | Tailwind spacing[10], MIT |
| `--ds-space-12` | 3rem | 48px | Tailwind spacing[12], MIT |
| `--ds-space-16` | 4rem | 64px | Tailwind spacing[16], MIT |
| `--ds-space-20` | 5rem | 80px | Tailwind spacing[20], MIT |
| `--ds-space-24` | 6rem | 96px | Tailwind spacing[24], MIT |

## Rationale and density adjustments

Values use the selected Tailwind spacing entries without changing them; zero is normalized from 0px to 0rem. Half steps and the standalone 1px entry are intentionally omitted.

The following slot mappings are independent design proposals, not Tailwind density defaults. They are metadata in JSON and a recipe for project layer-2 aliases. The CSS primitive table is identical in both modes. Scope density to the relevant container; do not globally multiply all spacing or reduce text size and hit areas with it.

| Proposed alias slot | Comfortable (px at 16px root) | Compact (px at 16px root) |
|---|---|---|
| inline-gap | `--ds-space-1` (4px) | `--ds-space-1` (4px) |
| control-inset | `--ds-space-2` (8px) | `--ds-space-1` (4px) |
| group-gap | `--ds-space-4` (16px) | `--ds-space-3` (12px) |
| section-gap | `--ds-space-8` (32px) | `--ds-space-6` (24px) |
| page-gutter | `--ds-space-6` (24px) | `--ds-space-4` (16px) |

Choose mappings after checking actual consumers. No runtime mode switch or alias stylesheet is supplied. Keep minimum hit areas independently constrained; do not infer a touch target from padding alone.

## When to use / when not

**Use:** forms and general product UI that need small, regular spacing increments.

**Do not choose by default:** a product whose existing coherent scale would require broad migration merely to adopt these numbers.

## Platforms and adoption

**Web:** import one option per foundation. Options reuse token names and must not be loaded together. Keep the user's root font preference; px columns assume 16px only. Map these literal layer-1 values into the project's layer-2 aliases before component use. These files contain no aliases, component styles, resets or font downloads.

**Native:** Every rem token includes numeric `px` at a 16px reference root. Typography's `native.roles` contains numeric fontSize, lineHeight and letterSpacing; spacing's `native.steps` and `native.density` contain numeric values. These use logical units, not physical device pixels. Native styles omit fontFamily for the platform default; choose a platform monospace face for code and register Inter separately if used. Preserve accessibility text scaling. Numeric compatibility is checked; React Native rendering is not. This kit format does not claim engine JSON-adapter support.

## Source and licence

Selected values from [Tailwind default-theme.ts at fa81d697](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/src/compat/default-theme.ts), MIT, with its [0.25rem base](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/theme.css). Token names changed, subset selected, zero unit normalized; density mappings independently derived. [MIT notice](../../../../LICENSES/Tailwind-CSS-MIT.txt) retained.

No values or copy from principles-only sources were used. Every token records provenance in [tokens.json](tokens.json).

## Checks and adoption status

`node scripts/check-options.mjs` checks scale order, JSON/CSS parity and density references. [Spec](spec.md) describes adoption. The [local specimens](../../../../specimens/README.md) exercise both densities in web compositions. Product-specific wrapping, native scaling and a full accessibility review remain **not checked**. Adopt through a representative consumer before wider migration.

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `6ba4cc24e3fe5b6212260678a68726e8a1e9ef34868072b7b670676c394600f6`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/spacing/options/base-4/tokens.css
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
    ds-loop scorecard foundations/spacing/options/base-4/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                  report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->

### Result limits

Zero findings describes the rules run on this declaration-only CSS file. It does not verify density choices, hit areas, spacing in a rendered consumer or native behavior. JSON/CSS parity and scale progression are checked by the local script, not established by this audit.
