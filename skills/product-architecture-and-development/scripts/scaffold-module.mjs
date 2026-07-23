#!/usr/bin/env node

import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const [, , kind, rawName, ...args] = process.argv;
const rootIndex = args.indexOf('--root');
const root = path.resolve(rootIndex >= 0 ? args[rootIndex + 1] : path.join(process.cwd(), 'src'));
const apply = args.includes('--apply');

if (!['feature', 'component'].includes(kind) || !rawName) {
  console.error('Usage: scaffold-module.mjs <feature|component> <kebab-name> [--root /path/to/src] [--apply]');
  process.exit(1);
}

if (!/^[a-z][a-z0-9-]*$/.test(rawName)) {
  console.error('Name must be kebab-case and begin with a letter.');
  process.exit(1);
}

const pascal = rawName.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('');
const base = kind === 'feature'
  ? path.join(root, 'features', rawName)
  : path.join(root, 'components', 'ui', rawName);

const files = kind === 'feature'
  ? {
      [path.join(base, 'components', rawName, `${rawName}.tsx`)]: `import type { ${pascal}Props } from './${rawName}.types';\n\nexport function ${pascal}(props: ${pascal}Props) {\n  return <section>{props.children}</section>;\n}\n`,
      [path.join(base, 'components', rawName, `${rawName}.types.ts`)]: `import type { ReactNode } from 'react';\n\nexport type ${pascal}Props = {\n  children?: ReactNode;\n};\n`,
      [path.join(base, 'components', rawName, 'index.ts')]: `export { ${pascal} } from './${rawName}';\nexport type { ${pascal}Props } from './${rawName}.types';\n`,
      [path.join(base, 'index.ts')]: `export { ${pascal} } from './components/${rawName}';\nexport type { ${pascal}Props } from './components/${rawName}';\n`,
    }
  : {
      [path.join(base, `${rawName}.tsx`)]: `import type { ${pascal}Props } from './${rawName}.types';\n\nexport function ${pascal}(props: ${pascal}Props) {\n  return <div>{props.children}</div>;\n}\n`,
      [path.join(base, `${rawName}.types.ts`)]: `import type { ReactNode } from 'react';\n\nexport type ${pascal}Props = {\n  children?: ReactNode;\n};\n`,
      [path.join(base, 'index.ts')]: `export { ${pascal} } from './${rawName}';\nexport type { ${pascal}Props } from './${rawName}.types';\n`,
    };

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

console.log(`${apply ? 'Applying' : 'Dry run for'} ${kind} scaffold at ${base}`);
for (const [file, content] of Object.entries(files)) {
  const relative = path.relative(root, file);
  if (await exists(file)) {
    console.error(`Refusing to overwrite existing file: ${file}`);
    process.exit(2);
  }
  console.log(`  create ${relative}`);
  if (apply) {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, content, { encoding: 'utf8', flag: 'wx' });
  }
}

if (!apply) console.log('No files written. Add --apply after reviewing the paths.');
