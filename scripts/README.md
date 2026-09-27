# Option checks

Run from the kit root with Node 22 or later; no dependencies:

```sh
node scripts/check-options.mjs
node --test scripts/check-options.test.mjs
```

The checker verifies the five-option inventory, four-file layout, literal `--ds-*` declarations, complete CSS/JSON value parity, current CSS hash against the recorded audit, source/derivation fields, strictly increasing scales, type intervals of at least 1.125 (with named and documented exceptions if needed), ten typography roles, heading order, body leading of at least 1.4, reading width, and spacing density references. Negative tests deliberately break constraints to show failures are detected.

`tokens.json` uses a small kit-local interchange shape (`ds-kit-option-v1`), not DTCG and not the future `.ds-kit.json` manifest. `tokens` contains the exact CSS string values with type/source/derivation; `roles`, `scale`, and `density` reference those tokens. Native consumers must transform units/families explicitly. No current ds-loop JSON-adapter compatibility is claimed.

The script does not validate rendered typography, font metrics, translations, contrast, touch targets, native scaling or product fit. It checks provenance is present, not whether a licence claim is true. Source checks and actual engine audit records live in the option READMEs and SOURCES.md. The C6/A10 engine checks and rendered specimens are future work.
