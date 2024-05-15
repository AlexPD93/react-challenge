import { useEffect, useState } from "react";

export default function MouseTracker() {
	const [coords, setCoords] = useState<[number, number]>([0, 0]);

	useEffect(() => {
		function update(e: MouseEvent) {
			setCoords([e.clientX, e.clientY]);
		}
		window.addEventListener("mousemove", update);
		return () => window.removeEventListener("mousemove", update);
	}, []);

	const [x, y] = coords;
	return (
		<output>
			{x},{y}
		</output>
	);
}
