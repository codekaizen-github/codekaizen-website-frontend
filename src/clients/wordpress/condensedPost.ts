import { CondensedPost } from "@interfaces/condensedPost";
import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";
import { CondensedPostsQueryObjectFromRaw } from "@validators/condensedPost";

export async function getCondensedBlogPosts(): Promise<CondensedPost[]> {
	const condensedBlogPostsQuery = gql`
		query GetCondensedBlogPosts {
			posts(where: { status: PUBLISH }) {
				nodes {
					title
					dateGmt
					excerpt
					databaseId
					slug
					author {
						node {
							databaseId
							name
						}
					}
					featuredImage {
						node {
							mediaItemUrl
							altText
							databaseId
						}
					}
				}
			}
		}
	`;
	try {
		const response = await request(
			wpGraphQLBase,
			condensedBlogPostsQuery,
			{},
			headers
		);
		const validatedResponse = CondensedPostsQueryObjectFromRaw(response);
		const condensedPosts = validatedResponse.posts.nodes;
		condensedPosts.sort((a, b) => {
			const dateA = new Date(a.dateGmt).getTime();
			const dateB = new Date(b.dateGmt).getTime();
			return dateB - dateA;
		});
		return condensedPosts;
	} catch (error) {
		console.error("Failed to fetch condensed blog posts:", error);
		throw error;
	}
}
