import {gql} from "@apollo/client";

export const POST_FRAGMENT = `fragment PostContent on Post {
  blocks(
    attributes: true
    htmlContent: true
    dynamicContent: true
    originalContent: false
    postTemplate: false
  )
  date
  id
  slug
  title(format: RENDERED)
  uri
}`

export const GET_ARTICLE_QUERY = gql`
  ${POST_FRAGMENT}
  query GetSinglePost($slug: String!) {  
    postBy(slug: $slug) {
      ...PostContent
    }
  }
`

export const GET_BLOG_POSTS_QUERY = gql`
query Blog {
  posts(first: 10) {
    nodes {
      slug
      title(format: RENDERED)
      id
      featuredImage {
        node {
          sourceUrl(size: MEDIUM)
          srcSet(size: MEDIUM)
          uri
        }
      }
      excerpt(format: RENDERED)
    }
  }
}
`

export const GET_PAGE_QUERY = gql`
query Page($slug: String) {
  pageBy(uri: $slug) {
    blocks(
      attributes: true
      htmlContent: true
      dynamicContent: true
      originalContent: false
      postTemplate: false
    )
    title(format: RENDERED)
    slug
    date
  }
}
`

// using interface for recursion
export interface BlockResult {
  name: string,
  htmlContent: string,
  dynamicContent: string,
  innerBlocks: BlockResult[],
  attributes: Record<string, any>
}

export type ArticleQueryResult = {
  postBy: {
    title: string,
    slug: string,
    blocks: BlockResult[],
    date: string
  }
}

export type PageQueryResult = {
  pageBy: {
    title: string,
    uri: string,
    slug: string,
    blocks: BlockResult[]
  }
}

export type BlogQueryResult = {
  posts: {
    nodes: {
      slug: string,
      title: string,
      id: string,
      excerpt: string,
      featuredImage: {
        node: {
          sourceUrl: string,
          srcSet: string,
          uri: string
        }
      }
    }[]
  }
}