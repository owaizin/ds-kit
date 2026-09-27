# tailwind-11-step

A source palette with explicitly separate example role mappings.

## Rationale

Tailwind keeps steps 50–950 in both modes. The palette values do not invert or change; independently chosen role mappings select different steps for light/dark. Cool/warm/pure neutrals select slate/stone/neutral. Accent/success/attention/danger use blue/green/amber/red. 

Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team needs a ramp to define its own roles. Do not apply palette steps directly in components or assume every pair is accessible. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Web and native share opaque six-digit sRGB strings. CSS contains literal layer-1 --ds-* declarations; JSON names every mode/neutral explicitly. Select a variant through project aliases, with fallbacks, rather than importing all variants as component API. Native can consume the same hex strings; rendered native behavior is unverified.

[Tailwind source](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/theme.css), revision fa81d697fe572a10ac150d18964a093a7a874081, MIT. Values converted from OKLCH to clipped, byte-rounded sRGB. Original sourceValue is retained per token; scripts/color-math.mjs shows the derivation. This is not an exact wide-gamut reproduction. [Notice](../../../../LICENSES/Tailwind-CSS-MIT.txt).  Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Values

| Token | sRGB | Role | Source per value |
|---|---|---|---|
| `--ds-color-tailwind-11-step-cool-light-neutral-50` | #f8fafc | Tone 50; role assigned separately | tailwind: slate50 |
| `--ds-color-tailwind-11-step-cool-light-neutral-100` | #f1f5f9 | Tone 100; role assigned separately | tailwind: slate100 |
| `--ds-color-tailwind-11-step-cool-light-neutral-200` | #e2e8f0 | Tone 200; role assigned separately | tailwind: slate200 |
| `--ds-color-tailwind-11-step-cool-light-neutral-300` | #cad5e2 | Tone 300; role assigned separately | tailwind: slate300 |
| `--ds-color-tailwind-11-step-cool-light-neutral-400` | #90a1b9 | Tone 400; role assigned separately | tailwind: slate400 |
| `--ds-color-tailwind-11-step-cool-light-neutral-500` | #62748e | Tone 500; role assigned separately | tailwind: slate500 |
| `--ds-color-tailwind-11-step-cool-light-neutral-600` | #45556c | Tone 600; role assigned separately | tailwind: slate600 |
| `--ds-color-tailwind-11-step-cool-light-neutral-700` | #314158 | Tone 700; role assigned separately | tailwind: slate700 |
| `--ds-color-tailwind-11-step-cool-light-neutral-800` | #1d293d | Tone 800; role assigned separately | tailwind: slate800 |
| `--ds-color-tailwind-11-step-cool-light-neutral-900` | #0f172b | Tone 900; role assigned separately | tailwind: slate900 |
| `--ds-color-tailwind-11-step-cool-light-neutral-950` | #020618 | Tone 950; role assigned separately | tailwind: slate950 |
| `--ds-color-tailwind-11-step-cool-light-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-cool-light-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-cool-light-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-cool-light-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-cool-light-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-cool-light-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-cool-light-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-cool-light-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-cool-light-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-cool-light-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-cool-light-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-cool-light-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-cool-light-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-cool-light-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-cool-light-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-cool-light-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-cool-light-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-cool-light-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-cool-light-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-cool-light-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-cool-light-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-cool-light-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-cool-light-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-cool-light-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-cool-light-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-cool-light-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-cool-light-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-cool-light-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-cool-light-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-cool-light-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-cool-light-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-cool-light-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-cool-light-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-cool-light-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-cool-light-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-cool-light-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-cool-light-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-cool-light-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-cool-light-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-cool-light-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-cool-light-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-cool-light-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-cool-light-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-cool-light-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-cool-light-example-surface-default` | #f8fafc | Example surface-default | tailwind: slate50 |
| `--ds-color-tailwind-11-step-cool-light-example-text-default` | #020618 | Example text-default | tailwind: slate950 |
| `--ds-color-tailwind-11-step-cool-light-example-text-muted` | #45556c | Example text-muted | tailwind: slate600 |
| `--ds-color-tailwind-11-step-cool-light-example-border-control` | #45556c | Example border-control | tailwind: slate600 |
| `--ds-color-tailwind-11-step-cool-light-example-surface-muted` | #e2e8f0 | Example surface-muted | tailwind: slate200 |
| `--ds-color-tailwind-11-step-cool-light-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-cool-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-cool-light-example-status-danger` | #460809 | Example status-danger | tailwind: red950 |
| `--ds-color-tailwind-11-step-cool-light-example-status-success` | #032e15 | Example status-success | tailwind: green950 |
| `--ds-color-tailwind-11-step-cool-light-example-status-attention` | #461901 | Example status-attention | tailwind: amber950 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-50` | #f8fafc | Tone 50; role assigned separately | tailwind: slate50 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-100` | #f1f5f9 | Tone 100; role assigned separately | tailwind: slate100 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-200` | #e2e8f0 | Tone 200; role assigned separately | tailwind: slate200 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-300` | #cad5e2 | Tone 300; role assigned separately | tailwind: slate300 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-400` | #90a1b9 | Tone 400; role assigned separately | tailwind: slate400 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-500` | #62748e | Tone 500; role assigned separately | tailwind: slate500 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-600` | #45556c | Tone 600; role assigned separately | tailwind: slate600 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-700` | #314158 | Tone 700; role assigned separately | tailwind: slate700 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-800` | #1d293d | Tone 800; role assigned separately | tailwind: slate800 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-900` | #0f172b | Tone 900; role assigned separately | tailwind: slate900 |
| `--ds-color-tailwind-11-step-cool-dark-neutral-950` | #020618 | Tone 950; role assigned separately | tailwind: slate950 |
| `--ds-color-tailwind-11-step-cool-dark-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-cool-dark-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-cool-dark-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-cool-dark-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-cool-dark-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-cool-dark-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-cool-dark-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-cool-dark-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-cool-dark-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-cool-dark-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-cool-dark-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-cool-dark-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-cool-dark-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-cool-dark-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-cool-dark-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-cool-dark-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-cool-dark-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-cool-dark-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-cool-dark-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-cool-dark-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-cool-dark-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-cool-dark-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-cool-dark-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-cool-dark-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-cool-dark-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-cool-dark-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-cool-dark-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-cool-dark-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-cool-dark-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-cool-dark-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-cool-dark-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-cool-dark-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-cool-dark-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-cool-dark-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-cool-dark-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-cool-dark-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-cool-dark-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-cool-dark-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-cool-dark-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-cool-dark-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-cool-dark-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-cool-dark-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-cool-dark-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-cool-dark-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-cool-dark-example-surface-default` | #020618 | Example surface-default | tailwind: slate950 |
| `--ds-color-tailwind-11-step-cool-dark-example-text-default` | #f8fafc | Example text-default | tailwind: slate50 |
| `--ds-color-tailwind-11-step-cool-dark-example-text-muted` | #90a1b9 | Example text-muted | tailwind: slate400 |
| `--ds-color-tailwind-11-step-cool-dark-example-border-control` | #90a1b9 | Example border-control | tailwind: slate400 |
| `--ds-color-tailwind-11-step-cool-dark-example-surface-muted` | #1d293d | Example surface-muted | tailwind: slate800 |
| `--ds-color-tailwind-11-step-cool-dark-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-cool-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-cool-dark-example-status-danger` | #fef2f2 | Example status-danger | tailwind: red50 |
| `--ds-color-tailwind-11-step-cool-dark-example-status-success` | #f0fdf4 | Example status-success | tailwind: green50 |
| `--ds-color-tailwind-11-step-cool-dark-example-status-attention` | #fffbeb | Example status-attention | tailwind: amber50 |
| `--ds-color-tailwind-11-step-warm-light-neutral-50` | #fafaf9 | Tone 50; role assigned separately | tailwind: stone50 |
| `--ds-color-tailwind-11-step-warm-light-neutral-100` | #f5f5f4 | Tone 100; role assigned separately | tailwind: stone100 |
| `--ds-color-tailwind-11-step-warm-light-neutral-200` | #e7e5e4 | Tone 200; role assigned separately | tailwind: stone200 |
| `--ds-color-tailwind-11-step-warm-light-neutral-300` | #d6d3d1 | Tone 300; role assigned separately | tailwind: stone300 |
| `--ds-color-tailwind-11-step-warm-light-neutral-400` | #a6a09b | Tone 400; role assigned separately | tailwind: stone400 |
| `--ds-color-tailwind-11-step-warm-light-neutral-500` | #79716b | Tone 500; role assigned separately | tailwind: stone500 |
| `--ds-color-tailwind-11-step-warm-light-neutral-600` | #57534d | Tone 600; role assigned separately | tailwind: stone600 |
| `--ds-color-tailwind-11-step-warm-light-neutral-700` | #44403b | Tone 700; role assigned separately | tailwind: stone700 |
| `--ds-color-tailwind-11-step-warm-light-neutral-800` | #292524 | Tone 800; role assigned separately | tailwind: stone800 |
| `--ds-color-tailwind-11-step-warm-light-neutral-900` | #1c1917 | Tone 900; role assigned separately | tailwind: stone900 |
| `--ds-color-tailwind-11-step-warm-light-neutral-950` | #0c0a09 | Tone 950; role assigned separately | tailwind: stone950 |
| `--ds-color-tailwind-11-step-warm-light-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-warm-light-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-warm-light-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-warm-light-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-warm-light-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-warm-light-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-warm-light-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-warm-light-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-warm-light-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-warm-light-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-warm-light-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-warm-light-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-warm-light-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-warm-light-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-warm-light-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-warm-light-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-warm-light-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-warm-light-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-warm-light-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-warm-light-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-warm-light-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-warm-light-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-warm-light-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-warm-light-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-warm-light-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-warm-light-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-warm-light-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-warm-light-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-warm-light-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-warm-light-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-warm-light-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-warm-light-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-warm-light-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-warm-light-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-warm-light-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-warm-light-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-warm-light-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-warm-light-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-warm-light-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-warm-light-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-warm-light-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-warm-light-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-warm-light-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-warm-light-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-warm-light-example-surface-default` | #fafaf9 | Example surface-default | tailwind: stone50 |
| `--ds-color-tailwind-11-step-warm-light-example-text-default` | #0c0a09 | Example text-default | tailwind: stone950 |
| `--ds-color-tailwind-11-step-warm-light-example-text-muted` | #57534d | Example text-muted | tailwind: stone600 |
| `--ds-color-tailwind-11-step-warm-light-example-border-control` | #57534d | Example border-control | tailwind: stone600 |
| `--ds-color-tailwind-11-step-warm-light-example-surface-muted` | #e7e5e4 | Example surface-muted | tailwind: stone200 |
| `--ds-color-tailwind-11-step-warm-light-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-warm-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-warm-light-example-status-danger` | #460809 | Example status-danger | tailwind: red950 |
| `--ds-color-tailwind-11-step-warm-light-example-status-success` | #032e15 | Example status-success | tailwind: green950 |
| `--ds-color-tailwind-11-step-warm-light-example-status-attention` | #461901 | Example status-attention | tailwind: amber950 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-50` | #fafaf9 | Tone 50; role assigned separately | tailwind: stone50 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-100` | #f5f5f4 | Tone 100; role assigned separately | tailwind: stone100 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-200` | #e7e5e4 | Tone 200; role assigned separately | tailwind: stone200 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-300` | #d6d3d1 | Tone 300; role assigned separately | tailwind: stone300 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-400` | #a6a09b | Tone 400; role assigned separately | tailwind: stone400 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-500` | #79716b | Tone 500; role assigned separately | tailwind: stone500 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-600` | #57534d | Tone 600; role assigned separately | tailwind: stone600 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-700` | #44403b | Tone 700; role assigned separately | tailwind: stone700 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-800` | #292524 | Tone 800; role assigned separately | tailwind: stone800 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-900` | #1c1917 | Tone 900; role assigned separately | tailwind: stone900 |
| `--ds-color-tailwind-11-step-warm-dark-neutral-950` | #0c0a09 | Tone 950; role assigned separately | tailwind: stone950 |
| `--ds-color-tailwind-11-step-warm-dark-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-warm-dark-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-warm-dark-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-warm-dark-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-warm-dark-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-warm-dark-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-warm-dark-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-warm-dark-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-warm-dark-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-warm-dark-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-warm-dark-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-warm-dark-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-warm-dark-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-warm-dark-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-warm-dark-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-warm-dark-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-warm-dark-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-warm-dark-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-warm-dark-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-warm-dark-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-warm-dark-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-warm-dark-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-warm-dark-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-warm-dark-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-warm-dark-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-warm-dark-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-warm-dark-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-warm-dark-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-warm-dark-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-warm-dark-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-warm-dark-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-warm-dark-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-warm-dark-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-warm-dark-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-warm-dark-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-warm-dark-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-warm-dark-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-warm-dark-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-warm-dark-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-warm-dark-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-warm-dark-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-warm-dark-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-warm-dark-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-warm-dark-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-warm-dark-example-surface-default` | #0c0a09 | Example surface-default | tailwind: stone950 |
| `--ds-color-tailwind-11-step-warm-dark-example-text-default` | #fafaf9 | Example text-default | tailwind: stone50 |
| `--ds-color-tailwind-11-step-warm-dark-example-text-muted` | #a6a09b | Example text-muted | tailwind: stone400 |
| `--ds-color-tailwind-11-step-warm-dark-example-border-control` | #a6a09b | Example border-control | tailwind: stone400 |
| `--ds-color-tailwind-11-step-warm-dark-example-surface-muted` | #292524 | Example surface-muted | tailwind: stone800 |
| `--ds-color-tailwind-11-step-warm-dark-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-warm-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-warm-dark-example-status-danger` | #fef2f2 | Example status-danger | tailwind: red50 |
| `--ds-color-tailwind-11-step-warm-dark-example-status-success` | #f0fdf4 | Example status-success | tailwind: green50 |
| `--ds-color-tailwind-11-step-warm-dark-example-status-attention` | #fffbeb | Example status-attention | tailwind: amber50 |
| `--ds-color-tailwind-11-step-pure-light-neutral-50` | #fafafa | Tone 50; role assigned separately | tailwind: neutral50 |
| `--ds-color-tailwind-11-step-pure-light-neutral-100` | #f5f5f5 | Tone 100; role assigned separately | tailwind: neutral100 |
| `--ds-color-tailwind-11-step-pure-light-neutral-200` | #e5e5e5 | Tone 200; role assigned separately | tailwind: neutral200 |
| `--ds-color-tailwind-11-step-pure-light-neutral-300` | #d4d4d4 | Tone 300; role assigned separately | tailwind: neutral300 |
| `--ds-color-tailwind-11-step-pure-light-neutral-400` | #a1a1a1 | Tone 400; role assigned separately | tailwind: neutral400 |
| `--ds-color-tailwind-11-step-pure-light-neutral-500` | #737373 | Tone 500; role assigned separately | tailwind: neutral500 |
| `--ds-color-tailwind-11-step-pure-light-neutral-600` | #525252 | Tone 600; role assigned separately | tailwind: neutral600 |
| `--ds-color-tailwind-11-step-pure-light-neutral-700` | #404040 | Tone 700; role assigned separately | tailwind: neutral700 |
| `--ds-color-tailwind-11-step-pure-light-neutral-800` | #262626 | Tone 800; role assigned separately | tailwind: neutral800 |
| `--ds-color-tailwind-11-step-pure-light-neutral-900` | #171717 | Tone 900; role assigned separately | tailwind: neutral900 |
| `--ds-color-tailwind-11-step-pure-light-neutral-950` | #0a0a0a | Tone 950; role assigned separately | tailwind: neutral950 |
| `--ds-color-tailwind-11-step-pure-light-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-pure-light-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-pure-light-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-pure-light-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-pure-light-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-pure-light-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-pure-light-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-pure-light-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-pure-light-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-pure-light-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-pure-light-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-pure-light-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-pure-light-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-pure-light-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-pure-light-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-pure-light-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-pure-light-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-pure-light-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-pure-light-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-pure-light-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-pure-light-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-pure-light-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-pure-light-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-pure-light-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-pure-light-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-pure-light-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-pure-light-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-pure-light-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-pure-light-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-pure-light-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-pure-light-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-pure-light-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-pure-light-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-pure-light-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-pure-light-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-pure-light-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-pure-light-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-pure-light-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-pure-light-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-pure-light-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-pure-light-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-pure-light-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-pure-light-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-pure-light-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-pure-light-example-surface-default` | #fafafa | Example surface-default | tailwind: neutral50 |
| `--ds-color-tailwind-11-step-pure-light-example-text-default` | #0a0a0a | Example text-default | tailwind: neutral950 |
| `--ds-color-tailwind-11-step-pure-light-example-text-muted` | #525252 | Example text-muted | tailwind: neutral600 |
| `--ds-color-tailwind-11-step-pure-light-example-border-control` | #525252 | Example border-control | tailwind: neutral600 |
| `--ds-color-tailwind-11-step-pure-light-example-surface-muted` | #e5e5e5 | Example surface-muted | tailwind: neutral200 |
| `--ds-color-tailwind-11-step-pure-light-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-pure-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-pure-light-example-status-danger` | #460809 | Example status-danger | tailwind: red950 |
| `--ds-color-tailwind-11-step-pure-light-example-status-success` | #032e15 | Example status-success | tailwind: green950 |
| `--ds-color-tailwind-11-step-pure-light-example-status-attention` | #461901 | Example status-attention | tailwind: amber950 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-50` | #fafafa | Tone 50; role assigned separately | tailwind: neutral50 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-100` | #f5f5f5 | Tone 100; role assigned separately | tailwind: neutral100 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-200` | #e5e5e5 | Tone 200; role assigned separately | tailwind: neutral200 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-300` | #d4d4d4 | Tone 300; role assigned separately | tailwind: neutral300 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-400` | #a1a1a1 | Tone 400; role assigned separately | tailwind: neutral400 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-500` | #737373 | Tone 500; role assigned separately | tailwind: neutral500 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-600` | #525252 | Tone 600; role assigned separately | tailwind: neutral600 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-700` | #404040 | Tone 700; role assigned separately | tailwind: neutral700 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-800` | #262626 | Tone 800; role assigned separately | tailwind: neutral800 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-900` | #171717 | Tone 900; role assigned separately | tailwind: neutral900 |
| `--ds-color-tailwind-11-step-pure-dark-neutral-950` | #0a0a0a | Tone 950; role assigned separately | tailwind: neutral950 |
| `--ds-color-tailwind-11-step-pure-dark-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| `--ds-color-tailwind-11-step-pure-dark-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| `--ds-color-tailwind-11-step-pure-dark-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| `--ds-color-tailwind-11-step-pure-dark-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| `--ds-color-tailwind-11-step-pure-dark-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| `--ds-color-tailwind-11-step-pure-dark-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| `--ds-color-tailwind-11-step-pure-dark-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| `--ds-color-tailwind-11-step-pure-dark-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| `--ds-color-tailwind-11-step-pure-dark-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| `--ds-color-tailwind-11-step-pure-dark-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| `--ds-color-tailwind-11-step-pure-dark-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| `--ds-color-tailwind-11-step-pure-dark-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| `--ds-color-tailwind-11-step-pure-dark-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| `--ds-color-tailwind-11-step-pure-dark-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| `--ds-color-tailwind-11-step-pure-dark-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| `--ds-color-tailwind-11-step-pure-dark-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| `--ds-color-tailwind-11-step-pure-dark-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| `--ds-color-tailwind-11-step-pure-dark-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| `--ds-color-tailwind-11-step-pure-dark-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| `--ds-color-tailwind-11-step-pure-dark-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| `--ds-color-tailwind-11-step-pure-dark-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| `--ds-color-tailwind-11-step-pure-dark-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| `--ds-color-tailwind-11-step-pure-dark-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| `--ds-color-tailwind-11-step-pure-dark-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| `--ds-color-tailwind-11-step-pure-dark-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| `--ds-color-tailwind-11-step-pure-dark-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| `--ds-color-tailwind-11-step-pure-dark-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| `--ds-color-tailwind-11-step-pure-dark-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| `--ds-color-tailwind-11-step-pure-dark-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| `--ds-color-tailwind-11-step-pure-dark-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| `--ds-color-tailwind-11-step-pure-dark-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| `--ds-color-tailwind-11-step-pure-dark-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| `--ds-color-tailwind-11-step-pure-dark-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| `--ds-color-tailwind-11-step-pure-dark-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| `--ds-color-tailwind-11-step-pure-dark-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| `--ds-color-tailwind-11-step-pure-dark-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| `--ds-color-tailwind-11-step-pure-dark-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| `--ds-color-tailwind-11-step-pure-dark-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| `--ds-color-tailwind-11-step-pure-dark-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| `--ds-color-tailwind-11-step-pure-dark-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| `--ds-color-tailwind-11-step-pure-dark-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| `--ds-color-tailwind-11-step-pure-dark-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| `--ds-color-tailwind-11-step-pure-dark-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| `--ds-color-tailwind-11-step-pure-dark-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| `--ds-color-tailwind-11-step-pure-dark-example-surface-default` | #0a0a0a | Example surface-default | tailwind: neutral950 |
| `--ds-color-tailwind-11-step-pure-dark-example-text-default` | #fafafa | Example text-default | tailwind: neutral50 |
| `--ds-color-tailwind-11-step-pure-dark-example-text-muted` | #a1a1a1 | Example text-muted | tailwind: neutral400 |
| `--ds-color-tailwind-11-step-pure-dark-example-border-control` | #a1a1a1 | Example border-control | tailwind: neutral400 |
| `--ds-color-tailwind-11-step-pure-dark-example-surface-muted` | #262626 | Example surface-muted | tailwind: neutral800 |
| `--ds-color-tailwind-11-step-pure-dark-example-brand-fill` | #2b7fff | Example brand-fill | tailwind: blue500 |
| `--ds-color-tailwind-11-step-pure-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-tailwind-11-step-pure-dark-example-status-danger` | #fef2f2 | Example status-danger | tailwind: red50 |
| `--ds-color-tailwind-11-step-pure-dark-example-status-success` | #f0fdf4 | Example status-success | tailwind: green50 |
| `--ds-color-tailwind-11-step-pure-dark-example-status-attention` | #fffbeb | Example status-attention | tailwind: amber50 |

