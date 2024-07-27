import TypingText from "./partials/typingText";

export default function HomePage() {
	// TODO: Design home page

	return (
		<>
			<h1 className="sr-only">code(); share(); repeat();</h1>
			<div className="text-center p-4 h-20 text-5xl">
				<TypingText text={["code(); ", "share(); ", "repeat();"]} />
			</div>
		</>
	);
}
