import {
	CondensedPost,
	CondensedPostQueryObject,
} from "@interfaces/condensedPost";
import { request, gql } from "graphql-request";

const wpGraphQLBase = process.env.WORDPRESS_GRAPHQL_BASE ?? "";

export async function getCondensedBlogPosts(): Promise<CondensedPost[]> {
	const condensedBlogPostsQuery = gql`
		{
			posts {
				nodes {
					databaseId
					title
					dateGmt
					excerpt
					slug
					author {
						node {
							databaseId
							name
						}
					}
					featuredImage {
						node {
							databaseId
							mediaItemUrl
							altText
						}
					}
				}
			}
		}
	`;
	try {
		const condensedWPPosts: CondensedPostQueryObject = await request(
			wpGraphQLBase,
			condensedBlogPostsQuery
		);
		const formattedResults = condensedWPPosts.posts
			.nodes as CondensedPost[];
		formattedResults.sort((a, b) => {
			const dateA = new Date(a.dateGmt).getTime();
			const dateB = new Date(b.dateGmt).getTime();
			return dateB - dateA;
		});
		return formattedResults;
	} catch (error) {
		console.error("Failed to fetch condensed blog posts:", error);
		throw error;
	}
}
