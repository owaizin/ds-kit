# Invented current-project evidence

`example.css` is original Example DS content, deliberately mixing a few literal values. `audit.json` is actual ds-loop output, not a hand-authored report. It contains no client source, identifiers or measurements.

Reproduce from the kit root with the A13 engine checkout:

```sh
node --experimental-strip-types --disable-warning=ExperimentalWarning ../ds-loop/src/cli.ts audit fixtures/current/example.css --json > fixtures/current/audit.json
```

Exit 1 is expected because this fixture deliberately contains findings. Rebuild specimens after refreshing the report. Never replace this committed fixture with client data. The specimen's local file picker can inspect another audit in memory without modifying the generated file.
