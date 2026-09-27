# radix-12-step

A source palette with explicitly separate example role mappings.

## Rationale

Radix provides separate light and dark ramps. The 12 step jobs are retained; descriptive labels are paraphrased. Cool/warm/pure neutrals select slate/sand/gray. Accent/success/attention/danger use blue/green/amber/red. 

Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team needs a ramp to define its own roles. Do not apply palette steps directly in components or assume every pair is accessible. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Web and native share opaque six-digit sRGB strings. CSS contains literal layer-1 --ds-* declarations; JSON names every mode/neutral explicitly. Select a variant through project aliases, with fallbacks, rather than importing all variants as component API. Native can consume the same hex strings; rendered native behavior is unverified.

[Radix source](https://github.com/radix-ui/colors/tree/dbdb85470547c7d34b9001f48fddb08ded335979/src), revision dbdb85470547c7d34b9001f48fddb08ded335979, MIT; values unchanged from src/light.ts and src/dark.ts. [Notice](../../../../LICENSES/Radix-Colors-MIT.txt).  Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Values

| Token | sRGB | Role | Source per value |
|---|---|---|---|
| `--ds-color-radix-12-step-cool-light-neutral-1` | #fcfcfd | Canvas | radix: slate1 |
| `--ds-color-radix-12-step-cool-light-neutral-2` | #f9f9fb | Quiet surface | radix: slate2 |
| `--ds-color-radix-12-step-cool-light-neutral-3` | #f0f0f3 | Control surface | radix: slate3 |
| `--ds-color-radix-12-step-cool-light-neutral-4` | #e8e8ec | Hover surface | radix: slate4 |
| `--ds-color-radix-12-step-cool-light-neutral-5` | #e0e1e6 | Selected surface | radix: slate5 |
| `--ds-color-radix-12-step-cool-light-neutral-6` | #d9d9e0 | Decorative separator | radix: slate6 |
| `--ds-color-radix-12-step-cool-light-neutral-7` | #cdced6 | Control edge / focus candidate | radix: slate7 |
| `--ds-color-radix-12-step-cool-light-neutral-8` | #b9bbc6 | Stronger edge | radix: slate8 |
| `--ds-color-radix-12-step-cool-light-neutral-9` | #8b8d98 | Solid fill | radix: slate9 |
| `--ds-color-radix-12-step-cool-light-neutral-10` | #80838d | Solid hover | radix: slate10 |
| `--ds-color-radix-12-step-cool-light-neutral-11` | #60646c | Secondary text candidate | radix: slate11 |
| `--ds-color-radix-12-step-cool-light-neutral-12` | #1c2024 | Primary text | radix: slate12 |
| `--ds-color-radix-12-step-cool-light-accent-1` | #fbfdff | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-cool-light-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-cool-light-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-cool-light-accent-4` | #d5efff | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-cool-light-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-cool-light-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-cool-light-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-cool-light-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-cool-light-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-cool-light-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-cool-light-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-cool-light-accent-12` | #113264 | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-cool-light-success-1` | #fbfefc | Canvas | radix: green1 |
| `--ds-color-radix-12-step-cool-light-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-cool-light-success-3` | #e6f6eb | Control surface | radix: green3 |
| `--ds-color-radix-12-step-cool-light-success-4` | #d6f1df | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-cool-light-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-cool-light-success-6` | #adddc0 | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-cool-light-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-cool-light-success-8` | #5bb98b | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-cool-light-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-cool-light-success-10` | #2b9a66 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-cool-light-success-11` | #218358 | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-cool-light-success-12` | #193b2d | Primary text | radix: green12 |
| `--ds-color-radix-12-step-cool-light-attention-1` | #fefdfb | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-cool-light-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-cool-light-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-cool-light-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-cool-light-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-cool-light-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-cool-light-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-cool-light-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-cool-light-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-cool-light-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-cool-light-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-cool-light-attention-12` | #4f3422 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-cool-light-danger-1` | #fffcfc | Canvas | radix: red1 |
| `--ds-color-radix-12-step-cool-light-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-cool-light-danger-3` | #feebec | Control surface | radix: red3 |
| `--ds-color-radix-12-step-cool-light-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-cool-light-danger-5` | #ffcdce | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-cool-light-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-cool-light-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-cool-light-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-cool-light-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-cool-light-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-cool-light-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-cool-light-danger-12` | #641723 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-cool-light-example-surface-default` | #fcfcfd | Example surface-default | radix: slate1 |
| `--ds-color-radix-12-step-cool-light-example-text-default` | #1c2024 | Example text-default | radix: slate12 |
| `--ds-color-radix-12-step-cool-light-example-text-muted` | #60646c | Example text-muted | radix: slate11 |
| `--ds-color-radix-12-step-cool-light-example-border-control` | #80838d | Example border-control | radix: slate10 |
| `--ds-color-radix-12-step-cool-light-example-surface-muted` | #f0f0f3 | Example surface-muted | radix: slate3 |
| `--ds-color-radix-12-step-cool-light-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-cool-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-cool-light-example-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-cool-light-example-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-cool-light-example-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-radix-12-step-cool-dark-neutral-1` | #111113 | Canvas | radix: slate1 |
| `--ds-color-radix-12-step-cool-dark-neutral-2` | #18191b | Quiet surface | radix: slate2 |
| `--ds-color-radix-12-step-cool-dark-neutral-3` | #212225 | Control surface | radix: slate3 |
| `--ds-color-radix-12-step-cool-dark-neutral-4` | #272a2d | Hover surface | radix: slate4 |
| `--ds-color-radix-12-step-cool-dark-neutral-5` | #2e3135 | Selected surface | radix: slate5 |
| `--ds-color-radix-12-step-cool-dark-neutral-6` | #363a3f | Decorative separator | radix: slate6 |
| `--ds-color-radix-12-step-cool-dark-neutral-7` | #43484e | Control edge / focus candidate | radix: slate7 |
| `--ds-color-radix-12-step-cool-dark-neutral-8` | #5a6169 | Stronger edge | radix: slate8 |
| `--ds-color-radix-12-step-cool-dark-neutral-9` | #696e77 | Solid fill | radix: slate9 |
| `--ds-color-radix-12-step-cool-dark-neutral-10` | #777b84 | Solid hover | radix: slate10 |
| `--ds-color-radix-12-step-cool-dark-neutral-11` | #b0b4ba | Secondary text candidate | radix: slate11 |
| `--ds-color-radix-12-step-cool-dark-neutral-12` | #edeef0 | Primary text | radix: slate12 |
| `--ds-color-radix-12-step-cool-dark-accent-1` | #0d1520 | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-cool-dark-accent-2` | #111927 | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-cool-dark-accent-3` | #0d2847 | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-cool-dark-accent-4` | #003362 | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-cool-dark-accent-5` | #004074 | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-cool-dark-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-cool-dark-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-cool-dark-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-cool-dark-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-cool-dark-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-cool-dark-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-cool-dark-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-cool-dark-success-1` | #0e1512 | Canvas | radix: green1 |
| `--ds-color-radix-12-step-cool-dark-success-2` | #121b17 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-cool-dark-success-3` | #132d21 | Control surface | radix: green3 |
| `--ds-color-radix-12-step-cool-dark-success-4` | #113b29 | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-cool-dark-success-5` | #174933 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-cool-dark-success-6` | #20573e | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-cool-dark-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-cool-dark-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-cool-dark-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-cool-dark-success-10` | #33b074 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-cool-dark-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-cool-dark-success-12` | #b1f1cb | Primary text | radix: green12 |
| `--ds-color-radix-12-step-cool-dark-attention-1` | #16120c | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-cool-dark-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-cool-dark-attention-3` | #302008 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-cool-dark-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-cool-dark-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-cool-dark-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-cool-dark-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-cool-dark-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-cool-dark-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-cool-dark-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-cool-dark-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-cool-dark-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-cool-dark-danger-1` | #191111 | Canvas | radix: red1 |
| `--ds-color-radix-12-step-cool-dark-danger-2` | #201314 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-cool-dark-danger-3` | #3b1219 | Control surface | radix: red3 |
| `--ds-color-radix-12-step-cool-dark-danger-4` | #500f1c | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-cool-dark-danger-5` | #611623 | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-cool-dark-danger-6` | #72232d | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-cool-dark-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-cool-dark-danger-8` | #b54548 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-cool-dark-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-cool-dark-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-cool-dark-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-cool-dark-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-cool-dark-example-surface-default` | #111113 | Example surface-default | radix: slate1 |
| `--ds-color-radix-12-step-cool-dark-example-text-default` | #edeef0 | Example text-default | radix: slate12 |
| `--ds-color-radix-12-step-cool-dark-example-text-muted` | #b0b4ba | Example text-muted | radix: slate11 |
| `--ds-color-radix-12-step-cool-dark-example-border-control` | #696e77 | Example border-control | radix: slate9 |
| `--ds-color-radix-12-step-cool-dark-example-surface-muted` | #212225 | Example surface-muted | radix: slate3 |
| `--ds-color-radix-12-step-cool-dark-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-cool-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-cool-dark-example-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-cool-dark-example-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-cool-dark-example-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-radix-12-step-warm-light-neutral-1` | #fdfdfc | Canvas | radix: sand1 |
| `--ds-color-radix-12-step-warm-light-neutral-2` | #f9f9f8 | Quiet surface | radix: sand2 |
| `--ds-color-radix-12-step-warm-light-neutral-3` | #f1f0ef | Control surface | radix: sand3 |
| `--ds-color-radix-12-step-warm-light-neutral-4` | #e9e8e6 | Hover surface | radix: sand4 |
| `--ds-color-radix-12-step-warm-light-neutral-5` | #e2e1de | Selected surface | radix: sand5 |
| `--ds-color-radix-12-step-warm-light-neutral-6` | #dad9d6 | Decorative separator | radix: sand6 |
| `--ds-color-radix-12-step-warm-light-neutral-7` | #cfceca | Control edge / focus candidate | radix: sand7 |
| `--ds-color-radix-12-step-warm-light-neutral-8` | #bcbbb5 | Stronger edge | radix: sand8 |
| `--ds-color-radix-12-step-warm-light-neutral-9` | #8d8d86 | Solid fill | radix: sand9 |
| `--ds-color-radix-12-step-warm-light-neutral-10` | #82827c | Solid hover | radix: sand10 |
| `--ds-color-radix-12-step-warm-light-neutral-11` | #63635e | Secondary text candidate | radix: sand11 |
| `--ds-color-radix-12-step-warm-light-neutral-12` | #21201c | Primary text | radix: sand12 |
| `--ds-color-radix-12-step-warm-light-accent-1` | #fbfdff | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-warm-light-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-warm-light-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-warm-light-accent-4` | #d5efff | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-warm-light-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-warm-light-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-warm-light-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-warm-light-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-warm-light-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-warm-light-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-warm-light-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-warm-light-accent-12` | #113264 | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-warm-light-success-1` | #fbfefc | Canvas | radix: green1 |
| `--ds-color-radix-12-step-warm-light-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-warm-light-success-3` | #e6f6eb | Control surface | radix: green3 |
| `--ds-color-radix-12-step-warm-light-success-4` | #d6f1df | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-warm-light-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-warm-light-success-6` | #adddc0 | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-warm-light-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-warm-light-success-8` | #5bb98b | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-warm-light-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-warm-light-success-10` | #2b9a66 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-warm-light-success-11` | #218358 | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-warm-light-success-12` | #193b2d | Primary text | radix: green12 |
| `--ds-color-radix-12-step-warm-light-attention-1` | #fefdfb | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-warm-light-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-warm-light-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-warm-light-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-warm-light-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-warm-light-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-warm-light-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-warm-light-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-warm-light-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-warm-light-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-warm-light-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-warm-light-attention-12` | #4f3422 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-warm-light-danger-1` | #fffcfc | Canvas | radix: red1 |
| `--ds-color-radix-12-step-warm-light-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-warm-light-danger-3` | #feebec | Control surface | radix: red3 |
| `--ds-color-radix-12-step-warm-light-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-warm-light-danger-5` | #ffcdce | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-warm-light-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-warm-light-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-warm-light-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-warm-light-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-warm-light-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-warm-light-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-warm-light-danger-12` | #641723 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-warm-light-example-surface-default` | #fdfdfc | Example surface-default | radix: sand1 |
| `--ds-color-radix-12-step-warm-light-example-text-default` | #21201c | Example text-default | radix: sand12 |
| `--ds-color-radix-12-step-warm-light-example-text-muted` | #63635e | Example text-muted | radix: sand11 |
| `--ds-color-radix-12-step-warm-light-example-border-control` | #82827c | Example border-control | radix: sand10 |
| `--ds-color-radix-12-step-warm-light-example-surface-muted` | #f1f0ef | Example surface-muted | radix: sand3 |
| `--ds-color-radix-12-step-warm-light-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-warm-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-warm-light-example-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-warm-light-example-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-warm-light-example-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-radix-12-step-warm-dark-neutral-1` | #111110 | Canvas | radix: sand1 |
| `--ds-color-radix-12-step-warm-dark-neutral-2` | #191918 | Quiet surface | radix: sand2 |
| `--ds-color-radix-12-step-warm-dark-neutral-3` | #222221 | Control surface | radix: sand3 |
| `--ds-color-radix-12-step-warm-dark-neutral-4` | #2a2a28 | Hover surface | radix: sand4 |
| `--ds-color-radix-12-step-warm-dark-neutral-5` | #31312e | Selected surface | radix: sand5 |
| `--ds-color-radix-12-step-warm-dark-neutral-6` | #3b3a37 | Decorative separator | radix: sand6 |
| `--ds-color-radix-12-step-warm-dark-neutral-7` | #494844 | Control edge / focus candidate | radix: sand7 |
| `--ds-color-radix-12-step-warm-dark-neutral-8` | #62605b | Stronger edge | radix: sand8 |
| `--ds-color-radix-12-step-warm-dark-neutral-9` | #6f6d66 | Solid fill | radix: sand9 |
| `--ds-color-radix-12-step-warm-dark-neutral-10` | #7c7b74 | Solid hover | radix: sand10 |
| `--ds-color-radix-12-step-warm-dark-neutral-11` | #b5b3ad | Secondary text candidate | radix: sand11 |
| `--ds-color-radix-12-step-warm-dark-neutral-12` | #eeeeec | Primary text | radix: sand12 |
| `--ds-color-radix-12-step-warm-dark-accent-1` | #0d1520 | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-warm-dark-accent-2` | #111927 | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-warm-dark-accent-3` | #0d2847 | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-warm-dark-accent-4` | #003362 | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-warm-dark-accent-5` | #004074 | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-warm-dark-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-warm-dark-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-warm-dark-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-warm-dark-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-warm-dark-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-warm-dark-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-warm-dark-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-warm-dark-success-1` | #0e1512 | Canvas | radix: green1 |
| `--ds-color-radix-12-step-warm-dark-success-2` | #121b17 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-warm-dark-success-3` | #132d21 | Control surface | radix: green3 |
| `--ds-color-radix-12-step-warm-dark-success-4` | #113b29 | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-warm-dark-success-5` | #174933 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-warm-dark-success-6` | #20573e | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-warm-dark-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-warm-dark-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-warm-dark-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-warm-dark-success-10` | #33b074 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-warm-dark-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-warm-dark-success-12` | #b1f1cb | Primary text | radix: green12 |
| `--ds-color-radix-12-step-warm-dark-attention-1` | #16120c | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-warm-dark-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-warm-dark-attention-3` | #302008 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-warm-dark-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-warm-dark-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-warm-dark-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-warm-dark-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-warm-dark-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-warm-dark-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-warm-dark-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-warm-dark-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-warm-dark-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-warm-dark-danger-1` | #191111 | Canvas | radix: red1 |
| `--ds-color-radix-12-step-warm-dark-danger-2` | #201314 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-warm-dark-danger-3` | #3b1219 | Control surface | radix: red3 |
| `--ds-color-radix-12-step-warm-dark-danger-4` | #500f1c | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-warm-dark-danger-5` | #611623 | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-warm-dark-danger-6` | #72232d | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-warm-dark-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-warm-dark-danger-8` | #b54548 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-warm-dark-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-warm-dark-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-warm-dark-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-warm-dark-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-warm-dark-example-surface-default` | #111110 | Example surface-default | radix: sand1 |
| `--ds-color-radix-12-step-warm-dark-example-text-default` | #eeeeec | Example text-default | radix: sand12 |
| `--ds-color-radix-12-step-warm-dark-example-text-muted` | #b5b3ad | Example text-muted | radix: sand11 |
| `--ds-color-radix-12-step-warm-dark-example-border-control` | #6f6d66 | Example border-control | radix: sand9 |
| `--ds-color-radix-12-step-warm-dark-example-surface-muted` | #222221 | Example surface-muted | radix: sand3 |
| `--ds-color-radix-12-step-warm-dark-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-warm-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-warm-dark-example-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-warm-dark-example-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-warm-dark-example-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-radix-12-step-pure-light-neutral-1` | #fcfcfc | Canvas | radix: gray1 |
| `--ds-color-radix-12-step-pure-light-neutral-2` | #f9f9f9 | Quiet surface | radix: gray2 |
| `--ds-color-radix-12-step-pure-light-neutral-3` | #f0f0f0 | Control surface | radix: gray3 |
| `--ds-color-radix-12-step-pure-light-neutral-4` | #e8e8e8 | Hover surface | radix: gray4 |
| `--ds-color-radix-12-step-pure-light-neutral-5` | #e0e0e0 | Selected surface | radix: gray5 |
| `--ds-color-radix-12-step-pure-light-neutral-6` | #d9d9d9 | Decorative separator | radix: gray6 |
| `--ds-color-radix-12-step-pure-light-neutral-7` | #cecece | Control edge / focus candidate | radix: gray7 |
| `--ds-color-radix-12-step-pure-light-neutral-8` | #bbbbbb | Stronger edge | radix: gray8 |
| `--ds-color-radix-12-step-pure-light-neutral-9` | #8d8d8d | Solid fill | radix: gray9 |
| `--ds-color-radix-12-step-pure-light-neutral-10` | #838383 | Solid hover | radix: gray10 |
| `--ds-color-radix-12-step-pure-light-neutral-11` | #646464 | Secondary text candidate | radix: gray11 |
| `--ds-color-radix-12-step-pure-light-neutral-12` | #202020 | Primary text | radix: gray12 |
| `--ds-color-radix-12-step-pure-light-accent-1` | #fbfdff | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-pure-light-accent-2` | #f4faff | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-pure-light-accent-3` | #e6f4fe | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-pure-light-accent-4` | #d5efff | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-pure-light-accent-5` | #c2e5ff | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-pure-light-accent-6` | #acd8fc | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-pure-light-accent-7` | #8ec8f6 | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-pure-light-accent-8` | #5eb1ef | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-pure-light-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-pure-light-accent-10` | #0588f0 | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-pure-light-accent-11` | #0d74ce | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-pure-light-accent-12` | #113264 | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-pure-light-success-1` | #fbfefc | Canvas | radix: green1 |
| `--ds-color-radix-12-step-pure-light-success-2` | #f4fbf6 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-pure-light-success-3` | #e6f6eb | Control surface | radix: green3 |
| `--ds-color-radix-12-step-pure-light-success-4` | #d6f1df | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-pure-light-success-5` | #c4e8d1 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-pure-light-success-6` | #adddc0 | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-pure-light-success-7` | #8eceaa | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-pure-light-success-8` | #5bb98b | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-pure-light-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-pure-light-success-10` | #2b9a66 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-pure-light-success-11` | #218358 | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-pure-light-success-12` | #193b2d | Primary text | radix: green12 |
| `--ds-color-radix-12-step-pure-light-attention-1` | #fefdfb | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-pure-light-attention-2` | #fefbe9 | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-pure-light-attention-3` | #fff7c2 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-pure-light-attention-4` | #ffee9c | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-pure-light-attention-5` | #fbe577 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-pure-light-attention-6` | #f3d673 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-pure-light-attention-7` | #e9c162 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-pure-light-attention-8` | #e2a336 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-pure-light-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-pure-light-attention-10` | #ffba18 | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-pure-light-attention-11` | #ab6400 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-pure-light-attention-12` | #4f3422 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-pure-light-danger-1` | #fffcfc | Canvas | radix: red1 |
| `--ds-color-radix-12-step-pure-light-danger-2` | #fff7f7 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-pure-light-danger-3` | #feebec | Control surface | radix: red3 |
| `--ds-color-radix-12-step-pure-light-danger-4` | #ffdbdc | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-pure-light-danger-5` | #ffcdce | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-pure-light-danger-6` | #fdbdbe | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-pure-light-danger-7` | #f4a9aa | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-pure-light-danger-8` | #eb8e90 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-pure-light-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-pure-light-danger-10` | #dc3e42 | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-pure-light-danger-11` | #ce2c31 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-pure-light-danger-12` | #641723 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-pure-light-example-surface-default` | #fcfcfc | Example surface-default | radix: gray1 |
| `--ds-color-radix-12-step-pure-light-example-text-default` | #202020 | Example text-default | radix: gray12 |
| `--ds-color-radix-12-step-pure-light-example-text-muted` | #646464 | Example text-muted | radix: gray11 |
| `--ds-color-radix-12-step-pure-light-example-border-control` | #838383 | Example border-control | radix: gray10 |
| `--ds-color-radix-12-step-pure-light-example-surface-muted` | #f0f0f0 | Example surface-muted | radix: gray3 |
| `--ds-color-radix-12-step-pure-light-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-pure-light-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-pure-light-example-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-pure-light-example-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-pure-light-example-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-radix-12-step-pure-dark-neutral-1` | #111111 | Canvas | radix: gray1 |
| `--ds-color-radix-12-step-pure-dark-neutral-2` | #191919 | Quiet surface | radix: gray2 |
| `--ds-color-radix-12-step-pure-dark-neutral-3` | #222222 | Control surface | radix: gray3 |
| `--ds-color-radix-12-step-pure-dark-neutral-4` | #2a2a2a | Hover surface | radix: gray4 |
| `--ds-color-radix-12-step-pure-dark-neutral-5` | #313131 | Selected surface | radix: gray5 |
| `--ds-color-radix-12-step-pure-dark-neutral-6` | #3a3a3a | Decorative separator | radix: gray6 |
| `--ds-color-radix-12-step-pure-dark-neutral-7` | #484848 | Control edge / focus candidate | radix: gray7 |
| `--ds-color-radix-12-step-pure-dark-neutral-8` | #606060 | Stronger edge | radix: gray8 |
| `--ds-color-radix-12-step-pure-dark-neutral-9` | #6e6e6e | Solid fill | radix: gray9 |
| `--ds-color-radix-12-step-pure-dark-neutral-10` | #7b7b7b | Solid hover | radix: gray10 |
| `--ds-color-radix-12-step-pure-dark-neutral-11` | #b4b4b4 | Secondary text candidate | radix: gray11 |
| `--ds-color-radix-12-step-pure-dark-neutral-12` | #eeeeee | Primary text | radix: gray12 |
| `--ds-color-radix-12-step-pure-dark-accent-1` | #0d1520 | Canvas | radix: blue1 |
| `--ds-color-radix-12-step-pure-dark-accent-2` | #111927 | Quiet surface | radix: blue2 |
| `--ds-color-radix-12-step-pure-dark-accent-3` | #0d2847 | Control surface | radix: blue3 |
| `--ds-color-radix-12-step-pure-dark-accent-4` | #003362 | Hover surface | radix: blue4 |
| `--ds-color-radix-12-step-pure-dark-accent-5` | #004074 | Selected surface | radix: blue5 |
| `--ds-color-radix-12-step-pure-dark-accent-6` | #104d87 | Decorative separator | radix: blue6 |
| `--ds-color-radix-12-step-pure-dark-accent-7` | #205d9e | Control edge / focus candidate | radix: blue7 |
| `--ds-color-radix-12-step-pure-dark-accent-8` | #2870bd | Stronger edge | radix: blue8 |
| `--ds-color-radix-12-step-pure-dark-accent-9` | #0090ff | Solid fill | radix: blue9 |
| `--ds-color-radix-12-step-pure-dark-accent-10` | #3b9eff | Solid hover | radix: blue10 |
| `--ds-color-radix-12-step-pure-dark-accent-11` | #70b8ff | Secondary text candidate | radix: blue11 |
| `--ds-color-radix-12-step-pure-dark-accent-12` | #c2e6ff | Primary text | radix: blue12 |
| `--ds-color-radix-12-step-pure-dark-success-1` | #0e1512 | Canvas | radix: green1 |
| `--ds-color-radix-12-step-pure-dark-success-2` | #121b17 | Quiet surface | radix: green2 |
| `--ds-color-radix-12-step-pure-dark-success-3` | #132d21 | Control surface | radix: green3 |
| `--ds-color-radix-12-step-pure-dark-success-4` | #113b29 | Hover surface | radix: green4 |
| `--ds-color-radix-12-step-pure-dark-success-5` | #174933 | Selected surface | radix: green5 |
| `--ds-color-radix-12-step-pure-dark-success-6` | #20573e | Decorative separator | radix: green6 |
| `--ds-color-radix-12-step-pure-dark-success-7` | #28684a | Control edge / focus candidate | radix: green7 |
| `--ds-color-radix-12-step-pure-dark-success-8` | #2f7c57 | Stronger edge | radix: green8 |
| `--ds-color-radix-12-step-pure-dark-success-9` | #30a46c | Solid fill | radix: green9 |
| `--ds-color-radix-12-step-pure-dark-success-10` | #33b074 | Solid hover | radix: green10 |
| `--ds-color-radix-12-step-pure-dark-success-11` | #3dd68c | Secondary text candidate | radix: green11 |
| `--ds-color-radix-12-step-pure-dark-success-12` | #b1f1cb | Primary text | radix: green12 |
| `--ds-color-radix-12-step-pure-dark-attention-1` | #16120c | Canvas | radix: amber1 |
| `--ds-color-radix-12-step-pure-dark-attention-2` | #1d180f | Quiet surface | radix: amber2 |
| `--ds-color-radix-12-step-pure-dark-attention-3` | #302008 | Control surface | radix: amber3 |
| `--ds-color-radix-12-step-pure-dark-attention-4` | #3f2700 | Hover surface | radix: amber4 |
| `--ds-color-radix-12-step-pure-dark-attention-5` | #4d3000 | Selected surface | radix: amber5 |
| `--ds-color-radix-12-step-pure-dark-attention-6` | #5c3d05 | Decorative separator | radix: amber6 |
| `--ds-color-radix-12-step-pure-dark-attention-7` | #714f19 | Control edge / focus candidate | radix: amber7 |
| `--ds-color-radix-12-step-pure-dark-attention-8` | #8f6424 | Stronger edge | radix: amber8 |
| `--ds-color-radix-12-step-pure-dark-attention-9` | #ffc53d | Solid fill | radix: amber9 |
| `--ds-color-radix-12-step-pure-dark-attention-10` | #ffd60a | Solid hover | radix: amber10 |
| `--ds-color-radix-12-step-pure-dark-attention-11` | #ffca16 | Secondary text candidate | radix: amber11 |
| `--ds-color-radix-12-step-pure-dark-attention-12` | #ffe7b3 | Primary text | radix: amber12 |
| `--ds-color-radix-12-step-pure-dark-danger-1` | #191111 | Canvas | radix: red1 |
| `--ds-color-radix-12-step-pure-dark-danger-2` | #201314 | Quiet surface | radix: red2 |
| `--ds-color-radix-12-step-pure-dark-danger-3` | #3b1219 | Control surface | radix: red3 |
| `--ds-color-radix-12-step-pure-dark-danger-4` | #500f1c | Hover surface | radix: red4 |
| `--ds-color-radix-12-step-pure-dark-danger-5` | #611623 | Selected surface | radix: red5 |
| `--ds-color-radix-12-step-pure-dark-danger-6` | #72232d | Decorative separator | radix: red6 |
| `--ds-color-radix-12-step-pure-dark-danger-7` | #8c333a | Control edge / focus candidate | radix: red7 |
| `--ds-color-radix-12-step-pure-dark-danger-8` | #b54548 | Stronger edge | radix: red8 |
| `--ds-color-radix-12-step-pure-dark-danger-9` | #e5484d | Solid fill | radix: red9 |
| `--ds-color-radix-12-step-pure-dark-danger-10` | #ec5d5e | Solid hover | radix: red10 |
| `--ds-color-radix-12-step-pure-dark-danger-11` | #ff9592 | Secondary text candidate | radix: red11 |
| `--ds-color-radix-12-step-pure-dark-danger-12` | #ffd1d9 | Primary text | radix: red12 |
| `--ds-color-radix-12-step-pure-dark-example-surface-default` | #111111 | Example surface-default | radix: gray1 |
| `--ds-color-radix-12-step-pure-dark-example-text-default` | #eeeeee | Example text-default | radix: gray12 |
| `--ds-color-radix-12-step-pure-dark-example-text-muted` | #b4b4b4 | Example text-muted | radix: gray11 |
| `--ds-color-radix-12-step-pure-dark-example-border-control` | #6e6e6e | Example border-control | radix: gray9 |
| `--ds-color-radix-12-step-pure-dark-example-surface-muted` | #222222 | Example surface-muted | radix: gray3 |
| `--ds-color-radix-12-step-pure-dark-example-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-radix-12-step-pure-dark-example-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-radix-12-step-pure-dark-example-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-radix-12-step-pure-dark-example-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-radix-12-step-pure-dark-example-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |

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

Audited `tokens.css` SHA-256: `67187b3604b956d3f279dfa3b13f92e6df2072e854277d6842eacce617147abf`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/radix-12-step/tokens.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:c48ef043cf06   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [MEDIUM] color/literal-duplicate-tokens
  │ 123 colour value(s) are declared by 378 different tokens
  │ where: #fcfcfd <- --ds-color-radix-12-step-cool-light-neutral-1, --ds-color-radix-12-step-cool-light-example-surface-default; #f0f0f3 <- --ds-color-radix-12-step-cool-light-neutral-3, --ds-color-radix-12-step-cool-light-example-surface-muted; #80838d <- --ds-color-radix-12-step-cool-light-neutral-10, --ds-color-radix-12-step-cool-light-example-border-control; #60646c <- --ds-color-radix-12-step-cool-light-neutral-11, --ds-color-radix-12-step-cool-light-example-text-muted; #1c2024 <- --ds-color-radix-12-step-cool-light-neutral-12, --ds-color-radix-12-step-cool-light-example-text-default; #fbfdff <- --ds-color-radix-12-step-cool-light-accent-1, --ds-color-radix-12-step-warm-light-accent-1, --ds-color-radix-12-step-pure-light-accent-1
  │ risk:  The next person to change this colour changes one of the names and not the others, and the system carries two values for one decision.
  │ fix:   Keep one canonical token per value; make the rest var() aliases of it.

  [LOW] color/near-duplicate-primitives
  │ 120 pair(s) of palette primitives are within ΔE 2.3 — below a reliable just-noticeable difference
  │ where: --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-cool-light-neutral-2 (ΔE 0.790195); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-cool-light-accent-1 (ΔE 0.99327); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-cool-light-attention-1 (ΔE 1.563758); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-cool-light-danger-1 (ΔE 1.435253); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-warm-light-neutral-1 (ΔE 1.095476); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-warm-light-neutral-2 (ΔE 1.254267); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-pure-light-neutral-1 (ΔE 0.538635); --ds-color-radix-12-step-cool-light-neutral-1 ≈ --ds-color-radix-12-step-pure-light-neutral-2 (ΔE 0.818812)
  │ risk:  Nobody can tell these steps apart on screen, so authors pick between them at random and the ramp stops meaning anything.
  │ fix:   Confirm each pair is a deliberate ramp step. Collapse the ones that are not.

  2 findings — 0 blocking · 0 high · 1 medium · 1 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  2.545
    colors-per-distinct-in-scope 2.545
    ambiguous-share              0

  next
    decide on the rest                                                     nothing here is mechanically provable — all 2 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/radix-12-step/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                       report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
