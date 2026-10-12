# Borders and opacity

Option: [functional](options/functional/README.md). Its token names describe thickness/style and opacity budgets; colour belongs to the selected colour vocabulary.

## Distinguish separators from affordances

A row divider, input perimeter, selected marker and focus outline have different jobs. Use a hairline for ordinary separators, a stronger treatment for important state, and dashed outlines only when they indicate a distinct affordance such as an upload target. Decorative edges can be quieter than control edges. [Colour guidance](../color/README.md) explains the separate alias mapping.

In tables, prefer horizontal row separation unless vertical lines materially aid the comparison. In forms, section whitespace and a divider can replace nested cards. Do not surround every labelled unit with a perimeter.

Use opacity for overlays or carefully scoped state layers, not as the only way to mute an entire region of readable text. A disabled opacity token is a starting point for the actual component, not a promise about its computed contrast. Keep pending operations labelled and errors readable.

## Checks

Inspect the composited result on both supported surfaces/themes. Alpha colours depend on their background; token checks alone cannot certify them. Control boundaries, selected indicators and keyboard focus remain identifiable in forced-colours mode. Avoid clipped double borders on grouped controls.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
