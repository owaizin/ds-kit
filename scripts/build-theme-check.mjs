// Generate an offline browser harness outside the repo. No browser automation dependency.
// Each iframe loads the actual shipped CSS, not reconstructed JSON declarations.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {resolveColor,neutrals} from './color-contract.mjs';
const output=process.argv[2];
if(!output)throw new Error('Usage: node scripts/build-theme-check.mjs /tmp/ds-kit-check/index.html');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const cases=[];
for(const option of ['radix-12-step','tailwind-11-step','functional-roles','simple-roles']){
 const folder=`foundations/color/options/${option}`,data=JSON.parse(readFileSync(`${folder}/tokens.json`,'utf8'));
 for(const neutral of neutrals)for(const os of ['light','dark'])for(const explicit of ['auto','light','dark']){
  const mode=explicit==='auto'?os:explicit,v=data.variants[neutral][mode];
  const targets=[...new Set([...Object.values(v.preview),...Object.values(v.onFill).flatMap(p=>[p.fg,p.bg]),...Object.values(v.roles)])];
  const expected=targets.map(n=>resolveColor(v.tokens,n));
  const id=`${option} / ${neutral} / OS ${os} / ${explicit}`;
  const css=readFileSync(`${folder}/tokens.${neutral}.css`,'utf8');
  const body=targets.map(n=>`<span style="color:var(${n})">${n}</span>`).join('');
  const script=`const expected=${JSON.stringify(expected)};const toHex=s=>'#'+s.match(/\\d+/g).slice(0,3).map(n=>Number(n).toString(16).padStart(2,'0')).join('');const mismatch=[...document.querySelectorAll('span')].filter((e,i)=>toHex(getComputedStyle(e).color)!==expected[i]);const actual=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';const passed=!mismatch.length&&actual===${JSON.stringify(os)};document.querySelector('output').textContent=(passed?'PASS':'FAIL')+' '+${JSON.stringify(id)}+'; '+expected.length+' computed colors; media='+actual+'; mismatches='+mismatch.length;`;
  const doc=`<!doctype html><html${explicit==='auto'?'':` data-theme="${explicit}"`}><style>${css}body{font:13px system-ui;margin:8px}span{display:none}output{color:#111}</style><body><output>Pending ${id}</output>${body}<script>${script}</script></body></html>`;
  cases.push(`<iframe title="${id}" style="color-scheme:${os}" srcdoc="${escape(doc)}"></iframe>`);
 }
}
const html=`<!doctype html><html lang="en"><meta charset="utf-8"><title>Example DS — shipped CSS theme checks</title><style>body{font:16px system-ui;margin:24px;color:#111;background:#fff}iframe{display:block;width:100%;height:48px;border:1px solid #bbb;margin:4px 0}output{font-weight:700}</style><h1>Shipped CSS theme checks</h1><p>72 combinations: four options × three neutrals × two inherited OS schemes × auto/light/dark. Every role resolves through the actual neutral CSS file. No network requests.</p><output id="summary">Pending iframe loads</output>${cases.join('\n')}<script>window.addEventListener('load',()=>{const rows=[...document.querySelectorAll('iframe')].map(f=>f.contentDocument.querySelector('output').textContent);const pass=rows.filter(s=>s.startsWith('PASS')).length;document.querySelector('#summary').textContent=pass+'/'+rows.length+' PASS';});</script></html>`;
mkdirSync(dirname(resolve(output)),{recursive:true});writeFileSync(output,html);console.log(output);
