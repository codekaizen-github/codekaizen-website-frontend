import {
	ExpandedPost,
	ExpandedPostQueryObject,
} from "@interfaces/expandedPost";
import { request, gql } from "graphql-request";

const wpGraphQLBase = process.env.WORDPRESS_GRAPHQL_BASE ?? "";

export async function getExpandedBlogPosts(): Promise<ExpandedPost[]> {
	const expandedBlogPostsQuery = gql`
		{
			posts {
				nodes {
					title
					dateGmt
					excerpt
					databaseId
					slug
					author {
						node {
							name
						}
					}
				}
			}
		}
	`;
	try {
		const expandedWPPosts: ExpandedPostQueryObject = await request(
			wpGraphQLBase,
			expandedBlogPostsQuery
		);
		return expandedWPPosts.posts.nodes as ExpandedPost[];
	} catch (error) {
		console.error("Failed to fetch expanded blog posts:", error);
		throw error;
	}
}
