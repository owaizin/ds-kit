import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {validateFoundation,foundationInventory} from './check-foundations.mjs';
const load=(f,o)=>JSON.parse(readFileSync(`foundations/${f}/options/${o}/tokens.json`,'utf8'));
const css=d=>':root{'+Object.entries(d.tokens).map(([n,t])=>`${n}:${t.value};`).join('')+'}'+(d.reducedMotion?'@media (prefers-reduced-motion: reduce){:root{'+Object.entries(d.reducedMotion).map(([n,v])=>`${n}:${v};`).join('')+'}}':'');
test('all foundation options satisfy their independent contracts and actual CSS',()=>{
 for(const [f,options] of Object.entries(foundationInventory))for(const o of options)assert.ok(validateFoundation(load(f,o),readFileSync(`foundations/${f}/options/${o}/tokens.css`,'utf8'))>0);
});
test('radius and stacking reject inversions and stale native mappings',()=>{
 let d=load('radius','soft');d.tokens['--ds-radius-medium'].value='0rem';d.tokens['--ds-radius-medium'].px=0;assert.throws(()=>validateFoundation(d,css(d)),/increase/);
 d=load('z-index','named-layers');d.native.layers.modal=999;assert.throws(()=>validateFoundation(d,css(d)));
});
test('motion rejects missing reduction, residual movement and invalid curves',()=>{
 let d=load('motion','productive');assert.throws(()=>validateFoundation(d,css(d).replace(/@media[\s\S]*/,'')),/Missing reduced/);
 d.reducedMotion['--ds-motion-distance']='1rem';assert.throws(()=>validateFoundation(d,css(d)),/remove all/);
 d=load('motion','expressive');d.tokens['--ds-motion-ease-enter'].value='cubic-bezier(2,0,0,1)';assert.throws(()=>validateFoundation(d,css(d)),/Bezier/);
});
test('elevation rejects CSS/native shadow disagreement',()=>{
 const d=load('elevation','shadow-led');d.native.shadows.modal[0].blur=1;assert.throws(()=>validateFoundation(d,css(d)),/Native shadow/);
});
test('grid rejects unordered thresholds and mismatched column maps',()=>{
 let d=load('breakpoints-grid','app-shell');d.breakpoints.reverse();assert.throws(()=>validateFoundation(d,css(d)),/increase/);
 d=load('breakpoints-grid','content-first');d.tokens['--ds-grid-columns-2'].value='9';d.tokens['--ds-grid-columns-2'].number=9;assert.throws(()=>validateFoundation(d,css(d)));
});
test('opacity rejects invalid compositing values even with matching CSS',()=>{
 const d=load('borders-opacity','functional');d.tokens['--ds-opacity-overlay'].value='1.2';d.tokens['--ds-opacity-overlay'].number=1.2;assert.throws(()=>validateFoundation(d,css(d)),/Opacity/);
});
test('focus rejects failed contrast, missing dark pairs and an undersized ring',()=>{
 let d=load('focus-accessibility','visible-ring');d.tokens['--ds-focus-ring'].value='#ffffff';assert.throws(()=>validateFoundation(d,css(d)),/contrast/);
 d=load('focus-accessibility','visible-ring');d.contrastPairs=d.contrastPairs.filter(p=>!p.bg.endsWith('dark'));assert.throws(()=>validateFoundation(d,css(d)));
 d=load('focus-accessibility','visible-ring');d.tokens['--ds-focus-width'].value='0.0625rem';d.tokens['--ds-focus-width'].px=1;assert.throws(()=>validateFoundation(d,css(d)));
});

test('brand-blue rings clear both modes and dropdown stays above sticky',()=>{
 const d=load('focus-accessibility','brand-blue');
 validateFoundation(d,css(d));
 for(const n of ['--ds-focus-ring','--ds-focus-ring-alternate']) {
  const c=d.tokens[n].value; assert.notEqual(c.slice(1,3),c.slice(5,7),'Ring must be coloured');
 }
 const stack=load('z-index','named-layers');
 assert.ok(stack.native.layers.dropdown>stack.native.layers.sticky);
});
