# focus-accessibility: brand-blue

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/focus-accessibility.md. Record the adopted revision.

## 2. Overview

Two independently selected brand blues each pass 3:1 against the declared light and dark surfaces. A 2px outline and 2px offset expose the indicator outside the control.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Use where a custom ring is needed and all adjacent surfaces have been measured. Native mappings are reference data, not a platform implementation.

## 6. States

- Use :focus-visible; never remove the default outline without a visible replacement. Leave room for the ring and check overflow clipping.
- Use native controls and natural Tab order. Preserve a system-colour outline in forced-colors mode. Minimum target is a kit choice, not a claim that every WCAG target must be 44px.
- No focus animation is required. Respect reduced-motion preferences elsewhere; use platform focus APIs on native.

## 7. Code example

```css
.example-control:focus-visible { outline: var(--focus-width,2px) solid var(--focus-color,#3979c6); outline-offset: var(--focus-offset,2px); }
@media (forced-colors: active) { .example-control:focus-visible { outline: 2px solid Highlight; } }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
