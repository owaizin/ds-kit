// Shared with the inline UI. Never infer a complete extraction inventory from findings.
export function readCurrentAudit(report) {
  if(report?.manifest?.tool!=='ds-loop'||report.manifest.command!=='audit'||!Array.isArray(report.findings)) throw new Error('Choose a ds-loop audit --json report.');
  const groups={typography:new Map(),spacing:new Map(),color:new Map()},seen=new Set();
  const inventory = report.styleInventory;
  const hasValues = inventory && Object.values(inventory).every(row=>Array.isArray(row.values));
  if (hasValues) {
    for(const [category,row] of Object.entries(inventory)) for(const value of row.values){
      const group=category==='typography'&&value.property==='font-size'?'typography':['spacing','color'].includes(category)?category:null;
      if(!group) continue;
      if(typeof value.value!=='string'||!Number.isSafeInteger(value.occurrences)||value.occurrences<1) throw new Error('Invalid extracted value row');
      groups[group].set(value.value,(groups[group].get(value.value)??0)+value.occurrences);
    }
  }
  if (!hasValues) {
  for(const finding of report.findings){
    if(finding.ruleId!=='token/raw-value-in-style')continue;
    for(const hit of finding.data?.hits??[]){
      if(hit.surface!=='style'||!['color','dimension','style-literal','mixed'].includes(hit.classification))continue;
      const group=hit.category==='typography'&&hit.property==='font-size'?'typography':['spacing','color'].includes(hit.category)?hit.category:null;
      if(!group||typeof hit.value!=='string')continue;
      const key=JSON.stringify([hit.file,hit.line,hit.property,hit.value]);if(seen.has(key))continue;seen.add(key);
      groups[group].set(hit.value,(groups[group].get(hit.value)??0)+1);
    }
  }
  }
  const result={};
  for(const [name,values] of Object.entries(groups)) result[name]={occurrences:[...values.values()].reduce((a,b)=>a+b,0),distinct:values.size,values:[...values].map(([value,count])=>({value,count}))};
  return {groups:result,source:hasValues?'extracted CSS use sites':'reported literal use sites (legacy report)',coverage:report.coverage?.complete===true?'Audit reports complete supported coverage':'Audit coverage is incomplete or unspecified',limits:hasValues?'Full ordinary-CSS extraction inventory before exceptions and severity filters. Font-size excludes other typography properties. Values are source spellings, including references and unsupported expressions, not computed styles or token declarations.': 'Reported CSS literal use sites only. Font-size excludes other typography properties. References, declarations and filtered/suppressed findings cannot be reconstructed from this JSON; zero reported values is not proof of none in the project.'};
}
