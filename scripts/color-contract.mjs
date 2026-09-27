// Shared, dependency-free colour contract. Native clients can resolve the same aliases.
export const neutrals = ['cool', 'warm', 'pure'];
export const modes = ['light', 'dark'];
export function resolveColor(tokens, name, trail = []) {
  if (trail.includes(name)) throw new Error(`Color alias cycle: ${[...trail,name].join(' → ')}`);
  const t = tokens[name];
  if (!t) throw new Error(`Missing color token: ${name}`);
  const ref = /^var\((--ds-[a-z0-9-]+)\)$/.exec(t.value);
  if (ref) return resolveColor(tokens, ref[1], [...trail,name]);
  if (!/^#[0-9a-f]{6}$/i.test(t.value)) throw new Error(`Unsupported color: ${t.value}`);
  return t.value;
}
export function colorCSS(data, neutral) {
  const block = mode => Object.entries(data.variants[neutral][mode].tokens).map(([n,t])=>`  ${n}: ${t.value};`).join('\n');
  return `/* Example DS. Import ONE neutral file. Source licences and pinned values: README.md and tokens.json. */\n:root, [data-theme="light"] {\n${block('light')}\n}\n[data-theme="dark"] {\n${block('dark')}\n}\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme]) {\n${block('dark')}\n  }\n}\n`;
}
export function tokenFiles(data) { return data.foundation==='color' ? neutrals.map(n=>`tokens.${n}.css`) : ['tokens.css']; }
