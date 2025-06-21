import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllBlogPostSlugs } from "@/clients/wordpress/postSlug";
import { getExpandedBlogPost } from "@/clients/wordpress/expandedPost";
import { formatDateAsFriendly } from "@/app/utils/formatDate";
import { ExpandedPost } from "@/interfaces/expandedPost";
import ServerError from "@partials/serverError";
import "highlight.js/styles/github.css"; // Importing a syntax highlighting theme

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
	let post: ExpandedPost | null = null;

	try {
		post = await getExpandedBlogPost(params.slug);
	} catch (error) {
		return <ServerError />;
	}

	if (post === null) {
		notFound();
	}

	return (
		<div>
			<div>
				{post.featuredImage && (
					<>
						<Image
							src={post.featuredImage.node.mediaItemUrl}
							alt={post.featuredImage.node.altText}
							width={150}
							height={150}
							className="mb-4 h-40 w-40 mx-auto"
						/>
					</>
				)}
				<h1 className="text-3xl">{post.title}</h1>
				<p className="text-neutral-400">
					{formatDateAsFriendly(post.dateGmt)} by{" "}
					{post.author.node.name}
				</p>
				<div
					dangerouslySetInnerHTML={{ __html: post.content }}
					className="mt-4 space-between-p"
				/>
			</div>
		</div>
	);
}
