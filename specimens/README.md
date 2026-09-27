# Foundation specimens

[index.html](index.html) is generated and committed. It embeds all option data, CSS and JavaScript, with no dependencies, external fonts or external requests. Open it locally, or serve the kit root with a local HTTP server. Rebuild and check commands are in [scripts](../scripts/README.md#build-specimens).

## Views

- Scale: every typography role at its actual CSS size, weight and line height; spacing bars at actual rem widths. Pixel labels assume a 16px root.
- Compare: all three type options or both spacing options side by side.
- Applied: the same table/filter, validation form, settings and article compositions for every selected typography/spacing pair.
- Checks: per-option numerical results, source hash and actual audit output. Engine findings remain visible alongside passing self-checks.

Select option, comfortable/compact density, light/dark samples or a 375px sample width. Density changes the documented spacing alias slots; primitives stay unchanged. Controls retain a 44px minimum height. Samples use the selected colour tokens; the surrounding tool UI is separate demonstration chrome. Optional Inter is not loaded.

## Observed browser checks — 2026-09-28

Tested in the Codex in-app browser over a local HTTP server:

- All four views render; typography comparison has three columns and spacing comparison has two, with 13 steps each.
- All 12 typography × spacing × density combinations render all four compositions. Body sizes and control padding match the selected values.
- Light/dark switches affect samples. The 375px sample width stays exactly 375px. At a 375px browser viewport, wide samples scroll within their container and the document does not overflow.
- Table search produces its empty state; valid email changes the form feedback without sending anything; settings checkboxes toggle. Tab moves from email to the access selector.
- No warning/error console messages observed. Desktop checks used 1280px and 1440px widths; narrow checks used 375px.
- The generated page has no external asset references and a restrictive CSP (`connect-src 'none'`, `font-src 'none'`, `form-action 'none'`). Direct `file://` browser verification was blocked by the automation browser's URL policy, so runtime testing used HTTP. File opening is not claimed as observed.

Not checked: a native renderer, screen-reader behavior, all font fallbacks/languages, full accessibility compliance, or product-specific fit. Passing numerical checks does not imply those outcomes.

## Screenshots from 0cf76f6 (before A13)

- [Scale — rounded editorial values](screenshots/scale.png)
- [Compare — three typography options](screenshots/compare.png)
- [Applied — all four compositions](screenshots/applied.png)
- [Checks — numerical passes and unresolved engine findings](screenshots/checks.png)
- [Spacing comparison](screenshots/spacing.png)
- [375px dark form](screenshots/mobile-dark.png)

Screenshots are browser captures, not generated previews. Applied uses compact-ui/base-4 at compact density; settings were toggled during interaction testing. The checks panel separates audit results from numerical validation. [Upstream configuration resolution](../docs/upstream-layer-gap.md).

## Colour and Current additions — af9dbd1, historical

Four colour options add six neutral/mode variants each. The scale view shows step/role swatches and measured pairs; applied compositions consume the selected values. All 552 declared pairs pass full-precision WCAG 2 thresholds. Body/error text measured from rendered styles also passed in all 24 colour × neutral × mode combinations (minimum observed body contrast 15.881:1; error text 12.121:1). This does not certify every rendered pairing or full accessibility.

Current appears beside options in Compare. The committed input is a real engine audit of `fixtures/current/example.css`, invented for this kit. Value rows come from the unfiltered ordinary-CSS inventory: 5 font-size occurrences / 4 distinct values, 7 spacing occurrences / 5 distinct values, 7 colour occurrences / 6 distinct values. References remain source strings, not resolved values. Older audits fall back to finding hits with an explicit coverage limitation. Token declarations and markup are not reconstructed.

The local file picker was tested with the invented audit: it updated the comparison. An invalid config JSON produced an error and retained the previous report. The file stays in memory; no upload, storage or generated-file mutation is implemented. All four compositions rendered in every colour variant with no console warnings/errors. Comparison containment checked at 320, 375, 768, 1024 and 1440px; a 320px navigation/file-input overflow was fixed and rechecked. Wider comparisons scroll within the comparison region.

Fresh captures:

- [Colour swatches and step roles](screenshots/colour-scale.png)
- [Current font sizes beside typography options](screenshots/current-type.png)
- [Current colours beside colour options](screenshots/current-colour.png)
- [Applied, light](screenshots/colour-applied-light.png)
- [Applied, dark](screenshots/colour-applied-dark.png)

Previous captures above are historical evidence from before A13. Native rendering and screen-reader behavior remain unverified.


## Stable colour aliases — 2026-09-28

The current build uses one neutral CSS file per choice, stable public names, and palette references for every role. The scale shows the alias and its resolved value; the on-fill strip shows white labels on neutral/blue/green/red and black on amber. The applied view keeps `var()` references live rather than painting resolved role literals.

Verified in the in-app browser over local HTTP:

- **72/72 theme cases passed** using the actual shipped CSS in isolated documents: four options × three neutrals × OS light/dark × automatic/explicit light/explicit dark. The harness checked the effective media preference and all role/on-fill computed colours. Explicit light overrides OS dark. [Full results](screenshots/colour-aliases/theme-cascade.txt).
- **672/672 declared pairs passed** numerical thresholds (body ≥4.5; large/UI ≥3). None of the selected fills fails 4.5 with both black and white. All source values still match the pinned subsets.
- **12/12 colour-file audits have zero literal-duplicate findings**, with no exceptions or suppressions. Low palette diagnostics remain visible. The engine aggregates both theme blocks, so near-duplicate pairs can cross modes; this is not an active-theme contrast assessment.
- Scale, Compare, Applied and Checks rendered with no warning/error console messages observed. The four applied compositions use the selected aliases in light/dark. Narrow sample width measured 375px within a 1280px viewport; the outer document did not overflow. A new 375px browser-viewport check is **not claimed**: the viewport control did not resize the specimen tab during this pass.
- 18 script tests and all nine option checks passed. The generated page matches its inputs. React Native rendering, screen readers and complete accessibility remain unverified.

Fresh browser captures:

- [Scale, light](screenshots/colour-aliases/scale-light.png) · [Scale, dark](screenshots/colour-aliases/scale-dark.png)
- [Applied, light](screenshots/colour-aliases/applied-light.png) · [Applied, dark](screenshots/colour-aliases/applied-dark.png)
- [Compare](screenshots/colour-aliases/compare.png) · [Checks](screenshots/colour-aliases/checks.png)
- [375px sample](screenshots/colour-aliases/narrow-sample.png) · [Theme cascade](screenshots/colour-aliases/theme-cascade.png)
