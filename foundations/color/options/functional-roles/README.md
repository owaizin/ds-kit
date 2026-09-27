# functional-roles

A named role contract with literal upstream snapshots; project aliases remain layer 2.

## Rationale

Radix provides separate light and dark ramps. The 12 step jobs are retained; descriptive labels are paraphrased. Cool/warm/pure neutrals select slate/sand/gray. Accent/success/attention/danger use blue/green/amber/red. The fg/bg/border × default/muted/emphasis × neutral/accent/success/attention/danger names are our own contract, with Primer as role-separation influence. Equal control-edge values across emphasis slots are intentional: state differentiation needs more than color.

Role selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.

## When to use / when not

Use when a team wants a concrete starting role vocabulary. Do not add a competing contract to an already coherent naming system. Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.

## Platforms and source

Web and native share opaque six-digit sRGB strings. CSS contains literal layer-1 --ds-* declarations; JSON names every mode/neutral explicitly. Select a variant through project aliases, with fallbacks, rather than importing all variants as component API. Native can consume the same hex strings; rendered native behavior is unverified.

[Radix source](https://github.com/radix-ui/colors/tree/dbdb85470547c7d34b9001f48fddb08ded335979/src), revision dbdb85470547c7d34b9001f48fddb08ded335979, MIT; values unchanged from src/light.ts and src/dark.ts. [Notice](../../../../LICENSES/Radix-Colors-MIT.txt). [Primer influence](https://github.com/primer/primitives/blob/f48bc063f7bc0fb3e447386a8c259650ce46dea8/src/tokens/functional/color/fgColor.json5), MIT, no values/prose copied. [Notice](../../../../LICENSES/Primer-Primitives-MIT.txt). Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.

## Values

| Token | sRGB | Role | Source per value |
|---|---|---|---|
| `--ds-color-functional-roles-cool-light-fg-default-neutral` | #1c2024 | fg-default / neutral | radix: slate12 |
| `--ds-color-functional-roles-cool-light-fg-muted-neutral` | #60646c | fg-muted / neutral | radix: slate11 |
| `--ds-color-functional-roles-cool-light-fg-emphasis-neutral` | #000000 | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-bg-default-neutral` | #f9f9fb | bg-default / neutral | radix: slate2 |
| `--ds-color-functional-roles-cool-light-bg-muted-neutral` | #f0f0f3 | bg-muted / neutral | radix: slate3 |
| `--ds-color-functional-roles-cool-light-bg-emphasis-neutral` | #8b8d98 | bg-emphasis / neutral | radix: slate9 |
| `--ds-color-functional-roles-cool-light-border-default-neutral` | #80838d | border-default / neutral | radix: slate10 |
| `--ds-color-functional-roles-cool-light-border-muted-neutral` | #80838d | border-muted / neutral | radix: slate10 |
| `--ds-color-functional-roles-cool-light-border-emphasis-neutral` | #80838d | border-emphasis / neutral | radix: slate10 |
| `--ds-color-functional-roles-cool-light-fg-default-accent` | #113264 | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-cool-light-fg-muted-accent` | #113264 | fg-muted / accent | radix: blue12 |
| `--ds-color-functional-roles-cool-light-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-bg-default-accent` | #f4faff | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-cool-light-bg-muted-accent` | #e6f4fe | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-cool-light-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-cool-light-border-default-accent` | #0588f0 | border-default / accent | radix: blue10 |
| `--ds-color-functional-roles-cool-light-border-muted-accent` | #0588f0 | border-muted / accent | radix: blue10 |
| `--ds-color-functional-roles-cool-light-border-emphasis-accent` | #0588f0 | border-emphasis / accent | radix: blue10 |
| `--ds-color-functional-roles-cool-light-fg-default-success` | #193b2d | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-cool-light-fg-muted-success` | #193b2d | fg-muted / success | radix: green12 |
| `--ds-color-functional-roles-cool-light-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-bg-default-success` | #f4fbf6 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-cool-light-bg-muted-success` | #e6f6eb | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-cool-light-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-cool-light-border-default-success` | #2b9a66 | border-default / success | radix: green10 |
| `--ds-color-functional-roles-cool-light-border-muted-success` | #2b9a66 | border-muted / success | radix: green10 |
| `--ds-color-functional-roles-cool-light-border-emphasis-success` | #2b9a66 | border-emphasis / success | radix: green10 |
| `--ds-color-functional-roles-cool-light-fg-default-attention` | #4f3422 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-cool-light-fg-muted-attention` | #4f3422 | fg-muted / attention | radix: amber12 |
| `--ds-color-functional-roles-cool-light-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-bg-default-attention` | #fefbe9 | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-cool-light-bg-muted-attention` | #fff7c2 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-cool-light-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-cool-light-border-default-attention` | #ab6400 | border-default / attention | radix: amber11 |
| `--ds-color-functional-roles-cool-light-border-muted-attention` | #ab6400 | border-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-cool-light-border-emphasis-attention` | #ab6400 | border-emphasis / attention | radix: amber11 |
| `--ds-color-functional-roles-cool-light-fg-default-danger` | #641723 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-cool-light-fg-muted-danger` | #ce2c31 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-cool-light-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-bg-default-danger` | #fff7f7 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-cool-light-bg-muted-danger` | #feebec | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-cool-light-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-cool-light-border-default-danger` | #e5484d | border-default / danger | radix: red9 |
| `--ds-color-functional-roles-cool-light-border-muted-danger` | #e5484d | border-muted / danger | radix: red9 |
| `--ds-color-functional-roles-cool-light-border-emphasis-danger` | #e5484d | border-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-cool-light-surface-default` | #fcfcfd | Example surface-default | radix: slate1 |
| `--ds-color-functional-roles-cool-light-text-default` | #1c2024 | Example text-default | radix: slate12 |
| `--ds-color-functional-roles-cool-light-text-muted` | #60646c | Example text-muted | radix: slate11 |
| `--ds-color-functional-roles-cool-light-border-control` | #80838d | Example border-control | radix: slate10 |
| `--ds-color-functional-roles-cool-light-surface-muted` | #f0f0f3 | Example surface-muted | radix: slate3 |
| `--ds-color-functional-roles-cool-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-cool-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-cool-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-functional-roles-cool-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-functional-roles-cool-dark-fg-default-neutral` | #edeef0 | fg-default / neutral | radix: slate12 |
| `--ds-color-functional-roles-cool-dark-fg-muted-neutral` | #b0b4ba | fg-muted / neutral | radix: slate11 |
| `--ds-color-functional-roles-cool-dark-fg-emphasis-neutral` | #ffffff | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-bg-default-neutral` | #18191b | bg-default / neutral | radix: slate2 |
| `--ds-color-functional-roles-cool-dark-bg-muted-neutral` | #212225 | bg-muted / neutral | radix: slate3 |
| `--ds-color-functional-roles-cool-dark-bg-emphasis-neutral` | #696e77 | bg-emphasis / neutral | radix: slate9 |
| `--ds-color-functional-roles-cool-dark-border-default-neutral` | #696e77 | border-default / neutral | radix: slate9 |
| `--ds-color-functional-roles-cool-dark-border-muted-neutral` | #696e77 | border-muted / neutral | radix: slate9 |
| `--ds-color-functional-roles-cool-dark-border-emphasis-neutral` | #696e77 | border-emphasis / neutral | radix: slate9 |
| `--ds-color-functional-roles-cool-dark-fg-default-accent` | #c2e6ff | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-cool-dark-fg-muted-accent` | #70b8ff | fg-muted / accent | radix: blue11 |
| `--ds-color-functional-roles-cool-dark-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-bg-default-accent` | #111927 | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-cool-dark-bg-muted-accent` | #0d2847 | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-cool-dark-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-cool-dark-border-default-accent` | #0090ff | border-default / accent | radix: blue9 |
| `--ds-color-functional-roles-cool-dark-border-muted-accent` | #0090ff | border-muted / accent | radix: blue9 |
| `--ds-color-functional-roles-cool-dark-border-emphasis-accent` | #0090ff | border-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-cool-dark-fg-default-success` | #b1f1cb | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-cool-dark-fg-muted-success` | #3dd68c | fg-muted / success | radix: green11 |
| `--ds-color-functional-roles-cool-dark-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-bg-default-success` | #121b17 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-cool-dark-bg-muted-success` | #132d21 | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-cool-dark-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-cool-dark-border-default-success` | #30a46c | border-default / success | radix: green9 |
| `--ds-color-functional-roles-cool-dark-border-muted-success` | #30a46c | border-muted / success | radix: green9 |
| `--ds-color-functional-roles-cool-dark-border-emphasis-success` | #30a46c | border-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-cool-dark-fg-default-attention` | #ffe7b3 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-cool-dark-fg-muted-attention` | #ffca16 | fg-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-cool-dark-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-bg-default-attention` | #1d180f | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-cool-dark-bg-muted-attention` | #302008 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-cool-dark-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-cool-dark-border-default-attention` | #8f6424 | border-default / attention | radix: amber8 |
| `--ds-color-functional-roles-cool-dark-border-muted-attention` | #8f6424 | border-muted / attention | radix: amber8 |
| `--ds-color-functional-roles-cool-dark-border-emphasis-attention` | #8f6424 | border-emphasis / attention | radix: amber8 |
| `--ds-color-functional-roles-cool-dark-fg-default-danger` | #ffd1d9 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-cool-dark-fg-muted-danger` | #ff9592 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-cool-dark-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-bg-default-danger` | #201314 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-cool-dark-bg-muted-danger` | #3b1219 | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-cool-dark-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-cool-dark-border-default-danger` | #b54548 | border-default / danger | radix: red8 |
| `--ds-color-functional-roles-cool-dark-border-muted-danger` | #b54548 | border-muted / danger | radix: red8 |
| `--ds-color-functional-roles-cool-dark-border-emphasis-danger` | #b54548 | border-emphasis / danger | radix: red8 |
| `--ds-color-functional-roles-cool-dark-surface-default` | #111113 | Example surface-default | radix: slate1 |
| `--ds-color-functional-roles-cool-dark-text-default` | #edeef0 | Example text-default | radix: slate12 |
| `--ds-color-functional-roles-cool-dark-text-muted` | #b0b4ba | Example text-muted | radix: slate11 |
| `--ds-color-functional-roles-cool-dark-border-control` | #696e77 | Example border-control | radix: slate9 |
| `--ds-color-functional-roles-cool-dark-surface-muted` | #212225 | Example surface-muted | radix: slate3 |
| `--ds-color-functional-roles-cool-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-cool-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-cool-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-cool-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-functional-roles-cool-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-functional-roles-warm-light-fg-default-neutral` | #21201c | fg-default / neutral | radix: sand12 |
| `--ds-color-functional-roles-warm-light-fg-muted-neutral` | #63635e | fg-muted / neutral | radix: sand11 |
| `--ds-color-functional-roles-warm-light-fg-emphasis-neutral` | #000000 | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-bg-default-neutral` | #f9f9f8 | bg-default / neutral | radix: sand2 |
| `--ds-color-functional-roles-warm-light-bg-muted-neutral` | #f1f0ef | bg-muted / neutral | radix: sand3 |
| `--ds-color-functional-roles-warm-light-bg-emphasis-neutral` | #8d8d86 | bg-emphasis / neutral | radix: sand9 |
| `--ds-color-functional-roles-warm-light-border-default-neutral` | #82827c | border-default / neutral | radix: sand10 |
| `--ds-color-functional-roles-warm-light-border-muted-neutral` | #82827c | border-muted / neutral | radix: sand10 |
| `--ds-color-functional-roles-warm-light-border-emphasis-neutral` | #82827c | border-emphasis / neutral | radix: sand10 |
| `--ds-color-functional-roles-warm-light-fg-default-accent` | #113264 | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-warm-light-fg-muted-accent` | #113264 | fg-muted / accent | radix: blue12 |
| `--ds-color-functional-roles-warm-light-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-bg-default-accent` | #f4faff | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-warm-light-bg-muted-accent` | #e6f4fe | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-warm-light-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-warm-light-border-default-accent` | #0588f0 | border-default / accent | radix: blue10 |
| `--ds-color-functional-roles-warm-light-border-muted-accent` | #0588f0 | border-muted / accent | radix: blue10 |
| `--ds-color-functional-roles-warm-light-border-emphasis-accent` | #0588f0 | border-emphasis / accent | radix: blue10 |
| `--ds-color-functional-roles-warm-light-fg-default-success` | #193b2d | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-warm-light-fg-muted-success` | #193b2d | fg-muted / success | radix: green12 |
| `--ds-color-functional-roles-warm-light-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-bg-default-success` | #f4fbf6 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-warm-light-bg-muted-success` | #e6f6eb | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-warm-light-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-warm-light-border-default-success` | #2b9a66 | border-default / success | radix: green10 |
| `--ds-color-functional-roles-warm-light-border-muted-success` | #2b9a66 | border-muted / success | radix: green10 |
| `--ds-color-functional-roles-warm-light-border-emphasis-success` | #2b9a66 | border-emphasis / success | radix: green10 |
| `--ds-color-functional-roles-warm-light-fg-default-attention` | #4f3422 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-warm-light-fg-muted-attention` | #4f3422 | fg-muted / attention | radix: amber12 |
| `--ds-color-functional-roles-warm-light-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-bg-default-attention` | #fefbe9 | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-warm-light-bg-muted-attention` | #fff7c2 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-warm-light-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-warm-light-border-default-attention` | #ab6400 | border-default / attention | radix: amber11 |
| `--ds-color-functional-roles-warm-light-border-muted-attention` | #ab6400 | border-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-warm-light-border-emphasis-attention` | #ab6400 | border-emphasis / attention | radix: amber11 |
| `--ds-color-functional-roles-warm-light-fg-default-danger` | #641723 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-warm-light-fg-muted-danger` | #ce2c31 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-warm-light-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-bg-default-danger` | #fff7f7 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-warm-light-bg-muted-danger` | #feebec | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-warm-light-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-warm-light-border-default-danger` | #e5484d | border-default / danger | radix: red9 |
| `--ds-color-functional-roles-warm-light-border-muted-danger` | #e5484d | border-muted / danger | radix: red9 |
| `--ds-color-functional-roles-warm-light-border-emphasis-danger` | #e5484d | border-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-warm-light-surface-default` | #fdfdfc | Example surface-default | radix: sand1 |
| `--ds-color-functional-roles-warm-light-text-default` | #21201c | Example text-default | radix: sand12 |
| `--ds-color-functional-roles-warm-light-text-muted` | #63635e | Example text-muted | radix: sand11 |
| `--ds-color-functional-roles-warm-light-border-control` | #82827c | Example border-control | radix: sand10 |
| `--ds-color-functional-roles-warm-light-surface-muted` | #f1f0ef | Example surface-muted | radix: sand3 |
| `--ds-color-functional-roles-warm-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-warm-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-warm-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-functional-roles-warm-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-functional-roles-warm-dark-fg-default-neutral` | #eeeeec | fg-default / neutral | radix: sand12 |
| `--ds-color-functional-roles-warm-dark-fg-muted-neutral` | #b5b3ad | fg-muted / neutral | radix: sand11 |
| `--ds-color-functional-roles-warm-dark-fg-emphasis-neutral` | #ffffff | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-bg-default-neutral` | #191918 | bg-default / neutral | radix: sand2 |
| `--ds-color-functional-roles-warm-dark-bg-muted-neutral` | #222221 | bg-muted / neutral | radix: sand3 |
| `--ds-color-functional-roles-warm-dark-bg-emphasis-neutral` | #6f6d66 | bg-emphasis / neutral | radix: sand9 |
| `--ds-color-functional-roles-warm-dark-border-default-neutral` | #6f6d66 | border-default / neutral | radix: sand9 |
| `--ds-color-functional-roles-warm-dark-border-muted-neutral` | #6f6d66 | border-muted / neutral | radix: sand9 |
| `--ds-color-functional-roles-warm-dark-border-emphasis-neutral` | #6f6d66 | border-emphasis / neutral | radix: sand9 |
| `--ds-color-functional-roles-warm-dark-fg-default-accent` | #c2e6ff | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-warm-dark-fg-muted-accent` | #70b8ff | fg-muted / accent | radix: blue11 |
| `--ds-color-functional-roles-warm-dark-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-bg-default-accent` | #111927 | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-warm-dark-bg-muted-accent` | #0d2847 | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-warm-dark-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-warm-dark-border-default-accent` | #0090ff | border-default / accent | radix: blue9 |
| `--ds-color-functional-roles-warm-dark-border-muted-accent` | #0090ff | border-muted / accent | radix: blue9 |
| `--ds-color-functional-roles-warm-dark-border-emphasis-accent` | #0090ff | border-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-warm-dark-fg-default-success` | #b1f1cb | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-warm-dark-fg-muted-success` | #3dd68c | fg-muted / success | radix: green11 |
| `--ds-color-functional-roles-warm-dark-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-bg-default-success` | #121b17 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-warm-dark-bg-muted-success` | #132d21 | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-warm-dark-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-warm-dark-border-default-success` | #30a46c | border-default / success | radix: green9 |
| `--ds-color-functional-roles-warm-dark-border-muted-success` | #30a46c | border-muted / success | radix: green9 |
| `--ds-color-functional-roles-warm-dark-border-emphasis-success` | #30a46c | border-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-warm-dark-fg-default-attention` | #ffe7b3 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-warm-dark-fg-muted-attention` | #ffca16 | fg-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-warm-dark-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-bg-default-attention` | #1d180f | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-warm-dark-bg-muted-attention` | #302008 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-warm-dark-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-warm-dark-border-default-attention` | #8f6424 | border-default / attention | radix: amber8 |
| `--ds-color-functional-roles-warm-dark-border-muted-attention` | #8f6424 | border-muted / attention | radix: amber8 |
| `--ds-color-functional-roles-warm-dark-border-emphasis-attention` | #8f6424 | border-emphasis / attention | radix: amber8 |
| `--ds-color-functional-roles-warm-dark-fg-default-danger` | #ffd1d9 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-warm-dark-fg-muted-danger` | #ff9592 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-warm-dark-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-bg-default-danger` | #201314 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-warm-dark-bg-muted-danger` | #3b1219 | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-warm-dark-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-warm-dark-border-default-danger` | #b54548 | border-default / danger | radix: red8 |
| `--ds-color-functional-roles-warm-dark-border-muted-danger` | #b54548 | border-muted / danger | radix: red8 |
| `--ds-color-functional-roles-warm-dark-border-emphasis-danger` | #b54548 | border-emphasis / danger | radix: red8 |
| `--ds-color-functional-roles-warm-dark-surface-default` | #111110 | Example surface-default | radix: sand1 |
| `--ds-color-functional-roles-warm-dark-text-default` | #eeeeec | Example text-default | radix: sand12 |
| `--ds-color-functional-roles-warm-dark-text-muted` | #b5b3ad | Example text-muted | radix: sand11 |
| `--ds-color-functional-roles-warm-dark-border-control` | #6f6d66 | Example border-control | radix: sand9 |
| `--ds-color-functional-roles-warm-dark-surface-muted` | #222221 | Example surface-muted | radix: sand3 |
| `--ds-color-functional-roles-warm-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-warm-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-warm-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-warm-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-functional-roles-warm-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |
| `--ds-color-functional-roles-pure-light-fg-default-neutral` | #202020 | fg-default / neutral | radix: gray12 |
| `--ds-color-functional-roles-pure-light-fg-muted-neutral` | #646464 | fg-muted / neutral | radix: gray11 |
| `--ds-color-functional-roles-pure-light-fg-emphasis-neutral` | #000000 | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-bg-default-neutral` | #f9f9f9 | bg-default / neutral | radix: gray2 |
| `--ds-color-functional-roles-pure-light-bg-muted-neutral` | #f0f0f0 | bg-muted / neutral | radix: gray3 |
| `--ds-color-functional-roles-pure-light-bg-emphasis-neutral` | #8d8d8d | bg-emphasis / neutral | radix: gray9 |
| `--ds-color-functional-roles-pure-light-border-default-neutral` | #838383 | border-default / neutral | radix: gray10 |
| `--ds-color-functional-roles-pure-light-border-muted-neutral` | #838383 | border-muted / neutral | radix: gray10 |
| `--ds-color-functional-roles-pure-light-border-emphasis-neutral` | #838383 | border-emphasis / neutral | radix: gray10 |
| `--ds-color-functional-roles-pure-light-fg-default-accent` | #113264 | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-pure-light-fg-muted-accent` | #113264 | fg-muted / accent | radix: blue12 |
| `--ds-color-functional-roles-pure-light-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-bg-default-accent` | #f4faff | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-pure-light-bg-muted-accent` | #e6f4fe | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-pure-light-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-pure-light-border-default-accent` | #0588f0 | border-default / accent | radix: blue10 |
| `--ds-color-functional-roles-pure-light-border-muted-accent` | #0588f0 | border-muted / accent | radix: blue10 |
| `--ds-color-functional-roles-pure-light-border-emphasis-accent` | #0588f0 | border-emphasis / accent | radix: blue10 |
| `--ds-color-functional-roles-pure-light-fg-default-success` | #193b2d | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-pure-light-fg-muted-success` | #193b2d | fg-muted / success | radix: green12 |
| `--ds-color-functional-roles-pure-light-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-bg-default-success` | #f4fbf6 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-pure-light-bg-muted-success` | #e6f6eb | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-pure-light-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-pure-light-border-default-success` | #2b9a66 | border-default / success | radix: green10 |
| `--ds-color-functional-roles-pure-light-border-muted-success` | #2b9a66 | border-muted / success | radix: green10 |
| `--ds-color-functional-roles-pure-light-border-emphasis-success` | #2b9a66 | border-emphasis / success | radix: green10 |
| `--ds-color-functional-roles-pure-light-fg-default-attention` | #4f3422 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-pure-light-fg-muted-attention` | #4f3422 | fg-muted / attention | radix: amber12 |
| `--ds-color-functional-roles-pure-light-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-bg-default-attention` | #fefbe9 | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-pure-light-bg-muted-attention` | #fff7c2 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-pure-light-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-pure-light-border-default-attention` | #ab6400 | border-default / attention | radix: amber11 |
| `--ds-color-functional-roles-pure-light-border-muted-attention` | #ab6400 | border-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-pure-light-border-emphasis-attention` | #ab6400 | border-emphasis / attention | radix: amber11 |
| `--ds-color-functional-roles-pure-light-fg-default-danger` | #641723 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-pure-light-fg-muted-danger` | #ce2c31 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-pure-light-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-bg-default-danger` | #fff7f7 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-pure-light-bg-muted-danger` | #feebec | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-pure-light-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-pure-light-border-default-danger` | #e5484d | border-default / danger | radix: red9 |
| `--ds-color-functional-roles-pure-light-border-muted-danger` | #e5484d | border-muted / danger | radix: red9 |
| `--ds-color-functional-roles-pure-light-border-emphasis-danger` | #e5484d | border-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-pure-light-surface-default` | #fcfcfc | Example surface-default | radix: gray1 |
| `--ds-color-functional-roles-pure-light-text-default` | #202020 | Example text-default | radix: gray12 |
| `--ds-color-functional-roles-pure-light-text-muted` | #646464 | Example text-muted | radix: gray11 |
| `--ds-color-functional-roles-pure-light-border-control` | #838383 | Example border-control | radix: gray10 |
| `--ds-color-functional-roles-pure-light-surface-muted` | #f0f0f0 | Example surface-muted | radix: gray3 |
| `--ds-color-functional-roles-pure-light-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-pure-light-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-light-status-danger` | #641723 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-pure-light-status-success` | #193b2d | Example status-success | radix: green12 |
| `--ds-color-functional-roles-pure-light-status-attention` | #4f3422 | Example status-attention | radix: amber12 |
| `--ds-color-functional-roles-pure-dark-fg-default-neutral` | #eeeeee | fg-default / neutral | radix: gray12 |
| `--ds-color-functional-roles-pure-dark-fg-muted-neutral` | #b4b4b4 | fg-muted / neutral | radix: gray11 |
| `--ds-color-functional-roles-pure-dark-fg-emphasis-neutral` | #ffffff | fg-emphasis / neutral | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-bg-default-neutral` | #191919 | bg-default / neutral | radix: gray2 |
| `--ds-color-functional-roles-pure-dark-bg-muted-neutral` | #222222 | bg-muted / neutral | radix: gray3 |
| `--ds-color-functional-roles-pure-dark-bg-emphasis-neutral` | #6e6e6e | bg-emphasis / neutral | radix: gray9 |
| `--ds-color-functional-roles-pure-dark-border-default-neutral` | #6e6e6e | border-default / neutral | radix: gray9 |
| `--ds-color-functional-roles-pure-dark-border-muted-neutral` | #6e6e6e | border-muted / neutral | radix: gray9 |
| `--ds-color-functional-roles-pure-dark-border-emphasis-neutral` | #6e6e6e | border-emphasis / neutral | radix: gray9 |
| `--ds-color-functional-roles-pure-dark-fg-default-accent` | #c2e6ff | fg-default / accent | radix: blue12 |
| `--ds-color-functional-roles-pure-dark-fg-muted-accent` | #70b8ff | fg-muted / accent | radix: blue11 |
| `--ds-color-functional-roles-pure-dark-fg-emphasis-accent` | #000000 | fg-emphasis / accent | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-bg-default-accent` | #111927 | bg-default / accent | radix: blue2 |
| `--ds-color-functional-roles-pure-dark-bg-muted-accent` | #0d2847 | bg-muted / accent | radix: blue3 |
| `--ds-color-functional-roles-pure-dark-bg-emphasis-accent` | #0090ff | bg-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-pure-dark-border-default-accent` | #0090ff | border-default / accent | radix: blue9 |
| `--ds-color-functional-roles-pure-dark-border-muted-accent` | #0090ff | border-muted / accent | radix: blue9 |
| `--ds-color-functional-roles-pure-dark-border-emphasis-accent` | #0090ff | border-emphasis / accent | radix: blue9 |
| `--ds-color-functional-roles-pure-dark-fg-default-success` | #b1f1cb | fg-default / success | radix: green12 |
| `--ds-color-functional-roles-pure-dark-fg-muted-success` | #3dd68c | fg-muted / success | radix: green11 |
| `--ds-color-functional-roles-pure-dark-fg-emphasis-success` | #000000 | fg-emphasis / success | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-bg-default-success` | #121b17 | bg-default / success | radix: green2 |
| `--ds-color-functional-roles-pure-dark-bg-muted-success` | #132d21 | bg-muted / success | radix: green3 |
| `--ds-color-functional-roles-pure-dark-bg-emphasis-success` | #30a46c | bg-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-pure-dark-border-default-success` | #30a46c | border-default / success | radix: green9 |
| `--ds-color-functional-roles-pure-dark-border-muted-success` | #30a46c | border-muted / success | radix: green9 |
| `--ds-color-functional-roles-pure-dark-border-emphasis-success` | #30a46c | border-emphasis / success | radix: green9 |
| `--ds-color-functional-roles-pure-dark-fg-default-attention` | #ffe7b3 | fg-default / attention | radix: amber12 |
| `--ds-color-functional-roles-pure-dark-fg-muted-attention` | #ffca16 | fg-muted / attention | radix: amber11 |
| `--ds-color-functional-roles-pure-dark-fg-emphasis-attention` | #000000 | fg-emphasis / attention | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-bg-default-attention` | #1d180f | bg-default / attention | radix: amber2 |
| `--ds-color-functional-roles-pure-dark-bg-muted-attention` | #302008 | bg-muted / attention | radix: amber3 |
| `--ds-color-functional-roles-pure-dark-bg-emphasis-attention` | #ffc53d | bg-emphasis / attention | radix: amber9 |
| `--ds-color-functional-roles-pure-dark-border-default-attention` | #8f6424 | border-default / attention | radix: amber8 |
| `--ds-color-functional-roles-pure-dark-border-muted-attention` | #8f6424 | border-muted / attention | radix: amber8 |
| `--ds-color-functional-roles-pure-dark-border-emphasis-attention` | #8f6424 | border-emphasis / attention | radix: amber8 |
| `--ds-color-functional-roles-pure-dark-fg-default-danger` | #ffd1d9 | fg-default / danger | radix: red12 |
| `--ds-color-functional-roles-pure-dark-fg-muted-danger` | #ff9592 | fg-muted / danger | radix: red11 |
| `--ds-color-functional-roles-pure-dark-fg-emphasis-danger` | #000000 | fg-emphasis / danger | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-bg-default-danger` | #201314 | bg-default / danger | radix: red2 |
| `--ds-color-functional-roles-pure-dark-bg-muted-danger` | #3b1219 | bg-muted / danger | radix: red3 |
| `--ds-color-functional-roles-pure-dark-bg-emphasis-danger` | #e5484d | bg-emphasis / danger | radix: red9 |
| `--ds-color-functional-roles-pure-dark-border-default-danger` | #b54548 | border-default / danger | radix: red8 |
| `--ds-color-functional-roles-pure-dark-border-muted-danger` | #b54548 | border-muted / danger | radix: red8 |
| `--ds-color-functional-roles-pure-dark-border-emphasis-danger` | #b54548 | border-emphasis / danger | radix: red8 |
| `--ds-color-functional-roles-pure-dark-surface-default` | #111111 | Example surface-default | radix: gray1 |
| `--ds-color-functional-roles-pure-dark-text-default` | #eeeeee | Example text-default | radix: gray12 |
| `--ds-color-functional-roles-pure-dark-text-muted` | #b4b4b4 | Example text-muted | radix: gray11 |
| `--ds-color-functional-roles-pure-dark-border-control` | #6e6e6e | Example border-control | radix: gray9 |
| `--ds-color-functional-roles-pure-dark-surface-muted` | #222222 | Example surface-muted | radix: gray3 |
| `--ds-color-functional-roles-pure-dark-brand-fill` | #0090ff | Example brand-fill | radix: blue9 |
| `--ds-color-functional-roles-pure-dark-brand-on-fill` | #000000 | Example brand-on-fill | independent: sRGB endpoint |
| `--ds-color-functional-roles-pure-dark-status-danger` | #ffd1d9 | Example status-danger | radix: red12 |
| `--ds-color-functional-roles-pure-dark-status-success` | #b1f1cb | Example status-success | radix: green12 |
| `--ds-color-functional-roles-pure-dark-status-attention` | #ffe7b3 | Example status-attention | radix: amber12 |

## Declared contrast pairs

Computed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.

| Variant | Pair | Ratio | Minimum |
|---|---|---|---|
| cool/light | neutral: default text / default surface | 15.585 | 4.5 |
| cool/light | neutral: default text / muted surface | 14.408 | 4.5 |
| cool/light | neutral: muted text / default surface | 5.647 | 4.5 |
| cool/light | neutral: muted text / muted surface | 5.220 | 4.5 |
| cool/light | neutral: text on emphasis | 6.361 | 4.5 |
| cool/light | neutral: default control edge | 3.599 | 3 |
| cool/light | neutral: muted control edge | 3.599 | 3 |
| cool/light | neutral: emphasis control edge | 3.599 | 3 |
| cool/light | accent: default text / default surface | 11.997 | 4.5 |
| cool/light | accent: default text / muted surface | 11.259 | 4.5 |
| cool/light | accent: muted text / default surface | 11.997 | 4.5 |
| cool/light | accent: muted text / muted surface | 11.259 | 4.5 |
| cool/light | accent: text on emphasis | 6.433 | 4.5 |
| cool/light | accent: default control edge | 3.450 | 3 |
| cool/light | accent: muted control edge | 3.450 | 3 |
| cool/light | accent: emphasis control edge | 3.450 | 3 |
| cool/light | success: default text / default surface | 11.718 | 4.5 |
| cool/light | success: default text / muted surface | 10.996 | 4.5 |
| cool/light | success: muted text / default surface | 11.718 | 4.5 |
| cool/light | success: muted text / muted surface | 10.996 | 4.5 |
| cool/light | success: text on emphasis | 6.652 | 4.5 |
| cool/light | success: default control edge | 3.376 | 3 |
| cool/light | success: muted control edge | 3.376 | 3 |
| cool/light | success: emphasis control edge | 3.376 | 3 |
| cool/light | attention: default text / default surface | 10.933 | 4.5 |
| cool/light | attention: default text / muted surface | 10.470 | 4.5 |
| cool/light | attention: muted text / default surface | 10.933 | 4.5 |
| cool/light | attention: muted text / muted surface | 10.470 | 4.5 |
| cool/light | attention: text on emphasis | 13.306 | 4.5 |
| cool/light | attention: default control edge | 4.433 | 3 |
| cool/light | attention: muted control edge | 4.433 | 3 |
| cool/light | attention: emphasis control edge | 4.433 | 3 |
| cool/light | danger: default text / default surface | 11.784 | 4.5 |
| cool/light | danger: default text / muted surface | 10.842 | 4.5 |
| cool/light | danger: muted text / default surface | 4.939 | 4.5 |
| cool/light | danger: muted text / muted surface | 4.544 | 4.5 |
| cool/light | danger: text on emphasis | 5.366 | 4.5 |
| cool/light | danger: default control edge | 3.709 | 3 |
| cool/light | danger: muted control edge | 3.709 | 3 |
| cool/light | danger: emphasis control edge | 3.709 | 3 |
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
| cool/dark | neutral: default text / default surface | 15.153 | 4.5 |
| cool/dark | neutral: default text / muted surface | 13.702 | 4.5 |
| cool/dark | neutral: muted text / default surface | 8.447 | 4.5 |
| cool/dark | neutral: muted text / muted surface | 7.638 | 4.5 |
| cool/dark | neutral: text on emphasis | 5.125 | 4.5 |
| cool/dark | neutral: default control edge | 3.432 | 3 |
| cool/dark | neutral: muted control edge | 3.432 | 3 |
| cool/dark | neutral: emphasis control edge | 3.432 | 3 |
| cool/dark | accent: default text / default surface | 13.468 | 4.5 |
| cool/dark | accent: default text / muted surface | 11.375 | 4.5 |
| cool/dark | accent: muted text / default surface | 8.379 | 4.5 |
| cool/dark | accent: muted text / muted surface | 7.076 | 4.5 |
| cool/dark | accent: text on emphasis | 6.433 | 4.5 |
| cool/dark | accent: default control edge | 5.396 | 3 |
| cool/dark | accent: muted control edge | 5.396 | 3 |
| cool/dark | accent: emphasis control edge | 5.396 | 3 |
| cool/dark | success: default text / default surface | 13.653 | 4.5 |
| cool/dark | success: default text / muted surface | 11.448 | 4.5 |
| cool/dark | success: muted text / default surface | 9.370 | 4.5 |
| cool/dark | success: muted text / muted surface | 7.857 | 4.5 |
| cool/dark | success: text on emphasis | 6.652 | 4.5 |
| cool/dark | success: default control edge | 5.567 | 3 |
| cool/dark | success: muted control edge | 5.567 | 3 |
| cool/dark | success: emphasis control edge | 5.567 | 3 |
| cool/dark | attention: default text / default surface | 14.568 | 4.5 |
| cool/dark | attention: default text / muted surface | 12.976 | 4.5 |
| cool/dark | attention: muted text / default surface | 11.525 | 4.5 |
| cool/dark | attention: muted text / muted surface | 10.265 | 4.5 |
| cool/dark | attention: text on emphasis | 13.306 | 4.5 |
| cool/dark | attention: default control edge | 3.376 | 3 |
| cool/dark | attention: muted control edge | 3.376 | 3 |
| cool/dark | attention: emphasis control edge | 3.376 | 3 |
| cool/dark | danger: default text / default surface | 13.200 | 4.5 |
| cool/dark | danger: default text / muted surface | 11.950 | 4.5 |
| cool/dark | danger: muted text / default surface | 8.557 | 4.5 |
| cool/dark | danger: muted text / muted surface | 7.747 | 4.5 |
| cool/dark | danger: text on emphasis | 5.366 | 4.5 |
| cool/dark | danger: default control edge | 3.357 | 3 |
| cool/dark | danger: muted control edge | 3.357 | 3 |
| cool/dark | danger: emphasis control edge | 3.357 | 3 |
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
| warm/light | neutral: default text / default surface | 15.476 | 4.5 |
| warm/light | neutral: default text / muted surface | 14.325 | 4.5 |
| warm/light | neutral: muted text / default surface | 5.733 | 4.5 |
| warm/light | neutral: muted text / muted surface | 5.307 | 4.5 |
| warm/light | neutral: text on emphasis | 6.287 | 4.5 |
| warm/light | neutral: default control edge | 3.669 | 3 |
| warm/light | neutral: muted control edge | 3.669 | 3 |
| warm/light | neutral: emphasis control edge | 3.669 | 3 |
| warm/light | accent: default text / default surface | 11.997 | 4.5 |
| warm/light | accent: default text / muted surface | 11.259 | 4.5 |
| warm/light | accent: muted text / default surface | 11.997 | 4.5 |
| warm/light | accent: muted text / muted surface | 11.259 | 4.5 |
| warm/light | accent: text on emphasis | 6.433 | 4.5 |
| warm/light | accent: default control edge | 3.450 | 3 |
| warm/light | accent: muted control edge | 3.450 | 3 |
| warm/light | accent: emphasis control edge | 3.450 | 3 |
| warm/light | success: default text / default surface | 11.718 | 4.5 |
| warm/light | success: default text / muted surface | 10.996 | 4.5 |
| warm/light | success: muted text / default surface | 11.718 | 4.5 |
| warm/light | success: muted text / muted surface | 10.996 | 4.5 |
| warm/light | success: text on emphasis | 6.652 | 4.5 |
| warm/light | success: default control edge | 3.376 | 3 |
| warm/light | success: muted control edge | 3.376 | 3 |
| warm/light | success: emphasis control edge | 3.376 | 3 |
| warm/light | attention: default text / default surface | 10.933 | 4.5 |
| warm/light | attention: default text / muted surface | 10.470 | 4.5 |
| warm/light | attention: muted text / default surface | 10.933 | 4.5 |
| warm/light | attention: muted text / muted surface | 10.470 | 4.5 |
| warm/light | attention: text on emphasis | 13.306 | 4.5 |
| warm/light | attention: default control edge | 4.433 | 3 |
| warm/light | attention: muted control edge | 4.433 | 3 |
| warm/light | attention: emphasis control edge | 4.433 | 3 |
| warm/light | danger: default text / default surface | 11.784 | 4.5 |
| warm/light | danger: default text / muted surface | 10.842 | 4.5 |
| warm/light | danger: muted text / default surface | 4.939 | 4.5 |
| warm/light | danger: muted text / muted surface | 4.544 | 4.5 |
| warm/light | danger: text on emphasis | 5.366 | 4.5 |
| warm/light | danger: default control edge | 3.709 | 3 |
| warm/light | danger: muted control edge | 3.709 | 3 |
| warm/light | danger: emphasis control edge | 3.709 | 3 |
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
| warm/dark | neutral: default text / default surface | 15.145 | 4.5 |
| warm/dark | neutral: default text / muted surface | 13.707 | 4.5 |
| warm/dark | neutral: muted text / default surface | 8.392 | 4.5 |
| warm/dark | neutral: muted text / muted surface | 7.595 | 4.5 |
| warm/dark | neutral: text on emphasis | 5.179 | 4.5 |
| warm/dark | neutral: default control edge | 3.398 | 3 |
| warm/dark | neutral: muted control edge | 3.398 | 3 |
| warm/dark | neutral: emphasis control edge | 3.398 | 3 |
| warm/dark | accent: default text / default surface | 13.468 | 4.5 |
| warm/dark | accent: default text / muted surface | 11.375 | 4.5 |
| warm/dark | accent: muted text / default surface | 8.379 | 4.5 |
| warm/dark | accent: muted text / muted surface | 7.076 | 4.5 |
| warm/dark | accent: text on emphasis | 6.433 | 4.5 |
| warm/dark | accent: default control edge | 5.396 | 3 |
| warm/dark | accent: muted control edge | 5.396 | 3 |
| warm/dark | accent: emphasis control edge | 5.396 | 3 |
| warm/dark | success: default text / default surface | 13.653 | 4.5 |
| warm/dark | success: default text / muted surface | 11.448 | 4.5 |
| warm/dark | success: muted text / default surface | 9.370 | 4.5 |
| warm/dark | success: muted text / muted surface | 7.857 | 4.5 |
| warm/dark | success: text on emphasis | 6.652 | 4.5 |
| warm/dark | success: default control edge | 5.567 | 3 |
| warm/dark | success: muted control edge | 5.567 | 3 |
| warm/dark | success: emphasis control edge | 5.567 | 3 |
| warm/dark | attention: default text / default surface | 14.568 | 4.5 |
| warm/dark | attention: default text / muted surface | 12.976 | 4.5 |
| warm/dark | attention: muted text / default surface | 11.525 | 4.5 |
| warm/dark | attention: muted text / muted surface | 10.265 | 4.5 |
| warm/dark | attention: text on emphasis | 13.306 | 4.5 |
| warm/dark | attention: default control edge | 3.376 | 3 |
| warm/dark | attention: muted control edge | 3.376 | 3 |
| warm/dark | attention: emphasis control edge | 3.376 | 3 |
| warm/dark | danger: default text / default surface | 13.200 | 4.5 |
| warm/dark | danger: default text / muted surface | 11.950 | 4.5 |
| warm/dark | danger: muted text / default surface | 8.557 | 4.5 |
| warm/dark | danger: muted text / muted surface | 7.747 | 4.5 |
| warm/dark | danger: text on emphasis | 5.366 | 4.5 |
| warm/dark | danger: default control edge | 3.357 | 3 |
| warm/dark | danger: muted control edge | 3.357 | 3 |
| warm/dark | danger: emphasis control edge | 3.357 | 3 |
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
| pure/light | neutral: default text / default surface | 15.476 | 4.5 |
| pure/light | neutral: default text / muted surface | 14.297 | 4.5 |
| pure/light | neutral: muted text / default surface | 5.621 | 4.5 |
| pure/light | neutral: muted text / muted surface | 5.193 | 4.5 |
| pure/light | neutral: text on emphasis | 6.327 | 4.5 |
| pure/light | neutral: default control edge | 3.601 | 3 |
| pure/light | neutral: muted control edge | 3.601 | 3 |
| pure/light | neutral: emphasis control edge | 3.601 | 3 |
| pure/light | accent: default text / default surface | 11.997 | 4.5 |
| pure/light | accent: default text / muted surface | 11.259 | 4.5 |
| pure/light | accent: muted text / default surface | 11.997 | 4.5 |
| pure/light | accent: muted text / muted surface | 11.259 | 4.5 |
| pure/light | accent: text on emphasis | 6.433 | 4.5 |
| pure/light | accent: default control edge | 3.450 | 3 |
| pure/light | accent: muted control edge | 3.450 | 3 |
| pure/light | accent: emphasis control edge | 3.450 | 3 |
| pure/light | success: default text / default surface | 11.718 | 4.5 |
| pure/light | success: default text / muted surface | 10.996 | 4.5 |
| pure/light | success: muted text / default surface | 11.718 | 4.5 |
| pure/light | success: muted text / muted surface | 10.996 | 4.5 |
| pure/light | success: text on emphasis | 6.652 | 4.5 |
| pure/light | success: default control edge | 3.376 | 3 |
| pure/light | success: muted control edge | 3.376 | 3 |
| pure/light | success: emphasis control edge | 3.376 | 3 |
| pure/light | attention: default text / default surface | 10.933 | 4.5 |
| pure/light | attention: default text / muted surface | 10.470 | 4.5 |
| pure/light | attention: muted text / default surface | 10.933 | 4.5 |
| pure/light | attention: muted text / muted surface | 10.470 | 4.5 |
| pure/light | attention: text on emphasis | 13.306 | 4.5 |
| pure/light | attention: default control edge | 4.433 | 3 |
| pure/light | attention: muted control edge | 4.433 | 3 |
| pure/light | attention: emphasis control edge | 4.433 | 3 |
| pure/light | danger: default text / default surface | 11.784 | 4.5 |
| pure/light | danger: default text / muted surface | 10.842 | 4.5 |
| pure/light | danger: muted text / default surface | 4.939 | 4.5 |
| pure/light | danger: muted text / muted surface | 4.544 | 4.5 |
| pure/light | danger: text on emphasis | 5.366 | 4.5 |
| pure/light | danger: default control edge | 3.709 | 3 |
| pure/light | danger: muted control edge | 3.709 | 3 |
| pure/light | danger: emphasis control edge | 3.709 | 3 |
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
| pure/dark | neutral: default text / default surface | 15.154 | 4.5 |
| pure/dark | neutral: default text / muted surface | 13.713 | 4.5 |
| pure/dark | neutral: muted text / default surface | 8.480 | 4.5 |
| pure/dark | neutral: muted text / muted surface | 7.673 | 4.5 |
| pure/dark | neutral: text on emphasis | 5.099 | 4.5 |
| pure/dark | neutral: default control edge | 3.448 | 3 |
| pure/dark | neutral: muted control edge | 3.448 | 3 |
| pure/dark | neutral: emphasis control edge | 3.448 | 3 |
| pure/dark | accent: default text / default surface | 13.468 | 4.5 |
| pure/dark | accent: default text / muted surface | 11.375 | 4.5 |
| pure/dark | accent: muted text / default surface | 8.379 | 4.5 |
| pure/dark | accent: muted text / muted surface | 7.076 | 4.5 |
| pure/dark | accent: text on emphasis | 6.433 | 4.5 |
| pure/dark | accent: default control edge | 5.396 | 3 |
| pure/dark | accent: muted control edge | 5.396 | 3 |
| pure/dark | accent: emphasis control edge | 5.396 | 3 |
| pure/dark | success: default text / default surface | 13.653 | 4.5 |
| pure/dark | success: default text / muted surface | 11.448 | 4.5 |
| pure/dark | success: muted text / default surface | 9.370 | 4.5 |
| pure/dark | success: muted text / muted surface | 7.857 | 4.5 |
| pure/dark | success: text on emphasis | 6.652 | 4.5 |
| pure/dark | success: default control edge | 5.567 | 3 |
| pure/dark | success: muted control edge | 5.567 | 3 |
| pure/dark | success: emphasis control edge | 5.567 | 3 |
| pure/dark | attention: default text / default surface | 14.568 | 4.5 |
| pure/dark | attention: default text / muted surface | 12.976 | 4.5 |
| pure/dark | attention: muted text / default surface | 11.525 | 4.5 |
| pure/dark | attention: muted text / muted surface | 10.265 | 4.5 |
| pure/dark | attention: text on emphasis | 13.306 | 4.5 |
| pure/dark | attention: default control edge | 3.376 | 3 |
| pure/dark | attention: muted control edge | 3.376 | 3 |
| pure/dark | attention: emphasis control edge | 3.376 | 3 |
| pure/dark | danger: default text / default surface | 13.200 | 4.5 |
| pure/dark | danger: default text / muted surface | 11.950 | 4.5 |
| pure/dark | danger: muted text / default surface | 8.557 | 4.5 |
| pure/dark | danger: muted text / muted surface | 7.747 | 4.5 |
| pure/dark | danger: text on emphasis | 5.366 | 4.5 |
| pure/dark | danger: default control edge | 3.357 | 3 |
| pure/dark | danger: muted control edge | 3.357 | 3 |
| pure/dark | danger: emphasis control edge | 3.357 | 3 |
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

Audited `tokens.css` SHA-256: `a1af5205c673cedf0fe96061b9e6aaeb7a6fabc5af01fea75fc39a041b76bb90`.

From the kit root, set `DS_LOOP_SOURCE` to that checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit foundations/color/options/functional-roles/tokens.css
```

Exit status: `1`. Standard output, verbatim:

```text
  config: /Users/owais/Documents/GitHub/ds-kit/ds-loop.config.json

  ds-loop audit — ds-kit  ·  target: all  ·  live scan
  version git:c48ef043cf06   adapter css-custom-props@0.3.0   config b158c121
  14 rules run

  [MEDIUM] color/literal-duplicate-tokens
  │ 64 colour value(s) are declared by 315 different tokens
  │ where: #1c2024 <- --ds-color-functional-roles-cool-light-fg-default-neutral, --ds-color-functional-roles-cool-light-text-default; #60646c <- --ds-color-functional-roles-cool-light-fg-muted-neutral, --ds-color-functional-roles-cool-light-text-muted; #000000 <- --ds-color-functional-roles-cool-light-fg-emphasis-neutral, --ds-color-functional-roles-cool-light-fg-emphasis-accent, --ds-color-functional-roles-cool-light-fg-emphasis-success, --ds-color-functional-roles-cool-light-fg-emphasis-attention, --ds-color-functional-roles-cool-light-fg-emphasis-danger, --ds-color-functional-roles-cool-light-brand-on-fill, --ds-color-functional-roles-cool-dark-fg-emphasis-accent, --ds-color-functional-roles-cool-dark-fg-emphasis-success, --ds-color-functional-roles-cool-dark-fg-emphasis-attention, --ds-color-functional-roles-cool-dark-fg-emphasis-danger, --ds-color-functional-roles-cool-dark-brand-on-fill, --ds-color-functional-roles-warm-light-fg-emphasis-neutral, --ds-color-functional-roles-warm-light-fg-emphasis-accent, --ds-color-functional-roles-warm-light-fg-emphasis-success, --ds-color-functional-roles-warm-light-fg-emphasis-attention, --ds-color-functional-roles-warm-light-fg-emphasis-danger, --ds-color-functional-roles-warm-light-brand-on-fill, --ds-color-functional-roles-warm-dark-fg-emphasis-accent, --ds-color-functional-roles-warm-dark-fg-emphasis-success, --ds-color-functional-roles-warm-dark-fg-emphasis-attention, --ds-color-functional-roles-warm-dark-fg-emphasis-danger, --ds-color-functional-roles-warm-dark-brand-on-fill, --ds-color-functional-roles-pure-light-fg-emphasis-neutral, --ds-color-functional-roles-pure-light-fg-emphasis-accent, --ds-color-functional-roles-pure-light-fg-emphasis-success, --ds-color-functional-roles-pure-light-fg-emphasis-attention, --ds-color-functional-roles-pure-light-fg-emphasis-danger, --ds-color-functional-roles-pure-light-brand-on-fill, --ds-color-functional-roles-pure-dark-fg-emphasis-accent, --ds-color-functional-roles-pure-dark-fg-emphasis-success, --ds-color-functional-roles-pure-dark-fg-emphasis-attention, --ds-color-functional-roles-pure-dark-fg-emphasis-danger, --ds-color-functional-roles-pure-dark-brand-on-fill; #f0f0f3 <- --ds-color-functional-roles-cool-light-bg-muted-neutral, --ds-color-functional-roles-cool-light-surface-muted; #80838d <- --ds-color-functional-roles-cool-light-border-default-neutral, --ds-color-functional-roles-cool-light-border-muted-neutral, --ds-color-functional-roles-cool-light-border-emphasis-neutral, --ds-color-functional-roles-cool-light-border-control; #113264 <- --ds-color-functional-roles-cool-light-fg-default-accent, --ds-color-functional-roles-cool-light-fg-muted-accent, --ds-color-functional-roles-warm-light-fg-default-accent, --ds-color-functional-roles-warm-light-fg-muted-accent, --ds-color-functional-roles-pure-light-fg-default-accent, --ds-color-functional-roles-pure-light-fg-muted-accent
  │ risk:  The next person to change this colour changes one of the names and not the others, and the system carries two values for one decision.
  │ fix:   Keep one canonical token per value; make the rest var() aliases of it.

  1 findings — 0 blocking · 0 high · 1 medium · 0 low

  scope — what this audit read
    css-custom-props@0.3.0
      reads .css — custom-property declarations (--token: value) — not rule bodies, not at-rules
    every format in scope was read, every colour converted, every rule able to judge

  scorecard ratios  (a baseline for the next run, not a grade)
    literal-colors-per-distinct  4.177
    colors-per-distinct-in-scope 4.177
    ambiguous-share              0

  next
    decide on the rest                                                        nothing here is mechanically provable — all 1 findings state their choice on the fix line
    ds-loop scorecard foundations/color/options/functional-roles/tokens.css   pin these ratios as run 1 — a ratio only says something against a previous row
    ds-loop guard on                                                          report high-severity findings after each Claude Code edit (never blocks)
```

Standard error: empty.
<!-- audit:end -->
