import { JSDOM } from "jsdom";

async function load(file) {
  let dom = await JSDOM.fromFile(file, {
    runScripts: "dangerously",
    resources: "usable",
  });
  return new Promise((resolve) => {
    dom.window.addEventListener("load", () => {
      dom.$ = (s) => dom.window.document.querySelector(s);
      resolve(dom);
    });
  });
}

const path = `dist/index.html`;
const loader = load(path);

module.exports = { loader };
