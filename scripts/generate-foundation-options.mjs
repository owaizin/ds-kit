import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {contrast} from './color-math.mjs';
const output=[];
const original={licence:'Original kit material',derivation:'Independently derived values; no upstream token values or prose copied.'};
const token=(value,type,derivation,extra={})=>({value,type,source:'independent',derivation,...extra});
const length=(px,derivation)=>token(`${px/16}rem`,'dimension',derivation,{px});
const number=(v,derivation)=>token(String(v),'number',derivation,{number:v});
function option(foundation,name,rationale,use,avoid){const d={format:'ds-kit-option-v1',foundation,option:name,contract:'foundation-v1',rootFontSizePx:16,sources:{independent:original},rationale,use,avoid,tokens:{},roles:{},native:{referenceRootPx:16},guidance:[],example:''};output.push(d);return d;}
for(const [name,steps] of Object.entries({sharp:[0,2,4],soft:[4,8,12],round:[8,16,24]})){
 const d=option('radius',name,`${name} uses ${steps.join('/')}px corners for small controls, cards and large panels. Full rounding is reserved for pills.`,name==='sharp'?'Dense operational tools with rectangular grouping.':name==='soft'?'General product UI with restrained corners.':'Friendly products with generous component geometry.','Do not change existing component corners without checking nested shapes and clipping. Full rounding does not make every rectangle a suitable pill.');
 for(const [i,role] of ['small','medium','large'].entries()){const n=`--ds-radius-${role}`;d.tokens[n]=length(steps[i],`${name}: ${role} corner independently selected from a 2px grid.`);d.roles[role]=n;}
 d.tokens['--ds-radius-full']=length(9999,'Oversized radius is clamped by CSS to half the box dimensions; not a layout size.');d.roles.full='--ds-radius-full';
 d.native.radii=Object.fromEntries(Object.entries(d.roles).map(([r,n])=>[r,d.tokens[n].px]));
 d.guidance=['Small: 28–40px controls; medium: cards and 40–56px controls; large: larger panels. These are starting roles, not automatic size rules.','Nested corners need a radius consistent with their inset; do not blindly repeat the outer radius.'];
 d.example='.example-card { border-radius: var(--radius-card, 8px); }';
}
for(const name of ['shadow-led','border-led']){
 const d=option('elevation',name,name==='shadow-led'?'Two shadow lobes separate a near contact edge from a broad ambient shadow.':'Borders communicate containment; shadows are deliberately absent.','Choose for raised surfaces, overlays and modal containers with explicit ordering.','Do not use shadows as the sole boundary in dark themes or high contrast. Elevation is not z-index and does not escape ancestor stacking contexts.');
 const levels={raised:[[0,1,2,0,.12],[0,2,6,0,.08]],overlay:[[0,4,12,0,.14],[0,12,24,0,.10]],modal:[[0,8,24,0,.16],[0,24,64,0,.12]]};d.native.shadows={};
 for(const [role,lobes] of Object.entries(levels)){
  const n=`--ds-elevation-${role}`,list=name==='border-led'?[]:lobes.map(([x,y,blur,spread,opacity])=>({x,y,blur,spread,opacity,color:'#000000'}));
  const value=list.length?list.map(l=>`${l.x/16}rem ${l.y/16}rem ${l.blur/16}rem ${l.spread/16}rem rgb(0 0 0 / ${l.opacity})`).join(', '):'none';
  d.tokens[n]=token(value,'shadow','Original two-lobe geometry increases offset and blur by level; opacity stays below 0.2 per lobe.');d.roles[role]=n;d.native.shadows[role]=list;
  d.tokens[`--ds-elevation-edge-${role}`]=length(name==='border-led'&&role==='modal'?2:1,'A visible edge survives surfaces where black shadows have little contrast.');
 }
 d.tokens['--ds-elevation-edge-color']=token('#777777','color','Independent middle grey boundary; recheck against adopted surfaces.');
 d.guidance=['Raised: local cards; overlay: menus/popovers; modal: a dialog container. These values do not supply dialog semantics or focus management.','Native shadow arrays describe intent; platform APIs differ in spread, clipping and multiple-shadow support. Translate and render-test them.'];
 d.example='.example-overlay { box-shadow: var(--shadow-overlay, none); border: var(--surface-edge-width, 1px) solid var(--surface-edge, #777777); }';
}
for(const [name,durations] of Object.entries({productive:[80,160,240],expressive:[120,240,400]})){
 const d=option('motion',name,name==='productive'?'Short feedback and transitions for repeated work.':'Longer transitions for infrequent, deliberate state changes.','Choose one timing character. Carbon informs the productive/expressive distinction only; these numbers and curves are independently selected.','Do not make routine work wait for decoration, autoplay movement, or conceal state changes until an animation ends.');
 d.influences=[{url:'https://carbondesignsystem.com/elements/motion/overview/',use:'Conceptual productive/expressive distinction only; no imported values or text.'}];
 for(const [i,role] of ['fast','standard','deliberate'].entries()){const n=`--ds-motion-${role}`;d.tokens[n]=token(`${durations[i]}ms`,'duration',`${name}: independently chosen ${durations[i]}ms budget for ${role} transitions.`,{ms:durations[i]});d.roles[role]=n;}
 d.tokens['--ds-motion-ease-enter']=token('cubic-bezier(0.2, 0, 0, 1)','easing','Original deceleration curve; x coordinates remain in [0,1].',{bezier:[.2,0,0,1]});
 d.tokens['--ds-motion-ease-exit']=token('cubic-bezier(0.4, 0, 1, 1)','easing','Original acceleration curve for exiting content.',{bezier:[.4,0,1,1]});
 d.tokens['--ds-motion-distance']=length(name==='productive'?8:16,'One or two 8px steps; never required to understand a state change.');
 d.reducedMotion=Object.fromEntries(Object.keys(d.tokens).filter(n=>d.tokens[n].type==='duration').map(n=>[n,'0ms']));d.reducedMotion['--ds-motion-distance']='0rem';
 d.native.durations=Object.fromEntries(['fast','standard','deliberate'].map(r=>[r,durations[['fast','standard','deliberate'].indexOf(r)]]));d.native.reducedDurations={fast:0,standard:0,deliberate:0};d.native.easing={enter:[.2,0,0,1],exit:[.4,0,1,1]};d.native.distance=d.tokens['--ds-motion-distance'].px;
 d.guidance=['tokens.css sets all duration tokens to 0ms and travel to 0rem under prefers-reduced-motion: reduce. Consumers must use these tokens, not cached durations.','Only enable nonessential transforms in prefers-reduced-motion: no-preference. State updates still occur when duration is zero. Use platform accessibility preferences on native; do not rely on animationend callbacks to finish work.'];
 d.example='/* Motion is opt-in; the base state updates immediately. */\n@media (prefers-reduced-motion: no-preference) {\n  .example-item { transition: transform var(--motion-standard, 160ms) var(--motion-enter, ease-out); }\n}';
}
{
 const d=option('z-index','named-layers','Gaps of 100 leave room for local ordering within a shared stacking context.','Use when overlays share a known root and a documented portal policy.','A bigger number cannot escape an ancestor stacking context; native ordering and browser top-layer dialogs require separate review.');
 for(const [i,role] of ['base','dropdown','sticky','overlay','modal','toast','tooltip'].entries()){const n=`--ds-z-${role}`;d.tokens[n]=number(i*100,'Original ordering by role; the 100-step gap is bookkeeping, not visual elevation.');d.roles[role]=n;}
 d.native.layers=Object.fromEntries(Object.entries(d.roles).map(([r,n])=>[r,d.tokens[n].number]));
 d.guidance=['Base < dropdown < sticky < overlay < modal < toast < tooltip is one proposed policy. A dropdown inside a modal must stay in the modal context.','Keep tooltips noninteractive and do not let toasts obscure dialog controls. Top-layer popovers/dialogs do not participate in this numeric scale.'];d.example='.example-toast { position: fixed; z-index: var(--z-toast, 500); }';
}
for(const [name,breaks,cols,max] of [['content-first',[640,1024,1408],[1,2,3,4],1152],['app-shell',[768,1152,1536],[1,4,8,12],1440]]){
 const d=option('breakpoints-grid',name,name==='content-first'?'Content cards start near 18rem; breakpoints add columns only after allowing gaps and gutters.':'The first wide state budgets 16rem navigation + 28rem content + 4rem gutters; later states add working columns.','Start here, then move breakpoints where real content stops fitting.','Do not infer device categories or promise that desktop layouts work on native unchanged. CSS custom properties cannot supply media-query conditions.');
 d.breakpoints=[];d.columns=cols;
 for(const [i,role] of ['small','medium','large'].entries()){const n=`--ds-breakpoint-${role}`;d.tokens[n]=length(breaks[i],name==='content-first'?'Rounded content capacity threshold: start near 18rem per card plus gaps/gutters.':'Original shell capacity threshold, beginning at 48rem.');d.roles[role]=n;d.breakpoints.push(n);}
 d.tokens['--ds-grid-max']=length(max,'Independent maximum working width; wide viewports retain side margins.');d.tokens['--ds-grid-gap']=length(16,'One 16px content gap.');d.tokens['--ds-grid-gutter']=length(24,'24px outer gutter; narrow layouts must preserve available content width.');
 cols.forEach((c,i)=>{d.tokens[`--ds-grid-columns-${i}`]=number(c,'Column count for the corresponding ordered width state.');});
 d.native.breakpoints=breaks;d.native.columns=cols;d.native.maxWidth=max;d.native.gap=16;d.native.gutter=24;
 d.guidance=['Resolve width from the viewport or an explicitly chosen container, never from device names. The specimen simulates a viewport in a scrollable region; its inner grid retains the maximum content width.','Media queries below repeat numeric thresholds intentionally: var() is invalid there. Generate them from JSON to avoid drift.'];
 d.example=`.example-grid { display:grid; grid-template-columns:repeat(${cols[0]},minmax(0,1fr)); gap:var(--grid-gap,1rem); }\n`+breaks.map((px,i)=>`@media (min-width:${px/16}rem) { .example-grid { grid-template-columns:repeat(${cols[i+1]},minmax(0,1fr)); } }`).join('\n');
}
{
 const d=option('borders-opacity','functional','Small width steps distinguish separators, control boundaries and selected emphasis. Opacity budgets are separate from text colour.','Use with explicit role assignments and contrast-tested surfaces.','Do not dim active text or an entire subtree to create muted text. Decorative dividers do not establish control visibility.');
 for(const [role,px] of [['none',0],['hairline',1],['strong',2],['emphasis',4]]){const n=`--ds-border-${role}`;d.tokens[n]=length(px,'Original 0/1/2/4px width series at the reference root.');d.roles[role]=n;}
 for(const style of ['solid','dashed','dotted'])d.tokens[`--ds-border-style-${style}`]=token(style,'keyword','CSS line style; solid for boundaries, dashed/dotted only with an explained meaning.');
 for(const [role,n] of [['disabled',.48],['overlay',.48],['hover',.08],['pressed',.16]])d.tokens[`--ds-opacity-${role}`]=number(n,'Independently chosen compositing budget; measure the result against its actual backdrop.');
 d.native.widths={none:0,hairline:1,strong:2,emphasis:4};d.native.opacity={disabled:.48,overlay:.48,hover:.08,pressed:.16};
 d.guidance=['Disabled opacity is for truly inactive controls, not read-only content or labels users still need to read.','Overlay opacity assumes a separate scrim layer; applying opacity to the modal would dim its contents too.'];d.example='.example-divider { border-block-start: var(--divider-width, 1px) var(--divider-style, solid) var(--divider-color, #777777); }';
}
{
 const d=option('focus-accessibility','visible-ring','Two independently selected middle greys each pass 3:1 against the declared light and dark surfaces. A 2px outline and 2px offset expose the indicator outside the control.','Use where a custom ring is needed and all adjacent surfaces have been measured.','This is not a full accessibility certification. Recheck images, gradients, branded fills, clipping and every new surface; retain the browser indicator if it is better.');
 d.tokens['--ds-focus-ring']=token('#777777','color','Independent middle grey; measured against all declared surfaces.');d.tokens['--ds-focus-ring-alternate']=token('#808080','color','Independent alternate middle grey; also measured against both modes.');
 for(const [role,px] of [['width',2],['offset',2],['target-min',44]])d.tokens[`--ds-focus-${role}`]=length(px,'Original kit target: 2px ring and offset, 44px minimum control target.');
 for(const [role,value] of [['light','#ffffff'],['light-muted','#f3f4f6'],['dark','#111111'],['dark-muted','#202020']])d.tokens[`--ds-focus-surface-${role}`]=token(value,'color','Invented reference surface, not an assertion about every adopted theme.');
 d.contrastPairs=['--ds-focus-ring','--ds-focus-ring-alternate'].flatMap(fg=>['light','light-muted','dark','dark-muted'].map(s=>({fg,bg:`--ds-focus-surface-${s}`,minimum:3})));
 d.native.ringWidth=2;d.native.ringOffset=2;d.native.minimumTarget=44;d.native.ringColors=['#777777','#808080'];
 d.guidance=['Use :focus-visible; never remove the default outline without a visible replacement. Leave room for the ring and check overflow clipping.','Use native controls and natural Tab order. Preserve a system-colour outline in forced-colors mode. Minimum target is a kit choice, not a claim that every WCAG target must be 44px.','No focus animation is required. Respect reduced-motion preferences elsewhere; use platform focus APIs on native.'];
 d.example='.example-control:focus-visible { outline: var(--focus-width,2px) solid var(--focus-color,#777777); outline-offset: var(--focus-offset,2px); }\n@media (forced-colors: active) { .example-control:focus-visible { outline: 2px solid Highlight; } }';
}
export function foundationCSS(d){
 const block=entries=>Object.entries(entries).map(([n,t])=>`  ${n}: ${typeof t==='string'?t:t.value};`).join('\n');
 return `/* Example DS — independently derived; see README for use and limits. */\n:root {\n${block(d.tokens)}\n}\n`+(d.reducedMotion?`@media (prefers-reduced-motion: reduce) {\n  :root {\n${block(d.reducedMotion)}\n  }\n}\n`:'');
}
for(const d of output){
 const folder=`foundations/${d.foundation}/options/${d.option}`;mkdirSync(folder,{recursive:true});
 const prev=existsSync(`${folder}/README.md`)?readFileSync(`${folder}/README.md`,'utf8'):'';
 const audit=prev.match(/<!-- audit:start -->[\s\S]*?<!-- audit:end -->/)?.[0]??'<!-- audit:start -->\nAudit pending.\n<!-- audit:end -->';
 const pairs=d.contrastPairs?`\n## Declared focus pairs\n\n| Ring | Surface | Ratio | Minimum |\n|---|---|---|---|\n`+d.contrastPairs.map(p=>`| ${p.fg} | ${p.bg} | ${contrast(d.tokens[p.fg].value,d.tokens[p.bg].value).toFixed(4)} | ${p.minimum} |`).join('\n'):'';
 const guidance=d.guidance.map(s=>`- ${s}`).join('\n');
 const source='Every value is independently derived; its derivation is recorded in the table and JSON. No values or copy from proprietary or principles-only sources are imported.';
 const standards=d.foundation==='focus-accessibility'?'[WCAG non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) supplies the 3:1 measurement criterion, not the token values.':d.foundation==='motion'?'[Carbon motion](https://carbondesignsystem.com/elements/motion/overview/) informs the productive/expressive distinction only. [WCAG interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) informs the opt-out; no source values or prose are copied.':'';
 writeFileSync(`${folder}/tokens.json`,JSON.stringify(d,null,2)+'\n');writeFileSync(`${folder}/tokens.css`,foundationCSS(d));
 writeFileSync(`${folder}/README.md`,`# ${d.foundation}: ${d.option}\n\n${d.rationale}\n\n## When to use / when not\n\n${d.use}\n\n${d.avoid}\n\n## Usage decisions\n\n${guidance}\n\n## Platforms and source\n\nWeb uses rem at a 16px reference root; px values are reference equivalents, not a fixed user font size. Unitless numbers, milliseconds and opaque colours keep their natural units. JSON retains CSS strings plus numeric native values. Native rendering, screen readers and full accessibility are not verified by numerical checks.\n\n${source} Original kit material; see [source policy](../../../../SOURCES.md). ${standards}\n\n## Values\n\n| Token | CSS value | Reference px / numeric | Derivation and source |\n|---|---|---|---|\n${Object.entries(d.tokens).map(([n,t])=>`| \`${n}\` | \`${t.value}\` | ${t.px??t.ms??t.number??'—'} | Independently derived: ${t.derivation} |`).join('\n')}\n${pairs}\n\n## Consumer recipe\n\nMap upstream values to project aliases with fallbacks before consuming them. The following uses project alias names; it does not install components or define team policy.\n\n\`\`\`css\n${d.example}\n\`\`\`\n\n${audit}\n`);
 writeFileSync(`${folder}/spec.md`,`# ${d.foundation}: ${d.option}\n\n## 1. Metadata\n\nDraft option; owner/reviewer unassigned. Destination: specs/foundations/${d.foundation}.md. Record the adopted revision.\n\n## 2. Overview\n\n${d.rationale}\n\n## 3. Anatomy\n\nUpstream values → project aliases with fallbacks → component consumers. This arrow means value consumption.\n\n## 4. Tokens used\n\n[CSS](tokens.css) and [JSON](tokens.json) share the same values. [Values and rationale](README.md).\n\n## 5. Props/API\n\n${d.use} Native mappings are reference data, not a platform implementation.\n\n## 6. States\n\n${guidance}\n\n## 7. Code example\n\n\`\`\`css\n${d.example}\n\`\`\`\n\n## 8. Cross-references\n\n[Measured audit and limits](README.md); [specimens](../../../../specimens/index.html). Record consumers, exceptions and rendered checks with the adopting project.\n`);
 console.log(`${d.foundation}/${d.option}: ${Object.keys(d.tokens).length} tokens`);
}
