import { getExpandedBlogPosts } from "../api/blogPost";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import { JSDOM } from "jsdom";
import { ExpandedWordPressPost } from "@interfaces/expandedPost";

export default async function BlogRoll() {
	const expandedBlogPosts: ExpandedWordPressPost[] =
		await getExpandedBlogPosts();
	const window = new JSDOM("").window;
	const DOMPurifyServer = DOMPurify(window);

	return (
		<>
			<h1 className="text-3xl pb-6">Blog</h1>
			<div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
				{expandedBlogPosts?.map((post) => (
					<div key={post.id}>
						<div>
							<p>{post.title.rendered}</p>
							{ReactHtmlParser(
								DOMPurifyServer.sanitize(post.excerpt.rendered)
							)}
							<p>{post.author}</p>
							<p>{post.date}</p>
							<p>{post.expandedAuthor?.name}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
