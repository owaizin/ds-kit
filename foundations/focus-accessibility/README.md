# Focus and accessibility

Options: [visible-ring and brand-blue](options/), including declared light/dark contrast pairs and the kit's 44px target minimum.

## Accessibility is part of the composition

Use native links, buttons, labelled inputs and table/description-list semantics. Keep DOM order consistent with visual reading order. A visual section heading can use a small type role while remaining an h2. Mark decorative icons hidden from assistive technology; give icon-only controls an explicit accessible name.

Keep the focus outline outside the control with space to avoid clipping. Selection and focus are different states: show active navigation with a persistent marker/background and an appropriate `aria-current`, while keyboard focus has its own ring. Do not suppress an outline without providing the complete replacement.

Help and errors belong beside their input and connect through `aria-describedby`; invalid fields expose `aria-invalid`. Preserve values after failure. Save/filter results need a visible and appropriately announced outcome. Narrow-screen navigation must remain reachable even when the desktop sidebar is hidden.

## Checks

Tab through actual controls, open and dismiss overlays, and verify focus restoration. Check the ring against the consumer's real surfaces, forced colours, OS reduced motion, 200% text scaling and narrow viewports. Source examples and token-pair checks do not establish WCAG conformance or screen-reader usability. The kit target minimum is a product recommendation; do not misrepresent it as a universal standards threshold.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
