import type { MetadataRoute } from "next";

const APP_URL = process.env.APP_URL;

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `${APP_URL}/sitemap.xml`,
		host: APP_URL,
	};
}
