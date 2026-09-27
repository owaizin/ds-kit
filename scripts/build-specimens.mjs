import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { validate } from './check-options.mjs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const options = [];
let failed = false;
for (const foundation of readdirSync(join(root, 'foundations'), { withFileTypes:true }).filter(e=>e.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
  const dir = join(root,'foundations',foundation.name,'options');
  for (const option of readdirSync(dir,{withFileTypes:true}).filter(e=>e.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
    const folder = join(dir,option.name);
    const data = JSON.parse(readFileSync(join(folder,'tokens.json'),'utf8'));
    const css = readFileSync(join(folder,'tokens.css'),'utf8');
    const doc = readFileSync(join(folder,'README.md'),'utf8');
    const hash = createHash('sha256').update(css).digest('hex');
    let checks;
    try {
      const count = validate(data,css);
      if (!doc.includes(`Audited \`tokens.css\` SHA-256: \`${hash}\``)) throw new Error('Audit snapshot stale');
      checks = {pass:true, count, message:'Scale order, CSS/JSON parity, native numbers, role/density constraints, provenance fields and audit snapshot.'};
    } catch(error) { checks={pass:false,count:0,message:error.message};failed=true; }
    const audit = doc.match(/```text\n([\s\S]*?)\n```/)?.[1] ?? 'No recorded audit';
    options.push({...data,checks,hash,audit,engineExit:Number(doc.match(/Exit status: `(\d+)`/)?.[1] ?? -1)});
  }
}
if (!options.length) throw new Error('No options found');
const css = readFileSync(join(root,'scripts/specimen.css'),'utf8');
const js = readFileSync(join(root,'scripts/specimen-ui.js'),'utf8');
const serialized = JSON.stringify(options).replaceAll('<','\\u003c');
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; font-src 'none'; connect-src 'none'; form-action 'none'; base-uri 'none'">
<link rel="icon" href="data:,"><title>Example DS — Foundation specimens</title><style>${css}</style></head>
<body><a class="skip" href="#view">Skip to specimens</a>
<header><div class="brand"><span class="mark" aria-hidden="true">E<span>↗</span></span><div><strong>Example DS</strong><span class="kicker">FOUNDATION LAB / 01</span></div></div><span class="offline">● Local specimen · no network</span></header>
<section class="intro"><div><p class="eyebrow">INSPECT THE VALUES. TRY THE COMPOSITIONS.</p><h1>Typography & spacing<span class="dot">.</span></h1><p>Five options. The same content. A place to see what changes.</p></div><div class="scope-note">System fonts only. Colours and controls are specimen chrome, not proposed colour foundations.</div></section>
<nav aria-label="Specimen views"><button data-view="scale" aria-pressed="true">01 <span>Scale</span></button><button data-view="compare" aria-pressed="false">02 <span>Compare</span></button><button data-view="applied" aria-pressed="false">03 <span>Applied</span></button><button data-view="checks" aria-pressed="false">04 <span>Checks</span></button></nav>
<section class="controls" aria-label="Specimen controls">
<label>Typography<select id="type"></select></label><label>Spacing<select id="space"></select></label>
<label>Density<select id="density"><option value="comfortable">Comfortable</option><option value="compact">Compact</option></select></label>
<label>Theme<select id="theme"><option value="light">Light</option><option value="dark">Dark</option></select></label>
<label class="width-toggle"><input id="narrow" type="checkbox"> 375px sample width</label>
</section>
<main id="view" tabindex="-1"></main><p id="status" class="sr" aria-live="polite"></p>
<footer><span>Example DS · Invented content · Reference root: 16px</span><span>Self-checks are not a rendered accessibility or native-platform certification.</span></footer>
<script>const OPTIONS = ${serialized};\n${js}</script></body></html>\n`;
const file = join(root,'specimens/index.html');
if(process.argv.includes('--check')) {
  if (readFileSync(file,'utf8')!==html) throw new Error('Generated specimen is stale: run node scripts/build-specimens.mjs');
  console.log('PASS generated specimen matches all current inputs');
} else {mkdirSync(dirname(file),{recursive:true});writeFileSync(file,html);console.log(`Built specimens/index.html from ${options.length} options (${Buffer.byteLength(html)} bytes)`);}
if(failed) process.exitCode=1;
