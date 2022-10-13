// eslint-disable-next-line import/no-unresolved
import { describe as test, after } from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { render, unmount, $, window } from "./helpers.js";

test("Greeting component renders based on `name` prop", async () => {
  after(unmount);

  // eslint-disable-next-line import/no-unresolved -- the _test dir is generated on the fly when tests run
  const { default: Greeting } = await import("../_test/Greeting.js").catch(
    () => {
      assert.fail("Could not find Greeting.jsx file");
    }
  );
  assert.equal(
    typeof Greeting,
    "function",
    `Default export from Greeting.jsx should be a function, but got:
    
    ${Greeting}
  `
  );

  render(createElement(Greeting, { name: "oli" }));

  const p = $("p");
  assert.ok(
    p instanceof window.HTMLElement,
    `Greeting should render a <p>, but got:
  
      ${p}
    `
  );
  assert.match(
    p.textContent,
    /hello oli/i,
    `<Greeting name="oli" /> should render <p>hello oli</p>, but got:
  
      ${p.outerHTML}
    `
  );
});
