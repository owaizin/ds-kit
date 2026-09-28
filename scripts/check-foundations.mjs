import assert from 'node:assert/strict';
import {contrast,rgb} from './color-math.mjs';
export const foundationInventory={radius:['sharp','soft','round'],elevation:['shadow-led','border-led'],motion:['productive','expressive'],'z-index':['named-layers'],'breakpoints-grid':['content-first','app-shell'],'borders-opacity':['functional'],'focus-accessibility':['visible-ring']};
export function validateFoundation(d,css){
 assert.equal(d.contract,'foundation-v1');assert.equal(d.rootFontSizePx,16);
 const clean=css.replace(/\/\*[\s\S]*?\*\//g,'').trim();
 const match=/^:root\s*\{([^{}]*)\}(?:\s*@media\s*\(prefers-reduced-motion: reduce\)\s*\{\s*:root\s*\{([^{}]*)\}\s*\})?$/.exec(clean);
 assert.ok(match,'Unsupported CSS or missing reduced-motion rule');
 const parse=s=>Object.fromEntries(s.split(';').map(s=>s.trim()).filter(Boolean).map(line=>{const m=/^(--ds-[a-z0-9-]+)\s*:\s*(.+)$/.exec(line);assert.ok(m,'Invalid token');return [m[1],m[2]];}));
 const expected=Object.fromEntries(Object.entries(d.tokens).map(([n,t])=>[n,t.value]));
 assert.deepEqual(parse(match[1]),expected,'CSS/JSON mismatch');
 assert.equal(match[1].split(';').filter(s=>s.trim()).length,Object.keys(expected).length,'Duplicate declaration');
 for(const [name,t] of Object.entries(d.tokens)){
  assert.match(name,/^--ds-[a-z0-9-]+$/);assert.ok(d.sources[t.source]?.licence);assert.ok(t.derivation?.trim());
  if(t.type==='dimension'){assert.match(t.value,/^\d+(\.\d+)?rem$/);assert.equal(t.px,Number.parseFloat(t.value)*16,'Native px mismatch');}
  else if(t.type==='number'){assert.ok(Number.isFinite(Number(t.value)));assert.equal(t.number,Number(t.value),'Native number mismatch');}
  else if(t.type==='duration'){assert.match(t.value,/^\d+ms$/);assert.equal(t.ms,parseInt(t.value),'Native ms mismatch');}
  else if(t.type==='color')rgb(t.value);
  else if(t.type==='easing'){const m=/^cubic-bezier\(([^)]+)\)$/.exec(t.value);assert.ok(m);const b=m[1].split(',').map(Number);assert.equal(b.length,4);assert.ok(b.every(Number.isFinite));assert.ok(b[0]>=0&&b[0]<=1&&b[2]>=0&&b[2]<=1,'Invalid Bezier x');assert.deepEqual(t.bezier,b);}
  else assert.ok(['keyword','shadow'].includes(t.type),'Unknown type');
 }
 const v=n=>{assert.ok(d.tokens[n],`Missing ${n}`);return d.tokens[n];};
 const increasing=xs=>xs.forEach((x,i)=>{assert.ok(Number.isFinite(x));if(i)assert.ok(x>xs[i-1],'Scale must increase');});
 switch(d.foundation){
  case 'radius':{
   assert.deepEqual(Object.keys(d.roles),['small','medium','large','full']);const xs=Object.values(d.roles).map(n=>v(n).px);increasing(xs);assert.ok(xs[0]>=0);assert.equal(xs[3],9999);
   assert.deepEqual(d.native.radii,Object.fromEntries(Object.entries(d.roles).map(([r,n])=>[r,v(n).px])));break;
  }
  case 'elevation':{
   assert.deepEqual(Object.keys(d.roles),['raised','overlay','modal']);
   const depths=[];
   for(const [role,n] of Object.entries(d.roles)){
    const shadow=v(n).value;const lobes=shadow==='none'?[]:shadow.split(', ').map(s=>{const m=/^([\d.]+)rem ([\d.]+)rem ([\d.]+)rem ([\d.]+)rem rgb\(0 0 0 \/ ([\d.]+)\)$/.exec(s);assert.ok(m,'Shadow grammar');const [x,y,blur,spread,opacity]=m.slice(1).map(Number);assert.ok(opacity>0&&opacity<=1);return {x:x*16,y:y*16,blur:blur*16,spread:spread*16,opacity,color:'#000000'};});
    assert.deepEqual(d.native.shadows[role],lobes,'Native shadow mismatch');assert.ok(v(`--ds-elevation-edge-${role}`).px>=1);
    if(d.option==='shadow-led'){assert.equal(lobes.length,2);depths.push(lobes[1].blur);}else assert.equal(lobes.length,0);
   }increasing(depths);break;
  }
  case 'motion':{
   const rs=['fast','standard','deliberate'];const ms=rs.map(r=>v(d.roles[r]).ms);increasing(ms);assert.ok(ms[0]>0&&ms.at(-1)<=500,'Motion budget outside declared range');
   const reduced=Object.fromEntries(rs.map(r=>[d.roles[r],'0ms']));reduced['--ds-motion-distance']='0rem';assert.deepEqual(d.reducedMotion,reduced,'Reduced motion must remove all duration and travel');assert.ok(match[2],'Missing reduced-motion rule');assert.deepEqual(parse(match[2]),reduced);
   assert.deepEqual(d.native.durations,Object.fromEntries(rs.map((r,i)=>[r,ms[i]])));assert.deepEqual(d.native.reducedDurations,{fast:0,standard:0,deliberate:0});assert.equal(d.native.distance,v('--ds-motion-distance').px);assert.deepEqual(d.native.easing,{enter:v('--ds-motion-ease-enter').bezier,exit:v('--ds-motion-ease-exit').bezier});break;
  }
  case 'z-index':{
   assert.deepEqual(Object.keys(d.roles),['base','dropdown','sticky','overlay','modal','toast','tooltip']);const xs=Object.values(d.roles).map(n=>v(n).number);increasing(xs);assert.equal(xs[0],0);assert.ok(xs.every(Number.isInteger));assert.deepEqual(d.native.layers,Object.fromEntries(Object.entries(d.roles).map(([r,n])=>[r,v(n).number])));break;
  }
  case 'breakpoints-grid':{
   const xs=d.breakpoints.map(n=>v(n).px);assert.equal(xs.length,3);increasing(xs);assert.equal(d.columns.length,4);increasing(d.columns);assert.ok(d.columns.every(Number.isInteger));assert.equal(d.columns[0],1);assert.deepEqual(d.native.breakpoints,xs);assert.deepEqual(d.native.columns,d.columns);
   for(const [key,n] of [['maxWidth','max'],['gap','gap'],['gutter','gutter']])assert.equal(d.native[key],v(`--ds-grid-${n}`).px);
   d.columns.forEach((n,i)=>assert.equal(v(`--ds-grid-columns-${i}`).number,n));assert.ok(d.native.gutter*2<320,'Gutters consume narrow content');break;
  }
  case 'borders-opacity':{
   const rs=['none','hairline','strong','emphasis'];const xs=rs.map(r=>v(d.roles[r]).px);increasing(xs);assert.equal(xs[0],0);assert.deepEqual(d.native.widths,Object.fromEntries(rs.map((r,i)=>[r,xs[i]])));
   for(const r of ['disabled','overlay','hover','pressed']){const n=v(`--ds-opacity-${r}`).number;assert.ok(n>=0&&n<=1,'Opacity out of range');assert.equal(d.native.opacity[r],n);}
   for(const r of ['solid','dashed','dotted'])assert.equal(v(`--ds-border-style-${r}`).value,r);break;
  }
  case 'focus-accessibility':{
   assert.ok(v('--ds-focus-width').px>=2);assert.ok(v('--ds-focus-offset').px>=2);assert.ok(v('--ds-focus-target-min').px>=44);
   assert.equal(d.contrastPairs.length,8);const expectedPairs=['--ds-focus-ring','--ds-focus-ring-alternate'].flatMap(fg=>['light','light-muted','dark','dark-muted'].map(s=>`${fg}/${'--ds-focus-surface-'+s}`));
   assert.deepEqual(d.contrastPairs.map(p=>`${p.fg}/${p.bg}`).sort(),expectedPairs.sort());
   for(const p of d.contrastPairs){assert.equal(p.minimum,3);assert.ok(contrast(v(p.fg).value,v(p.bg).value)>=3,'Focus contrast below 3:1');}
   assert.equal(d.native.ringWidth,v('--ds-focus-width').px);assert.equal(d.native.ringOffset,v('--ds-focus-offset').px);assert.equal(d.native.minimumTarget,v('--ds-focus-target-min').px);assert.deepEqual(d.native.ringColors,[v('--ds-focus-ring').value,v('--ds-focus-ring-alternate').value]);break;
  }
  default:throw new Error(`Unsupported foundation ${d.foundation}`);
 }
 if(d.foundation!=='motion')assert.ok(!match[2]&&!d.reducedMotion,'Unexpected mode override');
 return Object.keys(expected).length;
}
