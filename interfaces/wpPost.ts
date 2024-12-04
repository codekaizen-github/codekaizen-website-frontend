export interface WordPressPost {
	id: number;
	date: string; // Published date
	date_gmt: string; // Published date in GMT
	guid: {
		rendered: string; // Permanent link
	};
	modified: string; // Last modified date
	modified_gmt: string; // Last modified date in GMT
	slug: string; // Post slug
	status: string; // Post status (e.g., "publish")
	type: string; // Post type (e.g., "post")
	link: string; // URL to the post
	title: {
		rendered: string; // Post title (HTML rendered)
	};
	content: {
		rendered: string; // Post content (HTML rendered)
		protected: boolean; // Indicates if content is protected
	};
	excerpt: {
		rendered: string; // Post excerpt (HTML rendered)
		protected: boolean; // Indicates if excerpt is protected
	};
	author: number; // Author ID
	featured_media: number; // ID of the featured image
	comment_status: string; // "open" or "closed"
	ping_status: string; // "open" or "closed"
	sticky: boolean; // Whether the post is sticky
	template: string; // Template assigned to the post
	format: string; // Post format (e.g., "standard")
	meta: Record<string, any>; // Custom metadata
	categories: number[]; // Array of category IDs
	tags: number[]; // Array of tag IDs
	_links: {
		[key: string]: Array<{
			href: string; // URL of the related resource
		}>;
	}; // Links to related resources
}
