import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync} from 'node:fs';
import {readCurrentAudit} from './current-audit.mjs';
const report=JSON.parse(readFileSync('fixtures/current/audit.json','utf8'));
test('actual invented audit reports distinct values and occurrence counts',()=>{
 const r=readCurrentAudit(report);assert.equal(r.groups.typography.occurrences,5);assert.equal(r.groups.typography.distinct,4);assert.equal(r.groups.spacing.occurrences,7);assert.equal(r.groups.color.occurrences,7);
});
test('filtered audits do not masquerade as an empty system; invalid inputs rejected',()=>{
 const r=readCurrentAudit({...report,styleInventory:undefined,findings:[]});assert.equal(r.groups.color.occurrences,0);assert.match(r.limits,/not proof/);assert.throws(()=>readCurrentAudit({findings:[]}));
});

test('inventory survives a filtered findings list',()=>{assert.deepEqual(readCurrentAudit({...report,findings:[]}).groups,readCurrentAudit(report).groups);});
