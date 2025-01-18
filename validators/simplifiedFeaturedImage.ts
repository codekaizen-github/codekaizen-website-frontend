import { z } from "zod";
import {
	SimplifiedFeaturedImage,
	SimplifiedFeaturedImageNode,
} from "@interfaces/simplifiedFeaturedImage";

export const SimplifiedFeaturedImageValidator = z.object({
	databaseId: z.number(),
	mediaItemUrl: z.string(),
	altText: z.string(),
});

export const SimplifiedFeaturedImageNodeValidator = z.object({
	node: SimplifiedFeaturedImageValidator,
});

export function SimplifiedFeaturedImageFromRaw(
	raw: any
): SimplifiedFeaturedImage {
	const parsed = SimplifiedFeaturedImageValidator.parse(raw);
	return parsed;
}

export function SimplifiedFeaturedImageNodeFromRaw(
	raw: any
): SimplifiedFeaturedImageNode {
	const parsed = SimplifiedFeaturedImageNodeValidator.parse(raw);
	return parsed;
}
