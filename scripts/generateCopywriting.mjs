import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_URL = 'https://raw.githubusercontent.com/alphatrait/100000-ai-prompts-by-contentifyai/main/prompts/copywriting.md';

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Request failed: ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function slugToTags(sub) {
  const words = sub
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .split(/\s+/)
    .filter(Boolean);
  const unique = Array.from(new Set(words));
  return unique.slice(0, 3).length ? unique.slice(0, 3) : ['copywriting'];
}

function shortDesc(prompt) {
  const text = prompt.replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  const words = text.split(' ');
  const desc = words.slice(0, 12).join(' ');
  return desc || 'Copywriting prompt';
}

function parseMarkdown(md) {
  const lines = md.split(/\r?\n/);
  const rows = lines.filter((l) => l.startsWith('|'));
  const dataRows = rows.filter((l) => !/---/.test(l)).slice(1); // skip header
  return dataRows.map((row) => {
    const parts = row.split('|').map((s) => s.trim());
    return { subcat: parts[1], prompt: parts[2] };
  });
}

async function main() {
  const md = await fetchRaw(RAW_URL);
  const all = parseMarkdown(md);
  if (!all.length) {
    throw new Error('No rows parsed from markdown');
  }
  // We already inserted cw-001..cw-100; generate cw-101..cw-194
  const startOffset = 100; // zero-based index
  const take = 94;
  const selected = all.slice(startOffset, startOffset + take);

  let idx = 101;
  const items = selected.map(({ subcat, prompt }) => {
    const id = `cw-${String(idx).padStart(3, '0')}`;
    idx++;
    return {
      id,
      title: subcat,
      description: shortDesc(prompt),
      content: prompt,
      category: 'Copywriting',
      tags: slugToTags(subcat),
      popularity: 83,
      createdAt: '2025-08-18',
    };
  });

  const out = `export const COPYWRITING_PROMPTS = ${JSON.stringify(items, null, 2)};\n`;
  const outPath = path.join(__dirname, '..', 'data', 'copywriting_import.ts');
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Wrote', outPath, 'items:', items.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
