export type Locale = "en" | "zh-CN";

export function getLocale(pathname: string): Locale {
  return /^\/zh-cn(?:\/|$)/.test(pathname) ||
    pathname.startsWith("/insights/zh-cn/")
    ? "zh-CN"
    : "en";
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  if (/^\/404(?:\.html|\/)?$/.test(pathname))
    return locale === "en" ? "/" : "/zh-cn/";
  const path = pathname.replace(/^\/zh-cn(?=\/|$)/, "") || "/";
  if (path.startsWith("/insights/")) {
    return path.replace(
      /^\/insights\/(?:en|zh-cn)\//,
      `/insights/${locale === "en" ? "en" : "zh-cn"}/`,
    );
  }
  return locale === "en" ? path : `/zh-cn${path}`;
}
