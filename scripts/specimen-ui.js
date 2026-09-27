const byId = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const types = OPTIONS.filter(o=>o.foundation==='typography');
const colors = OPTIONS.filter(o=>o.foundation==='color');
let current = CURRENT_DATA;
const selectedColor = () => colors.find(o=>o.option===byId('color').value);
const spaces = OPTIONS.filter(o=>o.foundation==='spacing');
for (const [id, options, selected] of [['type',types,'default-ui'],['space',spaces,'base-4'],['color',colors,'radix-12-step']]) {
  byId(id).innerHTML = options.map(o=>`<option value="${esc(o.option)}">${esc(o.option)}</option>`).join('');byId(id).value=selected;
}
let view = ['scale','compare','applied','checks'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'scale';
let foundation = 'typography';
let composition = 'all';
let serial = 0;
const selectedType = () => types.find(o=>o.option===byId('type').value);
const selectedSpace = () => spaces.find(o=>o.option===byId('space').value);
const val = (o,name) => o.tokens[name].value;
const roleValue = (o,role,field) => val(o,o.roles[role][field]);
const pixel = n => Number(n.toFixed(3));
const title = text => `<strong>${esc(text)}</strong>`;
function heading(name, description, extra='') {return `<div class="view-heading"><div><h2>${name}</h2><p>${description}</p></div>${extra}</div>`;}
function switcher(){return `<div class="switch" aria-label="Foundation to inspect"><button data-foundation="typography" aria-pressed="${foundation==='typography'}">Typography</button><button data-foundation="spacing" aria-pressed="${foundation==='spacing'}">Spacing</button><button data-foundation="color" aria-pressed="${foundation==='color'}">Colour</button></div>`;}
function sample(o,content,type=selectedType(),space=selectedSpace()) {
  return `<div class="sample-wrap"><section class="sample ${byId('theme').value==='dark'?'dark':''}" data-color="${esc(o.foundation==='color'?o.option:selectedColor().option)}" data-type="${esc(type.option)}" data-space="${esc(space.option)}" aria-label="${esc(o.option)} specimen"><div class="sample-head">${title(o.option)}<span>${esc(byId('density').value)} · ${esc(byId('theme').value)}</span></div>${content}</section></div>`;
}
function typeScale(o,short=false) {
  return Object.entries(o.roles).map(([role,m])=>{
    const token=o.tokens[m.size];
    const text=role==='tabular-numbers'?'1,024.00 / 8,196.50':role==='code'?'const example = true;':short?'Clear decisions.':'Make space for clear decisions.';
    return `<div class="scale-row"><div class="meta"><strong>${esc(role)}</strong>${esc(token.value)} / ${pixel(token.px)}px<br>weight ${esc(val(o,m.weight))} · leading ${esc(val(o,m['line-height']))}</div><p class="type-sample" data-role="${esc(role)}">${esc(text)}</p></div>`;
  }).join('');
}
function spacingScale(o){return o.scale.map(name=>`<div class="space-row"><div class="meta"><strong>${esc(name.replace('--ds-space-','step '))}</strong>${esc(o.tokens[name].value)} / ${o.tokens[name].px}px</div><div class="bar-area"><div class="bar ${o.tokens[name].px===0?'zero':''}" style="width:${esc(o.tokens[name].value)}" aria-label="${o.tokens[name].px}px at reference root"></div></div></div>`).join('');}
function colorScale(o,short=false){
 const v=o.variants[byId('neutral').value][byId('theme').value];
 const entries=o.kind==='palette'?Object.entries(v.ramps).flatMap(([family,steps])=>steps.map(s=>[`${family} ${s.step}`,s.token])):Object.entries(v.roles);
 const pairs=o.contrastPairs.filter(p=>p.neutral===byId('neutral').value&&p.mode===byId('theme').value);
 return `<div class="swatches">${entries.map(([label,name])=>`<div class="swatch"><div class="chip" style="background:${esc(o.tokens[name].value)}"></div><strong>${esc(label)}</strong><code>${esc(o.tokens[name].value)}</code><small>${esc(o.tokens[name].role)}</small></div>`).join('')}</div><details class="pairs" ${short?'':'open'}><summary>${pairs.length} declared contrast pairs · all checked</summary>${pairs.map(p=>`<div class="pair"><span>${esc(p.label)}</span><strong>${p.ratio.toFixed(2)}:1</strong><small>≥ ${p.kind==='body'?4.5:3} · ${p.kind}</small></div>`).join('')}</details>`;
}
function currentColumn(){
 const group=current.groups[foundation];
 return `<aside class="current-column"><h3>Current</h3><p class="meta">${esc(current.source)}</p><p>${group.occurrences} occurrences · ${group.distinct} distinct values</p><p class="meta">${esc(current.coverage)}</p>${group.values.map(v=>`<div class="current-value"><code>${esc(v.value)}</code><span>× ${v.count}</span>${foundation==='color'&&/^#[a-f0-9]{3,8}$/i.test(v.value)?`<i style="background:${esc(v.value)}" aria-hidden="true"></i>`:''}</div>`).join('')||'<p>No literal values available in this report.</p>'}<p class="limit">${esc(current.limits)}</p></aside>`;
}
function scale(){const o=foundation==='typography'?selectedType():foundation==='spacing'?selectedSpace():selectedColor();return heading('The scale','Actual token values. Colour swatches retain step roles; contrast applies only to the declared pairs.',switcher())+sample(o,foundation==='typography'?typeScale(o):foundation==='spacing'?spacingScale(o):colorScale(o));}
function compare(){const options=foundation==='typography'?types:foundation==='spacing'?spaces:colors;return heading('Current values, beside the options','Current shows extracted CSS use sites; legacy reports fall back to reported literals. This is not a reconstructed design system. Scroll horizontally to inspect all columns.',switcher())+`<div class="comparison-scroll"><div class="compare" style="--cols:${options.length+1}">${currentColumn()}${options.map(o=>sample(o,foundation==='typography'?typeScale(o,true):foundation==='spacing'?spacingScale(o):colorScale(o,true),foundation==='typography'?o:selectedType(),foundation==='spacing'?o:selectedSpace())).join('')}</div></div>`;}
const rows=[['Reading room','Active','128'],['Reference library','Draft','32'],['Example workspace','Active','64'],['Field notes','Paused','16']];
function table(){return `<h3>Workspace overview</h3><p class="hint">Find a workspace and review its current activity.</p><div class="filters"><label>Search<input type="search" data-search placeholder="Find a workspace"></label><label>Status<select data-filter><option>All statuses</option><option>Active</option><option>Draft</option><option>Paused</option></select></label></div><div class="table-scroll" tabindex="0" aria-label="Workspace data; scroll horizontally if needed"><table><thead><tr><th scope="col">Workspace</th><th scope="col">Status</th><th scope="col">Items</th></tr></thead><tbody>${rows.map(row=>`<tr data-status="${row[1]}"><td>${row[0]}</td><td><span class="status-label">${row[1]}</span></td><td class="number">${row[2]}</td></tr>`).join('')}</tbody></table></div><p data-empty class="hint" hidden>No workspaces match these filters.</p>`;}
function form(){const id=`email-${serial++}`;return `<h3>Invite a teammate</h3><p class="hint">Choose who can contribute to Example DS.</p><form class="stack" novalidate><label>Full name<input name="name" value="Alex Example" autocomplete="off"></label><label>Email address<input name="email" id="${id}" type="email" value="alex@" aria-invalid="true" aria-describedby="${id}-error" autocomplete="off"></label><p class="error" id="${id}-error" data-error>Enter a complete email address, such as alex@example.com.</p><label>Access<select><option>Contributor</option><option>Viewer</option></select></label><button type="submit">Preview invitation</button><p class="hint" data-form-result aria-live="polite">Demo only. No invitation is sent.</p></form>`;}
function settings(){return `<h3>Workspace settings</h3><p class="hint">Keep your team informed without extra noise.</p>${[['Activity summary','A weekly overview of changes.',true],['Mention notifications','Updates when someone needs your input.',true],['Product updates','Occasional news about Example DS.',false]].map(([name,detail,on])=>{const id=`setting-${serial++}`;return `<div class="setting"><div><label for="${id}">${name}</label><p class="hint">${detail}</p></div><input id="${id}" type="checkbox" ${on?'checked':''}></div>`;}).join('')}<p class="hint">Changes stay in this preview only.</p>`;}
function article(){return `<article><p class="hint">FIELD NOTES · 4 MIN READ</p><h3 class="article-title">A little room to think</h3><p>Good tools leave room for the task. A label should be easy to find, a number easy to compare, and the next step clear enough to take.</p><h4>Start with familiar work</h4><p>Try the system with an ordinary screen. Change the text length. Add an error. Read the same paragraph on a narrow display before deciding that the values fit.</p><blockquote>Consistency is useful when it makes the work easier.</blockquote></article>`;}
const compositions={table:['Data table & filters',table],form:['Form & validation error',form],settings:['Settings page',settings],article:['Article',article]};
function applied(){const options=composition==='all'?Object.entries(compositions):[[composition,compositions[composition]]];return heading('Put the values to work',`Selected: ${esc(selectedType().option)} + ${esc(selectedSpace().option)} + ${esc(selectedColor().option)} (${esc(byId('neutral').value)}). The same four compositions are available for every option. Density maps spacing aliases; minimum control height stays 44px.`, `<label class="meta">Composition <select id="composition">${[['all','All four'],...Object.entries(compositions).map(([k,v])=>[k,v[0]])].map(([k,v])=>`<option value="${k}" ${composition===k?'selected':''}>${v}</option>`).join('')}</select></label>`)+`<div class="applied-grid">${options.map(([id,[name,fn]])=>sample({option:name},`<div class="composition" data-composition="${id}">${fn()}</div>`)).join('')}</div>`;}
function checks(){return heading('What was checked','Results are computed from the source files at build time. A self-check pass and an engine finding can both be true.')+`<div class="check-table-wrap"><table class="check-table"><thead><tr><th scope="col">Option</th><th scope="col">Self-check</th><th scope="col">Engine audit</th><th scope="col">Evidence & limits</th></tr></thead><tbody>${OPTIONS.map(o=>`<tr><th scope="row">${esc(o.option)}<small>${esc(o.foundation)}</small></th><td><span class="pill ${o.checks.pass?'':'fail'}">${o.checks.pass?'PASS':'FAIL'}</span><small>${o.checks.count} literal tokens<br>${esc(o.checks.message)}</small></td><td><span class="pill ${o.engineExit===0?'':'issue'}">${o.engineExit===0?'No findings':'Findings — see output'}</span><small>${o.engineExit===0?'Declaration-only scope.':'Review recorded evidence.'}</small></td><td><span class="meta">CSS ${o.hash.slice(0,12)}</span><details><summary>Recorded audit output</summary><pre>${esc(o.audit)}</pre></details></td></tr>`).join('')}</tbody></table></div><div class="check-note"><p><strong>Upstream layer configured.</strong> Kit --ds-* values are imported layer-1 declarations. Project aliases reference them with fallbacks; components consume aliases. No suppressions are used.</p><p><strong>Not covered by these passes:</strong> React Native rendering, optional Inter files, every language and font fallback, screen-reader behavior, or product fitness. Compositions use the selected colour variant. Declared pairs are checked; arbitrary combinations and full accessibility are not certified.</p><p><strong>Native values:</strong> JSON keeps rem strings plus numeric reference px, with native text style objects and spacing mappings. A native renderer must preserve font scaling and choose its own platform font.</p></div>`;}
function applyValues(){for(const sample of document.querySelectorAll('.sample')){
 const type=types.find(o=>o.option===sample.dataset.type),space=spaces.find(o=>o.option===sample.dataset.space);
 const set=(name,v)=>sample.style.setProperty('--'+name,v);
 const color=colors.find(o=>o.option===sample.dataset.color),variant=color.variants[byId('neutral').value][byId('theme').value];
 for(const [slot,name] of Object.entries(variant.preview))set(slot,color.tokens[name].value);
 set('family',val(type,'--ds-type-family-system'));set('measure',val(type,'--ds-type-max-reading-width'));
 for(const [short,role] of [['body','body'],['small','body-small'],['number','tabular-numbers'],['h1','h1'],['h3','h3'],['h4','h4']])for(const [suffix,field] of [['size','size'],['leading','line-height'],['weight','weight'],['tracking','letter-spacing']])set(short+'-'+suffix,roleValue(type,role,field));
 for(const [slot,token] of Object.entries(space.density[byId('density').value]))set(slot,val(space,token));
 for(const item of sample.querySelectorAll('[data-role]')){
  const m=type.roles[item.dataset.role];Object.assign(item.style,{fontSize:val(type,m.size),lineHeight:val(type,m['line-height']),fontWeight:val(type,m.weight),letterSpacing:val(type,m['letter-spacing']),fontFamily:val(type,m.family)});
  if(m['numeric-variant'])item.style.fontVariantNumeric=val(type,m['numeric-variant']);
 }
}}
function render(){serial=0;document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));byId('view').classList.toggle('narrow',byId('narrow').checked);byId('view').innerHTML=({scale,compare,applied,checks}[view])();applyValues();
 document.querySelectorAll('[data-foundation]').forEach(b=>b.addEventListener('click',()=>{foundation=b.dataset.foundation;render();}));
 byId('composition')?.addEventListener('change',e=>{composition=e.target.value;render();});
 for(const block of document.querySelectorAll('[data-composition="table"]')){
  const filter=()=>{let count=0;for(const row of block.querySelectorAll('tbody tr')){row.hidden=!(row.textContent.toLowerCase().includes(block.querySelector('[data-search]').value.toLowerCase())&&(block.querySelector('[data-filter]').value==='All statuses'||row.dataset.status===block.querySelector('[data-filter]').value));if(!row.hidden)count++;}block.querySelector('[data-empty]').hidden=count!==0;};
  block.querySelector('[data-search]').addEventListener('input',filter);block.querySelector('[data-filter]').addEventListener('change',filter);
 }
 for(const form of document.querySelectorAll('.composition form'))form.addEventListener('submit',event=>{event.preventDefault();const input=form.elements.email;const valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);input.setAttribute('aria-invalid',String(!valid));form.querySelector('[data-error]').hidden=valid;form.querySelector('[data-form-result]').textContent=valid?'Preview ready. No invitation was sent.':'Check the email address to continue.';if(!valid)input.focus();});
 byId('status').textContent=`${view} view. ${selectedType().option}, ${selectedSpace().option}, ${byId('density').value}, ${byId('theme').value}, ${selectedColor().option}, ${byId('neutral').value}.`;
}
for(const button of document.querySelectorAll('[data-view]'))button.addEventListener('click',()=>{view=button.dataset.view;history.replaceState(null,'','#'+view);render();});
for(const id of ['type','space','color','neutral','density','theme','narrow'])byId(id).addEventListener('change',render);
render();

byId('current-file').addEventListener('change', async event=>{
 const file=event.target.files[0];if(!file)return;
 try { const next=readCurrentAudit(JSON.parse(await file.text()));current=next;byId('current-label').textContent='Local audit loaded · held in memory only';byId('current-error').textContent='';view='compare';render(); }
 catch { byId('current-error').textContent='Could not read this audit. Choose valid ds-loop audit --json output; the previous report is retained.'; }
});
