# Layout and composition

Use this guide when turning selected foundation options into an application screen. A scale supplies values; composition assigns jobs to them. These are **ds-kit recommendations**, independently written after studying local application UI benchmarks. They are starting points for operational products, not universal requirements. [Evidence and limits](../../docs/application-ui-benchmarks.md).

## Choose the information shape first

| User's task | Starting composition | Preserve on narrow screens |
|---|---|---|
| Scan and act on many records | [Collection](../../patterns/collections.md): header → summary if useful → filters → list/table → count/pagination | Record identity, decisive status, next action; move secondary fields under identity |
| Change related preferences | [Settings](../../patterns/settings.md): page header → local navigation → sections with explanatory aside and fields → save result | Labels, help, errors and section boundaries; explanations precede fields |
| Understand one record | [Detail](../../patterns/detail.md): identity/status/actions → primary facts/content → secondary activity | Facts before activity; explicit label/value relationships |

Start with realistic content and the most important next action. Do not add metrics, charts or cards merely to fill a grid. Match the visual weight to task importance: one dominant region, supporting regions quieter.

## Establish three alignment rails

1. **Shell:** global navigation and workspace identity, outside the content rail.
2. **Page:** title, description, actions, tabs and content share an inline start. Give the header a distinct block gap before the work area.
3. **Section:** section headings, rows and fields align within their region. Do not accumulate nested insets by placing a card inside a card inside another card.

A shell may remain wide while forms use the selected typography reading measure. Table width follows its data. Width caps apply to content, not automatically to every background. Use `min-width: 0` on grid/flex children and `minmax(0, 1fr)` for flexible tracks; long IDs and translations must not widen the page.

## Map roles rather than scaling everything

Choose one option per relevant foundation. Example operational starting set: compact-ui, base-4, functional-roles with a chosen neutral, soft radius, border-led elevation, productive motion, app-shell grid, functional borders, visible-ring focus and named-layers. This set is a recommendation, not a new token bundle. Larger body text or existing product choices remain valid.

| Composition job | Starting mapping in that set | Reason |
|---|---|---|
| Page title | compact-ui h1 style | Establish location without a display headline |
| Section heading | compact-ui h4 style, on a semantic h2 | Separate sections without dominating records |
| Record name / form label | body size, heading weight | Stronger identity at the same reading size |
| Body / row values | complete body style | Stable scanning rhythm |
| Secondary metadata | body-small where legible; otherwise muted body | Less emphasis without losing useful information |
| Numeric value | tabular numbers; h2 size only for summary totals | Stable columns, selective emphasis |
| Label-to-control gap | base-4 step 2 | Tight association |
| Related controls | step 4, or step 3 in compact groups | Group without merging controls |
| Region inset | step 6; step 4 on narrow screens | Shared content rail |
| Sections | step 8; step 12 for major form divisions | Stronger separation than within groups |
| Control height | focus target minimum, at least 2.75rem for this kit | Touch area stays usable even in compact density |
| Control / panel radius | soft small / medium | Distinguish geometry by role |

Map through project aliases. HTML heading levels express document structure, not font-size roles. Copying a size without its line height, weight and tracking is not adopting a text style.

## Surfaces need a job

Default to page sections separated by whitespace or a subtle divider. Use a card when a region needs its own boundary, action scope or independently selectable object. Related metrics may share one divided strip rather than four floating cards. A list/table can sit directly on the page.

Choose one primary separation cue: inset, edge, background or elevation. A thin edge and small shadow may work together on an overlay, but thick borders plus shadow plus tinted fill on every static region create competing emphasis. Reserve stronger edges for input affordances, focus and selected states.

The functional colour option's `border-muted` is contrast checked and can be visually strong. Do not use it for every decorative separator. Define a separate project `--app-divider` alias from an existing neutral step, check it in both themes and keep its job decorative. A weak divider must never be the sole way to identify a control, selection or error. [Colour roles](../color/README.md), [border roles](../borders-opacity/README.md).

## Responsive changes preserve the task

- Switch from persistent shell navigation to a reachable narrow-screen navigation control before the content becomes cramped. Use the existing app-shell breakpoint as a starting point; verify available **content** width after the shell inset.
- Reflow title/actions and filters into separate rows. Keep the primary action visible; allow action groups to wrap rather than compress labels.
- Turn the explanatory form aside into a heading and description above fields. Collapse paired inputs when their labels or values no longer fit.
- For records, either keep comparison columns in a labelled horizontal scroll region or expose secondary values beneath record identity. Do not hide unique important information without another route to it.
- Allow tabs/local navigation to wrap or scroll in their own region. The document itself should not scroll sideways. Use a visible selected marker as well as colour.
- Compact summary strips can use auto-fitting tracks with a bounded minimum width, so text scaling can reduce their column count. Do not require three squeezed columns at every text size.
- Keep screen-reader-only table labels inside a positioned scroll region; out-of-flow labels must not escape its clipping/containing context and widen the document.
- Avoid fixed content heights. Long help text, errors and text zoom must grow the section. Sticky bars require reserved space and must not cover focused controls.

CSS custom properties cannot be used directly as media-query thresholds in ordinary CSS. Use the selected breakpoint's resolved value in a documented media query; a custom-property-looking `@media` expression is not a working implementation.

## State belongs to composition

A loading state preserves the region's structure. An empty state belongs where results would appear and explains a useful next step. Distinguish “no records yet” from “no results for these filters”; only the latter offers clear/reset filters. Errors appear beside the relevant field or region with a recovery action. Saving preserves input and returns a visible, announced outcome.

A modal or drawer needs its own focus/close contract; stacking tokens alone do not implement it. Hover decoration is optional; selected, disabled, error and keyboard-focus states are not interchangeable.

## Review the rendered result

Compare at the same viewport, theme and task with a benchmark. Ask: can the page's purpose and primary action be found immediately; do alignment rails survive every section; are between-group gaps larger than within-group gaps; is there one dominant work region; is required data retained on mobile; do controls, errors and focus remain readable?

Use at least a wide desktop and 375px narrow viewport, then check 320px, long content and 200% zoom/text scaling. Test keyboard navigation and the screen's actual actions. Token self-checks cannot answer these questions. [Original application examples](../../specimens/application-ui/index.html) and [comparison record](../../docs/application-ui-validation.md).
