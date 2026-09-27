import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {contrast,oklchToHex} from './color-math.mjs';
import {resolveColor,colorCSS,neutrals} from './color-contract.mjs';
import {validate} from './check-options.mjs';
const load=()=>JSON.parse(readFileSync('foundations/color/options/simple-roles/tokens.json','utf8'));
const css=d=>Object.fromEntries(neutrals.map(n=>[`tokens.${n}.css`,colorCSS(d,n)]));
test('WCAG reference contrast and conversion endpoints',()=>{
 assert.equal(contrast('#000000','#ffffff'),21);assert.equal(contrast('#123456','#123456'),1);
 assert.ok(Math.abs(contrast('#777777','#ffffff')-4.478089453577214)<1e-10);
 assert.equal(oklchToHex('oklch(100% 0 none)'),'#ffffff');assert.equal(oklchToHex('oklch(0% 0 0)'),'#000000');
 assert.throws(()=>contrast('#fff8','#ffffff'));
});
test('rejects failing body and UI pairs even when CSS and JSON agree',()=>{
 for(const kind of ['body','ui']){const d=load(),p=d.contrastPairs.find(p=>p.kind===kind&&!p.label.includes('on-fill'));const v=d.variants[p.neutral][p.mode];v.tokens[p.fg].value=`var(${p.bg})`;assert.throws(()=>validate(d,css(d)),/< /);}
});
test('rejects incomplete contrast coverage and unstable public names',()=>{
 let d=load();d.contrastPairs=d.contrastPairs.filter(p=>p.mode!=='dark');assert.throws(()=>validate(d,css(d)),/coverage/);
 d=load();d.variants.cool.dark.tokens['--ds-dark-example']={...d.variants.cool.dark.tokens['--ds-black']};assert.throws(()=>validate(d,css(d)),/Unstable/);
});
test('rejects literal role copies, broken references and alias cycles',()=>{
 let d=load(),v=d.variants.cool.light;v.tokens[v.preview.ink].value=resolveColor(v.tokens,v.preview.ink);assert.throws(()=>validate(d,css(d)),/Role must reference/);
 d=load();v=d.variants.cool.light;v.tokens[v.preview.ink].value='var(--ds-missing)';assert.throws(()=>validate(d,css(d)),/Missing color/);
 d=load();v=d.variants.cool.light;v.tokens[v.preview.ink].value=`var(${v.preview.ink})`;assert.throws(()=>validate(d,css(d)),/cycle/);
});
test('rejects wrong automatic dark values and selectors that override explicit light',()=>{
 const d=load(),files=css(d);files['tokens.cool.css']=files['tokens.cool.css'].replace(':root:not([data-theme])',':root');assert.throws(()=>validate(d,files),/fallback structure/);
 const wrong=css(d);const key=d.variants.cool.dark.preview.paper;const value=d.variants.cool.dark.tokens[key].value;
 const i=wrong['tokens.cool.css'].indexOf('@media');wrong['tokens.cool.css']=wrong['tokens.cool.css'].slice(0,i)+wrong['tokens.cool.css'].slice(i).replace(`${key}: ${value}`,`${key}: #ffffff`);
 assert.throws(()=>validate(d,wrong),/fallback differs/);
});
test('all neutral files resolve aliases and keep the same mode-independent API',()=>{
 for(const option of ['radix-12-step','tailwind-11-step','functional-roles','simple-roles']){
  const d=JSON.parse(readFileSync(`foundations/color/options/${option}/tokens.json`,'utf8'));
  const files=Object.fromEntries(neutrals.map(n=>[`tokens.${n}.css`,readFileSync(`foundations/color/options/${option}/tokens.${n}.css`,'utf8')]));
  assert.ok(validate(d,files)>0);
 }
});

test('every imported color matches its pinned source subset and documented conversion',()=>{
 const source=JSON.parse(readFileSync('scripts/sources/color-values.json','utf8'));
 for(const option of ['radix-12-step','tailwind-11-step','functional-roles','simple-roles']){
  const d=JSON.parse(readFileSync(`foundations/color/options/${option}/tokens.json`,'utf8'));
  for(const v of Object.values(d.variants).flatMap(m=>Object.values(m)))for(const t of Object.values(v.tokens)){
   if(t.source==='independent'){assert.ok(['#000000','#ffffff'].includes(t.value)||/^var\(--ds-/.test(t.value));continue;}
   const [,family,step]=/^([a-z]+)(\d+)$/.exec(t.sourceToken);
   if(t.source==='radix'){
    const mode=t.sourcePath.includes('dark')?'dark':'light';
    assert.equal(t.sourceValue,source.radix[mode][family][step]);assert.equal(t.value,t.sourceValue);
   }else {assert.equal(t.sourceValue,source.tailwind[family][step]);assert.equal(t.value,oklchToHex(t.sourceValue));}
  }
 }
});
