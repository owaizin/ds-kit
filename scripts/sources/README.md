# Pinned colour inputs

`color-values.json` is the selected source subset consumed by `generate-color-options.mjs`:

- Radix Colors `dbdb85470547c7d34b9001f48fddb08ded335979`: opaque values from `src/light.ts` and `src/dark.ts`; slate, sand, gray, blue, green, amber, red. [MIT notice](../../LICENSES/Radix-Colors-MIT.txt).
- Tailwind CSS `fa81d697fe572a10ac150d18964a093a7a874081`: original OKLCH values from `packages/tailwindcss/theme.css`; slate, stone, neutral, blue, green, amber, red. [MIT notice](../../LICENSES/Tailwind-CSS-MIT.txt).

Checked 2026-09-28. The generator renames/subsets values and derives role mappings; Tailwind values become a documented clipped sRGB derivative. Primer functional-role code is cited as influence only, with no imported values or prose. SOURCES.md records licence evidence and destinations.

Conversion math follows the Oklab/sRGB matrices described by [CSS Color 4](https://www.w3.org/TR/css-color-4/#color-conversion-code); this script is an independent implementation, with explicit clipping rather than browser gamut mapping. Contrast uses [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). Ratios apply to the resulting opaque sRGB bytes, which are also what the specimens render.
