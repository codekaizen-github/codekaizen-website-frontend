import { getAllBlogPostSlugs } from "@/clients/wordpress/postSlug";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
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
