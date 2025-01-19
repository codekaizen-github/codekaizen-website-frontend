import { z } from "zod";
import { PostSlug, PostSlugsQueryObject } from "@interfaces/postSlug";

export const PostSlugValidator = z.object({
	databaseId: z.number(),
	slug: z.string(),
});

export const PostSlugsQueryObjectValidator = z.object({
	posts: z.object({
		nodes: z.array(PostSlugValidator),
	}),
});

export function PostSlugFromRaw(raw: any): PostSlug {
	const parsed = PostSlugValidator.parse(raw);
	return parsed;
}

export function PostSlugsQueryObjectFromRaw(raw: any): PostSlugsQueryObject {
	const parsed = PostSlugsQueryObjectValidator.parse(raw);
	return parsed;
}
