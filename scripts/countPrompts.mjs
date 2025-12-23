import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const promptsTsPath = path.join(__dirname, '..', 'data', 'prompts.ts');
const copyImportPath = path.join(__dirname, '..', 'data', 'copywriting_import.ts');

function countFromPromptsTs(text) {
  const regex = /category:\s*'([^']+)'/g;
  const counts = new Map();
  let m;
  while ((m = regex.exec(text))) {
    const cat = m[1];
    counts.set(cat, (counts.get(cat) || 0) + 1);
  }
  return counts;
}

function extractCopywritingArray(ts) {
  const m = ts.match(/export const COPYWRITING_PROMPTS = (\[.*\]);/s);
  if (!m) return [];
  try {
    return JSON.parse(m[1]);
  } catch (e) {
    return [];
  }
}

function mergeCounts(countsMap, items) {
  for (const it of items) {
    const cat = it.category || 'Unknown';
    countsMap.set(cat, (countsMap.get(cat) || 0) + 1);
  }
}

function main() {
  const promptsText = fs.readFileSync(promptsTsPath, 'utf8');
  const copyText = fs.readFileSync(copyImportPath, 'utf8');
  const counts = countFromPromptsTs(promptsText);
  const copyItems = extractCopywritingArray(copyText);
  mergeCounts(counts, copyItems);
  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0);
  console.log('Total prompts counted (site data + copywriting import):', total);
  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  for (const [cat, n] of sorted) {
    console.log(`${cat}: ${n}`);
  }
}

main();
