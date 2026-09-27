# Foundation specimens

[index.html](index.html) is generated and committed. It embeds all option data, CSS and JavaScript, with no dependencies, external fonts or external requests. Open it locally, or serve the kit root with a local HTTP server. Rebuild and check commands are in [scripts](../scripts/README.md#build-specimens).

## Views

- Scale: every typography role at its actual CSS size, weight and line height; spacing bars at actual rem widths. Pixel labels assume a 16px root.
- Compare: all three type options or both spacing options side by side.
- Applied: the same table/filter, validation form, settings and article compositions for every selected typography/spacing pair.
- Checks: per-option numerical results, source hash and actual audit output. Engine findings remain visible alongside passing self-checks.

Select option, comfortable/compact density, light/dark samples or a 375px sample width. Density changes the documented spacing alias slots; primitives stay unchanged. Controls retain a 44px minimum height. The specimen palette and surrounding UI are original demonstration chrome, not proposed colour tokens. Optional Inter is not loaded.

## Observed browser checks — 2026-09-28

Tested in the Codex in-app browser over a local HTTP server:

- All four views render; typography comparison has three columns and spacing comparison has two, with 13 steps each.
- All 12 typography × spacing × density combinations render all four compositions. Body sizes and control padding match the selected values.
- Light/dark switches affect samples. The 375px sample width stays exactly 375px. At a 375px browser viewport, wide samples scroll within their container and the document does not overflow.
- Table search produces its empty state; valid email changes the form feedback without sending anything; settings checkboxes toggle. Tab moves from email to the access selector.
- No warning/error console messages observed. Desktop checks used 1280px and 1440px widths; narrow checks used 375px.
- The generated page has no external asset references and a restrictive CSP (`connect-src 'none'`, `font-src 'none'`, `form-action 'none'`). Direct `file://` browser verification was blocked by the automation browser's URL policy, so runtime testing used HTTP. File opening is not claimed as observed.

Not checked: a native renderer, screen-reader behavior, all font fallbacks/languages, full accessibility compliance, or product-specific fit. Passing numerical checks does not imply those outcomes.

## Screenshots

- [Scale — rounded editorial values](screenshots/scale.png)
- [Compare — three typography options](screenshots/compare.png)
- [Applied — all four compositions](screenshots/applied.png)
- [Checks — numerical passes and unresolved engine findings](screenshots/checks.png)
- [Spacing comparison](screenshots/spacing.png)
- [375px dark form](screenshots/mobile-dark.png)

Screenshots are browser captures, not generated previews. Applied uses compact-ui/base-4 at compact density; settings were toggled during interaction testing. The checks panel separates audit results from numerical validation. [Why no upstream config was added](../docs/upstream-layer-gap.md).
