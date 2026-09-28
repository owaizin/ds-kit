# radius: sharp

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/radius.md. Record the adopted revision.

## 2. Overview

sharp uses 0/2/4px corners for small controls, cards and large panels. Full rounding is reserved for pills.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Dense operational tools with rectangular grouping. Native mappings are reference data, not a platform implementation.

## 6. States

- Small: 28–40px controls; medium: cards and 40–56px controls; large: larger panels. These are starting roles, not automatic size rules.
- Nested corners need a radius consistent with their inset; do not blindly repeat the outer radius.

## 7. Code example

```css
.example-card { border-radius: var(--radius-card, 8px); }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
