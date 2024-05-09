# Headless WordPres + Next sample

This is a demo project to show how to use Next.js with WordPress as a headless CMS.

It uses GraphQL to fetch data from WordPress and render it using Next.js.


## Prerequisites

- Docker ( Install [here](https://www.docker.com/products/docker-desktop) )
- Node.js 20.x or higher ( Install [here](https://nodejs.org/en/download/) )

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ilasw/wordpress-headless-next.git
cd wordpress-headless-next
```

### 2. Start the WordPress server

```bash
docker-compose up
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result, and [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin) to access the WordPress setup.

Note: in the `.wordpress` folder you will find a volume that contains all the `wp-content/plugins/` folder, which contains the WP plugins. 

`wp-graphql` and `wpgraphql-blocks` **_are mandatory plugins_**.

### 3. Start the Next.js server

```bash
cd next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
