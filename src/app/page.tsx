import TypingText from "./partials/typingText";

export default function HomePage() {
	// TODO: Design home page

	return (
		<>
			<h1 className="sr-only text-5xl code mb-8 text-center">
				code(); share(); repeat();
			</h1>
			<div className="text-center p-4 h-20 text-5xl code bg-neutral-700">
				<TypingText text="code(); share(); repeat();" />
			</div>
		</>
	);
}
