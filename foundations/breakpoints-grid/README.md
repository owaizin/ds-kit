# Breakpoints and grid

Options: [content-first and app-shell](options/). Select based on the product's reading/task structure, not device names.

## Size the available work area

Subtract persistent navigation and gutters before choosing content columns. A wide browser may still have a narrow form beside a sidebar. Cap form/prose measure using the type option; let tables and useful comparison regions occupy the remaining width.

Use one-column content first. Introduce paired fields only when their labels/values fit; introduce an explanatory aside when the main fields retain enough room. A detail view's secondary activity column should collapse below its primary content. Equal-width card grids are suitable for equivalent objects, not automatically for all dashboard regions.

Use `minmax(0, 1fr)` and `min-width: 0` so long values wrap within tracks. Media queries use resolved literal thresholds from the selected option: CSS `var()` does not resolve inside ordinary media-query conditions. Document a content-driven exception if the selected threshold does not fit.

## Checks

At 375px and 320px, the document should fit horizontally. Local table/tab overflow is allowed when labelled/reachable and necessary to the task. Check the selected breakpoint on both sides, expanded navigation and 200% zoom. Reflow must retain access to record identity, status and actions; hiding columns alone is incomplete.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
