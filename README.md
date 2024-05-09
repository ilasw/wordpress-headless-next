# Headless WordPres + Next sample

This is a demo project to show how to use Next.js with WordPress as a headless CMS.

## Prerequisites

- Docker
- Node.js 20.x or higher

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

### 3. Start the Next.js server

```bash
cd next
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
