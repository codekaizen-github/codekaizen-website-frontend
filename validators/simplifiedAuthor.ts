import { z } from "zod";
import { SimplifiedAuthorNode } from "../interfaces/simplifiedAuthor";

export const SimplifiedAuthorValidator = z.object({
	databaseId: z.number(),
	name: z.string(),
});

export const SimplifiedAuthorNodeValidator = z.object({
	node: SimplifiedAuthorValidator,
});

export function SimplifiedAuthorNodeFromRaw(raw: any): SimplifiedAuthorNode {
	const parsed = SimplifiedAuthorNodeValidator.parse(raw);
	return parsed;
}
