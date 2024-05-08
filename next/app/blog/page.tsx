import {getClient} from "@/src/queries/client";
import {BlogQueryResult, GET_BLOG_POSTS_QUERY} from "@/src/queries/queries";
import Link from "next/link";

export default async function Page() {

  const data = await getData();
  const posts = data?.posts.nodes;

  return (
      <div className="mx-auto py-12 max-w-lg">
        <h1 className="mb-10 text-2xl font-bold">Blog list</h1>
        <ul className="group">
          {posts?.map((post) => (
              <li key={post.id}
                  className="relative flex flex-row gap-4 group-last:border-b-0 border-b py-4 items-start"
              >
                {post.featuredImage?.node ? (
                    <img
                        alt={post.title}
                        className="w-32 min-w-32 aspect-square object-cover rounded-lg bg-neutral-500"
                        loading="lazy"
                        srcSet={post.featuredImage.node?.srcSet}
                        src={post.featuredImage.node?.sourceUrl}
                    />
                ) : <div className="min-w-32 aspect-square rounded-lg bg-neutral-500"/>}
                <div className="content">
                  <h3 className="font-bold text-2xl">{post.title}</h3>
                  <div className="mt-2"
                       dangerouslySetInnerHTML={{__html: post.excerpt}}
                  />
                </div>
                <Link href={`/blog/${post.slug}`}
                      className="absolute inset-0 opacity-0"
                >{post.title}</Link>
              </li>
          ))}
        </ul>
      </div>
  );
}

async function getData() {
  try {
    const {data} = await getClient().query<BlogQueryResult>({
      query: GET_BLOG_POSTS_QUERY,
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}