# Iconography

This foundation provides composition guidance, not an icon asset library or a new token option. Choose an appropriately licensed family in the consuming product and retain its notices.

## Icons have specific jobs

Use an icon when it aids navigation recognition, clarifies state or marks an action. Text labels remain useful for unfamiliar actions. Do not decorate every metric/heading with an unrelated glyph or substitute emoji for a consistent interface family.

Use one drawing language (stroke or filled, consistent weight and optical scale) within a control family. A project starting mapping can use the body line box for inline icons and a modestly larger box for navigation. These are relative roles, not values imported from a commercial icon set.

Match icon stroke to adjacent text weight: use 1.5px beside regular (400) text and 2px beside semibold (600) text. Keep one stroke weight within each icon set. Check the stroke at its rendered size; SVG viewBox scaling can change its apparent thickness. The examples preserve 2px strokes on their navigation shapes with `vector-effect: non-scaling-stroke`.

Let glyphs stay `flex-shrink: 0`; align their box to the control's text line. The **control**, not the glyph, meets the selected hit-area minimum. Filled and outlined icons may need optical adjustment; equal CSS dimensions do not ensure equal visual weight.

## Semantics and checks

Hide decorative icons with `aria-hidden="true"`. Name an icon-only button by its action, for example “Close navigation”, and give repeated row actions a record-specific name. Tooltips supplement rather than supply the sole name. A status icon needs a label; colour and icon alone can be ambiguous.

Check alignment with wrapped labels, dark mode, focus and fallback rendering. Avoid loading external icons just for a specimen. The [application examples](../../specimens/application-ui/index.html) use independently drawn simple marks and text identities; they are not a recommended general icon library.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
