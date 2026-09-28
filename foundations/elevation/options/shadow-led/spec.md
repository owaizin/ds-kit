# elevation: shadow-led

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/elevation.md. Record the adopted revision.

## 2. Overview

Two shadow lobes separate a near contact edge from a broad ambient shadow.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Choose for raised surfaces, overlays and modal containers with explicit ordering. Native mappings are reference data, not a platform implementation.

## 6. States

- Raised: local cards; overlay: menus/popovers; modal: a dialog container. These values do not supply dialog semantics or focus management.
- Native shadow arrays describe intent; platform APIs differ in spread, clipping and multiple-shadow support. Translate and render-test them.

## 7. Code example

```css
.example-overlay { box-shadow: var(--shadow-overlay, none); border: var(--surface-edge-width, 1px) solid var(--surface-edge, #777777); }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
