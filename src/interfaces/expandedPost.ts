import { SimplifiedAuthorNode } from "./simplifiedAuthor";
import { SimplifiedFeaturedImageNode } from "./simplifiedFeaturedImage";

export interface ExpandedPostQueryObject {
	post: ExpandedPost;
}

export interface ExpandedPost {
	databaseId: number;
	title: string;
	dateGmt: string;
	slug: string;
	author: SimplifiedAuthorNode;
	featuredImage?: SimplifiedFeaturedImageNode | null;
	content: string;
}
