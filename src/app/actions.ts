"use server";

import { revalidatePath } from "next/cache";

export async function createPost() {
	revalidatePath("/blog");
}
