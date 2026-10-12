# Foundations

22 options across ten categories. Each option has a README, CSS tokens, matching JSON and an eight-section spec. Colour uses one CSS file per neutral instead of a combined file.

| Foundation | Options |
|---|---|
| [Typography](typography/options/) | compact-ui, default-ui, editorial |
| [Spacing](spacing/options/) | base-4, base-8 |
| [Colour](color/options/) | radix-12-step, tailwind-11-step, functional-roles, simple-roles |
| [Radius](radius/options/) | sharp, soft, round |
| [Elevation](elevation/options/) | shadow-led, border-led |
| [Motion](motion/options/) | productive, expressive |
| [Z-index](z-index/options/) | named-layers |
| [Breakpoints/grid](breakpoints-grid/options/) | content-first, app-shell |
| [Borders/opacity](borders-opacity/options/) | functional |
| [Focus/accessibility](focus-accessibility/options/) | visible-ring, brand-blue |
| [Iconography](iconography/README.md) | Authored usage guidance; no asset/token option |
| [Layout/composition](layout-composition/README.md) | Composition roles and responsive/state guidance; no token option |

Use [specimens](../specimens/index.html) to inspect, compare and try the options. Record adoption decisions in the project's own documentation. Current-project comparisons remain limited to extracted typography, spacing and colour values.

When cataloging these sources, follow the [registry guidelines](../docs/registry-guidelines.md): preserve option provenance and distinguish authored guidance from token options and component APIs.

## Compose an application

Read [layout and composition](layout-composition/README.md) before assembling a screen, then the relevant [recipe](../patterns/README.md) and foundation usage guides. Each guide connects the existing options to hierarchy, density, responsive behavior and rendered checks. The options still supply values and provenance; recipes assign them product jobs. [Original screens and validation](../specimens/application-ui/README.md).
