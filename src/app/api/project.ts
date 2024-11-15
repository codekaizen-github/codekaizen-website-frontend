import { Project } from "@interfaces/project";

/**
 * @returns A promise that resolves to an array of Project objects
 * @description Fetches project data from a CMS
 */
export async function getProjects(): Promise<Project[]> {
	const data = require("../../../public/data/projects.json");
	return data;
}

/**
 * @param slug The slug of the project to fetch
 * @returns A promise that resolves to a Project object
 * @description Fetches project data from a CMS based on the slug
 */
export async function getProject(slug: string): Promise<Project> {
	const data = require("../../../public/data/projects.json");
	const project = data.find((project: any) => project.slug === slug);
	return project;
}

/**
 * @returns A promise that resolves to an array of slugs
 * @description Fetches all project slugs from a CMS
 */
export async function getAllProjectSlugs(): Promise<string[]> {
	const data = require("../../../public/data/projects.json");
	const slugs = data.map((project: Project) => project.slug);
	return slugs;
}
