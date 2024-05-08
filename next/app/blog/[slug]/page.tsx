import {getClient} from "@/src/queries/client";
import {ArticleQueryResult, GET_ARTICLE_QUERY} from "@/src/queries/queries";
import {Blocks} from "@/src/components/blocks/Blocks";

type PageProps = {
  params: { slug: string }
}

export default async function (props: PageProps) {
  const {slug} = props.params;
  const data = await getData({slug});

  if (!data) {
    return <h1 className="text-center mx-auto text-5xl mt-10 px-2.5">404 - Error</h1>
  }

  const {title, blocks} = data.postBy;

  return (
      <div className="mx-auto py-12 max-w-lg">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <Blocks blocks={blocks}/>
      </div>
  );
}

async function getData({
                         slug
                       }: PageProps['params']) {
  try {
    const {data} = await getClient().query<ArticleQueryResult>({
      query: GET_ARTICLE_QUERY,
      variables: {slug},
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({
                                         params: {
                                           slug
                                         }
                                       }: PageProps) {
  const {data} = await getClient().query({
    query: GET_ARTICLE_QUERY,
    variables: {slug},
  });

  return {
    title: `${data.postBy.title} - Headless WordPress Blog`,
  };
}