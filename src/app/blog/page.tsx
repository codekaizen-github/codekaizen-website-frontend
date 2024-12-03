import { getBlogPosts } from "../api/blogPost";

export default async function BlogRoll() {
	let blogPosts = await fetch(
		"http://dev.codekaizen.net/wp-json/wp/v2/posts"
	).then((res) => res.json());

	return (
		<>
			<h1 className="text-3xl pb-6">Blog</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{blogPosts?.map((post: any) => (
					<>
						<div>
							<h2>{post.id}</h2>
							<p>{post.slug}</p>
						</div>
					</>
				))}
			</div>
		</>
	);
}
