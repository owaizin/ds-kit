# Colour

Choose a palette and a semantic vocabulary from [options](options/). functional-roles and simple-roles include cool/warm/pure neutrals, light/dark variants and declared contrast pairs. Preserve the source notices and theme behavior.

## Assign colour a limited set of jobs

Use neutral surfaces and text for most information. Accent identifies the primary action, selected navigation and links. Success/attention/danger communicate meaningful state with text or a symbol as well as colour. A row with a status badge does not need its entire background tinted.

Define project roles for canvas, surface, text, secondary text, divider, control edge, selected background and primary fill/on-fill. Use the option's checked text/fill pairs. Keep supporting regions quieter by emphasis and spacing rather than reducing opacity on their entire contents.

The shipped functional `border-muted` alias has a contrast obligation and is intentionally strong. Decorative row/card dividers need a separate, independently selected alias, for example `--app-divider: var(--ds-neutral-6)` when adopting the Radix-based functional option. This is a project recipe, not a promised accessible control boundary. Use the stronger checked edge for inputs/controls; preserve their contrast against the actual surrounding surface. Do not weaken every `--ds-border-*` primitive to make a page quieter.

## Theme and checks

Suppress transitions during a theme swap so surface colours snap together. Before changing the theme, inject `*,*::before,*::after{transition:none !important}`; apply the new theme, read `document.body.offsetHeight` to flush styles, then remove the override after the next paint using two nested `requestAnimationFrame` callbacks. Apply this around manual or OS-driven changes in products that support them. Restore normal hover/state transitions afterwards; rapid flips must not leave suppression active.

Use explicit surface roles in dark mode; don't invert the whole screen or keep light-theme shadows as its only separation. Low-emphasis borders and badges need theme-specific inspection. Keep disabled text distinct from secondary but available text. Never convey an error, active tab or status only through a hue shift.

Check actual computed foreground/background pairs, including hover, filled controls, soft badges and focus rings. Do not use a link/text role as a primary button's hover fill: it may map to a pale colour in dark mode while the on-fill text remains white. Preserve a checked fill/on-fill pair or validate a separate hover pair. Existing declared-pair checks cover their named pairs, not arbitrary combinations or alpha composites. Review the same composition in both themes.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
