# Component: Button — Example DS

Eight-section filled example for an **existing** component; all paths and facts here are fictional. Replace with evidence from the consumer. Add sections only when the actual contract needs them.

## 1. Purpose and scope

Trigger an action in the record editor. Navigation uses a link. Existing implementation to inspect: `src/components/Button.tsx`; status: proposed contract.

## 2. Anatomy

Native `button` root, visible label, optional leading icon, optional pending indicator. The visible label remains stable during submission.

## 3. API and composition

Proposed API: `children`, `type`, `disabled`, `pending`, `onClick`; default `type="button"`. Forward native button attributes and the ref. Example: `<Button type="submit" pending={saving}>Save record</Button>`.

## 4. States and interaction

Default, hover, focus-visible, active, disabled, pending. Native Enter/Space activation; pending prevents duplicate submission and preserves an accessible label. Check focus behavior when entering and leaving pending.

## 5. Content

Use a verb describing the action: “Save record.” Icon-only usage needs an accessible name. Verify long translated labels rather than truncating them by default.

## 6. Accessibility

Retain native semantics and keyboard behavior. Verify focus visibility, contrast, zoom, accessible name, and the app's submission-status announcement. All checks are pending; native markup alone is not an accessibility result.

## 7. Tokens and variants

Propose project aliases `--ds-control-gap` and `--ds-control-radius`; components consume aliases, not upstream primitives. Preserve existing appearance variants until their consumers are inspected. Proposed reference: `specs/foundations/control-spacing.md`.

## 8. Verification and ownership

Not checked: rendered states, keyboard/pending behavior, second consumer, and audit coverage. Reference example: `src/components/Button.stories.tsx` if Storybook already exists; otherwise use the team's reference environment. Maintainer: component owner role, person unassigned. Done when agreed checks and remaining gaps are recorded in the completion record; a green audit alone is insufficient.
