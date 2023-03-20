// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert/strict";
import {
  render,
  createElement,
  component,
  prettyDOM,
  tag,
  fireEvent,
} from "./helpers.js";

test("MouseTracker component converts user input to upper case", async (t) => {
  t.mock.method(window, "addEventListener");
  t.mock.method(window, "removeEventListener");

  const MouseTracker = await component("MouseTracker");
  const { unmount, container } = render(createElement(MouseTracker));

  const output = tag(container, "output", HTMLOutputElement);

  fireEvent.mouseMove(document.body, { clientX: 150, clientY: 3 });
  assert.equal(
    output.textContent,
    "150,3",
    `Expected <output>150,3</output>, but got:\n${prettyDOM()} `
  );

  fireEvent.mouseMove(document.body, { clientX: 27, clientY: 14 });
  assert.equal(
    window.addEventListener.mock.calls.length,
    1,
    `MouseTracker should only add 1 event listener to the window`
  );

  unmount();
  fireEvent.mouseMove(document.body, { clientX: 27, clientY: 14 });
  assert.equal(
    window.removeEventListener.mock.calls.length,
    1,
    `Window event listener should be removed after MouseTracker is unmounted. Did you clean up?`
  );
});
