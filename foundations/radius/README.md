# Radius

Options: [sharp, soft and round](options/). Select one geometry language and its existing values.

## Geometry by role

Give small controls the small radius, independent panels the medium radius, and major freestanding surfaces the large radius only when useful. For soft, this means selecting its shipped small/medium/large roles rather than assigning large corners everywhere. Full rounding belongs to pills, avatars or deliberately capsule-shaped controls.

A badge can be softly rounded without making every button a pill. A table has one outer silhouette; internal rows do not need individual rounded boxes. For closely nested rounded surfaces with an even inset, use `outer radius = inner radius + inset`. With padding greater than 24px, treat the layers as independent surfaces rather than forcing concentric geometry; asymmetric insets also need optical judgment. Map the relationship through project aliases while preserving the selected component tokens. Clip only the painted surface that needs clipping, not its focusable parent.

## Checks

Inspect adjacent input/button groups, first/last table rows and nested panels. Focus outlines must remain visible outside the silhouette. Changing radius should not change target size, spacing or control hierarchy. A radius token is not a reason to create a card.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
