import { SimplifiedUser } from "./simplifiedAuthor";

export interface ExpandedPostQueryObject {
	posts: {
		nodes: ExpandedPost[];
	};
}

export interface ExpandedPost {
	title: string;
	dateGmt: string;
	excerpt: string;
	databaseId: number;
	slug: string;
	author: SimplifiedUser;
}
