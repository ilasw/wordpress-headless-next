# Next

this is a demo project to show how to use Next.js with WordPress as a headless CMS.

## Project structure

- `app/` - Next.js app folder, where system-based router is located.
- `src/` - contains components and apollo client configuration/queries.
    - `components/` - contains all the components used in the app.
        - `blocks/` - contains the components used for rendering Gutenberg blocks from WordPress.
        - `shared/` - contains the shared components used in the app.
    - `queries/` - contains the GraphQL queries and client used in the app.