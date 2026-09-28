# compact-ui typography

A 14px body leaves room for repeated controls and numerical rows. The scale uses a small set of sizes; captions and supporting text share 12px to avoid an extra, weakly differentiated step.

## Values

All pixel equivalents assume a 16px root; font sizes are rem, leading is unitless, tracking is em. Tokens follow `--ds-type-<role>-size`, `-line-height`, `-weight`, and `-letter-spacing`. Every serialized token has a source and derivation in [tokens.json](tokens.json).

| Role | Size: rem / px at 16px | Line-height | Weight | Letter-spacing | Source per field |
|---|---|---|---|---|---|
| display | 2.375rem / 38px | 1.15 | 700 | -0.02em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| h1 | 1.875rem / 30px | 1.2 | 700 | -0.02em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| h2 | 1.5rem / 24px | 1.25 | 600 | -0.01em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| h3 | 1.25rem / 20px | 1.3 | 600 | -0.01em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| h4 | 1rem / 16px | 1.4 | 600 | -0.01em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| body | 0.875rem / 14px | 1.5 | 400 | 0em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| body-small | 0.75rem / 12px | 1.5 | 400 | 0em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| caption | 0.75rem / 12px | 1.5 | 400 | 0em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| code | 0.875rem / 14px | 1.5 | 400 | 0em | Independent selected step; leading: Independent; weight/tracking/role: independent |
| tabular-numbers | 0.875rem / 14px | 1.5 | 500 | 0em | Independent selected step; leading: Independent; weight/tracking/role: independent |

### Families and shared values

| Token | Literal value | Source / licence or derivation |
|---|---|---|
| `--ds-type-family-system` | `system-ui, sans-serif` | Independently selected CSS generic fallback stack; no font files copied. |
| `--ds-type-family-inter` | `"Inter", system-ui, sans-serif` | Independently selected optional stack. Inter font files, if installed separately, are SIL OFL 1.1; retain their licence. |
| `--ds-type-family-mono` | `ui-monospace, monospace` | Independently selected generic monospace stack for code. |
| `--ds-type-numeric-variant` | `tabular-nums` | Independently selected CSS keyword for aligned numerical columns; glyph support must be checked per font. |
| `--ds-type-max-reading-width` | 40rem / 640px | Independently derived heuristic: 40 × root size; validate actual line length with the chosen font. |

## Derivation and exceptions

Independently derived: anchor body at 14px; choose 12px supporting text, 16px subheading, then 20/24/30/38px for increasingly prominent headings. Each distinct adjacent size is at least 1.125 times the previous size.

Weights are independent role assignments: 700 for display/h1, 600 for h2–h4, 400 for text/code, 500 for numerical columns. Tracking is independently set to -0.02em for display/h1, -0.01em for h2–h4, and zero for body/supporting/code/numerical text. Short headings use tighter leading; body leading stays at least 1.4. Increase leading to at least 1.4 when any tighter role wraps into extended text.

The size scale checks unique steps, not repeated roles. Code/tabular roles reuse existing sizes; compact caption/body-small also share a size. No sub-1.125 interval is exempted. This ratio is a kit check, not a claim of universal typographic quality.

## When to use / when not

**Use:** Dense desktop operational tools with short labels, frequent scanning and an explicit compact-density need.

**Do not choose by default:** Long-form reading, untested low-vision use, or mobile input text without a separately reviewed size. This is not a claim that 14px fits every reader.

## Platforms and adoption

**Web:** import one option per foundation. Options reuse token names and must not be loaded together. Keep the user's root font preference; px columns assume 16px only. Map these literal layer-1 values into the project's layer-2 aliases before component use. These files contain no aliases, component styles, resets or font downloads.

**Native:** Every rem token includes numeric `px` at a 16px reference root. Typography's `native.roles` contains numeric fontSize, lineHeight and letterSpacing; spacing's `native.steps` and `native.density` contain numeric values. These use logical units, not physical device pixels. Native styles omit fontFamily for the platform default; choose a platform monospace face for code and register Inter separately if used. Preserve accessibility text scaling. Numeric compatibility is checked; React Native rendering is not. This kit format does not claim engine JSON-adapter support.

Cap the reading container at the available inline width as well as the supplied maximum; the rem cap is not a promise of 60–75 characters with every font.

For typography on web, apply the numeric variant to changing numerical values and the mono family to code. Inter is optional and is not downloaded by this CSS; confirm installed weights and glyph coverage before selecting it. Do not hide layout overflow with truncation simply to make a scale fit. Choose input sizing separately when compact text would interfere with mobile editing.

## Source and licence

All supplied values are independently derived as described above; no vendor token scale is copied.

[Inter OFL evidence and source policy](../../../../SOURCES.md#fonts) covers optional font installation; no font files are included. No values or copy from principles-only sources were used.

## Checks and adoption status

`node scripts/check-options.mjs` from the kit root checks numerical constraints and JSON/CSS parity. See [the foundation spec](spec.md) for consumer responsibilities. The [local specimens](../../../../specimens/README.md) record exercised web states. Native rendering, long translations, zoom and a full accessibility review remain **not checked**. This option is ready for an adoption trial, not a claim of production validation.

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `55dcbab41d216a01447ed11a845aadc7d85c56ce9d747f8041aaf9a6d4ca282b`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/typography/options/compact-ui/tokens.css
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
    ds-loop scorecard foundations/typography/options/compact-ui/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                         report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->

### Finding disposition

The configured upstream layer accepts these literal kit values. Project aliases remain separate and should reference kit tokens with fallbacks; components should consume those aliases. No suppression is applied. The audit below/above is declaration-only evidence, not product validation.

The audit checks declarations in this single CSS file. It does not validate the scale's numerical progression, body readability, optional fonts, JSON format, native mapping or rendered consumers. The local self-check covers only the stated numerical/parity checks; it does not make those product checks pass.
