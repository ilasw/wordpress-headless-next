'use client';

import {BlockResult} from "@/src/queries/queries";
import {FC, MouseEventHandler} from "react";
import {useRouter} from "next/navigation";

export type BlocksProps = {
  blocks: BlockResult[];
}

const customBlocks: Record<string, FC<{ block: BlockResult }>> = {
  'core/paragraph': ({block}: { block: BlockResult }) => {

    const router = useRouter()
    const clickHandler: MouseEventHandler = (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        const href = e.target.getAttribute('href');
        const siteUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

        if (href && (href.startsWith('/') || href.startsWith('#') || href.startsWith(siteUrl))) {
          e.preventDefault();
          router.push(href.replace(siteUrl, ''))
        }
      }
    }

    return <div className="mb-4"
                dangerouslySetInnerHTML={{__html: (`${block.dynamicContent || block.htmlContent}`)}}
                onClick={clickHandler}
    />
  },
  'core/post-title': ({block}: { block: BlockResult }) => {
    return <h1 className="mb-4 font-bold text-2xl">{block.attributes.content}</h1>
  },
  'core/separator': () => {
    return <hr/>
  },
  'core/spacer': ({block}) => {
    const {height = '|40'} = block.attributes;
    const margin = height.split('|').at(-1);

    return <div style={{marginTop: `${margin}px`}}/>
  },
  'core/image': ({block}) => {
    const {url, width, height, alt = ''} = block.attributes;

    return (<figure>
      <img src={url}
           alt={alt}
           width={width}
           height={height}
           className="my-10"
           loading="lazy"
      />
    </figure>)
  },
  'core/quote': ({block}) => {
    return <blockquote className="my-10 border-l-4 pl-4 font-serif py-2">
      <Blocks blocks={block.innerBlocks}/>
    </blockquote>
  }
} as const;

export const Blocks = (props: BlocksProps) => {
  const {blocks} = props;

  return <>
    {blocks
        .filter((block) => block.name !== 'core/template-part')
        .map((block, index) => (
            <Block key={index}
                   block={block}
            />)
        )
    }
  </>
}

function Block({block}: { block: BlockResult }) {

  if (block.name in customBlocks) {
    const Element = customBlocks[block.name];
    return <Element block={block}/>;
  }

  if (block?.innerBlocks?.length) {
    return <Blocks blocks={block.innerBlocks}/>
  }

  return <div className="my-10">
    <small>⚠ {block.name} not implemented!</small>
    <div dangerouslySetInnerHTML={{__html: (block.dynamicContent)}}
    />
  </div>
}