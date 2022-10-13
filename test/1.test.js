// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert/strict";
// eslint-disable-next-line import/no-unresolved -- the _test dir is generated on the fly when tests run
import App from "../_test/App.js";
import { load } from "./helpers.js";

test("top-level passes", async () => {
  const render = load();
  const dom = render(App);
  const p = dom.$("main p");
  assert.ok(
    p instanceof dom.window.HTMLElement,
    `Should be a <p> inside of <main>, but got:

    ${p}
  `
  );
  assert.match(
    p.textContent,
    /hello/i,
    `<p> should contain 'hello' message, but got:

    ${p.outerHTML}
  `
  );
});
