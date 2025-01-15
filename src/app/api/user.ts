import { User } from "@interfaces/user";
import { WordPressUser } from "@interfaces/wpUser";

const baseWPApiUrl = process.env.WORDPRESS_BASE_API_URL;

/**
 * @returns A promise that resolves to an array of User objects
 * @description Fetches user data from a CMS
 */
export async function getTeamMembers(): Promise<User[]> {
	const data = require("../../../public/data/teamMembers.json");
	return data;
}

/**
 * @param slug The slug of the user to fetch
 * @returns A promise that resolves to a User object
 * @description Fetches user data from a CMS based on the slug
 */
export async function getTeamMember(slug: string): Promise<User> {
	const data = require("../../../public/data/teamMembers.json");
	const user = data.find((user: any) => user.slug === slug);
	return user;
}

/**
 * @returns A promise that resolves to an array of slugs
 * @description Fetches all user slugs from a CMS
 */
export async function getAllTeamMemberSlugs(): Promise<string[]> {
	const data = require("../../../public/data/teamMembers.json");
	const slugs = data.map((user: User) => user.slug);
	return slugs;
}

export async function getWPUsers(): Promise<WordPressUser[]> {
	const response = await fetch(baseWPApiUrl + "users");
	try {
		if (!response.ok) {
			throw new Error(`Error fetching users: ${response.statusText}`);
		}
		const users: WordPressUser[] = await response.json();
		return users;
	} catch (error) {
		console.error("Failed to fetch team members:", error);
		throw error;
	}
}

export async function getWPUsersById(id: number): Promise<WordPressUser> {
	const response = await fetch(baseWPApiUrl + "users/" + id);
	try {
		if (!response.ok) {
			throw new Error(`Error fetching users: ${response.statusText}`);
		}
		const user: WordPressUser = await response.json();
		return user;
	} catch (error) {
		console.error("Failed to fetch team members:", error);
		throw error;
	}
}
