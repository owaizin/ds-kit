import assert from 'node:assert/strict';
import {contrast,rgb} from './color-math.mjs';
export function validateColor(data, parsed) {
  assert.deepEqual(Object.keys(data.variants).sort(),['cool','pure','warm']);
  assert.ok(['palette','semantic'].includes(data.kind));
  const expected={};
  for(const [name,t] of Object.entries(data.tokens)){
    rgb(t.value);assert.equal(t.type,'color');assert.ok(t.role?.trim());
    assert.ok(data.sources[t.source]?.licence);assert.ok(t.derivation?.trim());expected[name]=t.value;
  }
  assert.deepEqual(parsed,expected,'Color CSS/JSON mismatch');
  const referenced=new Set();
  for(const [neutral,modes] of Object.entries(data.variants)){
    assert.deepEqual(Object.keys(modes).sort(),['dark','light']);
    for(const [mode,v] of Object.entries(modes)){
      const refs=[...Object.values(v.preview),...Object.values(v.roles),...Object.values(v.ramps).flat().map(s=>s.token)];
      for(const name of refs){assert.ok(name.includes(`-${neutral}-${mode}-`),'Cross-variant token reference');assert.ok(name in expected,'Missing variant token');referenced.add(name);}
      assert.deepEqual(Object.keys(v.preview).sort(),['paper','ink','muted','edge','wash','accent','on-accent','error','success','attention'].sort());
      if(data.kind==='palette') for(const steps of Object.values(v.ramps)) assert.deepEqual(steps.map(s=>s.step),data.option==='radix-12-step'?[1,2,3,4,5,6,7,8,9,10,11,12]:[50,100,200,300,400,500,600,700,800,900,950]);
      if(data.option==='functional-roles') assert.equal(Object.keys(v.roles).length,45);
      const pairs=data.contrastPairs.filter(p=>p.neutral===neutral&&p.mode===mode);
      assert.ok(pairs.some(p=>p.kind==='body')&&pairs.some(p=>p.kind==='ui')&&pairs.some(p=>p.kind==='large'),'Pair coverage missing');
      for(const p of pairs){assert.ok(refs.includes(p.fg)&&refs.includes(p.bg),'Pair crosses variant');assert.ok(['body','large','ui'].includes(p.kind));
        const ratio=contrast(expected[p.fg],expected[p.bg]),min=p.kind==='body'?4.5:3;
        assert.ok(ratio>=min,`${data.option} ${neutral}/${mode} ${p.label}: ${ratio} < ${min}`);
      }
    }
  }
  assert.equal(referenced.size,Object.keys(expected).length,'Unreachable color token');
  return Object.keys(expected).length;
}
