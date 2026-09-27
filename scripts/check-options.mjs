import { validateColor } from './check-color.mjs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const roles = ['display', 'h1', 'h2', 'h3', 'h4', 'body', 'body-small', 'caption', 'code', 'tabular-numbers'];
const fields = ['size', 'line-height', 'weight', 'letter-spacing', 'family'];
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rem = (value) => {
  assert.match(value, /^\d+(?:\.\d+)?rem$/, `Expected a nonnegative rem dimension: ${value}`);
  return Number.parseFloat(value);
};

// Deliberately narrow grammar: these options contain one :root block of literals.
// Reject extra CSS rather than claiming parity over declarations we did not read.
export function validate(data, css) {
  assert.equal(data.format, 'ds-kit-option-v1');
  if(data.foundation !== 'color') assert.equal(data.rootFontSizePx, 16, 'px equivalence tables assume a 16px reference root');
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '').trim();
  const block = /^:root\s*\{([^{}]*)\}$/.exec(clean);
  assert.ok(block, 'CSS must be a single :root literal-token block');
  const parsed = {};
  for (const declaration of block[1].split(';').map((s) => s.trim()).filter(Boolean)) {
    const match = /^(--ds-[a-z0-9-]+)\s*:\s*(.+)$/.exec(declaration);
    assert.ok(match, `Invalid layer-1 declaration: ${declaration}`);
    assert.ok(!(match[1] in parsed), `Duplicate CSS token: ${match[1]}`);
    assert.doesNotMatch(match[2], /\b(?:var|calc)\s*\(/, 'Layer-1 values must be literal');
    parsed[match[1]] = match[2].trim();
  }
  assert.ok(Object.keys(data.tokens).length > 0, 'No token values');
  if(data.foundation === 'color') return validateColor(data,parsed);
  const expected = {};
  for (const [name, token] of Object.entries(data.tokens)) {
    assert.match(name, /^--ds-[a-z0-9-]+$/);
    assert.equal(typeof token.value, 'string', `${name}: value must retain its CSS unit/spelling`);
    assert.ok(['dimension', 'number', 'fontFamily', 'keyword'].includes(token.type), `${name}: type missing`);
    assert.ok(data.sources[token.source]?.licence, `${name}: source licence missing`);
    assert.ok(token.derivation?.trim(), `${name}: derivation missing`);
    expected[name] = token.value;
  }
  assert.deepEqual(parsed, expected, 'CSS/JSON token values differ');
  const value = (name) => {
    assert.ok(name in expected, `Unknown token reference: ${name}`);
    return expected[name];
  };
  assert.ok(Array.isArray(data.scale) && data.scale.length > 1, 'Ordered scale missing');
  const scale = data.scale.map((name) => rem(value(name)));
  for (let i = 1; i < scale.length; i++) assert.ok(scale[i] > scale[i - 1], 'Scale must strictly increase');
  if (data.foundation === 'typography') {
    assert.deepEqual(Object.keys(data.roles).sort(), [...roles].sort(), 'Typography roles incomplete');
    const sizes = [];
    for (const role of roles) {
      const mapping = data.roles[role];
      for (const field of fields) value(mapping[field]);
      const size = rem(value(mapping.size));
      assert.ok(size > 0, `${role}: size must be positive`);
      sizes.push(size);
      assert.ok(Number.isFinite(Number(value(mapping['line-height']))) && Number(value(mapping['line-height'])) >= 1, `${role}: invalid leading`);
      const weight = Number(value(mapping.weight));
      assert.ok(Number.isInteger(weight) && weight >= 100 && weight <= 900, `${role}: invalid weight`);
      assert.match(value(mapping['letter-spacing']), /^-?\d+(?:\.\d+)?em$/, `${role}: tracking must be em`);
      if (['body', 'body-small'].includes(role)) assert.ok(Number(value(mapping['line-height'])) >= 1.4, `${role}: body leading below 1.4`);
    }
    assert.deepEqual(scale, [...new Set(sizes)].sort((a, b) => a - b), 'Scale must cover every distinct role size');
    const exceptions = new Set();
    for (const exception of data.ratioExceptions ?? []) {
      assert.ok(exception.reason?.trim(), 'Ratio exception needs a reason');
      const index = data.scale.indexOf(exception.to);
      assert.ok(index > 0 && data.scale[index - 1] === exception.from, 'Ratio exception must name an adjacent interval');
      assert.ok(scale[index] / scale[index - 1] < 1.125 - 1e-8, 'Stale/unnecessary ratio exception');
      assert.ok(!exceptions.has(index), 'Duplicate ratio exception');
      exceptions.add(index);
    }
    for (let i = 1; i < scale.length; i++) {
      assert.ok(scale[i] / scale[i - 1] >= 1.125 - 1e-8 || exceptions.has(i), `Type ratio below 1.125: ${data.scale[i - 1]} -> ${data.scale[i]}`);
    }
    for (const [a, b] of [['display', 'h1'], ['h1', 'h2'], ['h2', 'h3'], ['h3', 'h4'], ['h4', 'body']]) {
      assert.ok(rem(value(data.roles[a].size)) > rem(value(data.roles[b].size)), 'Heading hierarchy must descend');
    }
    assert.ok(rem(value('--ds-type-max-reading-width')) > 0, 'Reading measure missing');
    for (const family of ['system', 'inter', 'mono']) value(`--ds-type-family-${family}`);
    assert.equal(value(data.roles['tabular-numbers']['numeric-variant']), 'tabular-nums');
  } else {
    assert.equal(data.foundation, 'spacing', 'Unknown foundation');
    assert.ok(scale.filter((n) => n > 0).length >= 12, 'Spacing needs at least 12 positive steps');
    assert.deepEqual([...data.scale].sort(), Object.keys(expected).sort(), 'Every spacing token must be in the scale');
    assert.deepEqual(Object.keys(data.density).sort(), ['comfortable', 'compact']);
    assert.ok(data.densityDerivation?.trim(), 'Density rationale missing');
    const slots = ['inline-gap', 'control-inset', 'group-gap', 'section-gap', 'page-gutter'];
    for (const mode of ['comfortable', 'compact']) assert.deepEqual(Object.keys(data.density[mode]).sort(), [...slots].sort());
    for (const slot of slots) {
      const a = rem(value(data.density.comfortable[slot]));
      const b = rem(value(data.density.compact[slot]));
      assert.ok(b > 0 && b <= a, `${slot}: compact mapping must be positive and no larger than comfortable`);
    }
  }
  // Native numeric values must agree with the CSS source; they are reference
  // logical units, not device pixels or a reason to disable font scaling.
  assert.equal(data.native?.referenceRootPx, 16, 'Native reference root missing');
  for (const [name, token] of Object.entries(data.tokens)) {
    if (token.value.endsWith('rem')) assert.equal(token.px, rem(token.value) * 16, `${name}: numeric px differs`);
  }
  if (data.foundation === 'typography') {
    for (const role of roles) {
      const mapping = data.roles[role];
      const size = data.tokens[mapping.size].px;
      const tracking = Math.round(Number.parseFloat(value(mapping['letter-spacing'])) * size * 1e8) / 1e8;
      assert.equal(data.tokens[mapping['letter-spacing']].px, tracking, `${role}: tracking px differs`);
      const native = {fontSize: size, lineHeight: Math.round(size * Number(value(mapping['line-height'])) * 1e8) / 1e8, fontWeight: value(mapping.weight), letterSpacing: tracking};
      if (role === 'tabular-numbers') native.fontVariant = ['tabular-nums'];
      assert.deepEqual(data.native.roles[role], native, `${role}: native style differs`);
    }
    assert.equal(data.native.maxReadingWidth, data.tokens['--ds-type-max-reading-width'].px);
  } else {
    assert.deepEqual(data.native.steps, Object.fromEntries(Object.entries(data.tokens).map(([name, token]) => [name, token.px])), 'Native spacing differs');
    assert.deepEqual(data.native.density, Object.fromEntries(Object.entries(data.density).map(([mode, slots]) => [mode, Object.fromEntries(Object.entries(slots).map(([slot, name]) => [slot, data.tokens[name].px]))])), 'Native density differs');
  }
  return Object.keys(expected).length;
}

