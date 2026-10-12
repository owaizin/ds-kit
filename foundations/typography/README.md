# Typography

[compact-ui](options/compact-ui/README.md), [default-ui](options/default-ui/README.md), [editorial](options/editorial/README.md) each supply complete text styles. Choose one; use the selected option's spec and tokens for values.

## Application hierarchy

For operational screens, start with compact-ui when scanning density matters; prefer default-ui for a broader reading audience. Editorial belongs to long reading regions, not automatically to every form or table. Do not shrink text to recover space before simplifying structure.

A page title establishes location. A section heading separates a group. A row title identifies a record. They should not all use the next largest heading size. In compact-ui, map the page title to h1, section headings to h4, and row names to body with a heading weight. Keep semantic h1 → h2 → h3 nesting even when visual roles differ. A metric may use h2 size without becoming an HTML heading.

Keep related metadata at a stable body size with muted colour; use small text only for secondary information that remains readable. Use sentence case for ordinary labels. Uppercase tracking is a deliberately chosen category cue, not the default table header. Form inputs on narrow touch screens can use a project 1rem alias from an existing role even when desktop body is smaller; test platform zoom behavior.

## Composition and checks

Use the complete size, leading, weight and tracking tuple through project aliases. Give descriptions a reading-width cap while allowing the section/table to remain wider. Use tabular numerals and end alignment for comparable quantities; keep identifiers start aligned. Break long prose and IDs where needed; do not silently truncate the only copy of essential data.

Render a long title, a two-line row identity, error help, fallback fonts and 200% text scaling. Labels and actions must retain room to wrap. Contrast checks do not certify small-text legibility.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
