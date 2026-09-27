import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { validate } from './check-options.mjs';
const load = (foundation, option) => JSON.parse(readFileSync(new URL(`../foundations/${foundation}/options/${option}/tokens.json`, import.meta.url)));
const css = (data) => ':root {\n' + Object.entries(data.tokens).map(([name, token]) => `${name}: ${token.value};`).join('\n') + '\n}';
const type = () => load('typography', 'compact-ui');
test('rejects CSS/JSON disagreement', () => {
  const d = type(); assert.throws(() => validate(d, css(d).replace('0.875rem', '0.9rem')), /values differ/);
});
test('rejects duplicate declarations, aliases and unparsed CSS', () => {
  const d = type();
  assert.throws(() => validate(d, css(d).replace('}', '--ds-type-body-size: 1rem; }')), /Duplicate/);
  assert.throws(() => validate(d, css(d).replace('0.875rem', 'var(--other)')), /must be literal/);
  assert.throws(() => validate(d, css(d) + '.button { padding: 1px; }'), /single :root/);
});
test('rejects absent role and absent provenance', () => {
  const d = type(); delete d.roles.code; assert.throws(() => validate(d, css(d)), /roles incomplete/);
  const e = type(); delete e.tokens['--ds-type-body-size'].derivation; assert.throws(() => validate(e, css(e)), /derivation/);
});
test('rejects short body leading even if CSS agrees', () => {
  const d = type(); d.tokens['--ds-type-body-line-height'].value = '1.3'; assert.throws(() => validate(d, css(d)), /below 1.4/);
});
test('rejects weak size interval even if CSS agrees', () => {
  const d = type(); d.tokens['--ds-type-h4-size'].value = '0.95rem'; assert.throws(() => validate(d, css(d)), /ratio below/);
});
test('rejects reversed scale, missing steps and invalid density references', () => {
  const d = load('spacing', 'base-8'); d.scale.reverse(); assert.throws(() => validate(d, css(d)), /strictly increase/);
  const e = load('spacing', 'base-8'); e.scale.splice(-2); assert.throws(() => validate(e, css(e)), /12 positive/);
  const f = load('spacing', 'base-8'); f.density.compact['control-inset'] = '--ds-space-99'; assert.throws(() => validate(f, css(f)), /Unknown token/);
});
test('rejects widening compact density', () => {
  const d = load('spacing', 'base-8'); d.density.compact['control-inset'] = '--ds-space-12'; assert.throws(() => validate(d, css(d)), /no larger/);
});

test('rejects stale native px and style values', () => {
  const d = type(); d.tokens['--ds-type-body-size'].px = 99; assert.throws(() => validate(d, css(d)), /numeric px differs/);
  const e = type(); e.native.roles.body.lineHeight = 99; assert.throws(() => validate(e, css(e)), /native style differs/);
  const f = load('spacing', 'base-8'); f.native.density.compact['inline-gap'] = 99; assert.throws(() => validate(f, css(f)), /Native density differs/);
});
