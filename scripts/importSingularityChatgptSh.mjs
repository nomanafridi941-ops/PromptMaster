import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_DIR = 'https://api.github.com/repos/SingularityLabs-ai/Ultimate_Prompts_Directory/contents/chatgpt-sh';
const RAW_BASE = 'https://raw.githubusercontent.com/SingularityLabs-ai/Ultimate_Prompts_Directory/main/chatgpt-sh/';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'promptmaster-import' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Request failed: ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function fetchRaw(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'promptmaster-import' } }, (res) => {
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

function parseTable(md, fileName) {
  const lines = md.split(/\r?\n/);
  const rows = [];
  for (const line of lines) {
    if (!line.startsWith('|')) continue;
    if (line.includes('---')) continue;
    const parts = line.split('|').map((s) => s.trim());
    if (parts.length < 3) continue;
    const title = parts[1];
    const prompt = parts[2];
    if (!title || !prompt) continue;
    rows.push({ title, prompt });
  }
  // Skip header row if present
  if (rows.length && /标题|Title|\-\-\-/.test(rows[0].title)) rows.shift();
  return rows.map((row) => ({ ...row, source: fileName }));
}

function makeId(n) {
  return `sgl-${String(n).padStart(4, '0')}`;
}

function shortDesc(text) {
  const clean = text.replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  return clean.split(' ').slice(0, 12).join(' ') || 'Prompt';
}

async function main() {
  console.log('Listing chatgpt-sh directory...');
  const listing = await fetchJson(API_DIR);
  const files = listing.filter((x) => x.type === 'file' && x.name.endsWith('.md'));
  console.log('Found', files.length, 'markdown files');

  let counter = 1;
  const items = [];
  for (const f of files) {
    const rawUrl = RAW_BASE + f.name;
    const md = await fetchRaw(rawUrl);
    const rows = parseTable(md, f.name);
    for (const r of rows) {
      items.push({
        id: makeId(counter++),
        title: r.title,
        description: shortDesc(r.prompt),
        content: r.prompt,
        category: 'ChatGPT',
        tags: ['general', 'chatgpt', 'task'],
        popularity: 78,
        createdAt: '2025-12-22'
      });
    }
  }

  const outPath = path.join(__dirname, '..', 'data', 'singularity_import.ts');
  const out = `export const SINGULARITY_PROMPTS = ${JSON.stringify(items, null, 2)};\n`;
  fs.writeFileSync(outPath, out, 'utf8');
  console.log('Wrote', outPath, 'items:', items.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
