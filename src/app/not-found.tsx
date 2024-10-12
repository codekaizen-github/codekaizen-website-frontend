import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">
					You have strayed into the void.
				</h1>
				<p className="mb-2 text-lg">
					This page has mastered the ancient art of not existing
					(404).
				</p>
				<p className="mb-2 text-lg">
					Breathe deep, center yourself, and{" "}
					<Link
						aria-label="go home"
						href="/"
						className="text-retro-blue"
					>
						return to the way of the code
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
