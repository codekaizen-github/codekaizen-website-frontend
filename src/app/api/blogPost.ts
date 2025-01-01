import {
	CondensedPost,
	CondensedPostsQueryObject,
	ExpandedPost,
	ExpandedPostQueryObject,
	PostSlug,
	PostSlugsQueryObject,
} from "@interfaces/blogPost";
import { request, gql } from "graphql-request";

const wpGraphQLBase = process.env.WORDPRESS_GRAPHQL_BASE ?? "";

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
			blogPostSlugs
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
			condensedBlogPostsQuery
		);
		const condensedPosts = response.posts.nodes as CondensedPost[];
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
			variables
		);
		const expandedPost: ExpandedPost = response.post;
		return expandedPost;
	} catch (error) {
		console.error("Failed to fetch expanded blog post:", error);
		throw error;
	}
}
