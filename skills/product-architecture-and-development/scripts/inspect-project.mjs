#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const requestedRoot = process.argv[2] ?? process.cwd();
const root = path.resolve(requestedRoot);
const ignored = new Set(['.git', '.next', '.turbo', 'build', 'coverage', 'dist', 'node_modules']);

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function readJson(target) {
  if (!(await exists(target))) return null;
  try {
    return JSON.parse(await readFile(target, 'utf8'));
  } catch (error) {
    return { __error: error instanceof Error ? error.message : String(error) };
  }
}

async function listTree(directory, depth = 0, maxDepth = 2) {
  if (depth > maxDepth || !(await exists(directory))) return [];
  const entries = await readdir(directory, { withFileTypes: true });
  const lines = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (ignored.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    lines.push(`${'  '.repeat(depth)}${entry.name}${entry.isDirectory() ? '/' : ''}`);
    if (entry.isDirectory()) lines.push(...(await listTree(absolute, depth + 1, maxDepth)));
  }
  return lines;
}

const packageJson = await readJson(path.join(root, 'package.json'));
const workspaces = packageJson?.workspaces ?? null;
const dependencies = { ...(packageJson?.dependencies ?? {}), ...(packageJson?.devDependencies ?? {}) };
const detected = {
  typescript: Boolean(dependencies.typescript || (await exists(path.join(root, 'tsconfig.json')))),
  tailwind: Boolean(dependencies.tailwindcss),
  next: Boolean(dependencies.next),
  expo: Boolean(dependencies.expo),
  reactNative: Boolean(dependencies['react-native']),
  tauri: Boolean(dependencies['@tauri-apps/api'] || (await exists(path.join(root, 'src-tauri')))),
  electron: Boolean(dependencies.electron),
  axios: Boolean(dependencies.axios),
  tanstackQuery: Boolean(dependencies['@tanstack/react-query']),
  zod: Boolean(dependencies.zod),
};

console.log(JSON.stringify({
  root,
  packageManager: packageJson?.packageManager ?? 'not declared',
  workspaces,
  scripts: packageJson?.scripts ?? {},
  detected,
  hasAgentsInstructions: await exists(path.join(root, 'AGENTS.md')),
  sourceTree: await listTree(path.join(root, 'src')),
}, null, 2));
