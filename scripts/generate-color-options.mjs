import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {contrast,oklchToHex} from './color-math.mjs';
const source=JSON.parse(readFileSync(new URL('./sources/color-values.json',import.meta.url),'utf8'));
const radixRev=source.sources.radix.revision,twRev=source.sources.tailwind.revision;
const sources={radix:{licence:'MIT',revision:radixRev,url:`https://github.com/radix-ui/colors/tree/${radixRev}/src`},tailwind:{licence:'MIT',revision:twRev,url:`https://github.com/tailwindlabs/tailwindcss/blob/${twRev}/packages/tailwindcss/theme.css`},independent:{licence:'Original kit material',derivation:'Original role assignments and opaque sRGB black/white endpoints.'},primer:{licence:'MIT',revision:'f48bc063f7bc0fb3e447386a8c259650ce46dea8',url:'https://github.com/primer/primitives/blob/f48bc063f7bc0fb3e447386a8c259650ce46dea8/src/tokens/functional/color/fgColor.json5',use:'Role-separation influence only; no Primer values or prose copied.'}};
const radixRoles=['Canvas','Quiet surface','Control surface','Hover surface','Selected surface','Decorative separator','Control edge / focus candidate','Stronger edge','Solid fill','Solid hover','Secondary text candidate','Primary text'];
const labels={neutral:'neutral',accent:'blue',success:'green',attention:'amber',danger:'red'};
const neutralNames={radix:{cool:'slate',warm:'sand',pure:'gray'},tailwind:{cool:'slate',warm:'stone',pure:'neutral'}};
const choose=(candidates,bgs,min)=>{const found=candidates.find(c=>bgs.every(b=>contrast(c.value,b.value)>=min));if(!found)throw new Error('No source step meets declared contrast');return found;};
const original=value=>({value,source:'independent',derivation:'Opaque sRGB endpoint.'});
for(const option of ['radix-12-step','tailwind-11-step','functional-roles','simple-roles']){
 const palette=option.includes('step'),model=option==='tailwind-11-step'?'tailwind':'radix';
 const data={format:'ds-kit-option-v1',foundation:'color',option,kind:palette?'palette':'semantic',sources,tokens:{},variants:{},contrastPairs:[]};
 for(const neutral of ['cool','warm','pure']){data.variants[neutral]={};for(const mode of ['light','dark']){
  const prefix=`--ds-color-${option}-${neutral}-${mode}`;
  const variant={ramps:{},roles:{},preview:{}};data.variants[neutral][mode]=variant;
  function token(id,color,role){const name=prefix+'-'+id;data.tokens[name]={...color,type:'color',role};return name;}
  function addPair(fg,bg,kind,label){data.contrastPairs.push({neutral,mode,fg,bg,kind,label});}
  const ramps={};
  for(const [intent,hue] of Object.entries(labels)){
   const family=intent==='neutral'?neutralNames[model][neutral]:hue;
   const values=model==='radix'?source.radix[mode][family]:source.tailwind[family];
   ramps[intent]=Object.entries(values).map(([step,value])=>({step:Number(step),value:model==='tailwind'?oklchToHex(value):value,source:model,sourceValue:value,sourceToken:family+step,sourcePath:model==='radix'?`src/${mode}.ts`:'packages/tailwindcss/theme.css',derivation:model==='radix'?'Pinned opaque sRGB value unchanged.':'Pinned OKLCH converted to sRGB, clipped in linear RGB and rounded to 8-bit channels; wide-gamut fidelity is not claimed.'}));
   if(palette) variant.ramps[intent]=ramps[intent].map(c=>({step:c.step,token:token(intent+'-'+c.step,c,model==='radix'?radixRoles[c.step-1]:`Tone ${c.step}; role assigned separately`)}));
  }
  const oriented=r=>model==='radix'||mode==='light'?r:[...r].reverse();
  const neutralRamp=oriented(ramps.neutral), paper=neutralRamp[0],wash=neutralRamp[2];
  const text=choose([...neutralRamp].reverse(),[paper,wash],4.5);
  const muted=choose(neutralRamp.slice(model==='radix'?10:5),[paper,wash],4.5);
  const edge=choose(neutralRamp.slice(6),[paper,wash],3);
  const status={};
  for(const intent of ['neutral','accent','success','attention','danger']){
   const r=oriented(ramps[intent]),bgDefault=r[1],bgMuted=r[2],bgEmphasis=r[model==='radix'?8:5];
   const fgDefault=choose([...r].reverse(),[bgDefault,bgMuted,paper],4.5),fgMuted=choose(r.slice(model==='radix'?10:5),[bgDefault,bgMuted,paper],4.5);
   const fgEmphasis=choose([original('#ffffff'),original('#000000')],[bgEmphasis],4.5);
   const border=choose(r.slice(6),[bgDefault,bgMuted,paper],3);
   status[intent]={bgDefault,bgMuted,bgEmphasis,fgDefault,fgMuted,fgEmphasis,border};
   if(option==='functional-roles'){
    const map={'fg-default':fgDefault,'fg-muted':fgMuted,'fg-emphasis':fgEmphasis,'bg-default':bgDefault,'bg-muted':bgMuted,'bg-emphasis':bgEmphasis,'border-default':border,'border-muted':border,'border-emphasis':border};
    for(const [role,c] of Object.entries(map)) variant.roles[`${role}-${intent}`]=token(`${role}-${intent}`,c,`${role} / ${intent}`);
    for(const f of ['default','muted'])for(const b of ['default','muted'])addPair(variant.roles[`fg-${f}-${intent}`],variant.roles[`bg-${b}-${intent}`],'body',`${intent}: ${f} text / ${b} surface`);
    addPair(variant.roles[`fg-emphasis-${intent}`],variant.roles[`bg-emphasis-${intent}`],'body',`${intent}: text on emphasis`);
    for(const b of ['default','muted','emphasis'])addPair(variant.roles[`border-${b}-${intent}`],variant.roles[`bg-default-${intent}`],'ui',`${intent}: ${b} control edge`);
   }
  }
  const previewValues={paper,ink:text,muted,edge,wash,accent:status.accent.bgEmphasis,'on-accent':status.accent.fgEmphasis,error:status.danger.fgDefault,success:status.success.fgDefault,attention:status.attention.fgDefault};
  for(const [role,c] of Object.entries(previewValues)){
   const simpleName={paper:'surface-default',wash:'surface-muted',ink:'text-default',muted:'text-muted',edge:'border-control',accent:'brand-fill','on-accent':'brand-on-fill',error:'status-danger',success:'status-success',attention:'status-attention'}[role];
   variant.preview[role]=token(palette?'example-'+simpleName:simpleName,c,`Example ${simpleName}`);
   if(option==='simple-roles')variant.roles[simpleName]=variant.preview[role];
  }
  for(const bg of ['paper','wash'])for(const fg of ['ink','muted','error','success','attention'])addPair(variant.preview[fg],variant.preview[bg],'body',`${fg} on ${bg}`);
  addPair(variant.preview['on-accent'],variant.preview.accent,'body','Action label');
  addPair(variant.preview.edge,variant.preview.paper,'ui','Control boundary');
  addPair(variant.preview.ink,variant.preview.paper,'large','Large heading');
 }}
 // Verify unrounded ratios before recording anything.
 for(const p of data.contrastPairs){const ratio=contrast(data.tokens[p.fg].value,data.tokens[p.bg].value);if(ratio<(p.kind==='body'?4.5:3))throw new Error(`${option}: ${p.label} ${p.neutral}/${p.mode} fails ${ratio}`);}
 const folder=`foundations/color/options/${option}`;mkdirSync(folder,{recursive:true});
 writeFileSync(folder+'/tokens.json',JSON.stringify(data,null,2)+'\n');
 writeFileSync(folder+'/tokens.css',`/* Example DS upstream color snapshot. ${model==='radix'?'Radix Colors MIT':'Tailwind CSS MIT, sRGB derivative'}; see README and LICENSES. Import one selected option. */\n:root {\n`+Object.entries(data.tokens).map(([n,t])=>`  ${n}: ${t.value};`).join('\n')+'\n}\n');
 const prior=existsSync(folder+'/README.md')?readFileSync(folder+'/README.md','utf8'):'';
 const audit=prior.match(/<!-- audit:start -->[\s\S]*?<!-- audit:end -->/)?.[0]??'<!-- audit:start -->\nPending actual audit.\n<!-- audit:end -->';
 const table=Object.entries(data.tokens).map(([n,t])=>`| \`${n}\` | ${t.value} | ${t.role} | ${t.source}: ${t.sourceToken??'sRGB endpoint'} |`).join('\n');
 const pairs=data.contrastPairs.map(p=>`| ${p.neutral}/${p.mode} | ${p.label} | ${contrast(data.tokens[p.fg].value,data.tokens[p.bg].value).toFixed(3)} | ${p.kind==='body'?4.5:3} |`).join('\n');
 writeFileSync(folder+'/README.md',`# ${option}\n\n${palette?'A source palette with explicitly separate example role mappings.':'A named role contract with literal upstream snapshots; project aliases remain layer 2.'}\n\n## Rationale\n\n${model==='radix'?'Radix provides separate light and dark ramps. The 12 step jobs are retained; descriptive labels are paraphrased.':'Tailwind keeps steps 50–950 in both modes. The palette values do not invert or change; independently chosen role mappings select different steps for light/dark.'} Cool/warm/pure neutrals select ${Object.values(neutralNames[model]).join('/')}. Accent/success/attention/danger use blue/green/amber/red. ${option==='functional-roles'?'The fg/bg/border × default/muted/emphasis × neutral/accent/success/attention/danger names are our own contract, with Primer as role-separation influence. Equal control-edge values across emphasis slots are intentional: state differentiation needs more than color.':''}\n\nRole selection chooses source steps that meet declared pairs; it does not alter imported ramp values. Example mappings are independently derived. Body text is checked at 4.5:1, large text and control edges at 3:1. Decorative borders in a raw ramp have no implicit contrast promise. Large text means at least 24 CSS px regular or about 18.67px bold; otherwise use the body requirement. Only listed opaque pairs are covered, not overlays, images, disabled controls, arbitrary combinations or full WCAG conformance.\n\n## When to use / when not\n\n${palette?'Use when a team needs a ramp to define its own roles. Do not apply palette steps directly in components or assume every pair is accessible.':'Use when a team wants a concrete starting role vocabulary. Do not add a competing contract to an already coherent naming system.'} Adopt one neutral family per product, preserve mode semantics and verify actual consumers. Status meaning must also be conveyed by words or symbols.\n\n## Platforms and source\n\nWeb and native share opaque six-digit sRGB strings. CSS contains literal layer-1 --ds-* declarations; JSON names every mode/neutral explicitly. Select a variant through project aliases, with fallbacks, rather than importing all variants as component API. Native can consume the same hex strings; rendered native behavior is unverified.\n\n${model==='radix'?`[Radix source](${sources.radix.url}), revision ${radixRev}, MIT; values unchanged from src/light.ts and src/dark.ts. [Notice](../../../../LICENSES/Radix-Colors-MIT.txt).`:`[Tailwind source](${sources.tailwind.url}), revision ${twRev}, MIT. Values converted from OKLCH to clipped, byte-rounded sRGB. Original sourceValue is retained per token; scripts/color-math.mjs shows the derivation. This is not an exact wide-gamut reproduction. [Notice](../../../../LICENSES/Tailwind-CSS-MIT.txt).`} ${option==='functional-roles'?`[Primer influence](${sources.primer.url}), MIT, no values/prose copied. [Notice](../../../../LICENSES/Primer-Primitives-MIT.txt).`:''} Checked 2026-09-28. Black/white endpoints, role naming and mappings independently derived.\n\n## Values\n\n| Token | sRGB | Role | Source per value |\n|---|---|---|---|\n${table}\n\n## Declared contrast pairs\n\nComputed using [WCAG 2 relative luminance](https://www.w3.org/TR/WCAG22/#dfn-relative-luminance). JSON carries exact foreground/background token names. The checker compares full precision; this table rounds only display.\n\n| Variant | Pair | Ratio | Minimum |\n|---|---|---|---|\n${pairs}\n\n${audit}\n`);
 writeFileSync(folder+'/spec.md',`# Colour: ${option}\n\n## 1. Metadata\n\nDraft option; owner/reviewer unassigned. Destination: specs/foundations/color.md. Record kit revision and chosen neutral/mode mappings.\n\n## 2. Overview\n\n${palette?'Palette steps are inputs to a project role contract.':'Role vocabulary separates content, surfaces, edges and intent.'} See README for sources and fit.\n\n## 3. Anatomy\n\nUpstream literal → project alias with fallback → component consumer. This denotes value consumption, not organizational ownership.\n\n## 4. Tokens used\n\n[JSON](tokens.json) and [CSS](tokens.css) contain identical opaque values. Select cool, warm or pure neutrals and both modes. Keep step jobs intact; the example preview map is not the complete project contract.\n\n## 5. Props/API\n\nImport one colour option. Map the chosen variant to project aliases. JSON hex values are usable by native color props. No automatic theme manager or component is supplied.\n\n## 6. States\n\nCheck light/dark, focus, hover, pressed, error and text scaling in real consumers. Declared contrast pairs are measured; arbitrary pairs and full accessibility are unverified. Use status labels in addition to color.\n\n## 7. Code example\n\n\`\`\`css\n:root { --color-text: var(${data.variants.cool.light.preview.ink}, ${data.tokens[data.variants.cool.light.preview.ink].value}); }\n[data-theme="dark"] { --color-text: var(${data.variants.cool.dark.preview.ink}, ${data.tokens[data.variants.cool.dark.preview.ink].value}); }\np { color: var(--color-text, #202020); }\n\`\`\`\n\n## 8. Cross-references\n\n[Values, derivation, pairs and audit](README.md); [specimens](../../../../specimens/index.html). Project decision, actual consumers and rendered verification remain the adopting team's record.\n`);
 console.log(`${option}: ${Object.keys(data.tokens).length} tokens, ${data.contrastPairs.length} declared pairs`);
}
