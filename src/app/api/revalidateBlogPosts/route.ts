import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
	revalidatePath("/blog");
	return new Response("revalidated /blog", {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
