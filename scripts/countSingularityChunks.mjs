import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunksDir = path.join(__dirname, '..', 'public', 'singularity', 'chunks');

function listChunkFiles() {
  if (!fs.existsSync(chunksDir)) {
    console.error('Chunks directory not found:', chunksDir);
    return [];
  }
  return fs
    .readdirSync(chunksDir)
    .filter((f) => /^chunk-\d{3}\.json$/.test(f))
    .map((f) => path.join(chunksDir, f))
    .sort();
}

function main() {
  const files = listChunkFiles();
  if (!files.length) {
    console.error('No chunk files found in', chunksDir);
    return;
  }
  let total = 0;
  const titleCounts = new Map();
  for (const f of files) {
    const arr = JSON.parse(fs.readFileSync(f, 'utf8'));
    total += arr.length;
    for (const it of arr) {
      const t = (it.title || 'Unknown').trim();
      titleCounts.set(t, (titleCounts.get(t) || 0) + 1);
    }
  }
  console.log('Singularity (chatgpt-sh) total prompts:', total);
  const top = Array.from(titleCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25);
  console.log('Top 25 titles by count:');
  for (const [t, n] of top) console.log(`${t}: ${n}`);
}

main();
