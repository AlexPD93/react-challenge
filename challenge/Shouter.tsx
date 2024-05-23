import { useState } from "react";

function Shouter() {
  const [input, setInput] = useState("");

  function displayInput(value: string) {
    setInput(value);
  }

  return (
    <div>
      <h2>Shouter</h2>
      <input
        type="text"
        id={"1"}
        value={input}
        onChange={(e) => displayInput(e.target.value)}
      />
      <output>{input.toUpperCase()}</output>
    </div>
  );
}

export default Shouter;
