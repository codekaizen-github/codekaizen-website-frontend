import { getBlogPosts } from "../api/blogPost";

export default async function BlogRoll() {
	let blogPosts = await getBlogPosts();

	return (
		<>
			<h1 className="text-3xl pb-6">Blog</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{blogPosts?.map((post) => (
					<div key={post.id}>
						<div>
							<h2>{post.id}</h2>
							<p>{post.slug}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
