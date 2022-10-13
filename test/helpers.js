import { JSDOM } from "jsdom";
import { createElement as h, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import assert from "node:assert/strict";

let html = `<!doctype html>
<body><div id="root"></div></body>`;

let dom = new JSDOM(html);
globalThis.window = dom.window;

export let window = dom.window;
export let $ = (s) => window.document.querySelector(s);

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
let root = ReactDOM.createRoot($("#root"));

export function unmount() {
  act(() => root.unmount());
}

export function render(children) {
  const el = h(StrictMode, { children });
  act(() => {
    root.render(el);
  });
}

export function serialize() {
  return dom.serialize();
}

export async function component(name) {
  const module = await import(`../_test/${name}.js`).catch(() => {
    assert.fail(`Could not find ${name}.jsx file`);
  });
  assert.equal(
    typeof module.default,
    "function",
    `Default export from ${name}.jsx should be a function, but got:
    
    ${module.default}
  `
  );
  return module.default;
}
