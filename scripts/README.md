# Option checks

Run from the kit root with Node 22 or later; no dependencies:

```sh
node scripts/check-options.mjs
node --test scripts/check-options.test.mjs
```

The checker verifies the five-option inventory, four-file layout, literal `--ds-*` declarations, complete CSS/JSON value parity, current CSS hash against the recorded audit, source/derivation fields, strictly increasing scales, type intervals of at least 1.125 (with named and documented exceptions if needed), ten typography roles, heading order, body leading of at least 1.4, reading width, spacing density references, and native values against their source units. Negative tests deliberately break constraints to show failures are detected.

`tokens.json` uses a small kit-local interchange shape (`ds-kit-option-v1`), not DTCG and not the future `.ds-kit.json` manifest. `tokens` contains the exact CSS string values with type/source/derivation; `roles`, `scale`, and `density` reference those tokens. Every rem token also has numeric `px` at the 16px reference root. `native.roles` contains numeric text styles; `native.steps` and `native.density` contain numeric spacing. Native consumers still choose platform fonts and preserve user text scaling. No current ds-loop JSON-adapter compatibility is claimed.

The script does not validate rendered typography, font metrics, translations, contrast, touch targets, native scaling or product fit. It checks provenance is present, not whether a licence claim is true. Source checks and actual engine audit records live in the option READMEs and SOURCES.md. The C6/A10 engine checks remain future work; the local specimen builder is documented below.

## Re-record engine evidence

Use the inspected local engine branch; this command does not install or publish anything:

```sh
DS_LOOP_SOURCE=/absolute/path/to/ds-loop node scripts/record-audits.mjs
```

The recorder checks for `codex/upstream-layer` and clean tracked engine sources, audits each `tokens.css`, and stores real stdout, exit status, engine revision and the CSS hash. Review findings; a nonzero audit is not automatically an invalid kit option. See [the upstream model gap](../docs/upstream-layer-gap.md).

## Build specimens

```sh
node scripts/build-specimens.mjs
node scripts/build-specimens.mjs --check
```

The builder reads every `foundations/*/options/*/tokens.json` with its matching CSS and recorded audit, runs the self-checks, then embeds the data, stylesheet and UI code in `specimens/index.html`. Open that file directly; no server, dependencies or external requests are needed. Commit the generated file alongside its inputs. `--check` rejects stale generated output.

Typography and spacing have scale, comparison and applied renderers. Other foundations will need their own rendering contract when their options are added. [Specimen verification](../specimens/README.md) records what was exercised in a browser.
