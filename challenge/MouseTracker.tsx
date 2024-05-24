import { useState, useEffect } from "react";
function MouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function createXAndY(e: MouseEvent) {
      setX(e.clientX);
      setY(e.clientY);
    }
    window.addEventListener("mousemove", createXAndY);
    return () => window.removeEventListener("mousemove", createXAndY);
  }, []);

  return (
    <output>
      {x},{y}
    </output>
  );
}

export default MouseTracker;
