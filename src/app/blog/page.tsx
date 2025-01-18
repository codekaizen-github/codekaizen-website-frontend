import { getCondensedBlogPosts } from "@/clients/wordpress/condensedPost";
import { CondensedPost } from "@interfaces/condensedPost";
import BlogReelPostCard from "@partials/blogReelPostCard";

export const revalidate = 3600; // Revalidate every 1 hour

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
