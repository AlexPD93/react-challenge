import { JSDOM } from "jsdom";
import { createElement as h, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

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
