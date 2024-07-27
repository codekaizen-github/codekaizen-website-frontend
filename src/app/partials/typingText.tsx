"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
	text: string[];
}

/**
 * Renders a component that types out the given text
 * @param {TypingTextProps} props -
 * @returns {JSX.Element} The rendered component
 */
export default function TypingText({ text }: TypingTextProps): JSX.Element {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	const [typingComplete, setTypingComplete] = useState(false);
	const [width, setWidth] = useState(0);
	const [currentLine, setCurrentLine] = useState(0);
	const [lineTexts, setLineTexts] = useState<string[]>([]);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		setWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handleTyping = () => {
			if (width < 1024) {
				if (currentLine < text.length) {
					if (index < text[currentLine].length) {
						setDisplayedText(
							(prev) => prev + text[currentLine].charAt(index)
						);
						setIndex((prev) => prev + 1);
					} else {
						setTimeout(() => {
							setLineTexts((prev) => [...prev, displayedText]);
							setIndex(0);
							setCurrentLine((prev) => prev + 1);
							setDisplayedText("");
						}, 150);
					}
				} else {
					setTypingComplete(true);
				}
			} else {
				if (index < text.join("").length) {
					setDisplayedText(
						(prev) => prev + text.join("").charAt(index)
					);
					setIndex((prev) => prev + 1);
				} else {
					setTypingComplete(true);
				}
			}
		};

		const timeout = setTimeout(handleTyping, 100);
		return () => clearTimeout(timeout);
	}, [index, currentLine, text, width, displayedText]);

	if (width < 1024) {
		return (
			<>
				{lineTexts.map((line, idx) => (
					<p
						key={idx}
						className={`${
							typingComplete ? "cursor-blink" : "cursor-hide"
						}`}
					>
						{line}
					</p>
				))}
				{currentLine < text.length && (
					<p
						className={`cursor ${
							typingComplete ? "cursor-blink" : ""
						}`}
					>
						{displayedText}
					</p>
				)}
			</>
		);
	}

	return (
		<div className="typing-container">
			<p className={typingComplete ? "cursor cursor-blink" : "cursor"}>
				{displayedText}
			</p>
			<p className="sr-only">{text}</p>
		</div>
	);
}
