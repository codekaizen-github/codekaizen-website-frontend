export interface User {
	databaseId: number;
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
	moniker: string;
  teamMember: {
    content: string;
  };
  githubUserId: string;
  previewDescription: string;
}
