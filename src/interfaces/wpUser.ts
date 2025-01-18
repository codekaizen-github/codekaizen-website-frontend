export interface WordPressUser {
	id: number;
	name: string;
	url: string;
	description: string;
	link: string;
	slug: string;
	avatar_urls: {
		[key: string]: string;
	};
	meta: Record<string, any>;
	_links: {
		[key: string]: Array<{
			href: string;
		}>;
	};
}
