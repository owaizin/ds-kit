# simple-roles

A named role contract referencing source palette steps. Project aliases remain layer 2.

## Rationale

Radix provides separate light and dark ramps. The 12 step jobs are retained; descriptive labels are paraphrased. Cool/warm/pure neutrals select slate/sand/gray. Accent/success/attention/danger use blue/green/amber/red. 

On-fill selection starts at Radix step 9 or Tailwind’s oriented middle step, checks candidates by distance in the ramp (higher index first on ties), and takes the first that meets 4.5:1 with the chosen label. This is an independently derived role assignment, not a change to the source step’s advertised job. Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team wants a concrete starting role vocabulary. Do not add a competing contract to an already coherent naming system. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Import exactly one of tokens.cool.css, tokens.warm.css or tokens.pure.css. Each file provides the same public names and both themes. Set data-theme="light" or data-theme="dark" on the document root; remove the attribute to follow prefers-color-scheme. Explicit light overrides an OS dark preference. Do not import multiple neutral files together. Palette names preserve source steps (Radix 1–12; Tailwind 50–950); role names are independent of option, neutral and mode. Components consume project aliases with fallbacks. JSON stores tokens under variants[neutral][mode].tokens; roles contain var() references. Native callers resolve these chains to opaque sRGB strings with scripts/color-contract.mjs resolveColor; native rendering remains unverified. On-fill roles choose white for neutral/blue/green/red and black for amber, then select a source fill step meeting 4.5:1. No source value is repainted. All declared pairs pass; no selected fill fails both black and white.

