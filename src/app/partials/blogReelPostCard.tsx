import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CondensedPost } from "@interfaces/condensedPost";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import { JSDOM } from "jsdom";
import { formatDateAsFriendly } from "@/utils/formatDate";

interface BlogReelPostCardProps {
	post: CondensedPost;
}

export default function BlogReelPostCard({ post }: BlogReelPostCardProps) {
	const window = new JSDOM("").window;
	const DOMPurifyServer = DOMPurify(window);

	return (
		<div className="bg-neutral-800">
			<div className="flex items-center justify-between h-full">
				<div className="flex flex-wrap items-center py-4 pl-4 md:flex-nowrap">
					{post.featuredImage && (
						<>
							<Image
								src={post.featuredImage.node.mediaItemUrl}
								alt={post.featuredImage.node.altText}
								width={150}
								height={150}
								className="mb-4 h-40 w-40 md:mb-0 sm:mr-4"
							/>
						</>
					)}
					<div className="flex gap-4 mr-4">
						<div className="post-content">
							<p className="text-2xl font-semibold">
								<Link href={`/blog/${post.slug}`}>
									{post.title}
								</Link>
							</p>
							<p className="text-neutral-400">
								{formatDateAsFriendly(post.dateGmt)} by{" "}
								{post.author.node.name}
							</p>
							<div className="mt-2">
								{ReactHtmlParser(
									DOMPurifyServer.sanitize(post.excerpt)
								)}
							</div>
						</div>
					</div>
				</div>
				<Link
					aria-label="View post"
					href={`/blog/${post.slug}`}
					className="flex items-center h-full p-4 hover:bg-neutral-700 hover:cursor-pointer text-retro-blue hover:text-retro-darkBlue"
				>
					<FontAwesomeIcon
						icon={faAngleRight}
						className="font-lg h-full"
						size="lg"
					/>
				</Link>
			</div>
		</div>
	);
}
