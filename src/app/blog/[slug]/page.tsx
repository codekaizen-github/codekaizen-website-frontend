import { notFound } from "next/navigation";
import { getAllBlogPostSlugs } from "@/api/postSlug";
import { getExpandedBlogPost } from "@/api/expandedPost";
import { formatDateAsFriendly } from "@/utils/formatDate";
import Image from "next/image";

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
				<h1 className="text-2xl">{post.title}</h1>
				<p className="text-neutral-400">
					{formatDateAsFriendly(post.dateGmt)} by{" "}
					{post.author.node.name}
				</p>
				<div
					dangerouslySetInnerHTML={{ __html: post.content }}
					className="mt-4 space-between-p"
				/>
			</div>
			<div></div>
		</div>
	);
}
