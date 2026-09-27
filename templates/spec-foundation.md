# Foundation: control spacing — Example DS

Fictional filled example for one foundation. This proposal is not a supplied scale or completed implementation.

## 1. Metadata

Status: proposed. Owner: foundations maintainer, person unassigned. Canonical source: `src/styles/aliases.css`; revision and last review: not checked.

## 2. Overview

Give the existing button a maintainable icon-to-label gap. Use for internal control spacing, not page gutters or text line-height; other layout spacing is outside scope.

## 3. Anatomy

Upstream token → project alias with fallback → component consumption. Arrows mean CSS value resolution, not migration order. Preserve the project's existing four-layer model when mapping this pattern.

## 4. Tokens used

Proposed role: `--ds-control-gap`; upstream: `--ds-primitive-space-2`; fallback: `0.5rem`. Actual declarations/use sites: not checked. Replace with source/audit file:line evidence before calling these observed tokens.

## 5. Props/API

CSS consumption API: `var(--ds-control-gap)`. No component props apply. Keep the upstream unit; rem follows the consumer's root size. Record overrides and exceptions in the project decision.

## 6. States

Default density proposed; compact density remains unresolved. No light/dark override proposed. Interaction states belong to the component contract. Computed values, zoom, long labels, and propagation after alias edits: not checked.

## 7. Code example

```css
:root { --ds-control-gap: var(--ds-primitive-space-2, 0.5rem); }
.example-button { gap: var(--ds-control-gap); }
```

## 8. Cross-references

Project destinations: `specs/decisions/control-spacing.md`, `specs/components/atoms/button.md`, `specs/completion/control-spacing.md`. Link the rendered reference when available. Next task: establish the baseline and review supported densities before applying the proposal.
