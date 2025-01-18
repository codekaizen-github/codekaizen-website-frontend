import { z } from "zod";
import {
	CondensedPostsQueryObject,
	CondensedPost,
} from "@interfaces/condensedPost";
import { SimplifiedAuthorNodeValidator } from "./simplifiedAuthor";
import { SimplifiedFeaturedImageNodeValidator } from "./simplifiedFeaturedImage";

export const CondensedPostValidator = z.object({
	databaseId: z.number(),
	title: z.string(),
	dateGmt: z.string(),
	excerpt: z.string(),
	slug: z.string(),
	author: SimplifiedAuthorNodeValidator,
	featuredImage: SimplifiedFeaturedImageNodeValidator.optional().nullable(),
});

export const CondensedPostsQueryObjectValidator = z.object({
	posts: z.object({
		nodes: z.array(CondensedPostValidator),
	}),
});

export function CondensedPostFromRaw(raw: any): CondensedPost {
	const parsed = CondensedPostValidator.parse(raw);
	return parsed;
}

export function CondensedPostsQueryObjectFromRaw(
	raw: any
): CondensedPostsQueryObject {
	const parsed = CondensedPostsQueryObjectValidator.parse(raw);
	return parsed;
}
