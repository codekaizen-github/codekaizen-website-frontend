export function formatAsMultilineComment(
	text: string,
	font: string,
	maxWidth: number
): string {
	// Create a canvas element
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	if (context) {
		// Set the font properties to match the paragraph's font
		context.font = font;

		// Split the text into words
		const words = text.split(" ");
		let line = "";
		let formattedText = "/**\n";

		// Loop through each word and calculate the number of lines
		words.forEach((word) => {
			const testLine = line + word + " ";
			const metrics = context.measureText(testLine);
			const testWidth = metrics.width;

			if (testWidth > maxWidth - 10 && line.length > 0) {
				formattedText += `* ${line.trim()}\n`;
				line = word + " ";
			} else {
				line = testLine;
			}
		});

		// Add the last line
		if (line.length > 0) {
			formattedText += `* ${line.trim()}\n`;
		}

		formattedText += "*/";
		return formattedText;
	}

	return text;
}
