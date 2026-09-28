# tailwind-11-step

A source palette with explicitly separate example role mappings.

## Rationale

Tailwind keeps steps 50–950 in both modes. The palette values do not invert or change; independently chosen role mappings select different steps for light/dark. Cool/warm/pure neutrals select slate/stone/neutral. Accent/success/attention/danger use blue/green/amber/red. 

On-fill selection starts at Radix step 9 or Tailwind’s oriented middle step, checks candidates by distance in the ramp (higher index first on ties), and takes the first that meets 4.5:1 with the chosen label. This is an independently derived role assignment, not a change to the source step’s advertised job. Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team needs a ramp to define its own roles. Do not apply palette steps directly in components or assume every pair is accessible. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Import exactly one of tokens.cool.css, tokens.warm.css or tokens.pure.css. Each file provides the same public names and both themes. Set data-theme="light" or data-theme="dark" on the document root; remove the attribute to follow prefers-color-scheme. Explicit light overrides an OS dark preference. Do not import multiple neutral files together. Palette names preserve source steps (Radix 1–12; Tailwind 50–950); role names are independent of option, neutral and mode. Components consume project aliases with fallbacks. JSON stores tokens under variants[neutral][mode].tokens; roles contain var() references. Native callers resolve these chains to opaque sRGB strings with scripts/color-contract.mjs resolveColor; native rendering remains unverified. On-fill roles choose white for neutral/blue/green/red and black for amber, then select a source fill step meeting 4.5:1. No source value is repainted. All declared pairs pass; no selected fill fails both black and white.

[Tailwind source](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/theme.css), revision fa81d697fe572a10ac150d18964a093a7a874081, MIT. Values converted from OKLCH to clipped, byte-rounded sRGB. Original sourceValue is retained per token; scripts/color-math.mjs shows the derivation. This is not an exact wide-gamut reproduction. [Notice](../../../../LICENSES/Tailwind-CSS-MIT.txt).  Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Audit interpretation

Known exception: --ds-neutral-50 and --ds-neutral-100 remain separate. Measured CIEDE2000 is 1.589671 (cool/slate), 1.015859 (warm/stone), and 1.015578 (pure/neutral) in the kit’s sRGB derivative. They preserve the pinned Tailwind 50/100 steps and their independent selection roles; they are not collapsed. This is a documented proximity exception, not a literal duplicate or an engine suppression.

All three shipped neutral files have zero color/literal-duplicate-tokens findings. There are no deliberate duplicate exceptions and no suppressions. Low-severity palette proximity diagnostics remain in the verbatim audits below. The engine reads both theme blocks together; some proximity pairs cross light/dark contexts and are not evidence of a collision within one active theme. Source steps remain intact.

## Values

