import { SimplifiedAuthorNode } from "./simplifiedAuthor";
import { SimplifiedFeaturedImageNode } from "./simplifiedFeaturedImage";

/* CondensedPost */
export interface CondensedPostsQueryObject {
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
	featuredImage?: SimplifiedFeaturedImageNode | null;
}
/* End CondensedPost */

/* ExpandedPost */
export interface ExpandedPostQueryObject {
	post: ExpandedPost;
}

export interface ExpandedPost {
	databaseId: number;
	title: string;
	dateGmt: string;
	slug: string;
	author: SimplifiedAuthorNode;
	featuredImage: SimplifiedFeaturedImageNode;
	content: string;
}
/* End ExpandedPost */

/* PostSlug */
export interface PostSlugsQueryObject {
	posts: {
		nodes: PostSlug[];
	};
}

export interface PostSlug {
	databaseId: number;
	slug: string;
}
/* End PostSlug */
