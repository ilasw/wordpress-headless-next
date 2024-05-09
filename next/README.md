# Next

this is a demo project to show how to use Next.js with WordPress as a headless CMS.

## Project structure

- `app/` - Next.js app folder, where system-based router is located.
- `src/` - contains components and apollo client configuration/queries.
    - `components/` - contains all the components used in the app.
        - `blocks/` - contains the components used for rendering Gutenberg blocks from WordPress.
        - `shared/` - contains the shared components used in the app.
    - `queries/` - contains the GraphQL queries and client used in the app.

## Caveats

- You should have a WordPress site with the WPGraphQL plugin installed and activated.
- You should have a `.env` file with the following variable:
    - `NEXT_PUBLIC_API_BASE_URL` - the URL of your WordPress site.
- In `Block.tsx` file, you can find the porting of the Gutenberg blocks to React components. You can add more blocks as
  needed.
- In the paragraph block component, you can find a onClick event to manage the link redirection inside the articles.
  This is a prototype approach and is better to rewrite the url before printing in html. 