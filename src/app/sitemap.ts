import fs from "fs";
import path from "path";

import type { MetadataRoute } from "next";
import { fileURLToPath } from "url";

const APP_URL = process.env.APP_URL;

if (APP_URL === undefined) {
	throw new Error();
}

const siteConfig = {
	url: APP_URL,
};

// Recursively collect all pages with `page.tsx`
async function getStaticRoutes(
	filePathRoot = "app",
	urlRoot = ""
): Promise<string[]> {
	const currentDir = filePathRoot;
	const entries = fs.readdirSync(currentDir, { withFileTypes: true });

	let routes: string[] = [];

	for (const entry of entries) {
		const fullPath = path.join(currentDir, entry.name);

		if (entry.isDirectory()) {
			const routePath = path.join(urlRoot, entry.name);

			// Check if this directory has a page.tsx
			const hasPage = ["page.tsx"].some((file) =>
				fs.existsSync(path.join(fullPath, file))
			);

			if (hasPage) {
				routes.push(`/${routePath}`);
			}

			// Continue scanning nested folders recursively
			const nestedRoutes = await getStaticRoutes(
				path.join(filePathRoot, entry.name),
				routePath
			);

			// Exclude routes with dynamic segments (e.g., [slug])
			const nestedStaticRoutes = nestedRoutes.filter(
				(route) => !route.match(/\[.+\]/)
			);

			routes = routes.concat(nestedStaticRoutes);
		}
	}

	return urlRoot === "" ? ["/", ...routes] : routes;
}

// Get dynamic routes by calling `generateStaticParams` from dynamic pages
async function getDynamicRoutes(
	subpath: string,
	dynamicSegment: string
): Promise<string[]> {
	try {
		const { generateStaticParams } = await import(
			`./${subpath}/[${dynamicSegment}]/page`
		);
		const params = await generateStaticParams();
		return params.map(
			(route: { [segment: string]: string }) =>
				`/${subpath}/${route[dynamicSegment]}`
		);
	} catch (error) {
		console.error("Error loading dynamic routes:", error);
		return [];
	}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	console.log({
		cwd: process.cwd(),
		ls: fs.readdirSync(process.cwd(), { withFileTypes: true }),
	});
	const allRoutes = (
		await Promise.all([
			getStaticRoutes(
				// path.dirname(path.dirname(fileURLToPath(import.meta.url)))
				path.resolve(process.cwd(), "src", "app")
			),
			getDynamicRoutes("blog", "slug"),
			getDynamicRoutes("projects", "slug"),
			getDynamicRoutes("team", "slug"),
		])
	).flat();

	return allRoutes.map((route) => ({
		url: encodeURI(`${siteConfig.url}${route}`),
		lastModified: new Date().toISOString(),
		priority: route === "/" ? 1 : 0.8,
	}));
}
