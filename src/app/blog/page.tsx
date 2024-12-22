import { getCondensedBlogPosts } from "../api/blogPost";
import { CondensedPost } from "@interfaces/condensedPost";
import BlogReelPostCard from "../partials/blogReelPostCard";

export default async function BlogRoll() {
	const condensedBlogPosts: CondensedPost[] = await getCondensedBlogPosts();

	return (
		<>
			<h1 className="text-3xl pb-6">Blog</h1>
			<div className="gap-6 grid grid-cols-1">
				{condensedBlogPosts?.map((post) => (
					<BlogReelPostCard key={post.databaseId} post={post} />
				))}
			</div>
		</>
	);
}
