import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {contrast,oklchToHex} from './color-math.mjs';
import {validate} from './check-options.mjs';
const load=()=>JSON.parse(readFileSync('foundations/color/options/simple-roles/tokens.json','utf8'));
const css=d=>':root{'+Object.entries(d.tokens).map(([k,v])=>`${k}:${v.value}`).join(';')+'}';
test('WCAG reference contrast and conversion endpoints',()=>{
 assert.equal(contrast('#000000','#ffffff'),21);assert.equal(contrast('#123456','#123456'),1);
 assert.ok(Math.abs(contrast('#777777','#ffffff')-4.478089453577214)<1e-10);
 assert.equal(oklchToHex('oklch(100% 0 none)'),'#ffffff');assert.equal(oklchToHex('oklch(0% 0 0)'),'#000000');
 assert.throws(()=>contrast('#fff8','#ffffff'));
});
test('rejects failing body and UI pairs even when CSS and JSON agree',()=>{
 for(const kind of ['body','ui']){const d=load(),p=d.contrastPairs.find(p=>p.kind===kind);d.tokens[p.fg].value=d.tokens[p.bg].value;assert.throws(()=>validate(d,css(d)),/< /);}
});
test('rejects cross-mode references and incomplete pair coverage',()=>{
 let d=load();d.variants.cool.dark.preview.ink=d.variants.cool.light.preview.ink;assert.throws(()=>validate(d,css(d)),/Cross-variant/);
 d=load();d.contrastPairs=d.contrastPairs.filter(p=>p.mode!=='dark');assert.throws(()=>validate(d,css(d)),/coverage/);
});

test('every imported color matches its pinned source subset and documented conversion',()=>{
 const source=JSON.parse(readFileSync('scripts/sources/color-values.json','utf8'));
 for(const option of ['radix-12-step','tailwind-11-step','functional-roles','simple-roles']){
  const d=JSON.parse(readFileSync(`foundations/color/options/${option}/tokens.json`,'utf8'));
  for(const t of Object.values(d.tokens)){
   if(t.source==='independent'){assert.ok(['#000000','#ffffff'].includes(t.value));continue;}
   const [,family,step]=/^([a-z]+)(\d+)$/.exec(t.sourceToken);
   if(t.source==='radix'){
    const mode=t.sourcePath.includes('dark')?'dark':'light';
    assert.equal(t.sourceValue,source.radix[mode][family][step]);assert.equal(t.value,t.sourceValue);
   }else {assert.equal(t.sourceValue,source.tailwind[family][step]);assert.equal(t.value,oklchToHex(t.sourceValue));}
  }
 }
});
