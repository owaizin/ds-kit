# breakpoints-grid: content-first

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/breakpoints-grid.md. Record the adopted revision.

## 2. Overview

Content cards start near 18rem; breakpoints add columns only after allowing gaps and gutters.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Start here, then move breakpoints where real content stops fitting. Native mappings are reference data, not a platform implementation.

## 6. States

- Resolve width from the viewport or an explicitly chosen container, never from device names. The specimen simulates a viewport in a scrollable region; its inner grid retains the maximum content width.
- Media queries below repeat numeric thresholds intentionally: var() is invalid there. Generate them from JSON to avoid drift.

## 7. Code example

```css
.example-grid { display:grid; grid-template-columns:repeat(1,minmax(0,1fr)); gap:var(--grid-gap,1rem); }
@media (min-width:40rem) { .example-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (min-width:64rem) { .example-grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
@media (min-width:88rem) { .example-grid { grid-template-columns:repeat(4,minmax(0,1fr)); } }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
