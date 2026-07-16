import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
test('seed data is valid',()=>assert.doesNotThrow(()=>execFileSync(process.execPath,['scripts/validate-data.mjs'])));
test('world hierarchy documents safe starting point',()=>{ const model=readFileSync('docs/world-model.md','utf8'); assert.match(model,/World 0/); assert.match(model,/World 2/); });
test('atlas app has the requested sections',()=>{ const app=readFileSync('src/main.jsx','utf8'); for(const section of ['Machtbaum','Geldfluss','Staatsbilanz','Genesis','Quellen & Audit']) assert.ok(app.includes(section)); });
