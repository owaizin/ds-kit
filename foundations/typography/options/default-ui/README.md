# default-ui typography

A 16px body supports general product reading. Selected Tailwind size steps give headings distinct levels without introducing the whole upstream scale. Display leading is relaxed from 1 to 1.1 as an independent choice.

## Values

All pixel equivalents assume a 16px root; font sizes are rem, leading is unitless, tracking is em. Tokens follow `--ds-type-<role>-size`, `-line-height`, `-weight`, and `-letter-spacing`. Every serialized token has a source and derivation in [tokens.json](tokens.json).

| Role | Size: rem / px at 16px | Line-height | Weight | Letter-spacing | Source per field |
|---|---|---|---|---|---|
| display | 3rem / 48px | 1.1 | 700 | -0.02em | TW `--text-5xl` (MIT); leading: Independent; weight/tracking/role: independent |
| h1 | 2.25rem / 36px | 1.111111 | 700 | -0.02em | TW `--text-4xl` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| h2 | 1.875rem / 30px | 1.2 | 600 | -0.01em | TW `--text-3xl` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| h3 | 1.5rem / 24px | 1.333333 | 600 | -0.01em | TW `--text-2xl` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| h4 | 1.125rem / 18px | 1.555556 | 600 | -0.01em | TW `--text-lg` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| body | 1rem / 16px | 1.5 | 400 | 0em | TW `--text-base` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| body-small | 0.875rem / 14px | 1.428571 | 400 | 0em | TW `--text-sm` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| caption | 0.75rem / 12px | 1.333333 | 400 | 0em | TW `--text-xs` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| code | 1rem / 16px | 1.5 | 400 | 0em | TW `--text-base` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |
| tabular-numbers | 1rem / 16px | 1.5 | 500 | 0em | TW `--text-base` (MIT); leading: TW ratio (MIT); weight/tracking/role: independent |

### Families and shared values

| Token | Literal value | Source / licence or derivation |
|---|---|---|
| `--ds-type-family-system` | `system-ui, sans-serif` | Independently selected CSS generic fallback stack; no font files copied. |
| `--ds-type-family-inter` | `"Inter", system-ui, sans-serif` | Independently selected optional stack. Inter font files, if installed separately, are SIL OFL 1.1; retain their licence. |
| `--ds-type-family-mono` | `ui-monospace, monospace` | Independently selected generic monospace stack for code. |
| `--ds-type-numeric-variant` | `tabular-nums` | Independently selected CSS keyword for aligned numerical columns; glyph support must be checked per font. |
| `--ds-type-max-reading-width` | 42rem / 672px | Independently derived heuristic: 42 × root size; validate actual line length with the chosen font. |

## Derivation and exceptions

The existing Tailwind-derived line-height ratios are unchanged from e69decf: evaluated upstream ratios rounded to six decimals. Display retains its previously documented independent 1.1 value. No leading values were retuned in this revision.

Sizes map to Tailwind 5xl/4xl/3xl/2xl/lg/base/sm/xs/base/base respectively. This is a selected subset: xl is omitted. Role assignments are independently chosen. Upstream calc line-height ratios are evaluated and rounded to six decimals; display leading is independently changed to 1.1.

Weights are independent role assignments: 700 for display/h1, 600 for h2–h4, 400 for text/code, 500 for numerical columns. Tracking is independently set to -0.02em for display/h1, -0.01em for h2–h4, and zero for body/supporting/code/numerical text. Short headings use tighter leading; body leading stays at least 1.4. Increase leading to at least 1.4 when any tighter role wraps into extended text.

The size scale checks unique steps, not repeated roles. Code/tabular roles reuse existing sizes; compact caption/body-small also share a size. No sub-1.125 interval is exempted. This ratio is a kit check, not a claim of universal typographic quality.

## When to use / when not

**Use:** General product interfaces combining forms, navigation, short prose and data views.

**Do not choose by default:** Very dense operational screens that have not tested the row-height cost, or sustained editorial reading that needs a larger base and more generous leading.

## Platforms and adoption

**Web:** import one option per foundation. Options reuse token names and must not be loaded together. Keep the user's root font preference; px columns assume 16px only. Map these literal layer-1 values into the project's layer-2 aliases before component use. These files contain no aliases, component styles, resets or font downloads.

