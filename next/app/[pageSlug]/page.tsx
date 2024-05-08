import {getClient} from "@/src/queries/client";
import {GET_ARTICLE_QUERY, GET_PAGE_QUERY, PageQueryResult} from "@/src/queries/queries";
import {Blocks} from "@/src/components/blocks/Blocks";

type PageProps = {
  params: { pageSlug: string }
}

export default async function (props: PageProps) {
  const {pageSlug} = props.params;
  const data = await getData({pageSlug});

  if (!data?.pageBy) {
    return <h1 className="text-center mx-auto text-5xl mt-10 px-2.5">404 - Error</h1>
  }

  const {title, blocks} = data.pageBy;

  return (
      <div className="mx-auto py-12 max-w-lg">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <Blocks blocks={blocks}/>
      </div>
  );
}

async function getData({
                         pageSlug
                       }: PageProps['params']) {
  try {
    const {data} = await getClient().query<PageQueryResult>({
      query: GET_PAGE_QUERY,
      variables: {slug: pageSlug},
    });

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({
                                         params: {
                                           pageSlug
                                         }
                                       }: PageProps) {
  const {data} = await getClient().query<PageQueryResult>({
    query: GET_PAGE_QUERY,
    variables: {slug: pageSlug},
  });

  return {
    title: `${data?.pageBy?.title} - Headless WordPress Blog`,
  };
}