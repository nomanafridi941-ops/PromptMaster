import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, '..', 'data', 'singularity_import.ts');
const outDir = path.join(__dirname, '..', 'public', 'singularity', 'chunks');

function extractJsonArray(ts) {
  const match = ts.match(/export const SINGULARITY_PROMPTS = (\[.*\]);/s);
  if (!match) throw new Error('Could not find SINGULARITY_PROMPTS array');
  return JSON.parse(match[1]);
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function main() {
  const ts = fs.readFileSync(srcPath, 'utf8');
  const items = extractJsonArray(ts);
  console.log('Loaded items:', items.length);
  ensureDir(outDir);
  const size = 10000; // 10k per chunk
  const parts = chunkArray(items, size);
  parts.forEach((chunk, idx) => {
    const fname = `chunk-${String(idx + 1).padStart(3, '0')}.json`;
    const fpath = path.join(outDir, fname);
    fs.writeFileSync(fpath, JSON.stringify(chunk), 'utf8');
  });
  console.log('Wrote', parts.length, 'chunks to', outDir);
}

main();
