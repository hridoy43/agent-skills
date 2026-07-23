#!/usr/bin/env node

import { access } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const home = os.homedir();
const bundledSkillsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const roots = [bundledSkillsRoot, path.join(home, '.agents', 'skills'), path.join(home, '.codex', 'skills')];

const companions = [
  { name: 'impeccable', purpose: 'UI critique and refinement', requiredFor: 'design work' },
  { name: 'ui-ux-pro-max', purpose: 'design-system and pattern research', requiredFor: 'deep UI research' },
  { name: 'conversion-storytelling', purpose: 'conversion narrative, proof, and CTA strategy', requiredFor: 'conversion-focused surfaces' },
  { name: 'graphify', purpose: 'persistent code-and-document relationship mapping', requiredFor: 'complex existing repositories when approved' },
  { name: 'text-to-lottie', purpose: 'purposeful Lottie authoring', requiredFor: 'Lottie requests' },
  { name: 'hyperframes', purpose: 'product demo and launch video', requiredFor: 'video work' },
  { name: 'find-skills', purpose: 'capability discovery', requiredFor: 'missing capability' },
  { name: 'karpathy-guidelines', purpose: 'simple, evidence-led coding discipline', requiredFor: 'coding when installed' },
];

async function findSkill(name) {
  for (const root of roots) {
    const skillFile = path.join(root, name, 'SKILL.md');
    try {
      await access(skillFile);
      return skillFile;
    } catch {
      // Try the next configured skill root.
    }
  }
  return null;
}

const rows = [];
for (const companion of companions) {
  const location = await findSkill(companion.name);
  rows.push({
    skill: companion.name,
    status: location ? 'installed' : 'missing',
    purpose: companion.purpose,
    location: location ?? `Ask before installing; use find-skills for ${companion.requiredFor}.`,
  });
}

console.table(rows);

if (rows.some((row) => row.status === 'missing')) {
  console.log('\nMissing companions are optional until their workflow is needed. Never install silently.');
}
