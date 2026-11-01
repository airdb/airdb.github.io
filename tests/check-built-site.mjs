import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
function attributes(source) {
  return Object.fromEntries([...source.matchAll(/([\w:-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)]
    .map((match) => [match[1], match[2] ?? match[3] ?? match[4] ?? '']));
}
function checkTarget(href, file) {
  if (!href || href.startsWith('#')) return;
  const url = new URL(href, 'https://airdb.com/');
  if (url.origin !== 'https://airdb.com') return;
  const path = join('dist', decodeURIComponent(url.pathname));
  assert.ok(existsSync(path) || existsSync(join(path, 'index.html')), `${file}: missing ${url.pathname}`);
}
const files = walk('dist').filter((path) => path.endsWith('.html'));
let metadataPages = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const [, tag, source] of html.matchAll(/<(a|link)\b([^>]+)>/g)) {
    const attrs = attributes(source);
    if (tag === 'a' || attrs.rel === 'alternate') checkTarget(attrs.href, file);
  }
  // Starlight provides its own metadata; these assertions cover MainLayout.
  if (!html.includes('name="web_author"')) continue;
  metadataPages++;
  const tags = [...html.matchAll(/<(meta|link)\b([^>]+)>/g)].map(([, , source]) => attributes(source));
  const canonical = tags.find((tag) => tag.rel === 'canonical').href;
  const meta = (key) => tags.find((tag) => tag.property === key || tag.name === key)?.content;
  const title = html.match(/<title>(.*?)<\/title>/s)[1];
  assert.equal(meta('og:url'), canonical, `${file}: OG URL`);
  assert.equal(meta('twitter:url'), canonical, `${file}: Twitter URL`);
  assert.equal(meta('og:title'), title, `${file}: OG title`);
  assert.equal(meta('twitter:title'), title, `${file}: Twitter title`);
  const chinese = canonical.includes('/zh-cn/');
  assert.equal(meta('og:locale'), chinese ? 'zh_CN' : 'en_US', `${file}: OG locale`);
  assert.ok(html.includes(`lang="${chinese ? 'zh-CN' : 'en'}"`), `${file}: HTML language`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(schema.url, canonical);
  assert.equal(schema['@id'], canonical);
  assert.equal(schema.inLanguage, chinese ? 'zh-CN' : 'en-US');
}
for (const slug of ['post-1', 'post-2', 'post-3']) {
  const html = readFileSync(`dist/zh-cn/blog/en/${slug}/index.html`, 'utf8');
  assert.ok(html.includes('英文原文'), `${slug}: English original label`);
  assert.ok(html.includes('mailto:support@airdb.cn?subject='), `${slug}: article feedback link`);
  assert.ok(!html.includes('Was this article helpful'), `${slug}: inert feedback removed`);
}
const listing = readFileSync('dist/zh-cn/blog/index.html', 'utf8');
for (const slug of ['post-1', 'post-2', 'post-3']) {
  assert.ok(listing.includes(`/zh-cn/blog/en/${slug}/`), `${slug}: Chinese listing destination`);
}
console.log(`Verified links across ${files.length} pages, metadata on ${metadataPages} pages, and Chinese blog content.`);
