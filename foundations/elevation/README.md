# Elevation

Options: [shadow-led and border-led](options/). See each spec for values and native limits.

## Separate by importance

Prefer whitespace/dividers for static page sections. A raised card needs an actual grouping reason. Use stronger elevation for temporary layers above content, such as a menu or dialog, rather than every tile in a dashboard. If using border-led, ensure a panel's perimeter is distinguishable without outlining every internal row equally strongly.

Avoid combining high shadow, strong edge and tinted background on all surfaces. Pick the primary cue for that region. Related summary values can occupy one divided strip; the main table can be an unraised region. A selected record needs a selection cue, not automatically a larger shadow.

## Checks

Review light and dark scenes and a panel sitting on each supported canvas. Shadows are not dependable boundaries in dark/forced-colour environments. Overlays still need stacking, focus, backdrop and dismiss behavior. CSS shadow values do not map automatically to native rendering; keep the existing platform contract.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
