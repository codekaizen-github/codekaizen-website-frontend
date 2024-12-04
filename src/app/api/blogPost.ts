import { ExpandedWordPressPost } from "@interfaces/expandedPost";
import { WordPressPost } from "@interfaces/wpPost";
import { getWPUsers } from "./user";
import { WordPressUser } from "@interfaces/wpUser";

const baseWPApiUrl = process.env.WORDPRESS_BASE_API_URL;

/**
 * @returns A promise that resolves to an array of WordPressPost objects
 * @description Fetches blog posts from WorddPress
 */
export async function getBlogPosts(): Promise<WordPressPost[]> {
	try {
		const response = await fetch(baseWPApiUrl + "posts");
		if (!response.ok) {
			throw new Error(`Error fetching posts: ${response.statusText}`);
		}
		const posts: WordPressPost[] = await response.json();
		return posts;
	} catch (error) {
		console.error("Failed to fetch blog posts:", error);
		throw error;
	}
}

export async function getExpandedBlogPosts(): Promise<ExpandedWordPressPost[]> {
	try {
		const posts = await getBlogPosts();
		const users = await getWPUsers();
		const expandedBlogPosts: ExpandedWordPressPost[] = posts.map((post) => {
			const user =
				users.find((user) => user.id === post.author) ||
				({} as WordPressUser);
			return { ...post, expandedAuthor: user };
		});
		return expandedBlogPosts;
	} catch (error) {
		console.error("Failed to fetch expanded blog posts:", error);
		throw error;
	}
}

// /**
//  * @param slug The slug of the project to fetch
//  * @returns A promise that resolves to a Project object
//  * @description Fetches project data from a CMS based on the slug
//  */
// export async function getProject(slug: string): Promise<BlogPost> {
// 	const data = require("../../../public/data/projects.json");
// 	const project = data.find((project: any) => project.slug === slug);
// 	return project;
// }

// /**
//  * @returns A promise that resolves to an array of slugs
//  * @description Fetches all project slugs from a CMS
//  */
// export async function getAllProjectSlugs(): Promise<string[]> {
// 	const data = require("../../../public/data/projects.json");
// 	const slugs = data.map((project: BlogPost) => project.slug);
// 	return slugs;
// }
