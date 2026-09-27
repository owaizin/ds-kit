# Colour: simple-roles

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/color.md. Record kit revision and chosen neutral/mode mappings.

## 2. Overview

Role vocabulary separates content, surfaces, edges and intent. See README for sources and fit.

## 3. Anatomy

Upstream literal → project alias with fallback → component consumer. This denotes value consumption, not organizational ownership.

## 4. Tokens used

[JSON](tokens.json) and the three neutral CSS files contain matching palette values and alias references. Ship one neutral file; it contains both modes. Keep step jobs intact; the example preview map is not the complete project contract.

## 5. Props/API

Import one colour option. Map the chosen variant to project aliases. Resolve JSON var() chains before passing hex strings to native color props. CSS follows the OS theme unless data-theme explicitly selects light or dark. No JavaScript theme manager or component is supplied.

## 6. States

Check light/dark, focus, hover, pressed, error and text scaling in real consumers. Declared contrast pairs are measured; arbitrary pairs and full accessibility are unverified. Use status labels in addition to color.

## 7. Code example

```css
:root { --color-text: var(--ds-text-default, #1c2024); }
[data-theme="dark"] { --color-text: var(--ds-text-default, #edeef0); }
p { color: var(--color-text, #202020); }
```

## 8. Cross-references

[Values, derivation, pairs and audit](README.md); [specimens](../../../../specimens/index.html). Project decision, actual consumers and rendered verification remain the adopting team's record.
