# Component: Button — Example DS

Fictional filled example for an existing component. Replace paths and proposals with source evidence; do not create a component to satisfy this template.

## 1. Metadata

Status: proposed contract. Owner: component maintainer, person unassigned. Source: `src/components/Button.tsx`; revision and last review: not checked.

## 2. Overview

Trigger an action in the record editor; use a link for navigation. Label actions with a verb, such as “Save record”; allow long translated labels.

## 3. Anatomy

Native button root, visible label, optional leading icon, optional pending indicator. Icon-only usage needs an accessible name; preserve native keyboard semantics.

## 4. Tokens used

Proposed aliases: `--ds-control-gap` and `--ds-control-radius`. Actual use sites and upstream mappings: not checked. Populate this section from source or audit evidence, including file:line; do not list proposed tokens as observed usage.

## 5. Props/API

Proposed: `children`, `type` (default `button`), `disabled`, `pending`, `onClick`; native attributes and ref forwarded. Confirm against the existing API before adopting.

## 6. States

Default, hover, active, focus-visible, disabled, loading/pending. Error belongs to the associated form; empty is not applicable to this button. Verify Enter/Space activation, focus visibility, contrast, zoom, long labels, and duplicate-submission prevention. All checks remain not checked.

## 7. Code example

Illustrative call to verify against the existing implementation:

```tsx
<Button type="submit" pending={saving}>Save record</Button>
```

## 8. Cross-references

Project destinations: `specs/foundations/control-spacing.md`, `specs/decisions/control-spacing.md`, `specs/completion/control-spacing.md`. Link the actual Storybook story if one exists; otherwise link the team's rendered reference. Next task: verify the API and states in a real consumer. Retrieval and rendered review: not checked.