**Native:** Every rem token includes numeric `px` at a 16px reference root. Typography's `native.roles` contains numeric fontSize, lineHeight and letterSpacing; spacing's `native.steps` and `native.density` contain numeric values. These use logical units, not physical device pixels. Native styles omit fontFamily for the platform default; choose a platform monospace face for code and register Inter separately if used. Preserve accessibility text scaling. Numeric compatibility is checked; React Native rendering is not. This kit format does not claim engine JSON-adapter support.

Cap the reading container at the available inline width as well as the supplied maximum; the rem cap is not a promise of 60–75 characters with every font.

For typography on web, apply the numeric variant to changing numerical values and the mono family to code. Inter is optional and is not downloaded by this CSS; confirm installed weights and glyph coverage before selecting it. Do not hide layout overflow with truncation simply to make a scale fit. Choose input sizing separately when compact text would interfere with mobile editing.

## Source and licence

Sizes and all non-display leading values derive from [Tailwind theme.css at fa81d697](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/theme.css), MIT. Renamed to roles, selected subset, calc ratios evaluated; weights/tracking/families/width and display leading independently derived. [MIT notice](../../../../LICENSES/Tailwind-CSS-MIT.txt) retained.

[Inter OFL evidence and source policy](../../../../SOURCES.md#fonts) covers optional font installation; no font files are included. No values or copy from principles-only sources were used.

## Checks and adoption status

`node scripts/check-options.mjs` from the kit root checks numerical constraints and JSON/CSS parity. See [the foundation spec](spec.md) for consumer responsibilities. The [local specimens](../../../../specimens/README.md) record exercised web states. Native rendering, long translations, zoom and a full accessibility review remain **not checked**. This option is ready for an adoption trial, not a claim of production validation.

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/token-suggestions`, commit `92a51436b96682745333da23597111ab755cd2d8`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. No suppression or custom config was applied: the engine has no upstream-tier namespace setting.

Audited `tokens.css` SHA-256: `70a8132dbe4f9c4247eadf96552d2d3534e8d3fbb3c92ece44b58e2de71b6f00`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/typography/options/default-ui/tokens.css
```

Exit status: `1`. Standard output, verbatim:

```text

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:e69decfd7546   adapter css-custom-props@0.3.0   config 6b7f4662
  13 rules run

  [HIGH] token/raw-dimension-in-semantic
  │ 21 token(s) hold a raw length / number instead of referencing a primitive
  │ where: --ds-type-max-reading-width = 42rem (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:10); --ds-type-display-size = 3rem (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:11); --ds-type-display-letter-spacing = -0.02em (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:14); --ds-type-h1-size = 2.25rem (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:15); --ds-type-h1-letter-spacing = -0.02em (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:18); --ds-type-h2-size = 1.875rem (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:19); --ds-type-h2-letter-spacing = -0.01em (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:22); --ds-type-h3-size = 1.5rem (/Users/owais/Documents/GitHub/ds-kit/foundations/typography/options/default-ui/tokens.css:23)
  │ risk:  A spacing or type change edits these tokens by hand instead of moving one scale step; the value drifts from the scale the moment anyone touches it.
  │ fix:   Point each at a spacing / size / type primitive: --token: var(--<ns>-space-4). If no primitive matches the value, add one to the scale first.

  1 findings — 0 blocking · 1 high · 0 medium · 0 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  0
    colors-per-distinct-in-scope 0
    ambiguous-share              0

  next
    decide on the rest                                                       nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/typography/options/default-ui/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                         report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->

### Finding disposition

The default taxonomy treats `--ds-type-*` as semantic names and reports 21 literal dimensions as `token/raw-dimension-in-semantic`. This kit deliberately supplies literal layer-1 values with named roles, as required by this package; project layer-2 aliases are still separate. That naming-model mismatch is unresolved for engine integration. No ignore entry, taxonomy override, automatic fix or token renaming was applied to hide it. The HIGH remains in this recorded audit; an adopter must decide and record how the kit layer maps onto its taxonomy.

The audit checks declarations in this single CSS file. It does not validate the scale's numerical progression, body readability, optional fonts, JSON format, native mapping or rendered consumers. The local self-check covers only the stated numerical/parity checks; it does not make those product checks pass.
