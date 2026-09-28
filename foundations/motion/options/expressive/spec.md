# motion: expressive

## 1. Metadata

Draft option; owner/reviewer unassigned. Destination: specs/foundations/motion.md. Record the adopted revision.

## 2. Overview

Longer transitions for infrequent, deliberate state changes.

## 3. Anatomy

Upstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.

## 4. Tokens used

[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).

## 5. Props/API

Choose one timing character. Carbon informs the productive/expressive distinction only; these numbers and curves are independently selected. Native mappings are reference data, not a platform implementation.

## 6. States

- tokens.css sets all duration tokens to 0ms and travel to 0rem under prefers-reduced-motion: reduce. Consumers must use these tokens, not cached durations.
- Only enable nonessential transforms in prefers-reduced-motion: no-preference. State updates still occur when duration is zero. Use platform accessibility preferences on native; do not rely on animationend callbacks to finish work.

## 7. Code example

```css
/* Motion is opt-in; the base state updates immediately. */
@media (prefers-reduced-motion: no-preference) {
  .example-item { transition: transform var(--motion-standard, 160ms) var(--motion-enter, ease-out); }
}
```

## 8. Cross-references

[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.
