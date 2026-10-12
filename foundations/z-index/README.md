# Z-index

Option: [named-layers](options/named-layers/README.md). Use its named layer jobs through project aliases.

## Stack within an explicit context

Keep ordinary content in the base layer, sticky shell chrome below menus, and temporary overlays above their triggering regions. Do not fix a clipped menu by escalating arbitrary numbers. Inspect parent transforms, opacity, isolation and overflow first; a child's large z-index cannot escape its stacking context.

Use the browser top layer for a native modal dialog when appropriate. Its behavior is not achieved by assigning the modal token. Scope local stacking within a component rather than making every badge participate in the global stack.

## Checks

Test a menu near a sticky header, a dialog above navigation and keyboard focus near a sticky footer. Ensure backdrop and close controls match the focus contract. Tooltip/toast layers must not hide required dialog actions. Static examples demonstrate layer separation, not a verified keyboard/modal implementation; behavioral acceptance remains explicit.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
