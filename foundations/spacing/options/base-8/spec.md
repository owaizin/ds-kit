# Spacing: base-8

## 1. Metadata

Status: drafted option; owner unassigned. Source: ds-kit `spacing/base-8`; record selected kit revision/reviewer on adoption. Destination: `specs/foundations/spacing.md`.

## 2. Overview

Coarse 8-point spacing for roomier layouts. Use the [option rationale](README.md#when-to-use--when-not) to judge fit; preserving an existing coherent scale can be the better decision.

## 3. Anatomy

Literal step → project alias slot → component gap/padding. Arrows indicate value consumption. Comfortable/compact are alias mappings to unchanged primitives; not global multipliers. Preserve the existing four-layer model.

## 4. Tokens used

[Values](README.md#values) lists 13 `--ds-space-*` declarations; [tokens.json](tokens.json) records matching rem values, sources, ordered scale and density mappings. Actual project consumers: not checked. Update relative links to installed source paths when copying this spec.

## 5. Props/API

Import only one spacing option. Map project aliases to the selected step for each density. Native consumers transform rem into logical units with their content-scaling policy. Token values do not define accessible control dimensions.

## 6. States

Review comfortable/compact layouts with wrapped text, icons, empty/loading/error content and text scaling. Keep touch targets independent of visual padding. Rendered states and reviewer: not checked/unassigned.

## 7. Code example

Illustrative project alias mapping outside the layer-1 stylesheet:

```css
:root { --app-group-gap: var(--ds-space-4); }
[data-density="compact"] { --app-group-gap: var(--ds-space-3); }
.group { gap: var(--app-group-gap); }
```

## 8. Cross-references

[Source, density table and actual audit](README.md); [JSON](tokens.json); project decision and rendered consumer/story: not yet recorded. Completion records remaining gaps and migration boundaries; token checks do not establish product fitness.
