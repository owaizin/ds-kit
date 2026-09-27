# Decision: control spacing in Example DS

Copy for a consequential choice; adapt the fields to the team's existing record format. This filled example is fictional. Replace its claims and paths with project evidence.

- **Status / owner:** proposed / component maintainer role; person unassigned.
- **Problem:** the team reports inconsistent gaps between button icons and labels. Confirm in a real consumer before migration.
- **Evidence:** proposed investigation of `src/components/Button.tsx`; rendered behavior not checked.
- **Options:** retain local spacing; share a control-gap alias; introduce a new primitive. Recommend the alias if an existing primitive serves the role.
- **Decision:** propose `--ds-control-gap: var(--ds-primitive-space-2, 0.5rem)` for the button's internal gap.
- **Scope / cost:** one button implementation and its examples; no global scale change. Existing overrides need review.
- **Verify / revisit:** render icon-only, icon-and-label, and long-label states at supported densities. Revisit if a second consumer needs a different gap.
- **Record / next task:** save as `specs/decisions/control-spacing.md`; reference from the button spec. Next task resolves the evidence gap before applying the proposal.
