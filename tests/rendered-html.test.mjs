import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Luna homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Rooted in/);
  assert.match(html, /Shop the collection/);
  assert.match(html, /The Wave Pot/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("server-renders the shop and a product route", async () => {
  const [shop, product] = await Promise.all([render("/shop"), render("/products/classic-round")]);
  assert.equal(shop.status, 200);
  assert.equal(product.status, 200);
  assert.match(await shop.text(), /Plants,.*properly dressed/s);
  const productHtml = await product.text();
  assert.match(productHtml, /The Classic Round/);
  assert.match(productHtml, /Product/);
});

test("all customer and SEO routes respond", async () => {
  const routes = [
    "/about",
    "/cart",
    "/checkout",
    "/contact",
    "/journal",
    "/journal/why-we-print-to-order",
    "/robots.txt",
    "/sitemap.xml",
  ];
  const responses = await Promise.all(routes.map((route) => render(route)));
  responses.forEach((response, index) => {
    assert.equal(response.status, 200, `${routes[index]} should respond with 200`);
  });
  assert.match(await responses[6].text(), /lunaplants\.co\.uk\/sitemap\.xml/);
  assert.match(await responses[7].text(), /lunaplants\.co\.uk\/products\/classic-round/);
});

test("starter preview is removed", async () => {
  const [page, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
  ]);
  assert.doesNotMatch(page, /_sites-preview|codex-preview|SkeletonPreview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
