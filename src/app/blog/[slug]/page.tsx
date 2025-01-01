import { notFound } from "next/navigation";
import { getAllBlogPostSlugs, getExpandedBlogPost } from "@/app/api/blogPost";

interface BlogDetailPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const slugs = await getAllBlogPostSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function BlogDetailPage(props: BlogDetailPageProps) {
	const params = await props.params;
	const post = await getExpandedBlogPost(params.slug);

	if (!post) {
		return notFound();
	}

	return (
		<div>
			<div>
				<h1 className="text-2xl">{post.title}</h1>
				<div
					dangerouslySetInnerHTML={{ __html: post.content }}
					className="mt-4 space-between-p"
				/>
			</div>
			<div></div>
		</div>
	);
}
