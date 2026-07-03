// src/lib/content.ts
export function getEntrySlug(entry: { id: string }) {
    // 匹配两种格式：blog/xxx.md 或 zh-cn/blog/xxx.md
    const match = entry.id.match(/(?:[\w-]+\/)?([\w-]+)\.\w+$/);
    return match ? match[1] : entry.id;
}