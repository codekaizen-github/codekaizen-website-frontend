/**
 * @param slug The slug of the user to fetch
 * @returns The user data
 * @description Fetches user data from a CMS based on the slug
 */
export async function fetchUserData(slug: string) {
	const data = require("/public/data/teamMembers.json");
	const user = data.find((user: any) => user.slug === slug);
	return user;
}
