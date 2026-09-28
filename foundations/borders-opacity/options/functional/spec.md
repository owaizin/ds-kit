# borders-opacity: functional

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/borders-opacity.md. Record the adopted revision.

## 2. Overview

Small width steps distinguish separators, control boundaries and selected emphasis. Opacity budgets are separate from text colour.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Use with explicit role assignments and contrast-tested surfaces. Native mappings are reference data, not a platform implementation.

## 6. States

- Disabled opacity is for truly inactive controls, not read-only content or labels users still need to read.
- Overlay opacity assumes a separate scrim layer; applying opacity to the modal would dim its contents too.

## 7. Code example

```css
.example-divider { border-block-start: var(--divider-width, 1px) var(--divider-style, solid) var(--divider-color, #777777); }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
