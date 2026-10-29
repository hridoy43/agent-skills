#!/usr/bin/env node

import { access } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const home = os.homedir();
const bundledSkillsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const roots = [
  bundledSkillsRoot,
  path.join(process.cwd(), '.agents', 'skills'),
  path.join(process.cwd(), '.claude', 'skills'),
  path.join(home, '.agents', 'skills'),
  path.join(home, '.claude', 'skills'),
  path.join(home, '.codex', 'skills'),
];

const add = (source, skill) => `npx skills@latest add ${source} --skill ${skill}`;
const own = (skill) => add('hridoy43/agent-skills', skill);

const companions = [
  { name: 'impeccable', purpose: 'UI critique, refinement, DESIGN.md', install: add('pbakaus/impeccable', 'impeccable') },
  { name: 'ui-ux-pro-max', purpose: 'design-system and pattern research', install: add('nextlevelbuilder/ui-ux-pro-max-skill', 'ui-ux-pro-max') },
  { name: 'ai-assisted-product-development', purpose: 'AI design exploration and feedback loops', install: own('ai-assisted-product-development') },
  { name: 'conversion-storytelling', purpose: 'conversion narrative, proof, and CTA', install: own('conversion-storytelling') },
  { name: 'content-marketing-and-brand-growth', purpose: 'launch campaigns and social', install: own('content-marketing-and-brand-growth') },
  { name: 'global-discovery-browsing-extraction', purpose: 'web research and asset discovery', install: own('global-discovery-browsing-extraction') },
  { name: 'graphify', purpose: 'code-and-docs graph (after approval)', install: 'uv tool install graphifyy && graphify install --project --platform agents' },
  { name: 'text-to-lottie', purpose: 'Lottie authoring', install: add('diffusionstudio/lottie', 'text-to-lottie') },
  { name: 'hyperframes', purpose: 'product demo and launch video', install: add('heygen-com/hyperframes', 'hyperframes') },
  { name: 'transitions-dev', purpose: 'ready-made UI transitions (free tier)', install: add('Jakubantalik/transitions.dev', 'transitions-dev') },
  { name: 'expo-ui', purpose: 'Expo skills (routing, native UI, modules, EAS)', install: 'npx skills@latest add expo/skills' },
  { name: 'react-native-best-practices', purpose: 'React Native practices (install one source)', install: `${add('callstackincubator/agent-skills', 'react-native-best-practices')} (or software-mansion-labs/skills)` },
  { name: 'maestro-mobile-testing', purpose: 'mobile E2E', install: add('tovimx/maestro-mobile-testing-skill', 'maestro-mobile-testing') },
  { name: 'pulsar-haptics', purpose: 'native haptics presets', install: add('software-mansion-labs/skills', 'pulsar-haptics') },
  { name: 'web-haptics', purpose: 'mobile-web haptics', install: add('lochie/web-haptics', 'web-haptics') },
  { name: 'find-skills', purpose: 'capability discovery', install: add('vercel-labs/skills', 'find-skills') },
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
    install: location ? '' : companion.install,
  });
}

console.table(rows);

if (rows.some((row) => row.status === 'missing')) {
  console.log('\nMissing companions are optional until their workflow needs them. Suggest the install command; never install silently.');
}
