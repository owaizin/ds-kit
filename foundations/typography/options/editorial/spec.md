# Typography: editorial

## 1. Metadata

Status: drafted option; no project adoption decided. Owner: unassigned. Source: ds-kit `typography/editorial`; record the chosen kit revision and reviewer when adopting. Destination: `specs/foundations/typography.md`.

## 2. Overview

Articles, documentation and content-led screens where text occupies most of the task. Dense tables or narrow dialogs. Large headings need wrapping and viewport review before adoption.

## 3. Anatomy

Layer-1 role values → layer-2 project aliases → component consumers. Arrows mean value consumption, not proven migration. Preserve the existing four-layer model. Choose only one typography option.

## 4. Tokens used

The option's [values table](README.md#values) and [tokens.json](tokens.json) declare ten roles, their size/leading/weight/tracking, three family choices, numeric variant and reading width. Actual project use sites: not checked; populate from source/audit evidence after adoption. Rewrite these relative links to the installed source locations when copying this spec.

## 5. Props/API

CSS exposes `--ds-type-<role>-size`, `-line-height`, `-weight`, `-letter-spacing`, plus family/measure values. Components consume project aliases, not these upstream values directly. JSON has the same literal token values plus role/source metadata; native transforms must be explicit.

## 6. States

No hover/error states in the scale. Check wrapped headings, long labels, mixed scripts, fallback fonts, optional Inter, 200% text scaling, narrow viewports and numerical updates. Default/compact component density is a separate choice. Rendered checks and reviewer: not checked/unassigned.

## 7. Code example

Project alias declaration after selecting this option (outside its layer-1 stylesheet):

```css
:root { --app-body-size: var(--ds-type-body-size); }
.article { font-size: var(--app-body-size); }
```

Map leading, family, weight, tracking and max width as well; the single-property snippet does not establish a complete text style. Leave the root font preference intact.

## 8. Cross-references

[Option rationale, licence and actual audit](README.md); [JSON values](tokens.json); project decision and representative screen/story: not yet recorded. Completion must name actual checks, unresolved issues and a next-session entry point. A clean token audit cannot verify rendered typography.
