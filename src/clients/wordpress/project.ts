import { Project } from "@interfaces/project";

export async function getProjects(): Promise<Project[]> {
	const data = require("@public/data/projects.json");
	return data;
}

export async function getProject(slug: string): Promise<Project> {
	const data = require("@public/data/projects.json");
	const project = data.find((project: any) => project.slug === slug);
	return project;
}

export async function getAllProjectSlugs(): Promise<string[]> {
	const data = require("@public/data/projects.json");
	const slugs = data.map((project: Project) => project.slug);
	return slugs;
}
