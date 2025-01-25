export interface PostSlugsQueryObject {
	posts: {
		nodes: PostSlug[];
	};
}

export interface PostSlug {
	databaseId: number;
	slug: string;
}
