import { WordPressPost } from "@interfaces/wordPressPost";

// const baseWPApiUrl = "http://dev.codekaizen.net/wp-json/wp/v2/";
const wordPressProtocol = process.env.WORDPRESS_PROTOCOL ?? "http://";
const wordPressHostName =
	process.env.WORDPRESS_HOST_NAME ?? "dev.codekaizen.net";
const wordPressApiPath = process.env.WORDPRESS_API_PATH ?? "/wp-json/wp/v2/";
const baseWPApiUrl = wordPressProtocol + wordPressHostName + wordPressApiPath;

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
