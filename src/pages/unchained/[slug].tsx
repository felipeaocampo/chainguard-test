import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/base16/pop.css";

import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/lib/client";
import UnchainedSection1 from "@/components/Unchained/UnchainedSection1";
import {
  TypeBlogSkeleton,
  TypeGeneralPageSkeleton,
  TypePageSection,
  TypeSeoMetadata,
} from "@/../types/contentful";
import { useRouter } from "next/router";
import { Document } from "@contentful/rich-text-types";
import { ReactNode, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//HIGHLIGHT JS INSTURCTIONS
// Then register the languages you need
// hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("javascript", javascript);

// SUPER HELPFUL CODE TO FOLLOW: https://maxschmitt.me/posts/nextjs-contentful-typescript

const Bold = ({ children }: { children: ReactNode }) => (
  <span className="font-bold">{children}</span>
);

const Text = ({ children }: { children: ReactNode }) => <p>{children}</p>;

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (text) => {
      return (
        <pre className="js">
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.find((item) =>
          //@ts-ignore
          item.marks?.find((mark) => mark.type === "code")
        )
      ) {
        return <div>{children}</div>;
      }

      return <Text>{children}</Text>;
    },
    [INLINES.HYPERLINK]: (node) => {
      //@ts-ignore
      const text = node.content.find((item) => item.nodeType === "text")?.value;

      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "blog") {
        // console.log("LINK TEST: ", node.content);
        const text = node.content.find(
          (item) => item.nodeType === "text"
          //@ts-ignore
        )?.value;
        const slug = node.data.target.fields.blogSlug;
        return <Link href={`/unchained/${slug}`}>{text}</Link>;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node.data.target.fields.file.url;
      const alt = node.data.target.fields.description;
      const width = node.data.target.fields.file.details.image.width;
      const height = node.data.target.fields.file.details.image.height;

      return (
        <div>
          <Image src={`https:${url}`} alt={alt} width={width} height={height} />
        </div>
      );
    },
  },
  renderText: (text: string) => text.replace("!", "?"),
};

export default function BlogPost({ blogContent }: { blogContent: Document }) {
  const { slug } = useRouter().query;

  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <section className="mb-[96px] bg-hero-cg-gradient pt-[180px]">
      <h1 className="mb-[24px]">Welcome to the {`${slug} page!`}</h1>
      <div className="mx-auto prose">
        {documentToReactComponents(blogContent, options)}
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {
        blog: "Some string test",
      },
    };
  }
  // console.log("GET STATIC PROPS IS CALLED");

  const { slug } = params;

  const blog = await client.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
    "fields.blogSlug": slug as string,
  });

  const test = blog.items[0];
  //console.log("BLOG TEST: ", test);

  //NEED TO CREATE A FUNC THAT'S GOING TO PARSE THE FUNC FOR ONLY THE DATA THAT WE NEED FROM THE BLOG ITSELF

  return {
    props: {
      blogContent: test.fields.blogContent,
    },
  };
};

// export async function getStaticPaths() {
//   //@ts-ignore
//   const paths = [];
//   //@ts-ignore
//   return { paths, fallback: true };
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await client.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
  });
  // console.log("GET STATIC PATHS IS CALLED");

  const paths = blog.items.map((blog) => {
    return {
      params: { slug: blog.fields.blogSlug },
    };
  });

  return {
    paths,
    fallback: true, // or false or "blocking"
  };
};
