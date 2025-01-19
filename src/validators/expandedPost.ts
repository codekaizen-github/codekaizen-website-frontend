import { z } from "zod";
import {
	ExpandedPostQueryObject,
	ExpandedPost,
} from "@interfaces/expandedPost";
import { SimplifiedAuthorNodeValidator } from "./simplifiedAuthor";
import { SimplifiedFeaturedImageNodeValidator } from "./simplifiedFeaturedImage";

export const ExpandedPostValidator = z.object({
	databaseId: z.number(),
	title: z.string(),
	dateGmt: z.string(),
	slug: z.string(),
	author: SimplifiedAuthorNodeValidator,
	featuredImage: SimplifiedFeaturedImageNodeValidator.optional().nullable(),
	content: z.string(),
});

export const ExpandedPostQueryObjectValidator = z.object({
	post: ExpandedPostValidator.nullable(),
});

export function ExpandedPostFromRaw(raw: any): ExpandedPost {
	const parsed = ExpandedPostValidator.parse(raw);
	return parsed;
}

export function ExpandedPostQueryObjectFromRaw(
	raw: any
): ExpandedPostQueryObject {
	const parsed = ExpandedPostQueryObjectValidator.parse(raw);
	return parsed;
}
