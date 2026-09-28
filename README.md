# ds-kit

Your product has fourteen font sizes, forty greys and no one who remembers why. You don't need to invent a design system from scratch to fix that. Start from a vetted option, adapt it, and record why.

ds-kit is a set of foundation options, templates and a specimen page for teams that are establishing or repairing a design system. It pairs with **[Design System Loop (`ds-loop`)](https://github.com/owaizin/ds-loop)**, which audits what your code actually uses.

```sh
git clone https://github.com/owaizin/ds-kit.git
open ds-kit/specimens/index.html   # compare every option on real-looking screens, offline
```

## What's inside

**22 foundation options across ten foundations.** Each option is a folder with `tokens.css`, `tokens.json` (including native numbers), `spec.md` and a README explaining when to use it, when not to, and where each value came from.

| Foundation | Options |
|---|---|
| Typography | compact-ui (14px body, dense tools) · default-ui (16px body) · editorial (20px body, reading-heavy) |
| Spacing | base-4 · base-8, each with comfortable and compact density |
| Colour | radix-12-step · tailwind-11-step palettes; functional-roles · simple-roles semantics; cool, warm and pure neutrals; light and dark |
| Radius | sharp · soft · round |
| Elevation | shadow-led · border-led |
| Motion | productive · expressive; movement removed under reduced motion |
| Z-index | named-layers |
| Breakpoints and grid | content-first · app-shell |
| Borders and opacity | functional |
| Focus and accessibility | visible-ring · brand-blue |

Every option passes its self-checks: scales that increase, CSS and JSON that agree, 672 declared colour contrast pairs, focus rings at 3:1 or better on light and dark surfaces. Each README also records a real `ds-loop audit` of its CSS.

**Seven templates** for the records a design-system change needs:

| When | Template |
|---|---|
| A consequential choice needs a rationale | [Decision](templates/decision.md) |
| A foundation needs a source and usage contract | [Foundation spec](templates/spec-foundation.md) |
| An existing component needs an explicit contract | [Component spec, eight sections](templates/spec-component.md) |
| A project role needs an alias with a fallback | [Layer-2 CSS pattern](templates/aliases.css) |
| Agents need entry points and working rules | [Agent instructions](templates/agent-instructions.md) |
| Work needs an honest finish | [Completion record](templates/completion-record.md) |
| Discovery surfaced problems to investigate | [Problem list](templates/problem-list.md) |

**A specimen page** (`specimens/index.html`): real-size scales, side-by-side comparison, four applied screens (a data table, a form with an error, settings, an article), density, light/dark and a 375px width. Drop a `ds-loop audit --json` report into its Current column to see a project's real values next to the options. Nothing is sent anywhere.

## Use it with ds-loop

1. In your project: `npm install --save-dev ds-loop`, then `npx ds-loop audit .` to see what your code actually uses.
2. Pick one option per foundation with the specimen page. Keeping your existing system is a valid choice.
3. Import the option's CSS as your upstream layer, and point your project aliases at it with fallbacks ([pattern](templates/aliases.css)). Add `"taxonomy": {"upstreamPattern": "^--ds-"}` to your `ds-loop.config.json` so the audit judges the layers correctly.
4. Record each choice with the [decision template](templates/decision.md), migrate one slice at a time, and finish with a [completion record](templates/completion-record.md).

The ds-loop skill (`node_modules/ds-loop/skill/SKILL.md`, playbooks `foundations` and `transform`) walks an agent through the same steps.

## Check it yourself

Node 22 or later, no dependencies:

```sh
node scripts/check-options.mjs
node --test scripts/*.test.mjs
node scripts/build-specimens.mjs --check
```

[What the checks cover](scripts/README.md), and what they don't: rendered typography, native rendering, screen readers and product fit are not certified by a passing check.

## Limits

- Iconography and layout-composition have folders but no options yet. Component reference contracts, patterns and preset bundles are not written yet.
- Numbers pass checks; they don't prove an option suits your product. That's a decision for your team.
- React Native values are checked numerically, not rendered.

## Sources and licence

Values are independently derived or taken from permissively licensed systems (Tailwind CSS, Radix Colors, Primer Primitives), each pinned to a revision in [SOURCES.md](SOURCES.md). Other systems informed principles only; no values, text or assets were copied from them. No fonts are bundled.

ds-kit is released under the [MIT licence](LICENSE). Third-party notices are in [NOTICE](NOTICE) and [LICENSES/](LICENSES/).
