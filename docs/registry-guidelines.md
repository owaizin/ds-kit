# Registry guidelines

Read this before creating a kit catalog, documenting a consuming library's
components, or changing a registry's generator or refresh workflow. Follow the
[ds-loop registry playbook](https://github.com/owaizin/ds-loop/blob/0385818e24bf73512dff60a31994b7095f90d4cf/skill/reference/registry.md)
for the procedure; this guide applies its rules to ds-kit.

Alignment reviewed on 2026-10-12 against ds-loop revision
`0385818e24bf73512dff60a31994b7095f90d4cf`. The repositories remain separate;
these links identify the reviewed contract rather than an automatic Git dependency.

## What exists in the kit

The kit currently supplies foundation CSS/JSON, authored foundation guides, pattern
recipes, templates and original example screens. It has no generated registry,
registry refresh command or exported production component library.

| Material | Source of truth | Catalog treatment |
|---|---|---|
| Foundation options | `foundations/<foundation>/options/<option>/tokens.json`, matching CSS, README and spec | Foundation/option metadata with original source, licence, derivation, variants and native mappings |
| Foundation guidance | `foundations/<foundation>/README.md` | Authored guidance, including categories with no token options |
| Application patterns | `patterns/*.md` | Composition recipes with usage and acceptance checks |
| Original examples | `specimens/application-ui/` and its validation record | Example implementations with the actual verification scope and source hashes |
| Component templates | `templates/spec-component.md` | A documentation template; only a consuming library's implemented public components have component identities and APIs |

`tokens.json` uses `ds-kit-option-v1`, a kit-local value contract. Preserve it;
it is not a component registry schema, DTCG format or proven ds-loop JSON adapter
input. The generated foundation specimen is a visual consumer of these inputs,
not a registry. A pattern or example screen does not establish an exported
component API.

## Choose a catalog that matches the source

Inspect the requested repository's actual exports, types, stories, docs and build
before choosing a format. Reuse an existing suitable registry and schema.

For a kit catalog, declare distinct foundation, option, guidance, pattern and
example entries. Use stable identities and repository-relative source references;
point to the canonical token files and docs instead of maintaining a second
handwritten copy of values. Record covered folders, excluded material and gaps.
Keep categories without options visible as authored guidance.

For implemented components in a consuming library, use ds-loop's
[component registry schema](https://github.com/owaizin/ds-loop/blob/0385818e24bf73512dff60a31994b7095f90d4cf/skill/templates/component-registry.schema.json)
unless the library already has a suitable contract. Record actual public imports,
source locations, props/types/default expressions, variants, compound parts,
token references, examples and limitations. Use type-aware extraction for typed
APIs; expose unresolved inherited props, wrappers and dynamic behavior. Follow the
schema's unknown-value and example-check conventions. Keep authored usage guidance
in source docs or separate metadata keyed by identity; generation merges it
without overriding extracted types or defaults.

## Refresh and verify

Choose **snapshot** for a checked one-time catalog with explicit refresh
instructions. Choose **generated** when automatic updates are requested: create
or reuse a working project-local generator and connect it to the actual consumer
build. Instructions alone do not establish automatic refresh.

For either mode, record a source fingerprint, scoped input list, hash algorithm,
refresh instructions and coverage. Fingerprint actual file contents, including
dirty files and the relevant docs, exports, types, stories, authored metadata,
generator and configuration. Additions and deletions must change the fingerprint;
a Git SHA alone cannot identify a dirty snapshot.

For generated mode:

1. Sort output deterministically and leave unchanged input/output unchanged,
   including timestamps. Validate before replacing the last valid artifact.
2. Regenerate ignored output before its consumer runs, or provide a non-mutating
   freshness check for committed output. Integrate that check with existing CI
   when CI is in scope. Remove entries whose source identity was deleted.
3. Verify schema shape, unique identities, source paths, public imports and
   cross-references. Check representative entries against source and run the
   relevant type/build checks before marking examples passed.
4. In a temporary copy, change a value/API/default and add/remove an entry. Prove
   regeneration follows those changes, stale output fails the freshness check,
   and failed extraction preserves the last valid artifact and fails the build.
5. Link the output and real refresh/lookup commands from contributor and agent
   entry points. Report unsupported and unchecked fields alongside checked scope.

The kit's existing [option and specimen checks](../scripts/README.md) verify their
documented contracts. They do not validate a future registry, component API or
the truth of every metadata claim. Preserve the distinction between structural
validity, freshness and rendered behavior.

## Maintain alignment

When changing registry guidance, schema assumptions or refresh behavior, compare
this guide with the consuming project's installed ds-loop playbook/schema and the
[upstream playbook](https://github.com/owaizin/ds-loop/blob/main/skill/reference/registry.md).
Record the reviewed revision and resolve differences explicitly; preserve an
existing suitable project schema. Update this guide's reviewed revision and entry
points together when adopting a changed upstream contract. Source changes require
regeneration or an explicitly stale snapshot, never an unsupported claim of
automatic synchronization.

Done when the requested delivery exists, its scope and verification are recorded,
and its documented refresh path works. This guide establishes the rules; a future
catalog or generator requires its own implementation and evidence.
