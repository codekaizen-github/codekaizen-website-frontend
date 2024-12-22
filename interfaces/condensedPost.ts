import { SimplifiedAuthorNode } from "./simplifiedAuthor";
import { SimplifiedFeaturedImageNode } from "./simplifiedFeaturedImage";

export interface CondensedPostQueryObject {
	posts: {
		nodes: CondensedPost[];
	};
}

export interface CondensedPost {
	databaseId: number;
	title: string;
	dateGmt: string;
	excerpt: string;
	slug: string;
	author: SimplifiedAuthorNode;
	featuredImage: SimplifiedFeaturedImageNode;
}
