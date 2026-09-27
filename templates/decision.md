# Decision: control spacing — Example DS

Fictional filled example. Replace claims and paths with project evidence; adapt to the team's existing record format.

- **Status / owner:** proposed / component maintainer, person unassigned.
- **Problem (with audit evidence):** inconsistent icon-to-label gaps reported in this fictional brief. Target: `src/components/Button.tsx`; audit command/version/config/result and rendered baseline: not checked. A scanner finding alone would not prove a usability problem.
- **Options:** retain local values; share a control-gap alias; introduce a primitive.
- **Chosen:** propose `--ds-control-gap: var(--ds-primitive-space-2, 0.5rem)` for one existing button, subject to verifying the primitive's role.
- **Why:** an alias would give the project one place to adjust this role without changing unrelated consumers of the primitive. This benefit is inferred, not measured.
- **Consequences:** review overrides and supported densities; one implementation and its examples in scope, no global scale change. Existing appearance must be compared before and after.
- **Revisit when:** compact-density checks fail or another consumer needs a different gap. Next task establishes the rendered baseline before applying the proposal.
- **Record:** `specs/decisions/control-spacing.md`, referenced from `specs/components/atoms/button.md`; record the actual reviewer and date when decided.
