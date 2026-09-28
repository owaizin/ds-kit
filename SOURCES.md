# Source policy and licence checks

Aligned to Workstream C1–C7 of the transformation plan dated 2026-09-27. Initial register checked **2026-09-27**; colour imports were rechecked **2026-09-28** as recorded below. Repository evidence is pinned to full commit revisions; live website terms have no repository revision and are explicitly dated observations.

## Material used in this package

| Source / revision | Taken | Local destinations / modifications | Date |
|---|---|---|---|
| Tailwind CSS `fa81d697fe572a10ac150d18964a093a7a874081`, [theme.css](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/theme.css), MIT | Selected font-size values and non-display line-height ratios | `foundations/typography/options/default-ui/{tokens.css,tokens.json,README.md}`: names mapped to roles; subset selected; calc ratios evaluated to six decimals. Display leading, weights, tracking, families and reading width independently chosen. | 2026-09-27 |
| Same Tailwind revision, [default-theme.ts](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/packages/tailwindcss/src/compat/default-theme.ts), MIT | Selected spacing values | `foundations/spacing/options/base-4/{tokens.css,tokens.json,README.md}`: renamed; subset selected; 0px normalized to 0rem. Density mappings independently derived. | 2026-09-27 |
| Independently derived | Compact/editorial type values, base-8 values, all density mappings and remaining choices | Derivations and field-level source IDs in each option's README/JSON. Templates/specs are original writing. | 2026-09-27 |

[The Tailwind MIT notice](LICENSES/Tailwind-CSS-MIT.txt) is retained verbatim. The additional colour imports are recorded below; sources not listed as used remain candidates or principles-only references. Inter appears as an optional family name; no font files are bundled. For future imports record exact revision, paths, destination, changes, licence, date and what was taken.

## Colour package imports — checked 2026-09-28

| Source / revision | Taken and destination | Modifications / notice |
|---|---|---|
| Radix Colors `dbdb85470547c7d34b9001f48fddb08ded335979`, `src/light.ts` and `src/dark.ts`, MIT | Seven opaque ramps in `scripts/sources/color-values.json`; `radix-12-step`, `functional-roles`, `simple-roles` | Values unchanged; names/variant organization and role mappings independently defined. [MIT notice](LICENSES/Radix-Colors-MIT.txt). Step jobs preserved with independently worded labels; [role reference](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale). |
| Tailwind CSS `fa81d697fe572a10ac150d18964a093a7a874081`, `packages/tailwindcss/theme.css`, MIT | Seven 50–950 ramps, `tailwind-11-step` | Original OKLCH retained as `sourceValue`; converted to clipped byte-rounded sRGB for web/native parity. Role mappings independent. [MIT notice](LICENSES/Tailwind-CSS-MIT.txt). |
| Primer primitives `f48bc063f7bc0fb3e447386a8c259650ce46dea8`, `src/tokens/functional/color/fgColor.json5`, MIT | Role-separation influence for `functional-roles` | No Primer values or prose copied. Names and cross-product are our own. [Notice](LICENSES/Primer-Primitives-MIT.txt). |

No restricted material or fonts added. Black/white endpoints are independently specified. The generated specimen embeds these values; notices remain in the kit and source attribution is available in each option README. Source URLs and exact source paths are retained in JSON. Palette contrast promises are limited to declared pairs, not every possible pair.

## Permissive repository material

Check the selected files and their nearest licence before importing; these entries are not blanket approval for a vendor's websites, trademarks, assets or dependencies. Preserve required notices and applicable NOTICE material. Recheck when changing revisions.

