import { ExpandedPost } from "@interfaces/expandedPost";
import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";
import { ExpandedPostQueryObjectFromRaw } from "@validators/expandedPost";

export async function getExpandedBlogPost(slug: string): Promise<ExpandedPost> {
	const expandedBlogPostQuery = gql`
        query GetExpandedBlogPost($slug: ID = "${slug}") {
            post(id: $slug, idType: SLUG) {
                databaseId
                title
                dateGmt
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
                content
            }
        }
    `;
	try {
		const variables = { slug };
		const response = await request(
			wpGraphQLBase,
			expandedBlogPostQuery,
			variables,
			headers
		);
		const validatedResponse = ExpandedPostQueryObjectFromRaw(response);
		const expandedPost = validatedResponse.post;
		return expandedPost;
	} catch (error) {
		console.error("Failed to fetch expanded blog post:", error);
		throw error;
	}
}
