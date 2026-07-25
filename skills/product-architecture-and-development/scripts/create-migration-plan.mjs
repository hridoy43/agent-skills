#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? process.cwd());
const directory = path.join(root, '.architecture');
const tasks = path.join(directory, 'tasks');
await mkdir(tasks, { recursive: true });

const plan = `# Architecture Migration Plan\n\nGenerated: ${new Date().toISOString()}\n\nComplete one task at a time. Update state after each validation.\n\n- [ ] 001 Root framework and build configuration\n- [ ] 002 Styles and theme ownership\n- [ ] 003 Global assets and SVG ownership\n- [ ] 004 Shared layout and brand components\n- [ ] 005 Feature category and public-surface boundaries\n- [ ] 006 Feature file naming\n- [ ] 007 Route and domain-logic boundaries\n- [ ] 008 Component decomposition\n- [ ] 009 Structural and behavior verification\n`;
const state = JSON.stringify({ next: 1, tasks: [], exceptions: [] }, null, 2) + '\n';
await writeFile(path.join(directory, 'migration-plan.md'), plan);
await writeFile(path.join(directory, 'state.json'), state);
const taskTitles = [
  'Root framework and build configuration',
  'Styles and theme ownership',
  'Global assets and SVG ownership',
  'Shared layout and brand components',
  'Feature category and public-surface boundaries',
  'Feature file naming',
  'Route and domain-logic boundaries',
  'Component decomposition',
  'Structural and behavior verification',
];
for (const [index, title] of taskTitles.entries()) {
  const number = String(index + 1).padStart(3, '0');
  const slug = title.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/-$/, '');
  const task = `# Task ${number}: ${title}\n\nStatus: pending\n\nFiles in scope:\n- Define before editing.\n\nDo not modify:\n- Files outside this task.\n\nRequired changes:\n- Fill in the approved scope from the audit.\n\nValidation:\n- Run the smallest relevant structural, lint, typecheck, test, or build check.\n\nCompletion condition:\n- All scoped changes are complete and validation is recorded in state.json.\n`;
  await writeFile(path.join(tasks, `${number}-${slug}.md`), task);
}
console.log(`Created ${path.relative(process.cwd(), directory)}`);
