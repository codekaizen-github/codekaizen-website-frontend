import {
	ExpandedPost,
	ExpandedPostQueryObject,
} from "@interfaces/expandedPost";
import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";

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
		const response: ExpandedPostQueryObject = await request(
			wpGraphQLBase,
			expandedBlogPostQuery,
			variables,
			headers
		);
		const expandedPost: ExpandedPost = response.post;
		return expandedPost;
	} catch (error) {
		console.error("Failed to fetch expanded blog post:", error);
		throw error;
	}
}
