import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";
import { PostSlugsQueryObjectFromRaw } from "@/validators/postSlug";

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
		const response = await request(
			wpGraphQLBase,
			blogPostSlugs,
			{},
			headers
		);
		const validatedResponse = PostSlugsQueryObjectFromRaw(response);
		const postSlugs = validatedResponse.posts.nodes;
		const slugs = postSlugs.map((post) => post.slug);
		return slugs;
	} catch (error) {
		console.error("Failed to fetch blog post slugs:", error);
		throw error;
	}
}