| Source | Verified licence | Pinned repository evidence | Eligible future use |
|---|---|---|---|
| Radix Colors | MIT | [LICENSE @ dbdb8547](https://github.com/radix-ui/colors/blob/dbdb85470547c7d34b9001f48fddb08ded335979/LICENSE) | Palette values and organization; preserve notices. |
| Primer primitives | MIT | [LICENSE @ f48bc063](https://github.com/primer/primitives/blob/f48bc063f7bc0fb3e447386a8c259650ce46dea8/LICENSE) | Token values and role structure; preserve notices. |
| Primer CSS | MIT | [LICENSE @ be70cda9](https://github.com/primer/css/blob/be70cda91066df154f76e634d7ce993f205d282e/LICENSE) | Covered CSS and component structure; preserve notices. |
| Carbon | Apache-2.0 | [LICENSE @ 7e8c8f7d](https://github.com/carbon-design-system/carbon/blob/7e8c8f7db6dd2ed98c4947b78b37614f43eda920/LICENSE) | Covered tokens and structure; retain licence/attribution, mark modifications, retain applicable NOTICE content. |
| Material 3 token code (Material Web) | Apache-2.0 | [LICENSE @ cbd34a89](https://github.com/material-components/material-web/blob/cbd34a8921915af94d5ef65c2a69eece41d5b4f3/LICENSE) | Covered token values and structure; not a licence for the separate guidelines website. |
| Open Props | MIT | [LICENSE @ 530682d0](https://github.com/argyleink/open-props/blob/530682d04327f842f56bb1ec33cf84a3cadb3876/LICENSE) | Covered custom-property values and organization; preserve notices. |
| Fluent 2 theme / Fluent UI tokens | MIT; asset carve-out | [packages/fluent2-theme/LICENSE @ 8add8c87](https://github.com/microsoft/fluentui/blob/8add8c8750c34c85acd811e32ab324abf8f1562e/packages/fluent2-theme/LICENSE) | Theme/token code only; referenced fonts and icons have separate terms and are not admitted by this entry. |
| Radix Primitives | MIT | [LICENSE @ f7ecd5ab](https://github.com/radix-ui/primitives/blob/f7ecd5ab16f5e1e820eb5786a1419a98a2d594ae/LICENSE) | Covered repository code/structure; retain notices. Check selected files/dependencies. |
| shadcn/ui | MIT | [LICENSE.md @ 98a1fe67](https://github.com/shadcn-ui/ui/blob/98a1fe67b439324ddc857f47fbdce056600a4329/LICENSE.md) | Covered repository code/structure; retain notices. Check selected files/dependencies. |
| Tailwind CSS | MIT | [LICENSE @ fa81d697](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/LICENSE) | Covered repository code/structure; retain notices. No Tailwind Plus/Catalyst rights. |

Material Web's [tokens/_md-sys-color.scss @ cbd34a89](https://github.com/material-components/material-web/blob/cbd34a8921915af94d5ef65c2a69eece41d5b4f3/tokens/_md-sys-color.scss) explicitly carries an Apache-2.0 identifier. This confirms that token file's licence, not all Material guidelines or downloadable design assets.

Fluent's [packages/tokens/LICENSE @ 8add8c87](https://github.com/microsoft/fluentui/blob/8add8c8750c34c85acd811e32ab324abf8f1562e/packages/tokens/LICENSE) and theme licence both reserve separate font/icon terms through [the asset licence](https://aka.ms/fluentui-assets-license). Use only the checked theme/token scope; the fonts policy below still applies.

## Polaris: restricted, not a general-purpose permissive source

The canonical repository resolves to `Shopify/polaris-react-archive`, revision `3f7954ae42fabf26d63cee68c23ceebfd7ef0972`. The reviewed licences limit use to applications integrating/interoperating with Shopify, with additional visual-distinction conditions for external standalone apps. They are not unrestricted MIT licences.

| Reviewed path | Evidence and result | Kit disposition |
|---|---|---|
| Root `LICENSE.md` | [LICENSE.md @ 3f7954ae](https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/LICENSE.md) — Shopify use restrictions. | No reuse of covered material in general-purpose kit options. |
| `polaris-react/LICENSE.md` | [polaris-react/LICENSE.md @ 3f7954ae](https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris-react/LICENSE.md) — same restrictions. | No component implementation or copied contracts. |
| `polaris-icons/LICENSE.md` | [polaris-icons/LICENSE.md @ 3f7954ae](https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris-icons/LICENSE.md) — same restrictions. | No icon assets. |
| `polaris-tokens/package.json` and `src/colors.ts` | [polaris-tokens/package.json @ 3f7954ae](https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris-tokens/package.json) refers to `LICENSE.md`; [polaris-tokens/src/colors.ts @ 3f7954ae](https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris-tokens/src/colors.ts) has no separate permissive grant. Repository tree contains no token-specific licence overriding the root. | No token values; do not rely on historic claims that tokens were MIT. |

This is a path-specific check, not certification of every repository file. Future files/revisions need their own review. C3 must not treat Polaris as a reusable contract source under this evidence; use eligible APG/Primer/Radix references instead. General principles may be discussed independently with attribution, without copying protected expression.

## WAI-ARIA Authoring Practices: cite-only kit policy

[LICENSE.md @ 3f094fde](https://github.com/w3c/aria-practices/blob/3f094fde1c81b25dfa69162563bf28d093f854d4/LICENSE.md) assigns repository documents to the [W3C Software and Document License](https://www.w3.org/copyright/software-license-2023/). That licence permits reuse and modification subject to its notice, attribution and modification conditions; it is **not itself a cite-only licence**.

Our narrower policy: cite the relevant [APG pattern](https://www.w3.org/WAI/ARIA/apg/patterns/) and independently describe the behavior required by the target component. No copied APG prose, example code or assets in this kit. A derived contract must identify its pattern and checked revision, describe its own implementation, and never imply W3C endorsement or accessibility conformance from a citation alone.

## Principles only: no values or copy

Use independently expressed general principles, with a link to the specific source consulted. Do not import token values, prose, screenshots, diagrams, component code, brand styling or assets. This is kit policy, not a claim that every listed source has the same licence. Live website observations below are dated **2026-09-27**, not pinned repository licences.

| Source | Licence/restriction checked | Permitted kit use |
|---|---|---|
| [Stripe public essays](https://stripe.com/blog) | Copyrighted website; no open-content grant established on the reviewed blog. [Service terms](https://stripe.com/legal/ssa) retain Stripe IP; they are not an essay reuse licence. | Independently discuss a general principle from a specifically cited essay; no values or copy. |
| [Linear](https://linear.app/) | [Terms](https://linear.app/terms) retain rights in Linear materials; no open-content grant established for website design/copy. | General workflow/design principles in original wording with a specific citation. |
| [Vercel](https://vercel.com/) | [Terms](https://vercel.com/legal/terms) retain rights in services/materials. This entry does not apply a separate open-source code licence to website content. | General hierarchy/interaction principles with attribution; no copied site values or expression. |
| [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) | [Apple site terms](https://www.apple.com/legal/internet-services/terms/site.html) restrict reproduction/distribution of site content; no permissive HIG-content grant established. | Cite guidance and independently describe the target product's behavior; no copied HIG prose, assets or values. |
| awesome-design-md | [LICENSE @ f6961238](https://github.com/VoltAgent/awesome-design-md/blob/f6961238d5cddcf8042a74a70fc400ec67181abb/LICENSE) — MIT for the repository; not proof of rights to every represented brand's assets/content. | Inspiration and independently expressed principles only, despite repository MIT; no imported DESIGN.md files, values or copy. |
| [Material 3 guidelines](https://m3.material.io/) | Rendered site footer points to [Google Terms](https://policies.google.com/terms), which retain Google IP; no Apache-2.0 grant for guideline prose established. Separate from the pinned Material Web code above. | Cite and independently explain a principle only; no guideline text, token tables or design assets imported. |

## Excluded material

**No Tailwind Plus or Catalyst content**: no code, templates, copied values, screenshots, or renamed derivatives, regardless of purchased access. Tailwind CSS's MIT licence does not cover those products. Client names, code, measurements, screenshots and renamed client assets are also excluded.

## Fonts

Use system stacks without bundling font files, or fonts verified under **SIL Open Font License 1.1**. Preserve copyright/licence notices and respect Reserved Font Names and modification conditions. System stacks do not authorize redistribution of operating-system fonts.

| Font | Verified licence and pinned evidence | Kit status |
|---|---|---|
| Inter | [SIL OFL 1.1 @ 353b61b9](https://github.com/rsms/inter/blob/353b61b9f4430d5f420d56605a6e7993e0941470/LICENSE.txt) | Checked 2026-09-27; optional family in all three typography options; no font files bundled. |

## Qualifications to the plan

- C1's Apache-2.0 label holds for the checked Material Web token code, not as a blanket licence for Material 3 guideline content.
- Reviewed Polaris code, icons and tokens are restricted and cannot populate this general-purpose kit under the permissive-sources policy.
- Fluent theme/token code is MIT; referenced fonts/icons require separate checks.
- APG cite-only handling and awesome-design-md principles-only handling are deliberate kit limits, not descriptions of their underlying licence permissions.


## Additional C2 foundations — 2026-09-28

Radius, elevation, motion, z-index, breakpoints-grid, borders-opacity and focus-accessibility values are independently derived; no third-party token values or text are imported. Each option records its derivation per token. Carbon's [motion overview](https://carbondesignsystem.com/elements/motion/overview/) informs only the productive/expressive distinction, in original prose. The source register's Carbon code licence does not turn website prose into reusable copy.

W3C [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) and [interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) are cited for measurement and behavior, not copied as kit text. Consulted 2026-09-28. These references do not certify the kit or every consuming product.