export function checkAll(directory = root) {
  let count = 0;
  for (const [foundation, names] of Object.entries({ typography: ['compact-ui', 'default-ui', 'editorial'], spacing: ['base-4', 'base-8'], color: ['radix-12-step','tailwind-11-step','functional-roles','simple-roles'] })) {
    const options = join(directory, 'foundations', foundation, 'options');
    const actual = readdirSync(options, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
    assert.deepEqual(actual, [...names].sort(), 'Unexpected option inventory');
    for (const name of names) {
      const folder = join(options, name);
      assert.deepEqual(readdirSync(folder).sort(), ['README.md', 'spec.md', 'tokens.css', 'tokens.json']);
      const data = JSON.parse(readFileSync(join(folder, 'tokens.json'), 'utf8'));
      assert.equal(data.option, name);
      assert.equal(data.foundation, foundation);
      const stylesheet = readFileSync(join(folder, 'tokens.css'), 'utf8');
      const tokens = validate(data, stylesheet);
      const doc = readFileSync(join(folder, 'README.md'), 'utf8');
      for (const exception of data.ratioExceptions ?? []) assert.ok(doc.includes(exception.reason), 'Exception must be documented');
      const recordedHash = /Audited `tokens\.css` SHA-256: `([0-9a-f]{64})`/.exec(doc)?.[1];
      assert.equal(recordedHash, createHash('sha256').update(stylesheet).digest('hex'), 'Audit snapshot is absent or stale; rerun audit and record actual output');
      console.log(`PASS ${foundation}/${name}: ${tokens} literal tokens; ordered scale, constraints, provenance and CSS/JSON parity`);
      count++;
    }
  }
  console.log(`PASS ${count} options. Self-checks exclude rendered web/native behavior.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) checkAll();
