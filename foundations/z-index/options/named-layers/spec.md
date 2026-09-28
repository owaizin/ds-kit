# z-index: named-layers

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/z-index.md. Record the adopted revision.

## 2. Overview

Gaps of 100 leave room for local ordering within a shared stacking context.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Use when overlays share a known root and a documented portal policy. Native mappings are reference data, not a platform implementation.

## 6. States

- Base < sticky < dropdown < overlay < modal < toast < tooltip keeps open menus above sticky headers in the shared root stack. A dropdown inside a modal must stay in the modal context.
- Keep tooltips noninteractive and do not let toasts obscure dialog controls. Top-layer popovers/dialogs do not participate in this numeric scale.

## 7. Code example

```css
.example-toast { position: fixed; z-index: var(--z-toast, 500); }
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
