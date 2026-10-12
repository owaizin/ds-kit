# Application UI benchmark register — 2026-10-02

## Scope and source handling

The requested local folder resolves to `/Users/owais/Documents/GitHub/TailwindUI-interfaces`. It contains `application-ui-v4.zip`, rather than an already expanded Application UI folder. Only the archive's `html/` application UI examples were studied; marketing, ecommerce and Catalyst archives were not used. Archive SHA-256: `b26cbf6e9529c2219452de32b1a9c49ca12d7bc63bca5e48cd286088521ba0e8`.

Selected examples were expanded under `/tmp/ds-kit-tailwind-20261002` for private inspection/rendering. No benchmark source, compiled benchmark stylesheet, vendor asset or benchmark screenshot is added to this repository. Local access is not treated as an open-source distribution grant. The kit retains its exclusion of commercial Tailwind Plus/Catalyst content; the additions are independently expressed observations and original application recipes. Existing MIT Tailwind CSS scale imports are unchanged.

## Examples selected

Paths below are relative to the archive's `html/` folder. Hashes identify the actual local source bytes; this is a local snapshot, not a claim about a vendor's current public release.

| ID | Local source path | What it helped us notice | SHA-256 |
|---|---|---|---|
| H1 | `page-examples/home-screens/01-sidebar.html` | Shell separation, summaries before a work list, consistent content rail | `b6760dc7f1f96df2c0089473ac12439fcc817f5db4409e9fcfc4757a08b2b2b4` |
| S1 | `page-examples/settings-screens/01-sidebar.html` | Persistent versus narrow navigation; quieter local navigation and form measure | `d2541a6727bfe4dfed4ea8bf939199e4c7c10e101473922b8410f9218ccb24f4` |
| D1 | `page-examples/detail-screens/02-stacked.html` | Primary record before secondary activity; aligned comparable quantities | `2c71c0aa2713acdd7110b930b7800040f3ef65023237ffa57c3e74d8730ffe1c` |
| C1 | `lists/tables/07-with-stacked-columns-on-mobile.html` | Record identity retained with secondary fields moved beneath it on mobile | `5d00e2755dcf060cceafa4c2dba4f15452719e54f5cd40646ab3155c89dc8288` |
| F1 | `forms/form-layouts/03-two-column.html` | Explanatory aside beside fields, stacked before them on mobile; meaningful section gaps | `7cf6d19607fc2ace5401886e35892293e43492212ff8c52b5365b9fb11dcfa29` |
| L1 | `data-display/description-lists/01-left-aligned.html` | Explicit label/value rails; fact rows stack on narrow screens | `1c56acac53a8fb99e981341d282bf7d505f5181922398bd424b26170d33e6d55` |
| M1 | `data-display/stats/01-with-trending.html` | Related metrics in one divided strip; label/value emphasis rather than many floating cards | `6d8b6eaba42e436807377006c10929d24e7612146f8d51b4911ba6f51bedc7b6` |
| E1 | `feedback/empty-states/01-simple.html` | A short explanation and concrete next action inside the missing-content region | `a6150754509e63934ba9151f29afc56558a290ce80e4824b9280b6470961754b` |
| P1 | `headings/page-headings/01-with-actions.html` | Page identity and action hierarchy reflow together | `80bc31b3a0eeac17a077f7b088143f59d471fee20eff9c1a3344194b1962ab7b` |

## Observations → original kit recommendations

| Observation from the selected sources | Kit decision and destination | Scope/qualification |
|---|---|---|
| H1/S1/P1 keep page identity/actions separate from global navigation | [Composition rails](../foundations/layout-composition/README.md#establish-three-alignment-rails); [breakpoints](../foundations/breakpoints-grid/README.md) | Adapt shell size to the content; no copied shell implementation |
| C1/F1/L1 preserve relationships through responsive reflow | [Collection](../patterns/collections.md), [settings](../patterns/settings.md), [detail](../patterns/detail.md) recipes | Preserve unique data; a column hidden without another route is insufficient |
| F1 uses greater section separation than label/control separation | [Spacing](../foundations/spacing/README.md) and the original role mapping | Maps already shipped kit steps; no commercial source values imported |
| C1/L1 use size/weight/colour selectively rather than a large heading for every region | [Typography](../foundations/typography/README.md) | h4 visual role can style semantic h2; existing type tuples remain intact |
| H1/M1/L1 have quieter static grouping than primary controls | [Colour](../foundations/color/README.md), [borders](../foundations/borders-opacity/README.md), [elevation](../foundations/elevation/README.md) | Separate decorative dividers from contrast-bearing control edges |
| S1/C1/E1 use restrained small geometry and actionable feedback | [Radius](../foundations/radius/README.md), [iconography](../foundations/iconography/README.md), [states](../foundations/layout-composition/README.md#state-belongs-to-composition) | Original role assignments; no vendor paths or icon assets used |
| Examples show focus styles and multiple layer contexts | [Focus](../foundations/focus-accessibility/README.md), [z-index](../foundations/z-index/README.md) | Static source/render observation cannot certify keyboard/modal behavior |
| Static examples cannot judge timing or repeated-action behavior | [Motion](../foundations/motion/README.md) | Recommendations are ds-kit's own interaction judgment, not a Tailwind performance finding |

The additions change application-use guidance across all twelve foundation folders. They do not manufacture new checked token options or change existing CSS/JSON contracts. Composition and iconography now have authored guidance; their token/asset option inventories remain empty.

## Comparison protocol

Build original screens with only the kit's selected options, foundation guidance and recipes. Do not use another UI library or ds-loop as a design reference. Afterwards compare with local benchmark renders at matched 1440px desktop / 375px mobile widths. Check task hierarchy, alignment, grouping rhythm, surface emphasis, typography, responsive information retention and state behavior separately. Numeric resemblance is not a quality score.

This is a solo, informed evaluation: the same author studied the benchmarks and built the screens. It tests whether the kit can carry these original compositions; it is not a blind fresh-agent retrieval study or independent human preference experiment. [Results and limits](application-ui-validation.md).
