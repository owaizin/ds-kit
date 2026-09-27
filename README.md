# ds-kit

Reusable records and CSS patterns for an agent helping a team establish or maintain a design system. Use this kit with **Design System Loop (`ds-loop`)** to connect measured findings to project decisions, implementation contracts, and verification.

This local kit contains seven original templates, three typography options, two spacing options and four colour options. It has no reference components, patterns, bundles, CLI, or installer yet. Examples use invented “Example DS” names; they are not client evidence or production recommendations.

## Use with ds-loop

1. In the target project, install `ds-loop` using the team's package manager. For npm: `npm install --save-dev ds-loop`. Ask the agent to read the installed `node_modules/ds-loop/skill/SKILL.md` and this kit's README; installing a package does not itself activate its skill.
2. Establish the user's problem, intended outcome, existing commitments, and scope. Use `npx --no-install ds-loop context .` and `npx --no-install ds-loop audit .` for measured facts and coverage limits.
3. Select the relevant template below. Adapt it to the team's existing document layout instead of creating a competing registry. Replace fictional facts and example paths with actual evidence. Ask about decisions the code cannot answer.
4. Implement within the agreed scope. Token suggestions require judgment about role, mode, and consumer behavior; a numerical match does not authorize a replacement.
5. Run applicable engine and product checks. Save the completion record with unrun checks and remaining work, then verify that another session can retrieve and explain the decision. A clean audit alone does not establish completion.

## Choose a template

| When | Template | Example project destination |
|---|---|---|
| A consequential choice needs a rationale | [Decision](templates/decision.md) | `specs/decisions/control-spacing.md` |
| A foundation needs a source and usage contract | [Foundation spec](templates/spec-foundation.md) | `specs/foundations/control-spacing.md` |
| An existing component needs an explicit contract | [Component spec: eight sections](templates/spec-component.md) | `specs/components/atoms/button.md` |
| A project role needs an upstream alias with fallback | [Layer-2 CSS pattern](templates/aliases.css) | the existing canonical alias stylesheet |
| Future agent sessions need entry points and working rules | [Agent instructions](templates/agent-instructions.md) | a section in the existing instruction file |
| Work needs a clear disposition and next entry point | [Completion record](templates/completion-record.md) | `specs/completion/control-spacing.md` |
| Discovery has surfaced problems to investigate | [Problem list](templates/problem-list.md) | the existing investigation or issue record |

## Foundation options

- Typography: [compact-ui](foundations/typography/options/compact-ui/README.md), [default-ui](foundations/typography/options/default-ui/README.md), [editorial](foundations/typography/options/editorial/README.md).
- Spacing: [base-4](foundations/spacing/options/base-4/README.md), [base-8](foundations/spacing/options/base-8/README.md).

Choose one option per foundation and adapt its spec to the project. Each contains exactly README.md, tokens.css, tokens.json and spec.md. CSS is layer-1 literal values; density mappings and text roles still need project aliases and real consumers. Values and sources are documented per option; Inter remains optional, with no bundled fonts.

Run `node scripts/check-options.mjs` and `node --test scripts/check-options.test.mjs` (Node 22+; no dependencies). [Checker scope](scripts/README.md) separates numerical checks from rendered validation. Each option README contains its actual engine audit. The kit config declares `--ds-*` upstream; typography and spacing audits have no findings, without suppressions. See [the resolved configuration gap](docs/upstream-layer-gap.md).

- Colour palettes: [radix-12-step](foundations/color/options/radix-12-step/README.md), [tailwind-11-step](foundations/color/options/tailwind-11-step/README.md).
- Colour roles: [functional-roles](foundations/color/options/functional-roles/README.md), [simple-roles](foundations/color/options/simple-roles/README.md).

Colour options include cool/warm/pure neutrals and light/dark variants. All declared contrast pairs are checked; palette duplication/proximity diagnostics remain in the actual audits.

## Inspect the options

Open [the self-contained specimen](specimens/index.html) locally. It offers real-size scales, side-by-side comparison, four applied compositions and per-option checks. Select typography, spacing, density, light/dark and a 375px sample width. No fonts or scripts are fetched. Samples use the selected colour option. The Current column accepts an audit JSON locally; the committed build includes invented Example DS evidence only.

Build with `node scripts/build-specimens.mjs`; verify with `node scripts/build-specimens.mjs --check`. [Browser verification and screenshots](specimens/README.md) cover the exercised web states. Native JSON is checked numerically; React Native rendering remains unverified.

## Content folders

[Foundations](foundations/README.md) contains the twelve named categories; typography, spacing and colour have the options above, while the other nine are reserved. [Component references](components/reference/README.md), [patterns](patterns/README.md), and [bundles](bundles/README.md) contain only folder descriptions. These reserved folders contain no product implementations.

Read [SOURCES.md](SOURCES.md) before deriving or importing third-party material. Tailwind-derived token values carry a retained MIT notice; no third-party component implementations or font files are included.

## Plan alignment and remaining work

Aligned to Workstream C1–C7 and B4/B5/B7 in the transformation plan dated 2026-09-27. C1's source register and C4's seven templates are present. C2 typography, spacing and colour now contain nine options; the other nine foundations and C3 reference folder remain scaffold only.

For a project without an existing spec layout, use `specs/foundations/`, `specs/tokens/`, `specs/components/{atoms,molecules,organisms}/`, and `specs/patterns/`. Create component specs only for components that exist. Both spec templates use metadata, overview, anatomy, tokens used, props/API, states, code example, and cross-references; record inapplicable fields explicitly.

The remaining C2 options, C3 reference contracts, C5 bundles, C6 engine validation (beyond the local self-check and specimens), and C7 release versioning/option changelogs/manifest remain future work. The A10 validation checks and shared A11 manifest are dependencies to verify when that work starts, not capabilities this scaffold supplies.

Source checks qualify the plan: Material Web token code is Apache-2.0, but that does not licence the Material 3 guidelines website; reviewed Polaris files are restricted; Fluent fonts/icons have separate asset terms. APG is under the W3C Software and Document License; cite-only use is this kit's narrower policy. See [the source register](SOURCES.md) for pinned evidence and reuse boundaries.

This is the owner's private consulting kit. No public distribution licence or GitHub remote is configured. Keep it separate from the public ds-loop engine and skill; they must work without this kit.
