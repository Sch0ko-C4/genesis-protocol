import { readFile } from 'node:fs/promises';
const data=JSON.parse(await readFile('public/data/atlas-seed.json','utf8'));
const ids=new Set(data.sources.map(s=>s.id));
for(const source of data.sources) if(!source.id || !source.url || !source.sourceType) throw new Error(`Invalid source ${source.id}`);
for(const claim of data.claims) { if(!claim.status || !claim.validFrom || !claim.sourceIds?.length) throw new Error(`Invalid claim ${claim.id}`); for(const id of claim.sourceIds) if(!ids.has(id)) throw new Error(`Unknown source ${id}`); }
console.log('Data validation passed.');
