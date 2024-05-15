import { useState, type ChangeEvent } from "react";

export default function Shouter() {
	const [message, setMessage] = useState("");

	function update(event: ChangeEvent<HTMLInputElement>) {
		setMessage(event.target.value);
	}

	return (
		<>
			<input value={message} onChange={update} />
			<output>{message.toUpperCase()}</output>
		</>
	);
}
