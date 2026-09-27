# Design-system work — Example DS

Fictional filled section to adapt into the project's existing agent instructions. Resolve the paths and commands before installing it; this file is not an automatically loaded skill.

- **Starting or extending UI:** read `specs/decisions/control-spacing.md`, the relevant foundation spec, and the existing component implementation. Recover the requested outcome and agreed scope; ask only for unresolved decisions that affect the work.
- **Component changes:** read `specs/components/atoms/button.md` and its consumers before changing the API. Use the project's canonical token source (for this example, `src/styles/tokens.css`) through layer-2 project aliases such as `--ds-control-gap`; suggestions identify value candidates, not safe replacements.
- **Working:** continue reversible work already authorized. Surface a new dependency, migration, or wider product decision before expanding scope. Preserve the current reference environment; use `storybook-architect` for deeper Storybook work only when available and appropriate.
- **New literals:** use a project token or record a reasoned exception in the project convention; do not blanket-suppress findings to produce a green result.
- **Checking:** use the installed `ds-loop` version. Run `npx --no-install ds-loop audit .` before and after the scoped change and before committing, plus the project's actual build/behavior/rendered checks. State unsupported scope and unrun checks. CI thresholds belong to the team's policy.
- **Finishing:** update the decision/spec and `specs/completion/control-spacing.md`. Record files, evidence, exceptions, remaining problems, and the next entry point. Another session must be able to locate and explain the decision. Completion is an honest record, not a required green audit.
