import assert from 'node:assert/strict';
import {contrast,rgb} from './color-math.mjs';
import {resolveColor,neutrals,modes} from './color-contract.mjs';
export function validateColor(data, files) {
  assert.deepEqual(Object.keys(data.variants).sort(),[...neutrals].sort());
  assert.ok(['palette','semantic'].includes(data.kind));
  let names, count=0;
  for(const neutral of neutrals){
    const css=files[`tokens.${neutral}.css`].replace(/\/\*[\s\S]*?\*\//g,'').trim();
    // Deliberately bounded grammar. Read each actual block independently, including
    // the OS fallback; comparing a generated string would not exercise the cascade.
    const blocks=/^:root,\s*\[data-theme="light"\]\s*\{([^{}]*)\}\s*\[data-theme="dark"\]\s*\{([^{}]*)\}\s*@media\s*\(prefers-color-scheme:\s*dark\)\s*\{\s*:root:not\(\[data-theme\]\)\s*\{([^{}]*)\}\s*\}$/.exec(css);
    assert.ok(blocks,'Explicit theme / automatic fallback structure missing');
    const parse=block=>{
      const result={};
      for(const line of block.split(';').map(s=>s.trim()).filter(Boolean)){
        const m=/^(--ds-[a-z0-9-]+)\s*:\s*(.+)$/.exec(line);assert.ok(m,'Invalid declaration');
        assert.ok(!(m[1] in result),'Duplicate declaration');result[m[1]]=m[2].trim();
      }return result;
    };
    assert.deepEqual(Object.keys(data.variants[neutral]).sort(),[...modes].sort());
    for(const [i,mode] of modes.entries()){
      const v=data.variants[neutral][mode],expected={};
      for(const [name,t] of Object.entries(v.tokens)){
        assert.match(name,/^--ds-[a-z0-9-]+$/);
        assert.doesNotMatch(name,/(?:cool|warm|pure|light|dark|radix|tailwind|functional|simple)/,'Unstable public name');
        rgb(resolveColor(v.tokens,name));assert.equal(t.type,'color');assert.ok(t.role?.trim());
        assert.ok(data.sources[t.source]?.licence);assert.ok(t.derivation?.trim());expected[name]=t.value;
      }
      names??=Object.keys(expected).sort();assert.deepEqual(Object.keys(expected).sort(),names,'Variant API differs');
      assert.deepEqual(parse(blocks[i+1]),expected,'Color CSS/JSON mismatch');
      if(mode==='dark')assert.deepEqual(parse(blocks[3]),expected,'Automatic dark fallback differs');
      const roles=[...Object.values(v.roles),...Object.values(v.preview),...Object.values(v.onFill).flatMap(p=>[p.fg,p.bg])];
      for(const name of roles)assert.match(v.tokens[name]?.value??'',/^var\(--ds-[a-z0-9-]+\)$/,'Role must reference palette, never a literal');
      assert.deepEqual(Object.keys(v.preview).sort(),['paper','ink','muted','edge','wash','accent','on-accent','error','success','attention'].sort());
      for(const steps of Object.values(v.ramps)) assert.deepEqual(steps.map(s=>s.step),data.option==='tailwind-11-step'?[50,100,200,300,400,500,600,700,800,900,950]:[1,2,3,4,5,6,7,8,9,10,11,12]);
      if(data.option==='functional-roles')assert.equal(Object.keys(v.roles).length,45);
      for(const [intent,pair] of Object.entries(v.onFill)){
        assert.equal(resolveColor(v.tokens,pair.fg),intent==='attention'?'#000000':'#ffffff','On-fill polarity differs');
        assert.ok(contrast(resolveColor(v.tokens,pair.fg),resolveColor(v.tokens,pair.bg))>=4.5,'On-fill contrast fails');
      }
      const pairs=data.contrastPairs.filter(p=>p.neutral===neutral&&p.mode===mode);
      assert.ok(['body','ui','large'].every(k=>pairs.some(p=>p.kind===k)),'Pair coverage missing');
      for(const p of pairs){
        assert.ok(roles.includes(p.fg)&&roles.includes(p.bg),'Pair references absent role');
        assert.ok(['body','large','ui'].includes(p.kind));
        const ratio=contrast(resolveColor(v.tokens,p.fg),resolveColor(v.tokens,p.bg)),min=p.kind==='body'?4.5:3;
        assert.ok(ratio>=min,`${data.option} ${neutral}/${mode} ${p.label}: ${ratio} < ${min}`);
      }
      count+=Object.keys(expected).length;
    }
  }
  return count;
}
