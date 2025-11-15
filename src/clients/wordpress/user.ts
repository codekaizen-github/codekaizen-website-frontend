import { User } from "@interfaces/user";
import { request, gql } from "graphql-request";
import { wpGraphQLBase, headers } from "./constants";

/**
 * @returns A promise that resolves to an array of User objects
 * @description Fetches user data from a CMS
 */
export async function getTeamMembers(): Promise<User[]> {
	const teamMembersQuery = gql`
	    query GetTeamMembers {
			users {
				nodes {
					databaseId
					name
					slug
					avatar(size: 350) {
						url
					}
					moniker
					teamMember {
						content
					}
					githubUserId
					previewDescription
				}
			}
	    }
	`;
	try {
		const response = await request<{
			users: { nodes: User[] };
		}>(
			wpGraphQLBase,
			teamMembersQuery,
			{},
			headers
		);
		return response.users.nodes;
	} catch (error) {
		console.error("Failed to fetch team members:", error);
		throw error;
	}
}

/**
 * @param slug The slug of the user to fetch
 * @returns A promise that resolves to a User object
 * @description Fetches user data from a CMS based on the slug
 */
export async function getTeamMember(slug: string): Promise<User> {
	const teamMemberQuery = gql`
	    query GetTeamMember($id: ID!) {
			user(id: $id, idType: SLUG) {
				databaseId
				name
				slug
				avatar(size: 500) {
					url
				}
				moniker
				teamMember {
					content
				}
				githubUserId
				previewDescription
			}
	    }
	`;
	try {
		const variables = { id: slug };
		const response = await request<{
			user: User;
		}>(
			wpGraphQLBase,
			teamMemberQuery,
			variables,
			headers
		);
		return response.user;
	} catch (error) {
		console.error(`Failed to fetch team member with slug ${slug}:`, error);
		throw error;
	}
}

/**
 * @returns A promise that resolves to an array of slugs
 * @description Fetches all user slugs from a CMS
 */
export async function getAllTeamMemberSlugs(): Promise<string[]> {
	const teamMemberSlugsQuery = gql`
	    query GetAllTeamMemberSlugs {
			users {
				nodes {
					slug
				}
			}
	    }
	`;
	try {
		const response = await request<{
			users: { nodes: { slug: string }[] };
		}>(
			wpGraphQLBase,
			teamMemberSlugsQuery,
			{},
			headers
		);
		return response.users.nodes.map((node) => node.slug);
	} catch (error) {
		console.error("Failed to fetch team member slugs:", error);
		throw error;
	}
}
