export const wpGraphQLBase = process.env.WORDPRESS_GRAPHQL_BASE ?? "";
export const cfAccessClientId = process.env.CF_ACCESS_CLIENT_ID ?? "";
export const cfAccessClientSecret = process.env.CF_ACCESS_CLIENT_SECRET ?? "";

export const headers = {
	"CF-Access-Client-Id": cfAccessClientId,
	"CF-Access-Client-Secret": cfAccessClientSecret,
};
