import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { tokenFiles,resolveColor } from './color-contract.mjs';
import { contrast } from './color-math.mjs';
import { readCurrentAudit } from './current-audit.mjs';
import { validate } from './check-options.mjs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const options = [];
let failed = false;
for (const foundation of readdirSync(join(root, 'foundations'), { withFileTypes:true }).filter(e=>e.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
  const dir = join(root,'foundations',foundation.name,'options');
  for (const option of readdirSync(dir,{withFileTypes:true}).filter(e=>e.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
    const folder = join(dir,option.name);
    const data = JSON.parse(readFileSync(join(folder,'tokens.json'),'utf8'));
    const styles=Object.fromEntries(tokenFiles(data).map(f=>[f,readFileSync(join(folder,f),'utf8')]));
    const css=data.foundation==='color'?styles:styles['tokens.css'];
    const doc = readFileSync(join(folder,'README.md'),'utf8');
    const hash = createHash('sha256').update(JSON.stringify(styles)).digest('hex');
    let checks;
    try {
      const count = validate(data,css);
      for(const [file,text] of Object.entries(styles))if(!doc.includes(`Audited \`${file}\` SHA-256: \`${createHash('sha256').update(text).digest('hex')}\``))throw new Error('Audit snapshot stale');
      checks = {pass:true, count, message:'Scale order, CSS/JSON parity, native numbers, role/density constraints, provenance fields and audit snapshot.'};
    } catch(error) { checks={pass:false,count:0,message:error.message};failed=true; }
    const audit = [...doc.matchAll(/```text\n([\s\S]*?)\n```/g)].map(m=>m[1]).join('\n\n') || 'No recorded audit';
    if(data.foundation==='color') { data.contrastPairs=data.contrastPairs.map(p=>({...p,ratio:contrast(resolveColor(data.variants[p.neutral][p.mode].tokens,p.fg),resolveColor(data.variants[p.neutral][p.mode].tokens,p.bg))})); if(checks.pass)checks.message='Theme CSS/JSON parity, palette aliases, stable names, source fields, six variants and '+data.contrastPairs.length+' declared contrast pairs.'; }
    options.push({...data,checks,hash,audit,engineExit:Math.max(...[...doc.matchAll(/Exit status: `(\d+)`/g)].map(m=>Number(m[1])))});
  }
}
if (!options.length) throw new Error('No options found');
const css = readFileSync(join(root,'scripts/specimen.css'),'utf8');
const js = readFileSync(join(root,'scripts/specimen-ui.js'),'utf8');
const current = readCurrentAudit(JSON.parse(readFileSync(join(root,'fixtures/current/audit.json'),'utf8')));
const currentReader = readFileSync(join(root,'scripts/current-audit.mjs'),'utf8').replace('export function','function');
const serialized = JSON.stringify(options).replaceAll('<','\\u003c');
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src 'none'; connect-src 'none'; form-action 'none'; base-uri 'none'">
<link rel="icon" href="data:,"><title>Example DS — Foundation specimens</title><style>${css}</style></head>
<body><a class="skip" href="#view">Skip to specimens</a>
<header><div class="brand"><span class="mark" aria-hidden="true">E<span>↗</span></span><div><strong>Example DS</strong><span class="kicker">FOUNDATION LAB / 01</span></div></div><span class="offline">● Local specimen · no network</span></header>
<section class="intro"><div><p class="eyebrow">INSPECT THE VALUES. TRY THE COMPOSITIONS.</p><h1>Foundation specimens<span class="dot">.</span></h1><p>Nine options. The same content. A place to see what changes.</p></div><div class="scope-note">System fonts only. Samples use the selected colour option. Tool controls remain separate from foundation values.</div></section>
<nav aria-label="Specimen views"><button data-view="scale" aria-pressed="true">01 <span>Scale</span></button><button data-view="compare" aria-pressed="false">02 <span>Compare</span></button><button data-view="applied" aria-pressed="false">03 <span>Applied</span></button><button data-view="checks" aria-pressed="false">04 <span>Checks</span></button></nav>
<section class="controls" aria-label="Specimen controls">
<label>Typography<select id="type"></select></label><label>Spacing<select id="space"></select></label>
<label>Colour<select id="color"></select></label><label>Neutral<select id="neutral"><option>cool</option><option>warm</option><option>pure</option></select></label>
<label>Density<select id="density"><option value="comfortable">Comfortable</option><option value="compact">Compact</option></select></label>
<label>Theme<select id="theme"><option value="light">Light</option><option value="dark">Dark</option></select></label>
<label class="width-toggle"><input id="narrow" type="checkbox"> 375px sample width</label>
</section>
<section class="current-controls"><label>Current project <input id="current-file" type="file" accept="application/json,.json"></label><span id="current-label">Invented Example DS audit · local only</span><span id="current-error" role="alert"></span></section>
<main id="view" tabindex="-1"></main><p id="status" class="sr" aria-live="polite"></p>
<footer><span>Example DS · Invented content · Reference root: 16px</span><span>Self-checks are not a rendered accessibility or native-platform certification.</span></footer>
<script>const CURRENT_DATA = ${JSON.stringify(current).replaceAll("<","\\u003c")};\n${currentReader}\nconst OPTIONS = ${serialized};\n${js}</script></body></html>\n`;
const file = join(root,'specimens/index.html');
if(process.argv.includes('--check')) {
  if (readFileSync(file,'utf8')!==html) throw new Error('Generated specimen is stale: run node scripts/build-specimens.mjs');
  console.log('PASS generated specimen matches all current inputs');
} else {mkdirSync(dirname(file),{recursive:true});writeFileSync(file,html);console.log(`Built specimens/index.html from ${options.length} options (${Buffer.byteLength(html)} bytes)`);}
if(failed) process.exitCode=1;
