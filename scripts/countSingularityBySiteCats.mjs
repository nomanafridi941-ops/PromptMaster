import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunksDir = path.join(__dirname, '..', 'public', 'singularity', 'chunks');

// Site categories
const SITE_CATS = [
  'ChatGPT',
  'SEO',
  'YouTube',
  'Midjourney',
  'Fiverr/Upwork',
  'Social Media',
  'Marketing',
  'Copywriting',
  'Email Marketing'
];

// Keyword mapping (Chinese + English)
const MAP = [
  { cat: 'SEO', keywords: ['SEO', '网站SEO', '搜索引擎', '关键词', '关键字', '排名', '元描述', 'Meta 描述', '标题标签', 'Title Tag', 'SERP'] },
  { cat: 'YouTube', keywords: ['YouTube', '油管', '视频脚本', '视频描述', '视频标题', 'YOUTUBE'] },
  { cat: 'Midjourney', keywords: ['Midjourney', '稳定扩散', 'Stable Diffusion', '图像生成', '图片生成', 'DALL-E', '绘图', '视觉生成'] },
  { cat: 'Fiverr/Upwork', keywords: ['Fiverr', 'Upwork', '自由职业', '接单', '提案', '报价', '客户开发', 'Freelance'] },
  { cat: 'Social Media', keywords: ['社交媒体', 'Social Media', '微博', 'Twitter', 'Instagram', '抖音', 'TikTok', 'Facebook', 'LinkedIn'] },
  { cat: 'Marketing', keywords: ['营销', '市场', 'Market', '广告', '推广', '品牌', '转化', '活动策划', 'Campaign', '销售'] },
  { cat: 'Copywriting', keywords: ['文案', '广告文案', '写作', '标题', '故事', 'Slogan', 'Copy', '撰写'] },
  { cat: 'Email Marketing', keywords: ['电子邮件', '邮件', '邮箱', '邮件营销', '邮件主题', '订阅', 'Newsletter'] },
];

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

function detectCategory(title) {
  const t = (title || '').toLowerCase();
  // Try direct keyword mapping
  for (const rule of MAP) {
    for (const kw of rule.keywords) {
      if (t.includes(kw.toLowerCase())) return rule.cat;
    }
  }
  // Fallbacks: route common general tasks to ChatGPT
  const general = ['自然语言处理', '文本生成', '文本分类', '情感分析', '机器翻译', '数据分析', '计算机视觉', '开放生成', '推荐系统'];
  for (const g of general) {
    if (title.includes(g)) return 'ChatGPT';
  }
  return 'ChatGPT';
}

function main() {
  const files = listChunkFiles();
  if (!files.length) {
    console.error('No chunk files found in', chunksDir);
    return;
  }

  const counts = new Map(SITE_CATS.map((c) => [c, 0]));
  let total = 0;

  for (const f of files) {
    const arr = JSON.parse(fs.readFileSync(f, 'utf8'));
    total += arr.length;
    for (const it of arr) {
      const cat = detectCategory(it.title || '');
      counts.set(cat, (counts.get(cat) || 0) + 1);
    }
  }

  console.log('Singularity total (chatgpt-sh):', total);
  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  for (const [cat, n] of sorted) {
    console.log(`${cat}: ${n}`);
  }
  const chatgpt = counts.get('ChatGPT') || 0;
  const nonChatgpt = Array.from(counts.entries()).filter(([c]) => c !== 'ChatGPT').reduce((a, [, n]) => a + n, 0);
  console.log(`Summary → ChatGPT: ${chatgpt}, Non-ChatGPT: ${nonChatgpt}`);
}

main();
