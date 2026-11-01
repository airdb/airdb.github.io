import assert from "node:assert/strict";
import { test } from "node:test";
import { getLocale, getLocalizedPath } from "../src/lib/localization.ts";

test("switches ordinary pages and the home page in both directions", () => {
  assert.equal(
    getLocalizedPath("/products/a145/", "zh-CN"),
    "/zh-cn/products/a145/",
  );
  assert.equal(getLocalizedPath("/zh-cn/contact/", "en"), "/contact/");
  assert.equal(getLocalizedPath("/", "zh-CN"), "/zh-cn/");
  assert.equal(getLocalizedPath("/zh-cn/", "en"), "/");
  assert.equal(getLocalizedPath("/zh-cn", "en"), "/");
});

test("preserves existing nested blog URLs without duplicating locale segments", () => {
  assert.equal(
    getLocalizedPath("/blog/en/post-1/", "zh-CN"),
    "/zh-cn/blog/en/post-1/",
  );
  assert.equal(
    getLocalizedPath("/zh-cn/blog/en/post-1/", "en"),
    "/blog/en/post-1/",
  );
  assert.equal(
    getLocalizedPath("/zh-cn/blog/en/post-1/", "zh-CN"),
    "/zh-cn/blog/en/post-1/",
  );
});

test("uses existing insight routes instead of inventing a Chinese route", () => {
  assert.equal(
    getLocalizedPath("/insights/en/insight-2/", "zh-CN"),
    "/insights/zh-cn/insight-2/",
  );
  assert.equal(
    getLocalizedPath("/insights/zh-cn/insight-2/", "en"),
    "/insights/en/insight-2/",
  );
  assert.equal(getLocale("/insights/zh-cn/insight-2/"), "zh-CN");
  assert.equal(getLocale("/zh-cn/products/"), "zh-CN");
  assert.equal(getLocale("/blog/en/post-1/"), "en");
});

test("404 language links lead to existing home pages", () => {
  assert.equal(getLocalizedPath("/404/", "en"), "/");
  assert.equal(getLocalizedPath("/404.html", "zh-CN"), "/zh-cn/");
});
