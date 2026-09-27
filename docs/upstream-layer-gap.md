# Upstream layer — resolved by A13

Engine commit `c4dc3380d8395a0b7b32ea0816d52a93f52af00d` on `codex/upstream-layer` adds `taxonomy.upstreamPattern`. The kit declares `^--ds-` in `ds-loop.config.json`. Imported literals are allowed; component/use-site bypasses produce `token/upstream-bypass`; project aliases keep fallback checks. No ignore entries. All five refreshed audits have no findings. Palette diagnostics are still active.

## Original gap (historical, before A13)

Checked against `ds-loop` branch `codex/token-suggestions`, commit `92a51436b96682745333da23597111ab755cd2d8`.

The kit's literal `--ds-*` values belong to upstream/layer 1 in the adoption model. The engine cannot currently express that layer:

- `src/rules/tier.ts` defines `Tier` as `primitive | semantic | component | unknown`.
- `src/config/schema.ts` exposes `primitivePattern`, `semanticNamespaces`, and `componentPattern`. These classify names within that tier model; there is no upstream namespace/layer mapping.
- The model has no rule semantics for upstream declarations versus project aliases. Merely accepting an `upstreamPattern` key would not teach the tier rules how to judge those relationships.

Therefore this kit has no `ds-loop.config.json`. Classifying every `--ds-*` declaration as primitive would conflate upstream origin with token purpose; it would hide the missing distinction. No suppression or invented configuration key is used.

The refreshed declaration audits retain one HIGH `token/raw-dimension-in-semantic` finding per typography option (21 dimensions each). Both spacing options have no findings. Actual command output, exit status, engine revision and CSS hash are recorded in each option README. These audits do not evaluate rendered behavior.

Needed in the engine: an explicit configurable upstream layer, its relationship to existing tiers, and tests that upstream literal declarations and project alias consumers receive the intended judgments. That engine change is outside this kit package.
