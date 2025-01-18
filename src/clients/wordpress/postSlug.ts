import { PostSlug, PostSlugsQueryObject } from "@interfaces/postSlug";
import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";

export async function getAllBlogPostSlugs(): Promise<string[]> {
	const blogPostSlugs = gql`
		query GetAllBlogPostSlugs {
			posts(where: { status: PUBLISH }) {
				nodes {
					databaseId
					slug
				}
			}
		}
	`;
	try {
		const response: PostSlugsQueryObject = await request(
			wpGraphQLBase,
			blogPostSlugs,
			{},
			headers
		);
		const postSlugs = response.posts.nodes as PostSlug[];
		const slugs = postSlugs.map((post) => post.slug);
		return slugs;
	} catch (error) {
		console.error("Failed to fetch blog post slugs:", error);
		throw error;
	}
}
