# Motion

Options: [productive and expressive](options/), both with reduced-motion overrides.

## Motion follows state

For operational screens, productive is the starting choice. Use fast timing for a small feedback transition, standard for an ordinary state change and deliberate only when a larger transition needs context. Reserve expressive motion for a task where it helps comprehension.

Animate the property that explains the change. Do not put `transition: all` on the application, stagger routine table rows or animate every card on first load. Stable records should stay easy to scan. Feedback after save/filter must appear without requiring an animation to finish.

Use duration, easing and distance through aliases; reduced motion removes travel and animation duration while retaining the final state and its message. A disabled button is not a loading indicator by itself. Keep pending state labelled and prevent duplicate operations when appropriate.

Theme changes should commit without colour/background/border/shadow transitions; use the [theme-swap procedure](../color/README.md#theme-and-checks), then restore the selected motion tokens for subsequent interactions.

## Checks

Check repeated/rapid actions, keyboard use and OS reduced motion. The media preference wins over demo controls. Static Tailwind benchmarks support hierarchy observations, not proof of motion quality; these interaction recommendations are ds-kit's own judgment. Verify focus before, during and after transitions.

[Page composition](../layout-composition/README.md) · [Benchmark observations](../../docs/application-ui-benchmarks.md)

These application-use recommendations are ds-kit judgment. Existing option values, specs, provenance and checks remain the adoption contract.
