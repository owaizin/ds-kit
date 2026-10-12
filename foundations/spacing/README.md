# Spacing

Choose [base-4](options/base-4/README.md) or [base-8](options/base-8/README.md). Their density slots are alias candidates, not touch-target dimensions.

## Rhythm comes from relationships

Use smaller gaps inside a unit than between units. A label, input and help message form one unit; a set of fields forms a group; sections form a page. Equal padding everywhere obscures those relationships.

An original base-4 application mapping: step 2 between label/control, step 3–4 between related controls, step 6 for region inset, step 8 for section gaps and step 12 for major form divisions. On narrow screens step 4 can serve the page gutter. The mapping selects already shipped values; it does not add a scale. Re-map the roles when choosing base-8 instead of referring to base-4 step names.

Align header, filters and rows to the same page rail. Give rows consistent block insets and align multiline cells to the top. Let badges and inline metadata use a tighter rhythm than page sections. A roomy page can still contain compact rows.

## Density and checks

Switch component insets/group gaps through project aliases. Never multiply every primitive by a density factor or shrink body text and hit areas as a side effect. Keep controls at the selected focus target minimum (the kit proposes 44px) while allowing visual content to sit inside that area.

Check wrapped rows, long labels, helper/error text and narrow action groups. Gaps should make the grouping understandable without requiring a border around every group. Use logical inset properties for direction-aware layouts.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
