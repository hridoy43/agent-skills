#!/usr/bin/env node

import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? path.join(process.cwd(), "src"));
const ignored = new Set([
  ".git",
  ".next",
  "build",
  "coverage",
  "dist",
  "node_modules",
]);
const sourceExtensions = new Set([
  ".js",
  ".jsx",
  ".md",
  ".mdx",
  ".ts",
  ".tsx",
  ".vue",
  ".svelte",
]);

async function walk(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(absolute)));
    else result.push(absolute);
  }
  return result;
}

try {
  await stat(root);
} catch {
  console.error(`Source root does not exist: ${root}`);
  process.exit(1);
}

const files = await walk(root);
const cssFiles = files.filter((file) => file.endsWith(".css"));
const sourceFiles = files.filter((file) =>
  sourceExtensions.has(path.extname(file)),
);
const sourceContents = await Promise.all(
  sourceFiles.map(async (file) => ({
    file,
    text: await readFile(file, "utf8"),
  })),
);
const selectorPattern = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?![_a-zA-Z0-9-])/g;
const seen = new Map();

for (const cssFile of cssFiles) {
  const css = await readFile(cssFile, "utf8");
  for (const match of css.matchAll(selectorPattern)) {
    const className = match[1];
    if (!seen.has(className)) seen.set(className, new Set());
    seen.get(className).add(cssFile);
  }
}

const report = [];
for (const [className, definitions] of seen) {
  const consumers = sourceContents
    .filter(({ text }) => text.includes(className))
    .map(({ file }) => path.relative(root, file));
  report.push({
    className,
    consumers: consumers.length,
    definitions: [...definitions]
      .map((file) => path.relative(root, file))
      .join(", "),
    sampleConsumers: consumers.slice(0, 3).join(", "),
  });
}

report.sort(
  (a, b) => a.consumers - b.consumers || a.className.localeCompare(b.className),
);
console.table(report);
console.log(
  `\n${report.length} class selectors across ${cssFiles.length} CSS files.`,
);
console.log(
  "Zero/one-consumer entries are review candidates, not automatic deletion targets; inspect dynamic and third-party use.",
);

const arbitraryUtilityPattern = /\b[a-z][a-z0-9:-]*-\[[^\]]+\]/g;
const arbitraryUtilities = new Map();

for (const { file, text } of sourceContents) {
  for (const match of text.matchAll(arbitraryUtilityPattern)) {
    const utility = match[0];
    if (!arbitraryUtilities.has(utility))
      arbitraryUtilities.set(utility, new Set());
    arbitraryUtilities.get(utility).add(path.relative(root, file));
  }
}

const arbitraryReport = [...arbitraryUtilities]
  .map(([utility, consumers]) => ({
    utility,
    occurrences: [...sourceContents].reduce(
      (total, { text }) =>
        total +
        [...text.matchAll(new RegExp(escapeRegExp(utility), "g"))].length,
      0,
    ),
    files: [...consumers].slice(0, 3).join(", "),
  }))
  .sort(
    (a, b) =>
      b.occurrences - a.occurrences || a.utility.localeCompare(b.utility),
  );

if (arbitraryReport.length) {
  console.log(
    "\nArbitrary Tailwind utilities (review structural exceptions; promote repeated design values to theme tokens):",
  );
  console.table(arbitraryReport);
} else {
  console.log("\nNo arbitrary Tailwind utilities detected.");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
