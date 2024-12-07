import { getExpandedBlogPosts } from "../api/blogPost";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import { JSDOM } from "jsdom";
import { ExpandedPost } from "@interfaces/expandedPost";

export default async function BlogRoll() {
	const expandedBlogPosts: ExpandedPost[] = await getExpandedBlogPosts();
	const window = new JSDOM("").window;
	const DOMPurifyServer = DOMPurify(window);

	return (
		<>
			<h1 className="text-3xl pb-6">Blog</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{expandedBlogPosts?.map((post) => (
					<div key={post.databaseId}>
						<h2 className="text-2xl">{post.title}</h2>
						<p className="text-sm text-gray-500">
							{new Date(post.dateGmt).toLocaleDateString()}
						</p>
						{ReactHtmlParser(
							DOMPurifyServer.sanitize(post.excerpt)
						)}
						<a href={`/blog/${post.slug}`}>Read more</a>
					</div>
				))}
			</div>
		</>
	);
}
