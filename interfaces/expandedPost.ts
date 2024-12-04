import { WordPressPost } from "./wpPost";
import { WordPressUser } from "./wpUser";

export interface ExpandedWordPressPost extends WordPressPost {
	expandedAuthor?: WordPressUser;
}
