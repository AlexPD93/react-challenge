// eslint-disable-next-line import/no-unresolved
import { describe as test, after } from "node:test";
import assert from "node:assert/strict";
// eslint-disable-next-line import/no-unresolved -- the _test dir is generated on the fly when tests run
import App from "../_test/App.js";
import { render, unmount, $, window } from "./helpers.js";

test("top-level passes", async () => {
  after(unmount);

  render(App);

  const p = $("main p");
  assert.ok(
    p instanceof window.HTMLElement,
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
