# Source policy and licence checks

This policy implements the explicit task brief. The referenced transformation plan was unavailable; its exact source list has not been verified. The entries below are a small verified inventory, not a claim that the plan named these projects. Checked **2026-09-27** directly against the licence files at the linked repository revisions. No source code, component content, or fonts have been imported.

## Permissive material

Use material only when the exact files have a verified permissive licence (for example MIT, BSD, or Apache-2.0) and any file-specific terms permit the intended reuse. Preserve required copyright/licence notices and applicable NOTICE material; record source revision, imported paths, local destination, and modifications alongside a future import. A repository-level licence does not automatically cover third-party assets, trademarks, linked commercial products, or every dependency. Recheck the exact revision and files when adding content.

| Source / repository | Verified licence | Pinned licence evidence | Date checked | Eligible scope |
|---|---|---|---|---|
| [Radix Primitives](https://github.com/radix-ui/primitives) | MIT | [LICENSE at f7ecd5ab](https://github.com/radix-ui/primitives/blob/f7ecd5ab16f5e1e820eb5786a1419a98a2d594ae/LICENSE) | 2026-09-27 | Repository implementation covered by this licence; retain notices when reused. |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | MIT | [LICENSE.md at 98a1fe67](https://github.com/shadcn-ui/ui/blob/98a1fe67b439324ddc857f47fbdce056600a4329/LICENSE.md) | 2026-09-27 | Covered repository implementation; verify the selected files and their dependencies. |
| [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | MIT | [LICENSE at fa81d697](https://github.com/tailwindlabs/tailwindcss/blob/fa81d697fe572a10ac150d18964a093a7a874081/LICENSE) | 2026-09-27 | The open-source framework. This entry confers no rights to Tailwind Plus or Catalyst. |

These checks establish licence evidence, not a dependency selection or a promise that an implementation suits the target product. Other sources require their own entry before reuse.

## Principles-only material

A source outside the verified reusable inventory may inform a high-level principle or problem framing through an independently written explanation with attribution. Do not reproduce its component code, token tables, prose, screenshots, diagrams, icons, or other assets into this kit. Public availability alone is not reuse permission. Record the specific source and licence/restriction before adding a named principles-only reference; no such source has yet been selected or verified against the missing plan.

## Excluded material

**No Tailwind Plus or Catalyst content**: no code, components, templates, copied token values, screenshots, or renamed derivatives. Buying access does not make content eligible for this kit. The Tailwind CSS MIT entry above does not change this boundary. Client code, names, screenshots, measurements, and renamed versions of client assets are also excluded.

## Fonts

Use **system font stacks without bundling font files**, or font files verified under **SIL Open Font License 1.1**. “Free to download” or a hosting service's catalogue is not a licence check. Retain the font's licence and copyright when distributing files; respect Reserved Font Names and other OFL conditions when modifying them.

| Font / repository | Verified licence | Pinned licence evidence | Date checked | Kit status |
|---|---|---|---|---|
| [Inter](https://github.com/rsms/inter) | SIL OFL 1.1 | [LICENSE.txt at 353b61b9](https://github.com/rsms/inter/blob/353b61b9f4430d5f420d56605a6e7993e0941470/LICENSE.txt) | 2026-09-27 | Verified candidate only; no files bundled or typography option supplied. |

System stacks use fonts already available to the user; this does not authorize extracting or redistributing operating-system fonts. Add a separate pinned licence record for any additional bundled family.
