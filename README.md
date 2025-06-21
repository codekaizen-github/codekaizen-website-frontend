# CodeKaizen Website Frontend

## Environment Configuration: Switching WordPress Backends

This project uses a `.env` file to configure which WordPress backend the frontend communicates with. You can easily switch between the production backend and your local development backend by setting the appropriate environment variable.

### 1. Create or Edit Your `.env` File

In the root of the project, create a file named `.env` if it does not already exist.

### 2. Set the WordPress Environment Variables

Add the following lines to your `.env` file:

```
WORDPRESS_HOST_NAME=<your-wordpress-host-name>
WORDPRESS_GRAPHQL_BASE=<your-graphql-base>
APP_URL=<your-frontend-app-url>
```

-   **For local development**, use:

    ```
    WORDPRESS_HOST_NAME=dev.codekaizen.net
    WORDPRESS_GRAPHQL_BASE=http://dev.codekaizen.net/graphql
    APP_URL=https://codekaizen.net
    ```

    Note that the `APP_URL` can be set to your production URL, as it is used for generating sitemap links and other absolute URLs that generally don't matter in development.

-   **For production**, use:
    ```
    WORDPRESS_HOST_NAME=wp.codekaizen.net
    WORDPRESS_GRAPHQL_BASE=https://wp.codekaizen.net/graphql
    APP_URL=https://codekaizen.net
    ```

### 3. Switching Environments

-   To switch between backends, simply change the value of `WORDPRESS_HOST_NAME` and `WORDPRESS_GRAPHQL_BASE` in your `.env` file and restart the dev container.
