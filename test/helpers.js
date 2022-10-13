import { JSDOM } from "jsdom";
import { createElement as h, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

let html = `<!doctype html>
<body><div id="root"></div></body>`;

export function load() {
  let dom = new JSDOM(html);
  dom.$ = (s) => dom.window.document.querySelector(s);
  function render(Comp) {
    globalThis.window = dom.window;
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    const el = h(StrictMode, { children: h(Comp) });
    act(() => {
      ReactDOM.createRoot(dom.$("#root")).render(el);
    });
    return dom;
  }
  return render;
}
