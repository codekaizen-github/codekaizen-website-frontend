"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">
					Oops! Something went wrong...
				</h1>
				<p className="mb-2 text-lg">
					It seems our blog posts are currently meditating.
				</p>
				<p className="mb-2 text-3xl">🧘‍♂️</p>
				<p className="mt-4">
					<button onClick={() => reset()} className="display-as-link">
						Try again
					</button>{" "}
					or you can{" "}
					<Link aria-label="go home" href="/">
						return home
					</Link>{" "}
					while we find our zen.
				</p>
			</div>
		</div>
	);
}