| Variant | Token | CSS value or alias | Role | Source per value |
|---|---|---|---|---|
| cool/light | `--ds-neutral-50` | #f8fafc | Tone 50; role assigned separately | tailwind: slate50 |
| cool/light | `--ds-neutral-100` | #f1f5f9 | Tone 100; role assigned separately | tailwind: slate100 |
| cool/light | `--ds-neutral-200` | #e2e8f0 | Tone 200; role assigned separately | tailwind: slate200 |
| cool/light | `--ds-neutral-300` | #cad5e2 | Tone 300; role assigned separately | tailwind: slate300 |
| cool/light | `--ds-neutral-400` | #90a1b9 | Tone 400; role assigned separately | tailwind: slate400 |
| cool/light | `--ds-neutral-500` | #62748e | Tone 500; role assigned separately | tailwind: slate500 |
| cool/light | `--ds-neutral-600` | #45556c | Tone 600; role assigned separately | tailwind: slate600 |
| cool/light | `--ds-neutral-700` | #314158 | Tone 700; role assigned separately | tailwind: slate700 |
| cool/light | `--ds-neutral-800` | #1d293d | Tone 800; role assigned separately | tailwind: slate800 |
| cool/light | `--ds-neutral-900` | #0f172b | Tone 900; role assigned separately | tailwind: slate900 |
| cool/light | `--ds-neutral-950` | #020618 | Tone 950; role assigned separately | tailwind: slate950 |
| cool/light | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| cool/light | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| cool/light | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| cool/light | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| cool/light | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| cool/light | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| cool/light | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| cool/light | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| cool/light | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| cool/light | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| cool/light | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| cool/light | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| cool/light | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| cool/light | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| cool/light | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| cool/light | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| cool/light | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| cool/light | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| cool/light | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| cool/light | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| cool/light | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| cool/light | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| cool/light | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| cool/light | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| cool/light | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| cool/light | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| cool/light | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| cool/light | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| cool/light | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| cool/light | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| cool/light | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| cool/light | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| cool/light | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| cool/light | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| cool/light | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| cool/light | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| cool/light | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| cool/light | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| cool/light | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| cool/light | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| cool/light | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| cool/light | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| cool/light | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| cool/light | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| cool/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-surface-default` | var(--ds-neutral-50) | Example surface-default | independent: independently derived mapping/endpoint |
| cool/light | `--ds-text-default` | var(--ds-neutral-950) | Example text-default | independent: independently derived mapping/endpoint |
| cool/light | `--ds-text-muted` | var(--ds-neutral-600) | Example text-muted | independent: independently derived mapping/endpoint |
| cool/light | `--ds-border-control` | var(--ds-neutral-600) | Example border-control | independent: independently derived mapping/endpoint |
| cool/light | `--ds-surface-muted` | var(--ds-neutral-200) | Example surface-muted | independent: independently derived mapping/endpoint |
| cool/light | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-danger` | var(--ds-danger-950) | Example status-danger | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-success` | var(--ds-success-950) | Example status-success | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-attention` | var(--ds-attention-950) | Example status-attention | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-neutral-50` | #f8fafc | Tone 50; role assigned separately | tailwind: slate50 |
| cool/dark | `--ds-neutral-100` | #f1f5f9 | Tone 100; role assigned separately | tailwind: slate100 |
| cool/dark | `--ds-neutral-200` | #e2e8f0 | Tone 200; role assigned separately | tailwind: slate200 |
| cool/dark | `--ds-neutral-300` | #cad5e2 | Tone 300; role assigned separately | tailwind: slate300 |
| cool/dark | `--ds-neutral-400` | #90a1b9 | Tone 400; role assigned separately | tailwind: slate400 |
| cool/dark | `--ds-neutral-500` | #62748e | Tone 500; role assigned separately | tailwind: slate500 |
| cool/dark | `--ds-neutral-600` | #45556c | Tone 600; role assigned separately | tailwind: slate600 |
| cool/dark | `--ds-neutral-700` | #314158 | Tone 700; role assigned separately | tailwind: slate700 |
| cool/dark | `--ds-neutral-800` | #1d293d | Tone 800; role assigned separately | tailwind: slate800 |
| cool/dark | `--ds-neutral-900` | #0f172b | Tone 900; role assigned separately | tailwind: slate900 |
| cool/dark | `--ds-neutral-950` | #020618 | Tone 950; role assigned separately | tailwind: slate950 |
| cool/dark | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| cool/dark | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| cool/dark | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| cool/dark | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| cool/dark | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| cool/dark | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| cool/dark | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| cool/dark | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| cool/dark | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| cool/dark | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| cool/dark | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| cool/dark | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| cool/dark | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| cool/dark | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| cool/dark | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| cool/dark | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| cool/dark | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| cool/dark | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| cool/dark | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| cool/dark | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| cool/dark | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| cool/dark | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| cool/dark | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| cool/dark | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| cool/dark | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| cool/dark | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| cool/dark | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| cool/dark | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| cool/dark | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| cool/dark | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| cool/dark | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| cool/dark | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| cool/dark | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| cool/dark | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| cool/dark | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| cool/dark | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| cool/dark | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| cool/dark | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| cool/dark | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| cool/dark | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| cool/dark | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| cool/dark | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| cool/dark | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| cool/dark | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| cool/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-surface-default` | var(--ds-neutral-950) | Example surface-default | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-text-default` | var(--ds-neutral-50) | Example text-default | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-text-muted` | var(--ds-neutral-400) | Example text-muted | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-border-control` | var(--ds-neutral-400) | Example border-control | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-surface-muted` | var(--ds-neutral-800) | Example surface-muted | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-danger` | var(--ds-danger-50) | Example status-danger | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-success` | var(--ds-success-50) | Example status-success | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-attention` | var(--ds-attention-50) | Example status-attention | independent: independently derived mapping/endpoint |
| warm/light | `--ds-neutral-50` | #fafaf9 | Tone 50; role assigned separately | tailwind: stone50 |
| warm/light | `--ds-neutral-100` | #f5f5f4 | Tone 100; role assigned separately | tailwind: stone100 |
| warm/light | `--ds-neutral-200` | #e7e5e4 | Tone 200; role assigned separately | tailwind: stone200 |
| warm/light | `--ds-neutral-300` | #d6d3d1 | Tone 300; role assigned separately | tailwind: stone300 |
| warm/light | `--ds-neutral-400` | #a6a09b | Tone 400; role assigned separately | tailwind: stone400 |
| warm/light | `--ds-neutral-500` | #79716b | Tone 500; role assigned separately | tailwind: stone500 |
| warm/light | `--ds-neutral-600` | #57534d | Tone 600; role assigned separately | tailwind: stone600 |
| warm/light | `--ds-neutral-700` | #44403b | Tone 700; role assigned separately | tailwind: stone700 |
| warm/light | `--ds-neutral-800` | #292524 | Tone 800; role assigned separately | tailwind: stone800 |
| warm/light | `--ds-neutral-900` | #1c1917 | Tone 900; role assigned separately | tailwind: stone900 |
| warm/light | `--ds-neutral-950` | #0c0a09 | Tone 950; role assigned separately | tailwind: stone950 |
| warm/light | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| warm/light | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| warm/light | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| warm/light | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| warm/light | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| warm/light | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| warm/light | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| warm/light | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| warm/light | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| warm/light | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| warm/light | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| warm/light | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| warm/light | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| warm/light | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| warm/light | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| warm/light | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| warm/light | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| warm/light | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| warm/light | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| warm/light | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| warm/light | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| warm/light | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| warm/light | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| warm/light | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| warm/light | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| warm/light | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| warm/light | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| warm/light | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| warm/light | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| warm/light | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| warm/light | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| warm/light | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| warm/light | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| warm/light | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| warm/light | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| warm/light | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| warm/light | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| warm/light | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| warm/light | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| warm/light | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| warm/light | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| warm/light | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| warm/light | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| warm/light | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| warm/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-surface-default` | var(--ds-neutral-50) | Example surface-default | independent: independently derived mapping/endpoint |
| warm/light | `--ds-text-default` | var(--ds-neutral-950) | Example text-default | independent: independently derived mapping/endpoint |
| warm/light | `--ds-text-muted` | var(--ds-neutral-600) | Example text-muted | independent: independently derived mapping/endpoint |
| warm/light | `--ds-border-control` | var(--ds-neutral-600) | Example border-control | independent: independently derived mapping/endpoint |
| warm/light | `--ds-surface-muted` | var(--ds-neutral-200) | Example surface-muted | independent: independently derived mapping/endpoint |
| warm/light | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-danger` | var(--ds-danger-950) | Example status-danger | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-success` | var(--ds-success-950) | Example status-success | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-attention` | var(--ds-attention-950) | Example status-attention | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-neutral-50` | #fafaf9 | Tone 50; role assigned separately | tailwind: stone50 |
| warm/dark | `--ds-neutral-100` | #f5f5f4 | Tone 100; role assigned separately | tailwind: stone100 |
| warm/dark | `--ds-neutral-200` | #e7e5e4 | Tone 200; role assigned separately | tailwind: stone200 |
| warm/dark | `--ds-neutral-300` | #d6d3d1 | Tone 300; role assigned separately | tailwind: stone300 |
| warm/dark | `--ds-neutral-400` | #a6a09b | Tone 400; role assigned separately | tailwind: stone400 |
| warm/dark | `--ds-neutral-500` | #79716b | Tone 500; role assigned separately | tailwind: stone500 |
| warm/dark | `--ds-neutral-600` | #57534d | Tone 600; role assigned separately | tailwind: stone600 |
| warm/dark | `--ds-neutral-700` | #44403b | Tone 700; role assigned separately | tailwind: stone700 |
| warm/dark | `--ds-neutral-800` | #292524 | Tone 800; role assigned separately | tailwind: stone800 |
| warm/dark | `--ds-neutral-900` | #1c1917 | Tone 900; role assigned separately | tailwind: stone900 |
| warm/dark | `--ds-neutral-950` | #0c0a09 | Tone 950; role assigned separately | tailwind: stone950 |
| warm/dark | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| warm/dark | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| warm/dark | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| warm/dark | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| warm/dark | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| warm/dark | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| warm/dark | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| warm/dark | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| warm/dark | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| warm/dark | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| warm/dark | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| warm/dark | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| warm/dark | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| warm/dark | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| warm/dark | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| warm/dark | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| warm/dark | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| warm/dark | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| warm/dark | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| warm/dark | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| warm/dark | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| warm/dark | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| warm/dark | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| warm/dark | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| warm/dark | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| warm/dark | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| warm/dark | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| warm/dark | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| warm/dark | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| warm/dark | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| warm/dark | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| warm/dark | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| warm/dark | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| warm/dark | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| warm/dark | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| warm/dark | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| warm/dark | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| warm/dark | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| warm/dark | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| warm/dark | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| warm/dark | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| warm/dark | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| warm/dark | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| warm/dark | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| warm/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-surface-default` | var(--ds-neutral-950) | Example surface-default | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-text-default` | var(--ds-neutral-50) | Example text-default | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-text-muted` | var(--ds-neutral-400) | Example text-muted | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-border-control` | var(--ds-neutral-400) | Example border-control | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-surface-muted` | var(--ds-neutral-800) | Example surface-muted | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-danger` | var(--ds-danger-50) | Example status-danger | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-success` | var(--ds-success-50) | Example status-success | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-attention` | var(--ds-attention-50) | Example status-attention | independent: independently derived mapping/endpoint |
| pure/light | `--ds-neutral-50` | #fafafa | Tone 50; role assigned separately | tailwind: neutral50 |
| pure/light | `--ds-neutral-100` | #f5f5f5 | Tone 100; role assigned separately | tailwind: neutral100 |
| pure/light | `--ds-neutral-200` | #e5e5e5 | Tone 200; role assigned separately | tailwind: neutral200 |
| pure/light | `--ds-neutral-300` | #d4d4d4 | Tone 300; role assigned separately | tailwind: neutral300 |
| pure/light | `--ds-neutral-400` | #a1a1a1 | Tone 400; role assigned separately | tailwind: neutral400 |
| pure/light | `--ds-neutral-500` | #737373 | Tone 500; role assigned separately | tailwind: neutral500 |
| pure/light | `--ds-neutral-600` | #525252 | Tone 600; role assigned separately | tailwind: neutral600 |
| pure/light | `--ds-neutral-700` | #404040 | Tone 700; role assigned separately | tailwind: neutral700 |
| pure/light | `--ds-neutral-800` | #262626 | Tone 800; role assigned separately | tailwind: neutral800 |
| pure/light | `--ds-neutral-900` | #171717 | Tone 900; role assigned separately | tailwind: neutral900 |
| pure/light | `--ds-neutral-950` | #0a0a0a | Tone 950; role assigned separately | tailwind: neutral950 |
| pure/light | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| pure/light | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| pure/light | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| pure/light | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| pure/light | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| pure/light | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| pure/light | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| pure/light | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| pure/light | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| pure/light | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| pure/light | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| pure/light | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| pure/light | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| pure/light | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| pure/light | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| pure/light | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| pure/light | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| pure/light | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| pure/light | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| pure/light | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| pure/light | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| pure/light | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| pure/light | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| pure/light | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| pure/light | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| pure/light | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| pure/light | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| pure/light | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| pure/light | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| pure/light | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| pure/light | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| pure/light | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| pure/light | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| pure/light | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| pure/light | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| pure/light | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| pure/light | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| pure/light | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| pure/light | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| pure/light | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| pure/light | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| pure/light | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| pure/light | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| pure/light | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| pure/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-surface-default` | var(--ds-neutral-50) | Example surface-default | independent: independently derived mapping/endpoint |
| pure/light | `--ds-text-default` | var(--ds-neutral-950) | Example text-default | independent: independently derived mapping/endpoint |
| pure/light | `--ds-text-muted` | var(--ds-neutral-600) | Example text-muted | independent: independently derived mapping/endpoint |
| pure/light | `--ds-border-control` | var(--ds-neutral-600) | Example border-control | independent: independently derived mapping/endpoint |
| pure/light | `--ds-surface-muted` | var(--ds-neutral-200) | Example surface-muted | independent: independently derived mapping/endpoint |
| pure/light | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-danger` | var(--ds-danger-950) | Example status-danger | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-success` | var(--ds-success-950) | Example status-success | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-attention` | var(--ds-attention-950) | Example status-attention | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-neutral-50` | #fafafa | Tone 50; role assigned separately | tailwind: neutral50 |
| pure/dark | `--ds-neutral-100` | #f5f5f5 | Tone 100; role assigned separately | tailwind: neutral100 |
| pure/dark | `--ds-neutral-200` | #e5e5e5 | Tone 200; role assigned separately | tailwind: neutral200 |
| pure/dark | `--ds-neutral-300` | #d4d4d4 | Tone 300; role assigned separately | tailwind: neutral300 |
| pure/dark | `--ds-neutral-400` | #a1a1a1 | Tone 400; role assigned separately | tailwind: neutral400 |
| pure/dark | `--ds-neutral-500` | #737373 | Tone 500; role assigned separately | tailwind: neutral500 |
| pure/dark | `--ds-neutral-600` | #525252 | Tone 600; role assigned separately | tailwind: neutral600 |
| pure/dark | `--ds-neutral-700` | #404040 | Tone 700; role assigned separately | tailwind: neutral700 |
| pure/dark | `--ds-neutral-800` | #262626 | Tone 800; role assigned separately | tailwind: neutral800 |
| pure/dark | `--ds-neutral-900` | #171717 | Tone 900; role assigned separately | tailwind: neutral900 |
| pure/dark | `--ds-neutral-950` | #0a0a0a | Tone 950; role assigned separately | tailwind: neutral950 |
| pure/dark | `--ds-accent-50` | #eff6ff | Tone 50; role assigned separately | tailwind: blue50 |
| pure/dark | `--ds-accent-100` | #dbeafe | Tone 100; role assigned separately | tailwind: blue100 |
| pure/dark | `--ds-accent-200` | #bedbff | Tone 200; role assigned separately | tailwind: blue200 |
| pure/dark | `--ds-accent-300` | #8ec5ff | Tone 300; role assigned separately | tailwind: blue300 |
| pure/dark | `--ds-accent-400` | #51a2ff | Tone 400; role assigned separately | tailwind: blue400 |
| pure/dark | `--ds-accent-500` | #2b7fff | Tone 500; role assigned separately | tailwind: blue500 |
| pure/dark | `--ds-accent-600` | #155dfc | Tone 600; role assigned separately | tailwind: blue600 |
| pure/dark | `--ds-accent-700` | #1447e6 | Tone 700; role assigned separately | tailwind: blue700 |
| pure/dark | `--ds-accent-800` | #193cb8 | Tone 800; role assigned separately | tailwind: blue800 |
| pure/dark | `--ds-accent-900` | #1c398e | Tone 900; role assigned separately | tailwind: blue900 |
| pure/dark | `--ds-accent-950` | #162456 | Tone 950; role assigned separately | tailwind: blue950 |
| pure/dark | `--ds-success-50` | #f0fdf4 | Tone 50; role assigned separately | tailwind: green50 |
| pure/dark | `--ds-success-100` | #dcfce7 | Tone 100; role assigned separately | tailwind: green100 |
| pure/dark | `--ds-success-200` | #b9f8cf | Tone 200; role assigned separately | tailwind: green200 |
| pure/dark | `--ds-success-300` | #7bf1a8 | Tone 300; role assigned separately | tailwind: green300 |
| pure/dark | `--ds-success-400` | #05df72 | Tone 400; role assigned separately | tailwind: green400 |
| pure/dark | `--ds-success-500` | #00c950 | Tone 500; role assigned separately | tailwind: green500 |
| pure/dark | `--ds-success-600` | #00a63e | Tone 600; role assigned separately | tailwind: green600 |
| pure/dark | `--ds-success-700` | #008236 | Tone 700; role assigned separately | tailwind: green700 |
| pure/dark | `--ds-success-800` | #016630 | Tone 800; role assigned separately | tailwind: green800 |
| pure/dark | `--ds-success-900` | #0d542b | Tone 900; role assigned separately | tailwind: green900 |
| pure/dark | `--ds-success-950` | #032e15 | Tone 950; role assigned separately | tailwind: green950 |
| pure/dark | `--ds-attention-50` | #fffbeb | Tone 50; role assigned separately | tailwind: amber50 |
| pure/dark | `--ds-attention-100` | #fef3c6 | Tone 100; role assigned separately | tailwind: amber100 |
| pure/dark | `--ds-attention-200` | #fee685 | Tone 200; role assigned separately | tailwind: amber200 |
| pure/dark | `--ds-attention-300` | #ffd230 | Tone 300; role assigned separately | tailwind: amber300 |
| pure/dark | `--ds-attention-400` | #ffb900 | Tone 400; role assigned separately | tailwind: amber400 |
| pure/dark | `--ds-attention-500` | #fe9a00 | Tone 500; role assigned separately | tailwind: amber500 |
| pure/dark | `--ds-attention-600` | #e17100 | Tone 600; role assigned separately | tailwind: amber600 |
| pure/dark | `--ds-attention-700` | #bb4d00 | Tone 700; role assigned separately | tailwind: amber700 |
| pure/dark | `--ds-attention-800` | #973c00 | Tone 800; role assigned separately | tailwind: amber800 |
| pure/dark | `--ds-attention-900` | #7b3306 | Tone 900; role assigned separately | tailwind: amber900 |
| pure/dark | `--ds-attention-950` | #461901 | Tone 950; role assigned separately | tailwind: amber950 |
| pure/dark | `--ds-danger-50` | #fef2f2 | Tone 50; role assigned separately | tailwind: red50 |
| pure/dark | `--ds-danger-100` | #ffe2e2 | Tone 100; role assigned separately | tailwind: red100 |
| pure/dark | `--ds-danger-200` | #ffc9c9 | Tone 200; role assigned separately | tailwind: red200 |
| pure/dark | `--ds-danger-300` | #ffa2a2 | Tone 300; role assigned separately | tailwind: red300 |
| pure/dark | `--ds-danger-400` | #ff6467 | Tone 400; role assigned separately | tailwind: red400 |
| pure/dark | `--ds-danger-500` | #fb2c36 | Tone 500; role assigned separately | tailwind: red500 |
| pure/dark | `--ds-danger-600` | #e7000b | Tone 600; role assigned separately | tailwind: red600 |
| pure/dark | `--ds-danger-700` | #c10007 | Tone 700; role assigned separately | tailwind: red700 |
| pure/dark | `--ds-danger-800` | #9f0712 | Tone 800; role assigned separately | tailwind: red800 |
| pure/dark | `--ds-danger-900` | #82181a | Tone 900; role assigned separately | tailwind: red900 |
| pure/dark | `--ds-danger-950` | #460809 | Tone 950; role assigned separately | tailwind: red950 |
| pure/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-neutral` | var(--ds-neutral-500) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-accent` | var(--ds-accent-600) | accent emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-success` | var(--ds-success-700) | success emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-attention` | var(--ds-attention-500) | attention emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-danger` | var(--ds-danger-600) | danger emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-surface-default` | var(--ds-neutral-950) | Example surface-default | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-text-default` | var(--ds-neutral-50) | Example text-default | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-text-muted` | var(--ds-neutral-400) | Example text-muted | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-border-control` | var(--ds-neutral-400) | Example border-control | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-surface-muted` | var(--ds-neutral-800) | Example surface-muted | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-brand-fill` | var(--ds-accent-600) | Example brand-fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-danger` | var(--ds-danger-50) | Example status-danger | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-success` | var(--ds-success-50) | Example status-success | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-attention` | var(--ds-attention-50) | Example status-attention | independent: independently derived mapping/endpoint |

## Declared contrast pairs

Computed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.

| Variant | Pair | Ratio | Minimum |
|---|---|---|---|
| cool/light | neutral: on-fill label | 4.764 | 4.5 |
| cool/light | accent: on-fill label | 5.246 | 4.5 |
| cool/light | success: on-fill label | 4.945 | 4.5 |
| cool/light | attention: on-fill label | 9.836 | 4.5 |
| cool/light | danger: on-fill label | 4.770 | 4.5 |
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
| cool/light | Action label | 5.246 | 4.5 |
| cool/light | Control boundary | 7.249 | 3 |
| cool/light | Large heading | 19.265 | 3 |
| cool/dark | neutral: on-fill label | 4.764 | 4.5 |
| cool/dark | accent: on-fill label | 5.246 | 4.5 |
| cool/dark | success: on-fill label | 4.945 | 4.5 |
| cool/dark | attention: on-fill label | 9.836 | 4.5 |
| cool/dark | danger: on-fill label | 4.770 | 4.5 |
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
| cool/dark | Action label | 5.246 | 4.5 |
| cool/dark | Control boundary | 7.664 | 3 |
| cool/dark | Large heading | 19.265 | 3 |
| warm/light | neutral: on-fill label | 4.786 | 4.5 |
| warm/light | accent: on-fill label | 5.246 | 4.5 |
| warm/light | success: on-fill label | 4.945 | 4.5 |
| warm/light | attention: on-fill label | 9.836 | 4.5 |
| warm/light | danger: on-fill label | 4.770 | 4.5 |
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
| warm/light | Action label | 5.246 | 4.5 |
| warm/light | Control boundary | 7.312 | 3 |
| warm/light | Large heading | 18.915 | 3 |
| warm/dark | neutral: on-fill label | 4.786 | 4.5 |
| warm/dark | accent: on-fill label | 5.246 | 4.5 |
| warm/dark | success: on-fill label | 4.945 | 4.5 |
| warm/dark | attention: on-fill label | 9.836 | 4.5 |
| warm/dark | danger: on-fill label | 4.770 | 4.5 |
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
| warm/dark | Action label | 5.246 | 4.5 |
| warm/dark | Control boundary | 7.642 | 3 |
| warm/dark | Large heading | 18.915 | 3 |
| pure/light | neutral: on-fill label | 4.742 | 4.5 |
| pure/light | accent: on-fill label | 5.246 | 4.5 |
| pure/light | success: on-fill label | 4.945 | 4.5 |
| pure/light | attention: on-fill label | 9.836 | 4.5 |
| pure/light | danger: on-fill label | 4.770 | 4.5 |
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
| pure/light | Action label | 5.246 | 4.5 |
| pure/light | Control boundary | 7.486 | 3 |
| pure/light | Large heading | 18.968 | 3 |
| pure/dark | neutral: on-fill label | 4.742 | 4.5 |
| pure/dark | accent: on-fill label | 5.246 | 4.5 |
| pure/dark | success: on-fill label | 4.945 | 4.5 |
| pure/dark | attention: on-fill label | 9.836 | 4.5 |
| pure/dark | danger: on-fill label | 4.770 | 4.5 |
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
| pure/dark | Action label | 5.246 | 4.5 |
| pure/dark | Control boundary | 7.663 | 3 |
| pure/dark | Large heading | 18.968 | 3 |

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.cool.css` SHA-256: `632324f50dd35ebddf5a9d420696cc1400699aaa054008ef3145ddbaeccc8606`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/tailwind-11-step/tokens.cool.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 1 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-50 ≈ --ds-neutral-100 (ΔE 1.589671)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  3
    colors-per-distinct-in-scope 1.5
    ambiguous-share              0

  next
    decide on the rest                                                             nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/tailwind-11-step/tokens.cool.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                               report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.

## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.warm.css` SHA-256: `5e3fdb4e627ae5c4fb65b36c8106a7eaab9a63841b035c469a1e77dad4e0943a`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/tailwind-11-step/tokens.warm.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 1 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-50 ≈ --ds-neutral-100 (ΔE 1.015859)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  3
    colors-per-distinct-in-scope 1.5
    ambiguous-share              0

  next
    decide on the rest                                                             nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/tailwind-11-step/tokens.warm.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                               report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.

## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.pure.css` SHA-256: `cc81a68fd4b9cb2ad477718ea93e77d8d4eec222a37ec7a02b64d940554f1071`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/tailwind-11-step/tokens.pure.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 1 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-50 ≈ --ds-neutral-100 (ΔE 1.015578)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  3
    colors-per-distinct-in-scope 1.5
    ambiguous-share              0

  next
    decide on the rest                                                             nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/tailwind-11-step/tokens.pure.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                               report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
