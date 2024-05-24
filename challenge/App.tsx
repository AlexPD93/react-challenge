import { useState } from "react";
import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";

function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Shouter />
      <MouseTracker />
    </div>
  );
}

export default App;