[Radix source](https://github.com/radix-ui/colors/tree/dbdb85470547c7d34b9001f48fddb08ded335979/src), revision dbdb85470547c7d34b9001f48fddb08ded335979, MIT; values unchanged from src/light.ts and src/dark.ts. [Notice](../../../../LICENSES/Radix-Colors-MIT.txt).  Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Audit interpretation

All three shipped neutral files have zero color/literal-duplicate-tokens findings. There are no deliberate duplicate exceptions and no suppressions. Low-severity palette proximity diagnostics remain in the verbatim audits below. The engine reads both theme blocks together; some proximity pairs cross light/dark contexts and are not evidence of a collision within one active theme. Source steps remain intact.

## Values

| Variant | Token | CSS value or alias | Role | Source per value |
|---|---|---|---|---|
| cool/light | `--ds-neutral-1` | #fcfcfd | Canvas | radix: slate1 |
| cool/light | `--ds-neutral-2` | #f9f9fb | Quiet surface | radix: slate2 |
| cool/light | `--ds-neutral-3` | #f0f0f3 | Control surface | radix: slate3 |
| cool/light | `--ds-neutral-4` | #e8e8ec | Hover surface | radix: slate4 |
| cool/light | `--ds-neutral-5` | #e0e1e6 | Selected surface | radix: slate5 |
| cool/light | `--ds-neutral-6` | #d9d9e0 | Decorative separator | radix: slate6 |
| cool/light | `--ds-neutral-7` | #cdced6 | Control edge / focus candidate | radix: slate7 |
| cool/light | `--ds-neutral-8` | #b9bbc6 | Stronger edge | radix: slate8 |
| cool/light | `--ds-neutral-9` | #8b8d98 | Solid fill | radix: slate9 |
| cool/light | `--ds-neutral-10` | #80838d | Solid hover | radix: slate10 |
| cool/light | `--ds-neutral-11` | #60646c | Secondary text candidate | radix: slate11 |
| cool/light | `--ds-neutral-12` | #1c2024 | Primary text | radix: slate12 |
| cool/light | `--ds-accent-1` | #fbfdff | Canvas | radix: blue1 |
| cool/light | `--ds-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| cool/light | `--ds-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| cool/light | `--ds-accent-4` | #d5efff | Hover surface | radix: blue4 |
| cool/light | `--ds-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| cool/light | `--ds-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| cool/light | `--ds-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| cool/light | `--ds-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| cool/light | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| cool/light | `--ds-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| cool/light | `--ds-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| cool/light | `--ds-accent-12` | #113264 | Primary text | radix: blue12 |
| cool/light | `--ds-success-1` | #fbfefc | Canvas | radix: green1 |
| cool/light | `--ds-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| cool/light | `--ds-success-3` | #e6f6eb | Control surface | radix: green3 |
| cool/light | `--ds-success-4` | #d6f1df | Hover surface | radix: green4 |
| cool/light | `--ds-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| cool/light | `--ds-success-6` | #adddc0 | Decorative separator | radix: green6 |
| cool/light | `--ds-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| cool/light | `--ds-success-8` | #5bb98b | Stronger edge | radix: green8 |
| cool/light | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| cool/light | `--ds-success-10` | #2b9a66 | Solid hover | radix: green10 |
| cool/light | `--ds-success-11` | #218358 | Secondary text candidate | radix: green11 |
| cool/light | `--ds-success-12` | #193b2d | Primary text | radix: green12 |
| cool/light | `--ds-attention-1` | #fefdfb | Canvas | radix: amber1 |
| cool/light | `--ds-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| cool/light | `--ds-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| cool/light | `--ds-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| cool/light | `--ds-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| cool/light | `--ds-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| cool/light | `--ds-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| cool/light | `--ds-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| cool/light | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| cool/light | `--ds-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| cool/light | `--ds-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| cool/light | `--ds-attention-12` | #4f3422 | Primary text | radix: amber12 |
| cool/light | `--ds-danger-1` | #fffcfc | Canvas | radix: red1 |
| cool/light | `--ds-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| cool/light | `--ds-danger-3` | #feebec | Control surface | radix: red3 |
| cool/light | `--ds-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| cool/light | `--ds-danger-5` | #ffcdce | Selected surface | radix: red5 |
| cool/light | `--ds-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| cool/light | `--ds-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| cool/light | `--ds-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| cool/light | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| cool/light | `--ds-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| cool/light | `--ds-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| cool/light | `--ds-danger-12` | #641723 | Primary text | radix: red12 |
| cool/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-neutral` | var(--ds-neutral-11) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-accent` | var(--ds-accent-11) | accent emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-success` | var(--ds-success-11) | success emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| cool/light | `--ds-fill-danger` | var(--ds-danger-11) | danger emphasis fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| cool/light | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| cool/light | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| cool/light | `--ds-border-control` | var(--ds-neutral-10) | Example border-control | independent: independently derived mapping/endpoint |
| cool/light | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| cool/light | `--ds-brand-fill` | var(--ds-accent-11) | Example brand-fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| cool/light | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-neutral-1` | #111113 | Canvas | radix: slate1 |
| cool/dark | `--ds-neutral-2` | #18191b | Quiet surface | radix: slate2 |
| cool/dark | `--ds-neutral-3` | #212225 | Control surface | radix: slate3 |
| cool/dark | `--ds-neutral-4` | #272a2d | Hover surface | radix: slate4 |
| cool/dark | `--ds-neutral-5` | #2e3135 | Selected surface | radix: slate5 |
| cool/dark | `--ds-neutral-6` | #363a3f | Decorative separator | radix: slate6 |
| cool/dark | `--ds-neutral-7` | #43484e | Control edge / focus candidate | radix: slate7 |
| cool/dark | `--ds-neutral-8` | #5a6169 | Stronger edge | radix: slate8 |
| cool/dark | `--ds-neutral-9` | #696e77 | Solid fill | radix: slate9 |
| cool/dark | `--ds-neutral-10` | #777b84 | Solid hover | radix: slate10 |
| cool/dark | `--ds-neutral-11` | #b0b4ba | Secondary text candidate | radix: slate11 |
| cool/dark | `--ds-neutral-12` | #edeef0 | Primary text | radix: slate12 |
| cool/dark | `--ds-accent-1` | #0d1520 | Canvas | radix: blue1 |
| cool/dark | `--ds-accent-2` | #111927 | Quiet surface | radix: blue2 |
| cool/dark | `--ds-accent-3` | #0d2847 | Control surface | radix: blue3 |
| cool/dark | `--ds-accent-4` | #003362 | Hover surface | radix: blue4 |
| cool/dark | `--ds-accent-5` | #004074 | Selected surface | radix: blue5 |
| cool/dark | `--ds-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| cool/dark | `--ds-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| cool/dark | `--ds-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| cool/dark | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| cool/dark | `--ds-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| cool/dark | `--ds-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| cool/dark | `--ds-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| cool/dark | `--ds-success-1` | #0e1512 | Canvas | radix: green1 |
| cool/dark | `--ds-success-2` | #121b17 | Quiet surface | radix: green2 |
| cool/dark | `--ds-success-3` | #132d21 | Control surface | radix: green3 |
| cool/dark | `--ds-success-4` | #113b29 | Hover surface | radix: green4 |
| cool/dark | `--ds-success-5` | #174933 | Selected surface | radix: green5 |
| cool/dark | `--ds-success-6` | #20573e | Decorative separator | radix: green6 |
| cool/dark | `--ds-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| cool/dark | `--ds-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| cool/dark | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| cool/dark | `--ds-success-10` | #33b074 | Solid hover | radix: green10 |
| cool/dark | `--ds-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| cool/dark | `--ds-success-12` | #b1f1cb | Primary text | radix: green12 |
| cool/dark | `--ds-attention-1` | #16120c | Canvas | radix: amber1 |
| cool/dark | `--ds-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| cool/dark | `--ds-attention-3` | #302008 | Control surface | radix: amber3 |
| cool/dark | `--ds-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| cool/dark | `--ds-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| cool/dark | `--ds-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| cool/dark | `--ds-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| cool/dark | `--ds-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| cool/dark | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| cool/dark | `--ds-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| cool/dark | `--ds-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| cool/dark | `--ds-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| cool/dark | `--ds-danger-1` | #191111 | Canvas | radix: red1 |
| cool/dark | `--ds-danger-2` | #201314 | Quiet surface | radix: red2 |
| cool/dark | `--ds-danger-3` | #3b1219 | Control surface | radix: red3 |
| cool/dark | `--ds-danger-4` | #500f1c | Hover surface | radix: red4 |
| cool/dark | `--ds-danger-5` | #611623 | Selected surface | radix: red5 |
| cool/dark | `--ds-danger-6` | #72232d | Decorative separator | radix: red6 |
| cool/dark | `--ds-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| cool/dark | `--ds-danger-8` | #b54548 | Stronger edge | radix: red8 |
| cool/dark | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| cool/dark | `--ds-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| cool/dark | `--ds-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| cool/dark | `--ds-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| cool/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-neutral` | var(--ds-neutral-9) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-accent` | var(--ds-accent-8) | accent emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-success` | var(--ds-success-8) | success emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-fill-danger` | var(--ds-danger-8) | danger emphasis fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-border-control` | var(--ds-neutral-9) | Example border-control | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-brand-fill` | var(--ds-accent-8) | Example brand-fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| cool/dark | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |
| warm/light | `--ds-neutral-1` | #fdfdfc | Canvas | radix: sand1 |
| warm/light | `--ds-neutral-2` | #f9f9f8 | Quiet surface | radix: sand2 |
| warm/light | `--ds-neutral-3` | #f1f0ef | Control surface | radix: sand3 |
| warm/light | `--ds-neutral-4` | #e9e8e6 | Hover surface | radix: sand4 |
| warm/light | `--ds-neutral-5` | #e2e1de | Selected surface | radix: sand5 |
| warm/light | `--ds-neutral-6` | #dad9d6 | Decorative separator | radix: sand6 |
| warm/light | `--ds-neutral-7` | #cfceca | Control edge / focus candidate | radix: sand7 |
| warm/light | `--ds-neutral-8` | #bcbbb5 | Stronger edge | radix: sand8 |
| warm/light | `--ds-neutral-9` | #8d8d86 | Solid fill | radix: sand9 |
| warm/light | `--ds-neutral-10` | #82827c | Solid hover | radix: sand10 |
| warm/light | `--ds-neutral-11` | #63635e | Secondary text candidate | radix: sand11 |
| warm/light | `--ds-neutral-12` | #21201c | Primary text | radix: sand12 |
| warm/light | `--ds-accent-1` | #fbfdff | Canvas | radix: blue1 |
| warm/light | `--ds-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| warm/light | `--ds-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| warm/light | `--ds-accent-4` | #d5efff | Hover surface | radix: blue4 |
| warm/light | `--ds-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| warm/light | `--ds-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| warm/light | `--ds-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| warm/light | `--ds-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| warm/light | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| warm/light | `--ds-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| warm/light | `--ds-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| warm/light | `--ds-accent-12` | #113264 | Primary text | radix: blue12 |
| warm/light | `--ds-success-1` | #fbfefc | Canvas | radix: green1 |
| warm/light | `--ds-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| warm/light | `--ds-success-3` | #e6f6eb | Control surface | radix: green3 |
| warm/light | `--ds-success-4` | #d6f1df | Hover surface | radix: green4 |
| warm/light | `--ds-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| warm/light | `--ds-success-6` | #adddc0 | Decorative separator | radix: green6 |
| warm/light | `--ds-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| warm/light | `--ds-success-8` | #5bb98b | Stronger edge | radix: green8 |
| warm/light | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| warm/light | `--ds-success-10` | #2b9a66 | Solid hover | radix: green10 |
| warm/light | `--ds-success-11` | #218358 | Secondary text candidate | radix: green11 |
| warm/light | `--ds-success-12` | #193b2d | Primary text | radix: green12 |
| warm/light | `--ds-attention-1` | #fefdfb | Canvas | radix: amber1 |
| warm/light | `--ds-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| warm/light | `--ds-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| warm/light | `--ds-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| warm/light | `--ds-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| warm/light | `--ds-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| warm/light | `--ds-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| warm/light | `--ds-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| warm/light | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| warm/light | `--ds-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| warm/light | `--ds-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| warm/light | `--ds-attention-12` | #4f3422 | Primary text | radix: amber12 |
| warm/light | `--ds-danger-1` | #fffcfc | Canvas | radix: red1 |
| warm/light | `--ds-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| warm/light | `--ds-danger-3` | #feebec | Control surface | radix: red3 |
| warm/light | `--ds-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| warm/light | `--ds-danger-5` | #ffcdce | Selected surface | radix: red5 |
| warm/light | `--ds-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| warm/light | `--ds-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| warm/light | `--ds-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| warm/light | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| warm/light | `--ds-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| warm/light | `--ds-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| warm/light | `--ds-danger-12` | #641723 | Primary text | radix: red12 |
| warm/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-neutral` | var(--ds-neutral-11) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-accent` | var(--ds-accent-11) | accent emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-success` | var(--ds-success-11) | success emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| warm/light | `--ds-fill-danger` | var(--ds-danger-11) | danger emphasis fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| warm/light | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| warm/light | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| warm/light | `--ds-border-control` | var(--ds-neutral-10) | Example border-control | independent: independently derived mapping/endpoint |
| warm/light | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| warm/light | `--ds-brand-fill` | var(--ds-accent-11) | Example brand-fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| warm/light | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-neutral-1` | #111110 | Canvas | radix: sand1 |
| warm/dark | `--ds-neutral-2` | #191918 | Quiet surface | radix: sand2 |
| warm/dark | `--ds-neutral-3` | #222221 | Control surface | radix: sand3 |
| warm/dark | `--ds-neutral-4` | #2a2a28 | Hover surface | radix: sand4 |
| warm/dark | `--ds-neutral-5` | #31312e | Selected surface | radix: sand5 |
| warm/dark | `--ds-neutral-6` | #3b3a37 | Decorative separator | radix: sand6 |
| warm/dark | `--ds-neutral-7` | #494844 | Control edge / focus candidate | radix: sand7 |
| warm/dark | `--ds-neutral-8` | #62605b | Stronger edge | radix: sand8 |
| warm/dark | `--ds-neutral-9` | #6f6d66 | Solid fill | radix: sand9 |
| warm/dark | `--ds-neutral-10` | #7c7b74 | Solid hover | radix: sand10 |
| warm/dark | `--ds-neutral-11` | #b5b3ad | Secondary text candidate | radix: sand11 |
| warm/dark | `--ds-neutral-12` | #eeeeec | Primary text | radix: sand12 |
| warm/dark | `--ds-accent-1` | #0d1520 | Canvas | radix: blue1 |
| warm/dark | `--ds-accent-2` | #111927 | Quiet surface | radix: blue2 |
| warm/dark | `--ds-accent-3` | #0d2847 | Control surface | radix: blue3 |
| warm/dark | `--ds-accent-4` | #003362 | Hover surface | radix: blue4 |
| warm/dark | `--ds-accent-5` | #004074 | Selected surface | radix: blue5 |
| warm/dark | `--ds-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| warm/dark | `--ds-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| warm/dark | `--ds-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| warm/dark | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| warm/dark | `--ds-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| warm/dark | `--ds-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| warm/dark | `--ds-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| warm/dark | `--ds-success-1` | #0e1512 | Canvas | radix: green1 |
| warm/dark | `--ds-success-2` | #121b17 | Quiet surface | radix: green2 |
| warm/dark | `--ds-success-3` | #132d21 | Control surface | radix: green3 |
| warm/dark | `--ds-success-4` | #113b29 | Hover surface | radix: green4 |
| warm/dark | `--ds-success-5` | #174933 | Selected surface | radix: green5 |
| warm/dark | `--ds-success-6` | #20573e | Decorative separator | radix: green6 |
| warm/dark | `--ds-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| warm/dark | `--ds-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| warm/dark | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| warm/dark | `--ds-success-10` | #33b074 | Solid hover | radix: green10 |
| warm/dark | `--ds-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| warm/dark | `--ds-success-12` | #b1f1cb | Primary text | radix: green12 |
| warm/dark | `--ds-attention-1` | #16120c | Canvas | radix: amber1 |
| warm/dark | `--ds-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| warm/dark | `--ds-attention-3` | #302008 | Control surface | radix: amber3 |
| warm/dark | `--ds-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| warm/dark | `--ds-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| warm/dark | `--ds-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| warm/dark | `--ds-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| warm/dark | `--ds-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| warm/dark | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| warm/dark | `--ds-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| warm/dark | `--ds-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| warm/dark | `--ds-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| warm/dark | `--ds-danger-1` | #191111 | Canvas | radix: red1 |
| warm/dark | `--ds-danger-2` | #201314 | Quiet surface | radix: red2 |
| warm/dark | `--ds-danger-3` | #3b1219 | Control surface | radix: red3 |
| warm/dark | `--ds-danger-4` | #500f1c | Hover surface | radix: red4 |
| warm/dark | `--ds-danger-5` | #611623 | Selected surface | radix: red5 |
| warm/dark | `--ds-danger-6` | #72232d | Decorative separator | radix: red6 |
| warm/dark | `--ds-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| warm/dark | `--ds-danger-8` | #b54548 | Stronger edge | radix: red8 |
| warm/dark | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| warm/dark | `--ds-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| warm/dark | `--ds-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| warm/dark | `--ds-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| warm/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-neutral` | var(--ds-neutral-9) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-accent` | var(--ds-accent-8) | accent emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-success` | var(--ds-success-8) | success emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-fill-danger` | var(--ds-danger-8) | danger emphasis fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-border-control` | var(--ds-neutral-9) | Example border-control | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-brand-fill` | var(--ds-accent-8) | Example brand-fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| warm/dark | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |
| pure/light | `--ds-neutral-1` | #fcfcfc | Canvas | radix: gray1 |
| pure/light | `--ds-neutral-2` | #f9f9f9 | Quiet surface | radix: gray2 |
| pure/light | `--ds-neutral-3` | #f0f0f0 | Control surface | radix: gray3 |
| pure/light | `--ds-neutral-4` | #e8e8e8 | Hover surface | radix: gray4 |
| pure/light | `--ds-neutral-5` | #e0e0e0 | Selected surface | radix: gray5 |
| pure/light | `--ds-neutral-6` | #d9d9d9 | Decorative separator | radix: gray6 |
| pure/light | `--ds-neutral-7` | #cecece | Control edge / focus candidate | radix: gray7 |
| pure/light | `--ds-neutral-8` | #bbbbbb | Stronger edge | radix: gray8 |
| pure/light | `--ds-neutral-9` | #8d8d8d | Solid fill | radix: gray9 |
| pure/light | `--ds-neutral-10` | #838383 | Solid hover | radix: gray10 |
| pure/light | `--ds-neutral-11` | #646464 | Secondary text candidate | radix: gray11 |
| pure/light | `--ds-neutral-12` | #202020 | Primary text | radix: gray12 |
| pure/light | `--ds-accent-1` | #fbfdff | Canvas | radix: blue1 |
| pure/light | `--ds-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| pure/light | `--ds-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| pure/light | `--ds-accent-4` | #d5efff | Hover surface | radix: blue4 |
| pure/light | `--ds-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| pure/light | `--ds-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| pure/light | `--ds-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| pure/light | `--ds-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| pure/light | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| pure/light | `--ds-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| pure/light | `--ds-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| pure/light | `--ds-accent-12` | #113264 | Primary text | radix: blue12 |
| pure/light | `--ds-success-1` | #fbfefc | Canvas | radix: green1 |
| pure/light | `--ds-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| pure/light | `--ds-success-3` | #e6f6eb | Control surface | radix: green3 |
| pure/light | `--ds-success-4` | #d6f1df | Hover surface | radix: green4 |
| pure/light | `--ds-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| pure/light | `--ds-success-6` | #adddc0 | Decorative separator | radix: green6 |
| pure/light | `--ds-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| pure/light | `--ds-success-8` | #5bb98b | Stronger edge | radix: green8 |
| pure/light | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| pure/light | `--ds-success-10` | #2b9a66 | Solid hover | radix: green10 |
| pure/light | `--ds-success-11` | #218358 | Secondary text candidate | radix: green11 |
| pure/light | `--ds-success-12` | #193b2d | Primary text | radix: green12 |
| pure/light | `--ds-attention-1` | #fefdfb | Canvas | radix: amber1 |
| pure/light | `--ds-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| pure/light | `--ds-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| pure/light | `--ds-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| pure/light | `--ds-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| pure/light | `--ds-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| pure/light | `--ds-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| pure/light | `--ds-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| pure/light | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| pure/light | `--ds-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| pure/light | `--ds-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| pure/light | `--ds-attention-12` | #4f3422 | Primary text | radix: amber12 |
| pure/light | `--ds-danger-1` | #fffcfc | Canvas | radix: red1 |
| pure/light | `--ds-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| pure/light | `--ds-danger-3` | #feebec | Control surface | radix: red3 |
| pure/light | `--ds-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| pure/light | `--ds-danger-5` | #ffcdce | Selected surface | radix: red5 |
| pure/light | `--ds-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| pure/light | `--ds-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| pure/light | `--ds-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| pure/light | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| pure/light | `--ds-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| pure/light | `--ds-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| pure/light | `--ds-danger-12` | #641723 | Primary text | radix: red12 |
| pure/light | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/light | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-neutral` | var(--ds-neutral-11) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-accent` | var(--ds-accent-11) | accent emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-success` | var(--ds-success-11) | success emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| pure/light | `--ds-fill-danger` | var(--ds-danger-11) | danger emphasis fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| pure/light | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| pure/light | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| pure/light | `--ds-border-control` | var(--ds-neutral-10) | Example border-control | independent: independently derived mapping/endpoint |
| pure/light | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| pure/light | `--ds-brand-fill` | var(--ds-accent-11) | Example brand-fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| pure/light | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-neutral-1` | #111111 | Canvas | radix: gray1 |
| pure/dark | `--ds-neutral-2` | #191919 | Quiet surface | radix: gray2 |
| pure/dark | `--ds-neutral-3` | #222222 | Control surface | radix: gray3 |
| pure/dark | `--ds-neutral-4` | #2a2a2a | Hover surface | radix: gray4 |
| pure/dark | `--ds-neutral-5` | #313131 | Selected surface | radix: gray5 |
| pure/dark | `--ds-neutral-6` | #3a3a3a | Decorative separator | radix: gray6 |
| pure/dark | `--ds-neutral-7` | #484848 | Control edge / focus candidate | radix: gray7 |
| pure/dark | `--ds-neutral-8` | #606060 | Stronger edge | radix: gray8 |
| pure/dark | `--ds-neutral-9` | #6e6e6e | Solid fill | radix: gray9 |
| pure/dark | `--ds-neutral-10` | #7b7b7b | Solid hover | radix: gray10 |
| pure/dark | `--ds-neutral-11` | #b4b4b4 | Secondary text candidate | radix: gray11 |
| pure/dark | `--ds-neutral-12` | #eeeeee | Primary text | radix: gray12 |
| pure/dark | `--ds-accent-1` | #0d1520 | Canvas | radix: blue1 |
| pure/dark | `--ds-accent-2` | #111927 | Quiet surface | radix: blue2 |
| pure/dark | `--ds-accent-3` | #0d2847 | Control surface | radix: blue3 |
| pure/dark | `--ds-accent-4` | #003362 | Hover surface | radix: blue4 |
| pure/dark | `--ds-accent-5` | #004074 | Selected surface | radix: blue5 |
| pure/dark | `--ds-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| pure/dark | `--ds-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| pure/dark | `--ds-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| pure/dark | `--ds-accent-9` | #0090ff | Solid fill | radix: blue9 |
| pure/dark | `--ds-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| pure/dark | `--ds-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| pure/dark | `--ds-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| pure/dark | `--ds-success-1` | #0e1512 | Canvas | radix: green1 |
| pure/dark | `--ds-success-2` | #121b17 | Quiet surface | radix: green2 |
| pure/dark | `--ds-success-3` | #132d21 | Control surface | radix: green3 |
| pure/dark | `--ds-success-4` | #113b29 | Hover surface | radix: green4 |
| pure/dark | `--ds-success-5` | #174933 | Selected surface | radix: green5 |
| pure/dark | `--ds-success-6` | #20573e | Decorative separator | radix: green6 |
| pure/dark | `--ds-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| pure/dark | `--ds-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| pure/dark | `--ds-success-9` | #30a46c | Solid fill | radix: green9 |
| pure/dark | `--ds-success-10` | #33b074 | Solid hover | radix: green10 |
| pure/dark | `--ds-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| pure/dark | `--ds-success-12` | #b1f1cb | Primary text | radix: green12 |
| pure/dark | `--ds-attention-1` | #16120c | Canvas | radix: amber1 |
| pure/dark | `--ds-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| pure/dark | `--ds-attention-3` | #302008 | Control surface | radix: amber3 |
| pure/dark | `--ds-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| pure/dark | `--ds-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| pure/dark | `--ds-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| pure/dark | `--ds-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| pure/dark | `--ds-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| pure/dark | `--ds-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| pure/dark | `--ds-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| pure/dark | `--ds-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| pure/dark | `--ds-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| pure/dark | `--ds-danger-1` | #191111 | Canvas | radix: red1 |
| pure/dark | `--ds-danger-2` | #201314 | Quiet surface | radix: red2 |
| pure/dark | `--ds-danger-3` | #3b1219 | Control surface | radix: red3 |
| pure/dark | `--ds-danger-4` | #500f1c | Hover surface | radix: red4 |
| pure/dark | `--ds-danger-5` | #611623 | Selected surface | radix: red5 |
| pure/dark | `--ds-danger-6` | #72232d | Decorative separator | radix: red6 |
| pure/dark | `--ds-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| pure/dark | `--ds-danger-8` | #b54548 | Stronger edge | radix: red8 |
| pure/dark | `--ds-danger-9` | #e5484d | Solid fill | radix: red9 |
| pure/dark | `--ds-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| pure/dark | `--ds-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| pure/dark | `--ds-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| pure/dark | `--ds-white` | #ffffff | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-black` | #000000 | Opaque endpoint | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-neutral` | var(--ds-white) | neutral emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-neutral` | var(--ds-neutral-9) | neutral emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-accent` | var(--ds-white) | accent emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-accent` | var(--ds-accent-8) | accent emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-success` | var(--ds-white) | success emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-success` | var(--ds-success-8) | success emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-attention` | var(--ds-black) | attention emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-attention` | var(--ds-attention-9) | attention emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-on-danger` | var(--ds-white) | danger emphasis label | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-fill-danger` | var(--ds-danger-8) | danger emphasis fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-surface-default` | var(--ds-neutral-1) | Example surface-default | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-text-default` | var(--ds-neutral-12) | Example text-default | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-text-muted` | var(--ds-neutral-11) | Example text-muted | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-border-control` | var(--ds-neutral-9) | Example border-control | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-surface-muted` | var(--ds-neutral-3) | Example surface-muted | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-brand-fill` | var(--ds-accent-8) | Example brand-fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-brand-on-fill` | var(--ds-white) | Example brand-on-fill | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-danger` | var(--ds-danger-12) | Example status-danger | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-success` | var(--ds-success-12) | Example status-success | independent: independently derived mapping/endpoint |
| pure/dark | `--ds-status-attention` | var(--ds-attention-12) | Example status-attention | independent: independently derived mapping/endpoint |

## Declared contrast pairs

Computed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.

| Variant | Pair | Ratio | Minimum |
|---|---|---|---|
| cool/light | neutral: on-fill label | 5.938 | 4.5 |
| cool/light | accent: on-fill label | 4.766 | 4.5 |
| cool/light | success: on-fill label | 4.717 | 4.5 |
| cool/light | attention: on-fill label | 13.306 | 4.5 |
| cool/light | danger: on-fill label | 5.212 | 4.5 |
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
| cool/light | Action label | 4.766 | 4.5 |
| cool/light | Control boundary | 3.691 | 3 |
| cool/light | Large heading | 15.983 | 3 |
| cool/dark | neutral: on-fill label | 5.125 | 4.5 |
| cool/dark | accent: on-fill label | 5.069 | 4.5 |
| cool/dark | success: on-fill label | 5.071 | 4.5 |
| cool/dark | attention: on-fill label | 13.306 | 4.5 |
| cool/dark | danger: on-fill label | 5.371 | 4.5 |
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
| cool/dark | Action label | 5.069 | 4.5 |
| cool/dark | Control boundary | 3.680 | 3 |
| cool/dark | Large heading | 16.246 | 3 |
| warm/light | neutral: on-fill label | 6.040 | 4.5 |
| warm/light | accent: on-fill label | 4.766 | 4.5 |
| warm/light | success: on-fill label | 4.717 | 4.5 |
| warm/light | attention: on-fill label | 13.306 | 4.5 |
| warm/light | danger: on-fill label | 5.212 | 4.5 |
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
| warm/light | Action label | 4.766 | 4.5 |
| warm/light | Control boundary | 3.797 | 3 |
| warm/light | Large heading | 16.018 | 3 |
| warm/dark | neutral: on-fill label | 5.179 | 4.5 |
| warm/dark | accent: on-fill label | 5.069 | 4.5 |
| warm/dark | success: on-fill label | 5.071 | 4.5 |
| warm/dark | attention: on-fill label | 13.306 | 4.5 |
| warm/dark | danger: on-fill label | 5.371 | 4.5 |
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
| warm/dark | Action label | 5.069 | 4.5 |
| warm/dark | Control boundary | 3.648 | 3 |
| warm/dark | Large heading | 16.263 | 3 |
| pure/light | neutral: on-fill label | 5.918 | 4.5 |
| pure/light | accent: on-fill label | 4.766 | 4.5 |
| pure/light | success: on-fill label | 4.717 | 4.5 |
| pure/light | attention: on-fill label | 13.306 | 4.5 |
| pure/light | danger: on-fill label | 5.212 | 4.5 |
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
| pure/light | Action label | 4.766 | 4.5 |
| pure/light | Control boundary | 3.695 | 3 |
| pure/light | Large heading | 15.881 | 3 |
| pure/dark | neutral: on-fill label | 5.099 | 4.5 |
| pure/dark | accent: on-fill label | 5.069 | 4.5 |
| pure/dark | success: on-fill label | 5.071 | 4.5 |
| pure/dark | attention: on-fill label | 13.306 | 4.5 |
| pure/dark | danger: on-fill label | 5.371 | 4.5 |
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
| pure/dark | Action label | 5.069 | 4.5 |
| pure/dark | Control boundary | 3.703 | 3 |
| pure/dark | Large heading | 16.275 | 3 |

<!-- audit:start -->
## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.cool.css` SHA-256: `98d763483e0954416a3ad7d71d14f0f53fffd80274019e04017382932711c13e`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/simple-roles/tokens.cool.css
```

Exit status: `1`. Standard output, verbatim except the kit's absolute root path, which is removed:

```text
  config: ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 26 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-1 ≈ --ds-neutral-2 (ΔE 0.790195); --ds-neutral-1 ≈ --ds-accent-1 (ΔE 0.99327); --ds-neutral-1 ≈ --ds-attention-1 (ΔE 1.563758); --ds-neutral-1 ≈ --ds-danger-1 (ΔE 1.435253); --ds-neutral-2 ≈ --ds-neutral-3 (ΔE 1.906944); --ds-neutral-2 ≈ --ds-accent-1 (ΔE 1.230024); --ds-neutral-2 ≈ --ds-attention-1 (ΔE 2.211239); --ds-neutral-2 ≈ --ds-danger-1 (ΔE 1.723104)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  1.576
    colors-per-distinct-in-scope 1.033
    ambiguous-share              0

  next
    decide on the rest                                                         nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/simple-roles/tokens.cool.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                           report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.

## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.warm.css` SHA-256: `3d839b7c1bf67124525e69b62b19dc17dd6122088eaeae00ce30e469475fd9b9`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/simple-roles/tokens.warm.css
```

Exit status: `1`. Standard output, verbatim except the kit's absolute root path, which is removed:

```text
  config: ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 30 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-1 ≈ --ds-neutral-2 (ΔE 0.801946); --ds-neutral-1 ≈ --ds-accent-1 (ΔE 1.643762); --ds-neutral-1 ≈ --ds-success-1 (ΔE 1.663711); --ds-neutral-1 ≈ --ds-attention-1 (ΔE 0.621813); --ds-neutral-1 ≈ --ds-danger-1 (ΔE 1.719339); --ds-neutral-2 ≈ --ds-neutral-3 (ΔE 1.875853); --ds-neutral-2 ≈ --ds-accent-1 (ΔE 1.812085); --ds-neutral-2 ≈ --ds-success-1 (ΔE 1.871343)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  1.576
    colors-per-distinct-in-scope 1.033
    ambiguous-share              0

  next
    decide on the rest                                                         nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/simple-roles/tokens.warm.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                           report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.

## Recorded engine audit

Engine branch `codex/upstream-layer`, commit `d43bda48e0af36ddd606b684b023eeac10dcda1b`; Node v22.17.1. Run 2026-09-28. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.

Audited `tokens.pure.css` SHA-256: `65251c09f12c8ffbb2554399f0201369898907079e12da7daf583a3bb018427c`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/simple-roles/tokens.pure.css
```

Exit status: `1`. Standard output, verbatim except the kit's absolute root path, which is removed:

```text
  config: ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:ddb475356e0b   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [LOW] color/near-duplicate-primitives
  │ 32 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-neutral-1 ≈ --ds-neutral-2 (ΔE 0.60243); --ds-neutral-1 ≈ --ds-accent-1 (ΔE 1.242452); --ds-neutral-1 ≈ --ds-success-1 (ΔE 2.017353); --ds-neutral-1 ≈ --ds-attention-1 (ΔE 1.067098); --ds-neutral-1 ≈ --ds-danger-1 (ΔE 1.482405); --ds-neutral-2 ≈ --ds-neutral-3 (ΔE 1.849308); --ds-neutral-2 ≈ --ds-accent-1 (ΔE 1.442227); --ds-neutral-2 ≈ --ds-success-1 (ΔE 2.173912)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  1 findings — 0 blocking · 0 high · 0 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  1.576
    colors-per-distinct-in-scope 1.033
    ambiguous-share              0

  next
    decide on the rest                                                         nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/simple-roles/tokens.pure.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                           report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
