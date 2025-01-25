"use client";

export default function ServerError() {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">
					Oops! Something went wrong on our end...
				</h1>
				<p className="mb-2 text-lg">
					This page appears to be in a trance.
				</p>
				<p className="mb-2 text-3xl">🧘‍♂️</p>
				<p className="mb-2 text-lg">
					<button onClick={handleGoBack} className="display-as-link">
						Go back
					</button>
				</p>
			</div>
		</div>
	);
}
