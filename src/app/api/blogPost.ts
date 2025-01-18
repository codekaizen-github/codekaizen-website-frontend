import {
	CondensedPost,
	CondensedPostsQueryObject,
	ExpandedPost,
	ExpandedPostQueryObject,
	PostSlug,
	PostSlugsQueryObject,
} from "@interfaces/blogPost";
import { request, gql } from "graphql-request";
import { CondensedPostsQueryObjectFromRaw } from "../../../validators/blogPost";

const wpGraphQLBase = process.env.WORDPRESS_GRAPHQL_BASE ?? "";
const cfAccessClientId = process.env.CF_ACCESS_CLIENT_ID ?? "";
const cfAccessClientSecret = process.env.CF_ACCESS_CLIENT_SECRET ?? "";

const headers = {
	"CF-Access-Client-Id": cfAccessClientId,
	"CF-Access-Client-Secret": cfAccessClientSecret,
};

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
		const response: CondensedPostsQueryObject = await request(
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
