# Foundation: control spacing — Example DS

Copy for one foundation the product uses. This fictional example describes a proposal, not a supplied scale or completed implementation.

## Purpose and scope

Provide a consistent icon-to-label gap in the existing button. Reported problem: local values are hard to maintain. Other layout spacing is outside this change.

## Source and contract

- Proposed source: `src/styles/aliases.css`; one editable source, imported by app and reference.
- Project role: `--ds-control-gap`; upstream reference: `--ds-primitive-space-2`; fallback: `0.5rem`.
- Consumers use the project alias. Keep the upstream unit; rem follows the consumer's root size.
- Modes/density: no mode override proposed; compact-density suitability remains unverified.

## Use and exceptions

Use for internal button icon-to-label spacing. Do not infer page gutters or text line-height from it. Record a consumer-specific exception with its reason and review date.

## Verification and maintenance

Not checked: computed values, compact density, zoom, long labels, and propagation after an alias edit. Run the relevant UI checks and an unfiltered `ds-loop audit`; preserve coverage limits. Maintainer role: foundations owner, person unassigned. Decision: `specs/decisions/control-spacing.md`; next consumer reads this spec before extending the role.
