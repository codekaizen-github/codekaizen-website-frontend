import { Tagline } from "@/partials/tagline";

export default function HomePage() {
	return (
		<>
			<h1 className="text-center h1">Refactoring the World</h1>
			<h2 className="mb-6 text-center h2">One Pull Request at a Time</h2>
			<div className="mb-12 bg-neutral-800">
				<span className="pb-1 text-center h3">
					<Tagline />
				</span>
			</div>
			<p className="mb-3">
				We’re a team of developers who believe in the power of small,
				consistent habits to create meaningful progress and lasting
				change. Whether it’s a tiny tweak or a major overhaul, we’re
				here to help each other out and make software better for
				everyone. We celebrate the small wins and love the process of
				refining our work together.
			</p>
			<p className="text-retro-cyan">
				Join us as we code, share, and repeat, building a stronger, more
				supportive development community one commit at a time.
			</p>
		</>
	);
}
