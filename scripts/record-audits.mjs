import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const engine = process.env.DS_LOOP_SOURCE;
if (!engine) throw new Error('Set DS_LOOP_SOURCE to the codex/upstream-layer engine checkout.');
const git = (...args) => {
  const r = spawnSync('git', args, {cwd:engine, encoding:'utf8'});
  if (r.status !== 0) throw new Error(r.stderr);
  return r.stdout.trim();
};
if (git('branch', '--show-current') !== 'codex/upstream-layer') throw new Error('Wrong engine branch');
if (git('status', '--porcelain', '--untracked-files=no', '--', 'src', 'package.json')) throw new Error('Engine sources have uncommitted changes');
const revision = git('rev-parse','HEAD');
for (const foundation of readdirSync(join(root,'foundations'),{withFileTypes:true}).filter(e=>e.isDirectory())) {
  const options = join('foundations', foundation.name, 'options');
  for (const option of readdirSync(join(root, options),{withFileTypes:true}).filter(e=>e.isDirectory())) {
    const file = join(options,option.name,'tokens.css');
    const args = ['--experimental-strip-types','--disable-warning=ExperimentalWarning',join(resolve(engine),'src/cli.ts'),'audit',file];
    const run = spawnSync(process.execPath,args,{cwd:root,encoding:'utf8'});
    if (![0,1].includes(run.status) || run.stderr || !run.stdout.includes('ds-loop audit')) throw new Error(run.stderr || 'Audit did not produce a report');
    const hash = createHash('sha256').update(readFileSync(join(root,file))).digest('hex');
    const date = new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'});
    const section = `<!-- audit:start -->\n## Recorded engine audit\n\nEngine branch \`codex/upstream-layer\`, commit \`${revision}\`; Node ${process.version}. Run ${date}. The reported kit Git revision identifies the parent of these working-tree changes. Audited file content is pinned below. Kit ds-loop.config.json declares ^--ds- as upstream. No suppression is applied.\n\nAudited \`tokens.css\` SHA-256: \`${hash}\`.\n\nFrom the kit root, set \`DS_LOOP_SOURCE\` to that checkout:\n\n\`\`\`sh\nnode --experimental-strip-types --disable-warning=ExperimentalWarning "$DS_LOOP_SOURCE/src/cli.ts" audit ${file}\n\`\`\`\n\nExit status: \`${run.status}\`. Standard output, verbatim:\n\n\`\`\`text\n${run.stdout.trimEnd()}\n\`\`\`\n\nStandard error: empty.\n<!-- audit:end -->`;
    const doc = join(root,options,option.name,'README.md');
    writeFileSync(doc,readFileSync(doc,'utf8').replace(/<!-- audit:start -->[\s\S]*?<!-- audit:end -->/,section));
    console.log(`${foundation.name}/${option.name}: exit ${run.status}`);
  }
}
