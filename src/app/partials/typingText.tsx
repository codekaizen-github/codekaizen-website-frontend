"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
	text: string;
}

const TypingText = ({ text }: TypingTextProps) => {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	const [blinkCursor, setBlinkCursor] = useState(false);

	// useEffect(() => {
	// 	if (index < text.length) {
	// 		const timeout = setTimeout(() => {
	// 			setDisplayedText((prev) => prev + text.charAt(index));
	// 			setIndex((prev) => prev + 1);
	// 		}, 100);
	// 		return () => clearTimeout(timeout);
	// 	}
	// }, [index, text]);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text.charAt(index));
				setIndex((prev) => prev + 1);
			}, 100);
			return () => clearTimeout(timeout);
		} else {
			setBlinkCursor(true);
		}
	}, [index, text]);

	return (
		<div className="typing-container">
			<p className={blinkCursor ? "cursor cursor-blink" : "cursor"}>
				{displayedText}
			</p>
			<p className="sr-only">{text}</p>
		</div>
	);
};

export default TypingText;
