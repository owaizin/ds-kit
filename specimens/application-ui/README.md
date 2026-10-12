# Original application UI examples

Open [the gallery](index.html), then [collection](collection.html), [settings](settings.html) or [detail](detail.html). These three fictional Fieldwork screens use **only ds-kit** as their design-system reference: compact-ui, base-4, functional-roles/cool, soft, border-led, productive, named-layers, app-shell, functional borders and visible-ring. No ds-loop, Tailwind runtime, component library, external fonts or remote assets are required.

The foundation CSS is imported from its original kit path. `screens.css` assigns project roles through `--app-*` aliases and implements the relationships in the foundation guides and patterns. The 14rem shell width is an independently chosen consumer dimension; the 48rem shell threshold resolves the existing app-shell small breakpoint. Touch inputs use the existing compact-ui 1rem section size. Screens share styles/behavior but have separate semantic markup.

## Try the tasks

- Collection: search a site/inspector, select a status, try an unmatched query and clear filters. All View links open the same fictional example report; the caption and accessible names disclose this.
- Settings: submit an invalid report email, correct it, toggle reminders, save and discard. Values stay in the open page; reload restores the fixture.
- Detail: mark the report reviewed. Status/activity/announcement update; follow-up tasks remain open.
- Every screen: switch light/dark theme, resize to 375px and open workspace navigation. Tab through controls; the skip link moves focus into the work region.

Actions do not write to disk or send data. Static examples implement their visible tasks but are not complete production applications: no backend/persistence, collection pagination, live data, file upload or modal is provided.

## Run and verify

Serve the repository with a local static server or open `index.html` directly. No build step is needed. Existing kit checks remain dependency-free. The **optional browser acceptance script** needs Playwright and a Chromium browser already available in your environment; it does not install either or access your daily profile.

```sh
# From the kit root, with Playwright available to Node:
node scripts/check-application-ui.mjs
# Re-capture the original screenshots and update the evidence after intentional changes:
node scripts/check-application-ui.mjs --capture --out specimens/application-ui/validation.json
```

When using a bundled runtime, set `PLAYWRIGHT_MODULE` to its absolute Playwright package directory and optionally `BROWSER_EXECUTABLE` to its browser executable. The checker creates a temporary-profile headless browser and a temporary loopback server, closing both on success/failure. It rejects external requests.

The check exercises six widths in both themes, 200% root text scaling, long-content cases, real task interactions, keyboard/focus, forced colours/reduced motion, theme transitions at 10% playback and hover restoration, matched icon strokes, representative rendered contrast pairs and gallery image loads. `validation.json` records browser version, source hashes, measurements, checks and limits; a changed hash needs rerunning. Screenshots cover 1440px and 375px light/dark plus a mobile form-error state.

[Benchmark register](../../docs/application-ui-benchmarks.md) · [Comparison results](../../docs/application-ui-validation.md). The licensed benchmark renders stay outside this repository; committed images are the original ds-kit examples only.
