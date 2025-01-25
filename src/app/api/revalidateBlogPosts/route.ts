import { getAllBlogPostSlugs } from "@/clients/wordpress/postSlug";
import { revalidatePath } from "next/cache";

const VALID_TOKEN = process.env.REVALIDATE_SECRET;

export async function GET(req: Request) {
	const token = req.headers.get("Authorization");
	if (token !== `Bearer ${VALID_TOKEN}`) {
		return new Response("Unauthorized", {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}
	try {
		await getAllBlogPostSlugs();
		revalidatePath("/blog");
		return new Response("revalidated /blog", {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response("failed to revalidate /blog", {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