## Declared contrast pairs

Computed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.

| Variant | Pair | Ratio | Minimum |
|---|---|---|---|
| cool/light | ink on paper | 19.265 | 4.5 |
| cool/light | muted on paper | 7.249 | 4.5 |
| cool/light | error on paper | 15.450 | 4.5 |
| cool/light | success on paper | 14.280 | 4.5 |
| cool/light | attention on paper | 14.337 | 4.5 |
| cool/light | ink on wash | 16.351 | 4.5 |
| cool/light | muted on wash | 6.152 | 4.5 |
| cool/light | error on wash | 13.113 | 4.5 |
| cool/light | success on wash | 12.120 | 4.5 |
| cool/light | attention on wash | 12.168 | 4.5 |
| cool/light | Action label | 5.582 | 4.5 |
| cool/light | Control boundary | 7.249 | 3 |
| cool/light | Large heading | 19.265 | 3 |
| cool/dark | ink on paper | 19.265 | 4.5 |
| cool/dark | muted on paper | 7.664 | 4.5 |
| cool/dark | error on paper | 18.427 | 4.5 |
| cool/dark | success on paper | 19.256 | 4.5 |
| cool/dark | attention on paper | 19.438 | 4.5 |
| cool/dark | ink on wash | 13.969 | 4.5 |
| cool/dark | muted on wash | 5.557 | 4.5 |
| cool/dark | error on wash | 13.361 | 4.5 |
| cool/dark | success on wash | 13.963 | 4.5 |
| cool/dark | attention on wash | 14.094 | 4.5 |
| cool/dark | Action label | 5.582 | 4.5 |
| cool/dark | Control boundary | 7.664 | 3 |
| cool/dark | Large heading | 19.265 | 3 |
| warm/light | ink on paper | 18.915 | 4.5 |
| warm/light | muted on paper | 7.312 | 4.5 |
| warm/light | error on paper | 15.478 | 4.5 |
| warm/light | success on paper | 14.306 | 4.5 |
| warm/light | attention on paper | 14.363 | 4.5 |
| warm/light | ink on wash | 15.735 | 4.5 |
| warm/light | muted on wash | 6.083 | 4.5 |
| warm/light | error on wash | 12.875 | 4.5 |
| warm/light | success on wash | 11.900 | 4.5 |
| warm/light | attention on wash | 11.948 | 4.5 |
| warm/light | Action label | 5.582 | 4.5 |
| warm/light | Control boundary | 7.312 | 3 |
| warm/light | Large heading | 18.915 | 3 |
| warm/dark | ink on paper | 18.915 | 4.5 |
| warm/dark | muted on paper | 7.642 | 4.5 |
| warm/dark | error on paper | 18.060 | 4.5 |
| warm/dark | success on paper | 18.873 | 4.5 |
| warm/dark | attention on paper | 19.050 | 4.5 |
| warm/dark | ink on wash | 14.524 | 4.5 |
| warm/dark | muted on wash | 5.868 | 4.5 |
| warm/dark | error on wash | 13.867 | 4.5 |
| warm/dark | success on wash | 14.491 | 4.5 |
| warm/dark | attention on wash | 14.628 | 4.5 |
| warm/dark | Action label | 5.582 | 4.5 |
| warm/dark | Control boundary | 7.642 | 3 |
| warm/dark | Large heading | 18.915 | 3 |
| pure/light | ink on paper | 18.968 | 4.5 |
| pure/light | muted on paper | 7.486 | 4.5 |
| pure/light | error on paper | 15.487 | 4.5 |
| pure/light | success on paper | 14.315 | 4.5 |
| pure/light | attention on paper | 14.372 | 4.5 |
| pure/light | ink on wash | 15.717 | 4.5 |
| pure/light | muted on wash | 6.203 | 4.5 |
| pure/light | error on wash | 12.833 | 4.5 |
| pure/light | success on wash | 11.861 | 4.5 |
| pure/light | attention on wash | 11.908 | 4.5 |
| pure/light | Action label | 5.582 | 4.5 |
| pure/light | Control boundary | 7.486 | 3 |
| pure/light | Large heading | 18.968 | 3 |
| pure/dark | ink on paper | 18.968 | 4.5 |
| pure/dark | muted on paper | 7.663 | 4.5 |
| pure/dark | error on paper | 18.099 | 4.5 |
| pure/dark | success on paper | 18.913 | 4.5 |
| pure/dark | attention on paper | 19.092 | 4.5 |
| pure/dark | ink on wash | 14.499 | 4.5 |
| pure/dark | muted on wash | 5.857 | 4.5 |
| pure/dark | error on wash | 13.834 | 4.5 |
| pure/dark | success on wash | 14.457 | 4.5 |
| pure/dark | attention on wash | 14.593 | 4.5 |
| pure/dark | Action label | 5.582 | 4.5 |
| pure/dark | Control boundary | 7.663 | 3 |
| pure/dark | Large heading | 18.968 | 3 |

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `07f3ce95214a84df22673c827d5b7adf7c0caa93`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.css` SHA-256: `f275ff812b7fa66e49066086a6bc94ab707823613f20b03b1bef8de2dcb3588c`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/tailwind-11-step/tokens.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:c48ef043cf06   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [MEDIUM] color/literal-duplicate-tokens
  │ 78 colour value(s) are declared by 390 different tokens
  │ where: #f8fafc <- --ds-color-tailwind-11-step-cool-light-neutral-50, --ds-color-tailwind-11-step-cool-light-example-surface-default, --ds-color-tailwind-11-step-cool-dark-neutral-50, --ds-color-tailwind-11-step-cool-dark-example-text-default; #f1f5f9 <- --ds-color-tailwind-11-step-cool-light-neutral-100, --ds-color-tailwind-11-step-cool-dark-neutral-100; #e2e8f0 <- --ds-color-tailwind-11-step-cool-light-neutral-200, --ds-color-tailwind-11-step-cool-light-example-surface-muted, --ds-color-tailwind-11-step-cool-dark-neutral-200; #cad5e2 <- --ds-color-tailwind-11-step-cool-light-neutral-300, --ds-color-tailwind-11-step-cool-dark-neutral-300; #90a1b9 <- --ds-color-tailwind-11-step-cool-light-neutral-400, --ds-color-tailwind-11-step-cool-dark-neutral-400, --ds-color-tailwind-11-step-cool-dark-example-text-muted, --ds-color-tailwind-11-step-cool-dark-example-border-control; #62748e <- --ds-color-tailwind-11-step-cool-light-neutral-500, --ds-color-tailwind-11-step-cool-dark-neutral-500
  │ risk:  The next person to change this colour changes one of the names and not the others, and the system carries two values for one decision.
  │ fix:   Keep one canonical token per value; make the rest var() aliases of it.

  [LOW] color/near-duplicate-primitives
  │ 14 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-color-tailwind-11-step-cool-light-neutral-50 ≈ --ds-color-tailwind-11-step-cool-light-neutral-100 (ΔE 1.589671); --ds-color-tailwind-11-step-cool-light-neutral-50 ≈ --ds-color-tailwind-11-step-warm-light-neutral-50 (ΔE 1.647404); --ds-color-tailwind-11-step-cool-light-neutral-50 ≈ --ds-color-tailwind-11-step-warm-light-neutral-100 (ΔE 1.914994); --ds-color-tailwind-11-step-cool-light-neutral-50 ≈ --ds-color-tailwind-11-step-pure-light-neutral-50 (ΔE 1.238028); --ds-color-tailwind-11-step-cool-light-neutral-50 ≈ --ds-color-tailwind-11-step-pure-light-neutral-100 (ΔE 1.565369); --ds-color-tailwind-11-step-warm-light-neutral-50 ≈ --ds-color-tailwind-11-step-warm-light-neutral-100 (ΔE 1.015859); --ds-color-tailwind-11-step-warm-light-neutral-50 ≈ --ds-color-tailwind-11-step-pure-light-neutral-50 (ΔE 0.539152); --ds-color-tailwind-11-step-warm-light-neutral-50 ≈ --ds-color-tailwind-11-step-pure-light-neutral-100 (ΔE 1.136952)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  2 findings — 0 blocking · 0 high · 1 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  5
    colors-per-distinct-in-scope 5
    ambiguous-share              0

  next
    decide on the rest                                                        nothing here is mechanically provable — all 2 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/tailwind-11-step/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                          report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
